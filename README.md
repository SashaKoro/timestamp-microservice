# TimeStamp MicroService

1. Pass a string as a parameter into the url, and it will check whether it is a Unix timestamp or a natural language date.

2. If it is, the API will return both the Unix timestamp and the natural language date.

3. If it is not a valid timestamp or date, the API will return null for both properties.

### Sample Calls:

https://stormy-island-13320.herokuapp.com/245013760
https://stormy-island-13320.herokuapp.com/Oct%2006,%201977

### Response:

```javascript
{
  unix: 245013760,
  naturalDate: "Oct 06, 1977"
}
```
