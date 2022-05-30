const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses:[],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
  // while(getGuess !== this.secretNum){  
  //   prevGuesses = prevGuesses[getGuess]
  // }
  ,
  getGuess: function(){
    let guess = parseInt(prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`))
    while(isNaN(guess)){
      return prompt(`you have entered ${guess}an invalid choice, try again`)
    }
  },
}
