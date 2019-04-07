function changeVocals (str) {
    //code di sini
    var abj='aiueoAIUEO';
    var abj1='bjvfpBJVFP';
    var hasil='';

    for (var i=0;i<str.length;i++){
      var found = false;
      for (var j=0;j<abj.length;j++){
          if (str[i]==abj[j]){
              hasil += abj1[j];
              found = true;
          }
      }
      if(found === false){
          hasil+=str[i];
      }
    }
    return hasil;
  }
  
  function reverseWord (str) {
    //code di sini
    var hasil='';
    for (var i=str.length-1;i>=0;i--){
      hasil+=str[i];
    }
    return hasil;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var abj='abcdefghijklmnopqrstuvwxyz ';
    var abj1='ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    var hasil='';

    for (var i=0;i<str.length;i++){
        var found = false;
        for (var j=0;j<abj.length;j++){
            if (str[i]==abj[j]){
                hasil += abj1[j];
                found = true;
            }
            else if(str[i]==abj1[j]){
                hasil +=abj[j];
                found = true;
            }
        }
        if(found === false){
            hasil+=str[i];
        }
    }
    return hasil;
  }
  
  function removeSpaces (str) {
    //code di sini
    var hasil='';
    for (var i=0;i<str.length;i++){
      if (str[i]!==' '){
        hasil+=str[i];
      }
    }
    return hasil;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    else{
      var a=changeVocals(name);
      var b=reverseWord(a);
      var c=setLowerUpperCase(b);
      var d=removeSpaces(c);
      return d;
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'