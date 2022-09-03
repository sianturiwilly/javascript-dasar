// Kondisi Bersarang (Nested if)

var umur = 17;
var tinggi = 155;
if (umur < 17){
    if(tinggi < 150){
        console.log("Tidak boleh masuk.");
    } else {
        console.log("Boleh masuk.");
    }
} else {
    console.log("Boleh masuk.");
}