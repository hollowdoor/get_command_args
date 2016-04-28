get-command-args
================

Install
-------

`npm install --save get-command-args`

Usage
-----

In this example the variable `vargs` is an array of position arguments from the command line.

```javascript
var vargs = require('get-command-args')();
```

About
-----

`get-command-args` understands normal CMD positional arguments, and positional arguments started with the non-standard **--**.

`get-command-args` ignores flags, and their values.

Also see the `get-command-flags` module.

### In the browser

It uses the path of the URI as positional arguments. The **--** argument is not used in the browser.
