
# Install and setup

Three choices:
* TypeScript
* JavaScript
* CDN

## (1) TypeScript

Install dependencies

```npm i```

Run build (TS)\

```npm run build```

Run Browserify watch (TS). This will bundle files on save.

```npm run watch```

Any change made will appear in *bundle.js* file in public folder.

To enable HTML Live-Reload install Visual Studio Code Live-Server extension or NPM package and run index.html.

```Open index.html file with Live-Server extension```

[Browserify TS Docs](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html)

Finally run Nest.js server in *api* folder

```npm run start:dev```

Go to src/app.ts and start coding.

## (2) JavaScript

Run build (JS)

```npm run build-js```

Run Browserify watch (JS)

```npm run watch-js```

Run Live-Server & API like explained above

Go to src/app.js and start coding.

## (3) CDN

Run Live-Server like explained above.

Go to cdn/scripts.js and start coding.

There will be no bundle file.
