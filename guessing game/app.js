const max = prompt("enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("enter your first guess");

while (true) {
    if (guess == "quit") {
        console.log("game over");
        break;
    }
    if (guess == random) {
        console.log("correct guess: ", random);
        break;
    } else if (guess < random) {
        guess = prompt("too low");
    } else {
        guess = prompt("too high");
    }

}