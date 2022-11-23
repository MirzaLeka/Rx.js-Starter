import { share, Observable, Subscriber, shareReplay } from "rxjs";

// Unicast (COLD)
const randomNumber$ = new Observable((observer: Subscriber<number>) => observer.next(Math.random()))

// Observables are unicast by default - every observer gets a new random value
randomNumber$.subscribe(console.log) // e.g. 0.4568
randomNumber$.subscribe(console.log) // e.g. 0.1234


// Multicast (HOT) Observables share aalue among Observers


// With share() only the first subscriber gets the value. Others get none
const multiCast$ = randomNumber$.pipe(share())

multiCast$.subscribe(console.log) // e.g. 0.79584
multiCast$.subscribe(console.log) // null
multiCast$.subscribe(console.log) // null

// With shareReplay() all subscribers get the same cached value
const multiCastAndShared$ = randomNumber$.pipe(shareReplay())

multiCastAndShared$.subscribe(console.log) // e.g. 0.65842
multiCastAndShared$.subscribe(console.log) // e.g. 0.65842
multiCastAndShared$.subscribe(console.log) // e.g. 0.65842
