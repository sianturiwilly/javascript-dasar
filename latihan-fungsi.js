// Latihan Fungsi
// Willi
// Jumat, 2 September 2022
// Full Stack JavaScript Web Developer Tingkat Pemula

function countLength(str){
    var countWord = str.length;
    return countWord;
}

function checkLength(str){
    var strLength = countLength(str);
    if(strLength >= 5 && strLength <= 12){
        return "Kata sandi diterima.";
    }else{
        return "Masukkan kata sandi antara 5 dan 12.";
    }
}

console.log(checkLength("123"));
console.log(checkLength("abcdefgh"));