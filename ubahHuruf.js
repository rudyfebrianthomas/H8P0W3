function ubahHuruf(kata) {
    // you can only write your code here!
    var alf='abcdefghijklmnopqrstuvwxyz';
    var hasil='';
    for (var i=0;i<kata.length;i++){
        for (var j=0;j<alf.length;j++){
            if (kata[i]===alf[j]){
                if(kata[i]==='z'){
                    hasil+=alf[0];
                }
                else{
                    hasil+=alf[j+1];
                }
            }
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wowz')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu