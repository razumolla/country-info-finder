# countries-info-cooking

A ReactJS hook to get the country information.

## 🫶 Support

Liked it? You can show your support with a STAR(⭐).

### Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Thanks to all stargazers](https://git-lister.onrender.com/api/stars/razumolla/countries-info-cooking?limit=15)](https://github.com/razumolla/countries-info-cooking/stargazers)

## How to use it?

You can use the project in this way:

### Install

```bash
# with npm
npm install countries-info-cooking

# with yarn
yarn add countries-info-cooking
```

### Usage

- Import the package in your app:

```js
import { useCountry } from "countries-info-cooking";
```

- Get the country information from the hook:

```js
const { loading, error, country } = useCountry("Bangladesh");
```

- Example file:

```js
import { useCountry } from "countries-info-cooking";

function App() {
  const { loading, error, country } = useCountry("Bangladesh");

  const data = country[0];

  return (
    <>
      <p>{data?.name.official}</p>
      <p>{data?.name.common}</p>
      <p>{data?.flag}</p>
    </>
  );
}

export default App;
```
