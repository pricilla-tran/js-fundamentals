import readline from 'readline'

const secretNumber = Math.floor(Math.random() * 100) + 1
const maxAttempts = 7
let attempts = 0
let hasWon = false;

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))


for (let i = 0; i < maxAttempts; i++){
    const input = await question(`Attempt ${i + 1}/${maxAttempts} — Enter your guess: `)
    const guess = parseInt(input)

    if (guess === secretNumber){
        console.log("Correct!")
        hasWon = true;
        break;
    }
    else {
        if (guess < secretNumber){
            console.log("Too low");
            attempts++;
        }
        if (guess > secretNumber){
            console.log("Too high");
            attempts++;
        }
    }
}

if (!hasWon) {
    console.log(`Out of guesses! The secret number was ${secretNumber}`)
}

rl.close()