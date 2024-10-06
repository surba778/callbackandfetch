function flipCoin() {
    return new Promise((resolve, reject) => {
      const coinFlip = Math.random();
  
      if (coinFlip > 0.5) {
        resolve("You win!");
      } else {
        reject("You lose!");
      }
    });
  }
  

  flipCoin()
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    });

    