const array = [2,7,6,12,44,32,4,8,12,17];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
// liidab kõik kokku
---------------------------------
//stringi kokku liitmine
let str= "2 7 6 12 44 32 4 8 12 17";
str = str.replace(/ /g, ",");
var b = str.split(',').map(function(item) {
    return parseInt(item, 10);
});
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
