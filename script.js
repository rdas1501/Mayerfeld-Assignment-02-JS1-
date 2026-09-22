function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);

    return choices[randomNumber];
}


function playRound(playerSelection, computerSelection) {

    playerSelection =
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return {
            result: "draw",
            message: `Draw! You both chose ${playerSelection}.`
        };
    }

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return {
            result: "player",
            message: `You win! ${playerSelection} beats ${computerSelection}.`
        };
    }

    return {
        result: "computer",
        message: `You lose! ${computerSelection} beats ${playerSelection}.`
    };
}


function game() {

    alert(
        "Welcome to Rock, Paper, Scissors!\n\n" +
        "You are playing against the Evil AI.\n" +
        "The first player to win 3 rounds wins the game.\n\n" +
        "You will enter your choices using popup boxes.\n" +
        "Round results will also appear in the browser console.\n\n" +
        "To open the console:\n" +
        "Right-click the page → Inspect → Console."
    );

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {

        let playerSelection = prompt(
            "Choose Rock, Paper, or Scissors:"
        );

        // Player pressed Cancel
        if (playerSelection === null) {
            alert("Game cancelled. Thanks for playing!");
            console.log("The player cancelled the game.");
            return;
        }

        playerSelection = playerSelection.trim();

        // Check invalid input
        while (
            playerSelection.toLowerCase() !== "rock" &&
            playerSelection.toLowerCase() !== "paper" &&
            playerSelection.toLowerCase() !== "scissors"
        ) {

            playerSelection = prompt(
                "Invalid choice!\n\nPlease enter Rock, Paper, or Scissors:"
            );

            if (playerSelection === null) {
                alert("Game cancelled. Thanks for playing!");
                console.log("The player cancelled the game.");
                return;
            }

            playerSelection = playerSelection.trim();
        }


        const computerSelection = computerPlay();

        const round = playRound(
            playerSelection,
            computerSelection
        );

        console.log("------------------------");
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(round.message);


        if (round.result === "player") {
            playerScore++;
        }

        if (round.result === "computer") {
            computerScore++;
        }


        console.log(
            `Score → You: ${playerScore} | Computer: ${computerScore}`
        );

        alert(
            `${round.message}\n\n` +
            `Score:\nYou: ${playerScore}\nComputer: ${computerScore}`
        );
    }


    if (playerScore === 3) {

        console.log("YOU DEFEATED THE EVIL AI!");

        alert(
            "YOU WIN!\n\n" +
            "You defeated the Evil AI!\n" +
            `Final Score: ${playerScore} - ${computerScore}`
        );

    } else {

        console.log("The Evil AI wins!");

        alert(
            "GAME OVER!\n\n" +
            "The Evil AI defeated you!\n" +
            `Final Score: ${playerScore} - ${computerScore}`
        );
    }
}


game();