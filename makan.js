function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var n=0;
    if (waktu===0){
        return 0;
    }
    else if(waktu>0 && waktu<15){
        return 1;
    }
    else{
        n++;
        n+=makanTerusRekursif(waktu-15);
    }
    return n;
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0