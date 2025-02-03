# nordhealth

This is a simple login page with success page/dashboard, as the requirements didnt ask to integrate with any kind of backend (firebase, supabase etc), i used localstorage to simulate a logged in user. I tried using Nuxt 3 and was able to mount the components but wasnt able to use them, an error was appearing about v-model. I changed to vue 3 because of that.
The Design system documentation is extensive and i was able to use it fully, although i would need obviously more time to really dive deep and get comfortable. 

## Recommended IDE Setup

I recomend using https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint for de IDE code format and that ESlint is installed.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
