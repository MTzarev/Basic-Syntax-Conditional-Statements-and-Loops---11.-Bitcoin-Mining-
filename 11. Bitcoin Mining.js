function bitcoinMining(input) {
    let grams = input.shift();
    let coins = 0;
    let money = 0;
    let counter = 1;
    let day = 0;

    while (grams !== undefined) {
        let bit = 0;
        if (counter % 3 === 0) {
            grams *= 0.7;
        }
        money += 67.51 * grams;
        bit = money / 11949.16;
        if (bit >= 1) {
            bit = Math.floor(bit);
            coins += bit;
            money -= bit * 11949.16;
            if (day === 0) {
                day = counter;
            }
        }
        grams = input.shift();
        counter++;
    }
    console.log(`Bought bitcoins: ${coins}`);
    if (day > 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])