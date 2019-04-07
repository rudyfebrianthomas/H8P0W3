function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var awal=0,akhir=0;
    var hasil=[];
    for (var i=0;i<arrPenumpang.length;i++){
        for (var j=0;j<rute.length;j++){
            if (arrPenumpang[i][1]===rute[j]){
                awal=j;
            }
            if (arrPenumpang[i][2]===rute[j]){
                akhir=j;
            }
        }
        var jarak= Math.abs(akhir-awal);
        hasil.push(
            { penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar: jarak*2000 }
        );
    }
    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'F', 'B'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]