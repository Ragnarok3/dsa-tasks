function findOddOccurringElements(arr: number[]): number[] {
    let xorResult = arr.reduce((acc, num) => acc ^ num, 0);

    // If xorResult is 0, it means all elements occur even times
    if (xorResult === 0) {
        return [];
    }

    // Find the rightmost set bit
    let rightmostSetBit = xorResult & -xorResult;

    let odd1 = 0, odd2 = 0;

    // Partition the array into two groups based on the rightmost set bit
    for (let num of arr) {
        if (num & rightmostSetBit) {
            odd1 ^= num;
        } else {
            odd2 ^= num;
        }
    }

    return [odd1, odd2];
}

// testing:
const arr = [4, 3, 6, 2, 4, 2, 3, 4, 3, 3];
const oddOccurringElements = findOddOccurringElements(arr);

if (oddOccurringElements.length === 0) {
    console.log("No elements occur odd number of times.");
} else {
    console.log("The odd occurring elements are", oddOccurringElements[0], "and", oddOccurringElements[1]);
}
