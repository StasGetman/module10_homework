let arr = [5, 12, 6, 98];
function showWithDelay(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          console.log(arr[i]);
        }, 1000 * (i + 1));
    }
}
console.log (arr);
showWithDelay(arr);