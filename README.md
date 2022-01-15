# Getting Started Fixer API

This project was bootstrapped with:
[Create React App](https://github.com/facebook/create-react-app).
[Tailwind](https://tailwindcss.com/).
[Axios](https://axios-http.com/es/).

## Available Scripts

Follow tthe nexts steps for installation:

```
npm install
```

And then create a [`.env`]file and install your API KEY in the variable **_REACT_APP_API_KEY=_**

the next step is run in your local with:

```
npm start or npm run start
```

For build:

```
npm build or npm run build
```

## Usage

Select a **Date and one Currency** to compare.

## Notations

There are different **issues** and are the next:

-app only compatible with the "historical" endpoint but can be expanded by changing the endpoint parameter of the "useGetCurrency" hook
-the api requires a subscription to access other endpoints and change the base currency at the moment the default base is JPY

## Observations

-more code refactoring can and will be done.
