function drawScratches() {
    if (drawCount % 100 == 0) {
        mS = random(0.8, 1);
    }
    if (drawCount % 10 == 0) {
        if (Math.random() > 0.97) {
            amountOfScratches = random(160, 60);
            // fluctuation = 4;
        } else {
            amountOfScratches = 3;
            // fluctuation = 1;
        }
        // amountOfScratches = (Math.random() > 0.95) ? random(160, 60) : 3;
        // fluctuation = (Math.random() > 0.95) ? 4 : 1;
    }
    for (let i = 0; i < 3000; i++) {
        let v = Math.random();
        let s = (v >  0.99) ? 10 : 1;
        s = (v > 0.9995) ? s * random(1, 4) : s;
        s *= mS;
        vertices.push(Math.random() * 2 - 1, Math.random() * 2 - 1, s + Math.random() * 0.5 * s, 1.0);
    }
    let n = Math.PI * 1 / 100;

    for (let m = 0; m < amountOfScratches; m++) {
        let s = Math.random() * Math.PI * 2;
        let sX = Math.random() * 2 - 1;
        let sY = Math.random() * 2 - 1;
        let sC = (Math.random() < 0.5) ? 0.01 : 1;
        let osc = Math.sin(drawCount * m);
        for (let i = s; i < Math.PI + s; i += n) {
            //         let x = cos(i) * cos(i * osc) * 0.1 + sX;
            //         let y = sin(i) * sin(i * osc) * 0.175 + sY;
            let x = cos(i * 0.1) * tan(osc * 10) * cos(i * osc) * 0.1 + sX;
            let y = sin(i * 0.1) * tan(osc * 10) * sin(i * osc) * 0.175 + sY;
            vertices.push(x, y, random(2, 20) * sC * mS, 1.0);
        }
    }
}