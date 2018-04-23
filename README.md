# Redirector

A simple app to redirect all requests to a URL.

## Config

Use environment variables:

- `REDIRECT_TO` - The absolute URL to redirect to
- `PORT` - The port to run the server on (default `3000`)

## Deploy

```sh
$ now -e REDIRECT_TO="https://your.url.here/foo/bar.zip"
```

Then hit the URL it gives you. Simples.
