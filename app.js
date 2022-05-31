const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses:[1,2,3,48],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.render()
        this.prevGuesses.push(this.getGuess())
      } while 
      (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
    },
getGuess: function() {
  let guess
  while(!guess || guess > this.biggestNum || guess < this.smallestNum) {
    guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`))
    if (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
    alert('This is not a valid entry')
    }
  }
  return guess
},
  start: function(){
    if(this.secretNum === this.getGuess){
      alert(`Congrats! You guessed the number in ${this.prevGuess.length}!`)
    }else if(this.secretNum < this.getGuess){
      alert(`Your guess was to hig: ${game.prevGuess}`)
    }
    else if(this.secretNum > this.getGuess){
      alert(`Your guess was to low: ${game.prevGuess}`)
    }
  }
}
game.play