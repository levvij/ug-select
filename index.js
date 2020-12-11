const wait = s => new Promise(done => setTimeout(() => done(), s * 1000));

const match = async () => {
    console.log(Math.random());
    await wait(1);
    
    const x = +Math.random().toString()[4];
    console.log(`A 2x, 3s = ${x}`);
    
    for (let i = 0; i < x - 1; i++) {
        await wait(1);
        console.log(Math.random());
    }

    await wait(1);

    const y = +Math.random().toString()[5];
    console.log(`B ${x} mal, 4 stell = ${y}`);
    
    if (y > 6) {
        console.log(`y > 6! rematch`);

        return await match();
    }

    for (let i = 0; i < 5; i++) {
        await wait(1);
        console.log(Math.random());
    }

    await wait(1);

    const r = +Math.random().toString()[y + 1];
    console.log(`A 6x, ${y} stelle => ${r}`);

    await wait(3);

    const p = ["rhea", "larissa", "vivkoko", "ilija", "jeffyannis", "heigaundhotbox", "lara&gang", "sereina", "jeunes"][r];

    if (!p) {
        return await match();
    }

    return p;
}

match().then(p => {
    console.log(`picked: ${p}. setting 15min timer`);

    let t = 15;

    setInterval(() => {
        t -= 1;

        if (t) {
            console.log(`${t} more minutes to go!`);
        } else {
            console.log("timeout!");

            process.exit(1);
        } 
    }, 60 * 1000);
});