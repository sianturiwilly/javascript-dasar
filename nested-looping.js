// Buatlah tampilan seperti ini:
/*
    1
    12
    123
    1234
    12345
*/

// Jawaban
for(var i = 1; i <= 5; i++){
    var temp = ''; // Ini variabel penampung sementara
    for(var j = 1; j <= i; j++){
        temp = temp + j;
    }
    console.log(temp);
}