console.log("ehho");

import {
  tap,
  Observable,
  fromEvent,
  map,
  debounceTime,
  Subscriber,
  exhaustMap,
  switchMap,
  catchError,
  retry,
  distinctUntilChanged,
  filter,
  takeUntil,
  throwError,
  take,
} from "rxjs";

const element = document.getElementById("search") as HTMLElement;
const content = document.getElementById("content") as HTMLElement;
// const defaultImg = 'https://miro.medium.com/max/1400/1*ZUENlsi796hIv9TNeqJ3bA.png';
const defaultImg = "./assets/card-logo.png";

function setResults(count: number) {
  document.getElementById("results").textContent = `Results found: ${count}`;
}

fromEvent(window, "load")
  .pipe(
    switchMap((_) => fetch$("")),
    tap((data: []) => setResults(data.length)),
    take(1)
  )
  .subscribe(populatePageContent);

const windowUnload$ = fromEvent(window, "beforeunload").pipe(take(1));

function fetch$(text: string) {
  return new Observable((observer: Subscriber<any>) => {
    fetch(`http://localhost:3000/api/products?name=${text}`)
      .then((data) => data.json())
      .then((data: any) => {
        observer.next(data);
        observer.complete();
      })
      .catch((err) => observer.error(err));
  });
}

fromEvent(element, "input")
  .pipe(
    map((event) => (event.target as HTMLInputElement).value),
    map((text: string) => text.trim()),
    // filter((text: string) => !!text),
    debounceTime(1000),
    distinctUntilChanged(),
    tap(() => (content.innerHTML = "")),
    exhaustMap((data) => fetch$(data)),
    tap((data: []) => setResults(data.length)),
    catchError((e) => {
      console.error(e);
      return throwError(() => e);
    }),
    retry(2),
    takeUntil(windowUnload$)
  )
  .subscribe({
    next: populatePageContent,
    error: (err) => console.log("err :>> ", err),
    complete: () => console.log("done"),
  });

function populatePageContent(data: any) {
  if (data && data.length) {
    data.forEach((item: any) => {
      const c = `
        <div class="col-md-4">

        <div class="product-card">

        <div class="product-image-wrapper">
        <img src="${item.image ?? defaultImg}" class="product-image" alt="...">
        </div>

        <div class="product-card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description ?? ""}</p>
          <button class="view-product-btn">View details</button>
        </div>
      </div>

        </div>
      `;
      content.innerHTML += c;
    });
  }

  console.log("data :>> ", data);
}
