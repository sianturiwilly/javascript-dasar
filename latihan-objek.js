// Objek
// Willi
// Sabtu, 3 September 2022
// Full Stack JavaScript Web Developer Tingkat Pemula

// Soal
/*
Profile"
Nama    : Nike
Berat   : 160 kg
Tinggi  : 175 cm
Hobi    : Nonton Film, Jalan-jalan

// Invoke method
nike.sebutkanHobby();

/// Hasil
Hobby Nike:
1. Nonton Film
2. Jalan-jalan
*/

var nike = {
    nama : "nike",
    berat : 160,
    tinggi : 175,
    hobby: ["Nonton Film", "Jalan-jalan"],

    sebutkanHobby : function(){
        console.log("Hobby Nike:");
        for(var i = 0; i < this.hobby.length; i++){
            console.log(i+1 + ". " + this.hobby[i]);
        }
    }
}

nike.sebutkanHobby();