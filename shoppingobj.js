function shoppingTime(memberId, money) {
    // you can only write your code here!
    var listBarang=[
    {name:'Sepatu Stacattu',price:1500000},
    {name:'Baju Zoro',price:500000},
    {name:'Baju H&N',price:250000},
    {name:'Sweater Uniklooh',price:175000},
    {name:'Casing Handphone',price:50000}];

    var list=[];
    var hasil={};

    if(memberId==undefined||memberId==''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if(money<50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    else{
        hasil.memberId=memberId;
    }
    hasil.money=money;
    var hargaBarang=0;
    for (var i=0;i<listBarang.length;i++){
        if (money>listBarang[i].price){
            list.push(listBarang[i].name);
            hargaBarang+=listBarang[i].price;
        }
        hasil.listPurchased=list;
        hasil.changeMoney=money-hargaBarang;
    }
    return hasil
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja