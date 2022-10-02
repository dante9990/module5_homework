let arr = [1, 2, 1, 1, 1, 1];
let count;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
        count = true;
    } else {
        count = false;
        break;
    }
}