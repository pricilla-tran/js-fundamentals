import readline from 'readline'

// ---- Interfaces & Types ----
interface GameConfig {
    maxAttempts: number
    minNumber: number
    maxNumber: number
}

const config: GameConfig = {
    maxAttempts: 7,
    minNumber: 1,
    maxNumber: 100
}

type GuessResult = "too-high" | "too-low" | "correct"

interface Attempt {
    guessNumber: number
    result: GuessResult
}

// ---- Readline Setup ----
const rl = readline.createInterface({
  input: process.stdin,
    output: process.stdout
})

const question = (text: string): Promise<string> =>
  new Promise((resolve) => rl.question(text, resolve))

// ---- Helper Functions ----
const generateSecret = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const evaluateGuess = (guess: number, secret: number): GuessResult => {
    if (guess === secret) return "correct"
    if (guess < secret) return "too-low"
    return "too-high"
}

// ---- Game Loop ----
const runGame = async () => {
    const secretNumber = generateSecret(config.minNumber, config.maxNumber)
    const attempts: Attempt[] = []  // YOUR CODE HERE — array to store attempts
    let hasWon = false

    for (let i = 0; i < config.maxAttempts; i++) {
        const input = await question(`Attempt ${i + 1}/${config.maxAttempts} — Enter your guess: `)
        const guess = parseInt(input)
        const result = evaluateGuess(guess, secretNumber)

        attempts.push({ guessNumber: guess, result: result })
      
        if (result === "correct") {
          console.log("Correct! 🎉")
          hasWon = true;
          break
        } else {
            console.log(result === "too-low" ? "Too low" : "Too high")
        }
    }

    if (!hasWon) {
      console.log(`Out of guesses! The number was ${secretNumber}`)
    }

    rl.close()
}

runGame()