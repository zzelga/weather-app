# Weather app

This is a command-line utility, that fetches the temperature (current and apparent) for a given address.

It takes a single argument for the address:
--address "address you want the weather for"

It makes use of the Google API, as well as the Forecast.io API.

It requires an API key for Forecast.io, obtainable from [https://darksky.net/dev/](https://darksky.net/dev/)
Once you have an API key, rename the .env.sample file to .env - then replace the XXXXX within the file with your key.
