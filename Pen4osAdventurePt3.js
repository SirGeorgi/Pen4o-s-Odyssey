function decipherMap(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        string +=
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase();
    }

    let matches = input.match(/\d+/g).join("");
    let result = 0;

    for (let i = 0; i < matches.length; i++) {
        result += Number(matches[i]);
    }

    console.log(string);
    if (result > 20) {
        console.log(
            `The map reveals the your next location! Total power: ${result}`
        );
    } else {
        console.log(`The map warns of danger! Total power: ${result}`);
    }
}

decipherMap("Secr7eT_tRe4sur89e!");
