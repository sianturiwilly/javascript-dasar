var murid = [
    [1, "Willi", 3.14],
    [2, "Darwis", 3.10],
    [3, "Nike", 3.20]
]

for(var i = 0; i < murid.length; i++){
    if(murid[i][2] >= 3.0){
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Lulus");
    }else{
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Gagal");
    }
}