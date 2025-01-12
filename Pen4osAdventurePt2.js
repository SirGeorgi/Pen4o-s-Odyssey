function randomNumInbetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseDoor(num) {
    if (num < 1 || num > 3) {
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
        return;
    }

    if (num === randomNumInbetween(1, 3)) {
        console.log(
            `Congratulations, Pen4o! You found the treasure behind Door ${num}!`
        );
    } else {
        console.log(`A bucket of cold water splashes on you! Unlucky Pen4o!`);
    }
}

chooseDoor();
