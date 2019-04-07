function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var arrsepatu=[],arrbaju=[],arrsweater=[];
    var a=0,b=0,c=0;
    var z=listBarang[0][2],y=listBarang[1][2],x=listBarang[2][2];
    if (shoppers.length==0){
      return '[]'
    }

    for (var i=0;i<shoppers.length;i++){
      if (shoppers[i].product===listBarang[0][0] && shoppers[i].amount<=z){
        arrsepatu.push(shoppers[i].name);
        a+=shoppers[i].amount;
        z-=a;
      }
      if (shoppers[i].product===listBarang[1][0] && shoppers[i].amount<=y){
        arrbaju.push(shoppers[i].name);
        b+=shoppers[i].amount;
        y-=b;
      }
      if (shoppers[i].product===listBarang[2][0] && shoppers[i].amount<=x){
        arrsweater.push(shoppers[i].name);
        c+=shoppers[i].amount;
        x-=c;
      }
    }
    var hasil=[]
    hasil.push({
      product:listBarang[0][0],
      shoppers:arrsepatu,
      leftOver:listBarang[0][2]-a,
      totalProfit:listBarang[0][1]*a
    });
    hasil.push({
      product:listBarang[1][0],
      shoppers:arrbaju,
      leftOver:listBarang[1][2]-b,
      totalProfit:listBarang[1][1]*b
    });
    hasil.push({
      product:listBarang[2][0],
      shoppers:arrsweater,
      leftOver:listBarang[2][2]-c,
      totalProfit:listBarang[2][1]*c
    });
    return hasil;
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]