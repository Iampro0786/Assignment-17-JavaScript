const marks = [85, 72, 90, 68, 95, 50, 77, 60];

function calculateAverage(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total / arr.length;
}

function findHighest(arr) {
    let highest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    return highest;
}

function findLowest(arr) {
    let lowest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }

    return lowest;
}

function countPassing(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 60) {
            count++;
        }
    }

    return count;
}


console.log("Average Marks:", calculateAverage(marks));
console.log("Highest Marks:", findHighest(marks));
console.log("Lowest Marks:", findLowest(marks));
console.log("Passing Students:", countPassing(marks));
