function main() {
    let argument = process.argv[2];

    console.time("runtime");

    const result = quicksort(JSON.parse(argument));

    console.timeEnd("runtime");

    console.log(result);
}

main();

function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];
    const less = arr.filter((x) => x < pivot);
    const greater = arr.filter((x) => x > pivot);

    return [...quicksort(less), pivot, ...quicksort(greater)];
}
