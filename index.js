// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);
  
  const messageNames = [];
  function writeCards(names, value) {
    for (let i = 0; i < names.length; i++) {
      messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames
  }
  function countDown(value){
    var i = value
    while (i > -1) {
      console.log( i-- ); 
  }
  }  