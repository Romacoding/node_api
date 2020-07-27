# Lyft Assignment

Simple NodeJS app.

## Usage

Accepts a POST request to the route “/test” with one argument “string_to_cut” <br />
Returns a JSON object with the key “return_string” and a string containing every third letter from the original string

## Link

To see expected behavior you can test against a working example with the command: <br />
<code>curl -X POST https://7et3t.sse.codesandbox.io/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'</code>