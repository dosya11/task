const goods = [
    {
        name:'iphone 12 ',
        price: '790'
    },
    {
        name:'iphone 12 pro ',
        price: '800'
    },
    {
        name:'iphone 12 pro max ',
        price: '1050'
    },
    {
        name:'iphone 13 ',
        price: '800'
    },
    {
        name:'iphone 13 pro ',
        price: '1000'
    },
    {
        name:'iphone 13 pro max',
        price: '1200'
    }]


  const filterPrice = (goods) => {
    cheapPhones = [];

    for (let i = 0; i < goods.length; i++) {
        if (goods[i].price <= 800){
            cheapPhones.push(goods[i]);
        }
    }return cheapPhones;
  };
console.log(filterPrice(goods));


