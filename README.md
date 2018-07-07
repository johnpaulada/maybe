# Maybe
A simple Maybe implementation in JavaScript.

[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

[![](https://data.jsdelivr.com/v1/package/npm/@johnpaulada/maybe/badge)](https://www.jsdelivr.com/package/npm/@johnpaulada/maybe)

## Getting Started

### Importing the library
To use the library, first import it:

In Node:
```javascript
const Maybe = require('@johnpaulada/maybe')
```

As ES Module:
```javascript
import Maybe from '@johnpaulada/maybe'
```

On the browser:
```html
<script src="https://cdn.jsdelivr.net/npm/@johnpaulada/maybe@3.0.2/maybe.min.js"></script>
```

### Using the library
To create a Maybe (Just/Nothing) use the `of()` method like this:

```javascript
const value = Maybe.of(1) // Just(1)
```

To work with the value, you can `map()` for example:

```javascript
const plusFive = value.map(x => x + 5) // Just(6)
```

To get the value outside of Maybe, use the `reduce()` method:

```javascript
const sixValue = plusFive.reduce(x => x) // 6
```

or the `value()` method:

```javascript
const sixValue = plusFive.value(0)
```

This will get the value of the Maybe if it's a `Just` and will return a 0 if it's a `Nothing`.

## Development
1. Install [Yarn](https://yarnpkg.com).
2. Install Rollup.
2. Run `yarn` on the terminal to install dependencies.
3. Running `rollup -c` will build the library.

## Roadmap
- [ ] Lazy Evaluation
- [ ] Example for `ap`
- [ ] Example for `branch`

## License
MIT