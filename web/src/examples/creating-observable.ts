import { from, fromEvent, Observable, of, Subscriber } from "rxjs";

// #1 of

of(1, 2, 3, 4, 5).subscribe({
  next: (data) => console.log(data), // 1, 2, 3, 4, 5
  error: (err) => console.error(err),
  complete: () => console.log("all done"),
});

// alternatively you can do
of(1, 2, 3, 4, 5).subscribe(console.log)  // 1, 2, 3, 4, 5


// #2 from

from([1, 2, 3, 4, 5])
.subscribe(console.log) // 1, 2, 3, 4, 5

// difference between of & from is that from works with array-like structures and prints items as individually
// if we put array inside *of* it will treat it as whole element

of([1, 2, 3, 4, 5])
.subscribe(console.log) // [ 1, 2, 3, 4, 5 ]


// #3 new Observable

const observable$ = new Observable((observer: Subscriber<number>) => {
  // some stuff

  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

observable$.subscribe(console.log); // 1, 2, 3


// #4 fromEvent - takes an element (window, UI element) and listens to an event

const button = document.querySelector('button') as HTMLElement;

fromEvent(button, 'click')
.subscribe(console.log) // prints click Event

const textInput = document.querySelector('input') as HTMLElement;

fromEvent(textInput, 'input')
.subscribe(console.log) // prints input Event
