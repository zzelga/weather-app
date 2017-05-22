# Weather app

This is a command-line utility, that fetches the temperature (current and apparent) for a given address.

It takes a single argument for the address:

```
node app.js --address "address that you want to fetch the weather for"
```

It makes use of the Google API, as well as the Dark Sky API.

It requires an API key for Dark Sky obtainable from [https://darksky.net/dev/](https://darksky.net/dev/)

Once you have an API key, rename the .env.sample file to .env - then replace the XXXXX within the file with your key.

## Thing to note

app-promise.js is merely a self-contained Promises-based version of app.js
