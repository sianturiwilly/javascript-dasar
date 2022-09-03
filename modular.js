// Modular Function
// Willi
// Jumat, 2 September 2022
// Full Stack JavaScript Web Developer Tingkat Pemula

function splitToArray(str){
    var tempArray = str.split(" ");
    return tempArray;
}

function jumlahKata(kalimat){
    var result = splitToArray(kalimat);
    var arrayLength = result.length;
    return arrayLength;
}

console.log(jumlahKata("Halo, selamat pagi."));