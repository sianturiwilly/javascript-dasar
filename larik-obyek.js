// Larik Obyek
// Willi
// Sabtu, 3 September 2022
// Full Stack JavaScript Web Developer Tingkat Pemula

// var foods = [
//     { name : "Nasi Goreng",
//     origin : "Indonesia"},
//     { name : "Pizza",
//     origin : "Italy"},
//     { name : "Fish and Chips",
//     origin : "England"}
// ]

// console.log(foods[0]);
// console.log(foods[0].name);
// console.log(foods[0].origin);

var items = [
    ["Asus", "laptop", 7500000],
    ["Dell", "laptop", 7000000],
    ["Corsair", "ram", 1250000]
]

function changeToArrayObject(array2D){
    var result = [];
    var tempObj = {};

    for(var i = 0; i < array2D.length; i++){
        tempObj.name = array2D[i][0];
        tempObj.type = array2D[i][1];
        tempObj.price = array2D[i][2];

        result.push(tempObj);
        tempObj = {};
    }
    return result;
}

console.log(items[0]);
console.log(items[1]);
console.log(items[2]);