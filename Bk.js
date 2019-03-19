function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var abj='abcdefghijklmnopqrstuvwxyz ';
    var abj1='ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    var hasil='';

    for (var i=0;i<kalimat.length;i++){
        var found = false;
        for (var j=0;j<abj.length;j++){
            if (kalimat[i]==abj[j]){
                hasil += abj1[j];
                found = true;
            }
            else if(kalimat[i]==abj1[j]){
                hasil +=abj[j];
                found = true
            }
        }
        if(found === false){
            hasil+=kalimat[i]
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"