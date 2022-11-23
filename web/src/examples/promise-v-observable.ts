import { Observable, Subscriber } from "rxjs";

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello Promise 1"); // emits only first. Other will be ignored
    resolve("Hello Promise 2");
    resolve("Hello Promise 3");
  }, 1000);
});

promise.then(console.log);

const observable = new Observable((observer: Subscriber<string>) => {
  setTimeout(() => {
    observer.next("Hello Observable 1"); // emits multiple values
    observer.next("Hello Observable 2");
    observer.next("Hello Observable 3");
  }, 1000);
});

const subscriber = observable
  .pipe() // can be customized with operators
  .subscribe(console.log);

// can unsubscribe at any time
subscriber.unsubscribe();
