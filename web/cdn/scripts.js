const { of } = rxjs;

fetch('http://localhost:3000/api/products')
.then(res => res.json())
.then(console.log)

of('hello world').subscribe(console.log)