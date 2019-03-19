function shoppingTime(memberId, money) {
    // you can only write your code here!
    var hasil={};
    var list=[];
    var changeMoney=0;

    if (memberId!==''&&memberId!==undefined){
        if (money>50000){
            hasil.memberId=memberId;
            hasil.money=money;
            changeMoney=money;
                if (changeMoney>=1500000){
                    list.push('Sepatu Stacattu');
                    changeMoney=changeMoney-1500000;
                }
                if (changeMoney>=500000 && changeMoney<1500000){
                    list.push('Baju Zoro');
                    changeMoney=changeMoney-500000;
                }
                if (changeMoney>=250000 && changeMoney<500000){
                    list.push('Baju H&N');
                    changeMoney=changeMoney-250000;
                }
                if (changeMoney>=175000 && changeMoney<250000){
                    list.push('Sweater Uniklooh');
                    changeMoney=changeMoney-175000;
                }
                if (changeMoney>=50000 && changeMoney<175000){
                    list.push('Casing Handphone');
                    changeMoney=changeMoney-50000;
                }
            hasil.listPurchased=list;
            hasil.changeMoney=changeMoney;
        }
        else{
            return 'Mohon maaf, uang tidak cukup'
        }
        return hasil;
    }
    else{
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
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