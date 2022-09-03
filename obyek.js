// Soal
/*
Profile:
Nama: Nike
Berat: 80 kg
Tinggi: 175 cm
Hobi: Nyanyi, Makan

// Invoke method
nike.sebutkanHobby();

/// Hasil
Hobby Nike:
1. Nyanyi
2. Makan
 */

var nike = {
    nama : "Nike",
    berat : 80,
    tinggi: 175,
    hobby: ["Nyanyi", "Makan"],

    sebutkanHobby : function(){
        console.log("Hobby Nike:");
        for(var i = 0; i < this.hobby.length; i++){
            console.log(i+1) + ". " + this.hobby[i];
        }
    }
}

nike.sebutkanHobby();