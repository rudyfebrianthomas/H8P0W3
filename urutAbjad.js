function urutkanAbjad(str) {
    // you can only write your code here!
    var alf='abcdefghijklmnopqrstuvwxyz';
    var hasil='';

    for (var i=0;i<alf.length;i++){
        for (var j=0;j<str.length;j++){
            if (alf[i]===str[j]){
                hasil+=str[j];
            }
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('he llo')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'