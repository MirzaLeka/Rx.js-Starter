import { take, interval, repeat } from "rxjs";

interval(1000).pipe(take(5), repeat(3)).subscribe(console.log);
