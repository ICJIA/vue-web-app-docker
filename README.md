## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
Build image:

```
docker build -t <yourname>/vue-web-app-docker .
```
Run image:
```
docker run -p 3838:3838 <yourname>/vue-web-app-docker
```
```Dockerfile``` starts a node server on port 3838.
