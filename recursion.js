function main() {
    let argument = process.argv[2];
    let fn = null;
    const method = process.argv[3];
    switch (method) {
        case "--sum":
            fn = sum;
            break;
        case "--count":
            fn = count;
            break;
        case "--max":
            fn = max;
            break;
        case "--binary":
            function generator(arr) {
                const needle = arr[0];
                arr = arr.slice(1);
                return binary(arr, needle);
            }
            fn = generator;
            break;
        case "--binaryr":
            function generator(arr) {
                const needle = arr[0];
                arr = arr.slice(1);
                return binaryRecursive(arr, needle, 0, arr.length - 1);
            }
            fn = generator;
            break;
        default:
            fn = function () {
                return "no method";
            };
            break;
    }

    console.time("runtime");

    const result = fn(JSON.parse(argument));

    console.timeEnd("runtime");

    console.log(result);
}
main();

/**
 * Recursive SUM function
 */
function sum(arr) {
    if (!arr[0]) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
}

/**
 * Recursive COUNT function
 */
function count(arr) {
    if (!arr[0]) {
        return 0;
    }
    return 1 + count(arr.slice(1));
}

/**
 * Recursive MAX function
 */
function max(arr, high = 0) {
    if (!arr[0]) {
        return high;
    }
    return max(arr.slice(1), arr[0] > high ? arr[0] : high);
}

/**
 * Normal binary search function
 */
function binary(arr, needle) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = arr[mid];
        if (guess === needle) {
            return mid;
        }
        if (guess > needle) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

/**
 * Recursive binary search function
 */
function binaryRecursive(arr, needle, low, high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    console.log(guess, '===', needle);
    if (low <= high) {
        if (guess === needle) {
            return mid;
        }
        if (guess > needle) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        return binaryRecursive(arr, needle, low, high);
    }
    return -1;
}
