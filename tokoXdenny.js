function countProfit(shoppers) {
    let listBarang =
        [['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]];


    let obj = []
    for (var i = 0; i < listBarang.length; i++) {
        let temp = {}
        let shoppersName = []
        let purchasedItem = 0

        for (var j = 0; j < shoppers.length; j++) {
            var product = shoppers[j].product === listBarang[i][0]
            var amount = purchasedItem + shoppers[j].amount <= listBarang[i][2];
            if (product && amount) {
                purchasedItem += shoppers[j].amount
                shoppersName.push(shoppers[j].name)
            }
        }
        temp['products'] = listBarang[i][0];
        temp['shoppers'] = shoppersName;
        temp['leftOver'] = listBarang[i][2] - purchasedItem;
        temp['TotalProfit'] = listBarang[i][1] * purchasedItem;
        obj.push(temp)
    }
    if (shoppers.length === 0) {
        return []
    }
    return obj

}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
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

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
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
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
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