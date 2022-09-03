// Objek
// Willi
// Sabtu, 3 September 2022
// Full Stack JavaScript Web Developer Tingkat Pemula

function changeToObject(array){
    var result = {}
    result.jenis = array[0];
    result.harga = array[1];
    result.enak = array[2];
    return result;
}

console.log(changeToObject(["Durian",75000,true]));