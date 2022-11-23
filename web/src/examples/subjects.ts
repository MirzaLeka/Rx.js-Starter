import { Subject, BehaviorSubject } from 'rxjs';

// subscribers get result only if they subscribe before emittion
const subject = new Subject();

subject.subscribe((data) => console.log('#1 subscriber ', data))

subject.next('Hello');

subject.subscribe((data) => console.log('#2 subscriber ', data))

subject.next('World');

// output:
/*
#1 subscriber  Hello
#1 subscriber  World
#2 subscriber  World
*/


// works like state. All subscribers get current version of the state until changed
const behaviorSubject = new BehaviorSubject('Hi'); // Hi is initial state

behaviorSubject.subscribe((data) => console.log('#1 subscriber ', data))

behaviorSubject.next('Hello');

behaviorSubject.subscribe((data) => console.log('#2 subscriber ', data))

behaviorSubject.next('World');

// output:
/*
#1 subscriber  Hi
#1 subscriber  Hello
#2 subscriber  Hello
#1 subscriber  World
#2 subscriber  World
*/
