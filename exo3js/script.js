"use strict";
let Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

// Function B
function B(note) {
    return note >= 10;
}

// Function A
function A() {
    for (let i = 0; i < Students.length; i++) {

        if (B(Students[i][3])) {
            console.log(Students[i][0] + ": ADMIS");
        } else {
            console.log(Students[i][0] + ": AJOURNÉ");
        }

    }
}