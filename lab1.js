// Exercise 1: Capitalize the first letter of each word
function capitalizeWords(str) {
    let words = str.split(" ");
    let capitalized = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalized.join(" ");
}
console.log(capitalizeWords("hello world from javascript")); 


// Exercise 2: Find the largest of three integers
function max(a, b, c) {
    return Math.max(a, b, c);
}
console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));


// Exercise 3: Move last three characters to the start
function right(str) {
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, -3);
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// Exercise 4: Find the type of angle
function angle_Type(angle) {
    if (angle > 0 && angle < 90) return "Acute angle";
    else if (angle === 90) return "Right angle";
    else if (angle > 90 && angle < 180) return "Obtuse angle";
    else if (angle === 180) return "Straight angle";
    else return "Invalid angle";
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));


// Exercise 5: Find the maximum possible sum of some of its k consecutive numbers
function array_max_sum(arr, k) {
    if (arr.length < k) return 0;
    let maxSum = 0;
    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
