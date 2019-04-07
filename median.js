function cariMedian(arr) {
    // you can only write your code here!
    // arr.sort(function(a,b){
    //     return a-b;
    // }) 
    // **apa harus di sorting?? kalau di sorting hasil ke 3 akan beda**

    var a=0,b=0;
    if (arr.length%2==0){
        a=arr.length/2;
        b=(arr[a-1]+arr[a])/2;
    }
    else{
        a=(arr.length+1)/2
        b=arr[a-1];
    }
    return b;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5