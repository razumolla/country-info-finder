# country-info-finder

A ReactJS hook to get the country information.

## ⭐ Support

Liked it? Show your support with a STAR (⭐).

### Many Thanks to all the `Stargazers` who have supported this project with stars (⭐)

[![Thanks to all stargazers](https://git-lister.onrender.com/api/stars/razumolla/country-info-finder?limit=15)](https://github.com/razumolla/country-info-finder/stargazers)

## 📦 Installation

You can install the package using npm or yarn:

```bash
# npm
npm install country-info-finder

# yarn
yarn add country-info-finder
```

### 🚀 Usage

**Import the package in your app -**

```js
import { useCountry } from "country-info-finder";
```

**Get country information using the hook -**

```js
const { loading, error, country } = useCountry("Bangladesh");
```

**Example Component :** Here is an example of how you can use the `useCountry` hook in a React component:

```js
import React from "react";
import { useCountry } from "country-info-finder";

function App() {
  const { loading, error, country } = useCountry("Bangladesh");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const data = country[0];

  return (
    <div>
      <h1>Country Information</h1>
      <p>
        <strong>Official Name:</strong> {data?.name.official}
      </p>
      <p>
        <strong>Common Name:</strong> {data?.name.common}
      </p>
      <p>
        <strong>Flag:</strong> {data?.flag}
      </p>
    </div>
  );
}

export default App;
```

### 🌐 Example Country Data

```josn
[
  {
    "name": {
      "common": "Bangladesh",
      "official": "People's Republic of Bangladesh",
      "nativeName": {
        "ben": {
          "official": "বাংলাদেশ গণপ্রজাতন্ত্রী",
          "common": "বাংলাদেশ"
        }
      }
    },
    "tld": [".bd"],
    "cca2": "BD",
    "ccn3": "050",
    "cca3": "BGD",
    "cioc": "BAN",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "BDT": {
        "name": "Bangladeshi taka",
        "symbol": "৳"
      }
    },
    "idd": {
      "root": "+8",
      "suffixes": ["80"]
    },
    "capital": ["Dhaka"],
    "altSpellings": [
      "BD",
      "People's Republic of Bangladesh",
      "Gônôprôjatôntri Bangladesh"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "languages": {
      "ben": "Bengali"
    },
    "translations": {
      "ara": {
        "official": "جمهورية بنغلاديش الشعبية",
        "common": "بنغلاديش"
      },
      "deu": {
        "official": "Volksrepublik Bangladesch",
        "common": "Bangladesch"
      },
      // Additional translations omitted for brevity
    },
    "latlng": [24, 90],
    "landlocked": false,
    "borders": ["MMR", "IND"],
    "area": 147570,
    "demonyms": {
      "eng": {
        "f": "Bangladeshi",
        "m": "Bangladeshi"
      },
      "fra": {
        "f": "Bangladaise",
        "m": "Bangladais"
      }
    },
    "flag": "🇧🇩",
    "maps": {
      "googleMaps": "https://goo.gl/maps/op6gmLbHcvv6rLhH6",
      "openStreetMaps": "https://www.openstreetmap.org/relation/184640"
    },
    "population": 164689383,
    "gini": {
      "2016": 32.4
    },
    "fifa": "BAN",
    "car": {
      "signs": ["BD"],
      "side": "left"
    },
    "timezones": ["UTC+06:00"],
    "continents": ["Asia"],
    "flags": {
      "png": "https://flagcdn.com/w320/bd.png",
      "svg": "https://flagcdn.com/bd.svg",
      "alt": "The flag of Bangladesh has a dark green field bearing a large red circle that is offset slightly towards the hoist side of center."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/bd.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/bd.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
      "latlng": [23.72, 90.4]
    },
    "postalCode": {
      "format": "####",
      "regex": "^(\\d{4})$"
    }
  }
]

```

## Contributors

We welcome contributions! If you'd like to contribute, please follow these guidelines:

- **Pull Requests:** Base your pull requests against the `main` branch.
- **Contributing Guide:** Adhere to the instructions in the [contributing guide](CONTRIBUTING.md).
- **Documentation Changes:** If your pull request includes changes to the documentation, ensure the README file is updated accordingly.

We appreciate your efforts to improve this project!

## License

This project is licensed under the terms of the MIT license.
