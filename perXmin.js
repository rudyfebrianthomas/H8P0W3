function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var list=[];
    var gabung=[];
    var digit=[];
    for (var i=1;i<=angka;i++){
        if (angka%i==0){
            list.push(i);
        }
    }
    for (var i=0;i<list.length/2;i++){
        gabung.push(list[i].toString()+list[list.length-1-i].toString());
    }
    for (var i=0;i<gabung.length;i++){
        digit.push(gabung[i].length);
    }
    var temp;
    for (var i=0;i<digit.length-1;i++){
        for (var j=0;j<digit.length-i-1;j++){
            if (digit[j]>digit[j+1]){
                temp=digit[j];
                digit[j]=digit[j+1];
                digit[j+1]=temp;
            }
        }
    }
    return digit[0];
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2