# Algorithms

A showcase of the most common programming algorithms.\
Run them on your CLI.

[Node.js](https://nodejs.org/en/download/) is required.

## Reverse

```js
$ node reverse.js "Hello world"

// dlrow olleH
```

## Recursion

```js
$ node recursion.js [1,2,3,4,5,6] --sum

// 21
```

```js
$ node recursion.js [79,43,15,92,7,27,101,61] --count

// 8
```

```js
$ node recursion.js [79,43,15,92,7,27,101,61] --max

// 101
```

```js
$ node recursion.js [84,10,25,33,48,60,84,95] --binary

// 5

/**
 * Note:
 * array[0] - value to search
 * works only for sorted arrays
 */
```

```js
$ node recursion.js [84,10,25,33,48,60,84,95] --binary-manual

// 5

/**
 * Non-recursive binary search
 */
```

## Quicksort

```js
$ node quicksort.js [79,43,15,92,7,27,101,61]

// [7, 15, 27,  43, 61, 79, 92, 101]
```