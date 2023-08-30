# Episode 2

###### What is package.json ?

- It is the configuration of our npm. It keeps the track of what version of packages are installed in our system.
- `package-lock.json` keeps the track of exact version of packages installed in our system.
- our package needs dependencies then that package needs to be have their dependencies which is called transitive dependencies.

###### Caret vs Tilde [^ vs ~]

- Caret allows to upgrade the package to minor version (recommended)
- Tilde allows to upgrade the package to major version

###### What is bundler ?

- It bundles our application so that our application can ship to production.
- Eg. Parcel, Vite, Webpack etc. are bundlers.

## Parcel

- Dev build
- Local server
- HMR (Hot Module Replacement)
- File watching algorithm - written in c++
- Faster builds using caching
- Image optimization
- Minification of files
- Bundling
- Compress files
- Consistent Hashing
- Code splitting
- Differential bundling - support older browsers
- Diagnostic
- Error handling
- provide a way to host in https
- Tree shaking - remove unused code

For production build, `npx parcel build index.html` and remove main: "app.js" from package.json
