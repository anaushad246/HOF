function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumberWithDelay(delayInSeconds, min, max) {
    console.log(`Generating a random number between ${min} and ${max} after a delay of ${delayInSeconds} seconds...`);
    let countdown = delayInSeconds;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            const randomNumber = generateRandomNumber(min, max);
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

generateRandomNumberWithDelay(3, 1, 100);