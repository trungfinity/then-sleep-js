# then-sleep

Promise-based sleeping.

## Installation

```sh
npm i then-sleep -S
```

## Usage

```js
var sleep = require('then-sleep');

// Using the `.then(callback)` syntax

console.log("Sleeping");
// Sleep for 1 second and do something then.
sleep(1000).then(() => {
	console.log('Done')
})

// Using the `async`/`await` syntax

let delay = async function() {
  console.log('Sleeping');
  // Sleep for 1 second and do something then.
  await sleep(1000);
  console.log('Done');
}

delay();

```

## License

MIT licensed.
