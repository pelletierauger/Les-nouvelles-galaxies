    var gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, width);

    // Full couleur débile
    // gradient.addColorStop(0, "rgba(0,255," + col + ",255)");
    // gradient.addColorStop(step, "rgba(" + col + ",255,0,255)");
    // gradient.addColorStop(0.7, "rgba(255,0," + col2 + ",255)");

    //Un peu plus discret.
    // gradient.addColorStop(0, "rgba(255,255," + col + ",1)");
    // gradient.addColorStop(step, "rgba(" + col + ",55,0,1)");
    // gradient.addColorStop(0.7, "rgba(55,0,255,1)");

    //Atténué
    var col = floor(map(abs(sin(t)), 0, 1, 0, 155));
    var col2 = floor(map(abs(sin(t * 0.5)), 0, 1, 0, 155));
    var step = map(abs(sin(t * 2)), 0, 1, 0.1, 0.3);

    gradient.addColorStop(0, "rgba(75,75," + col + ",1)");
    gradient.addColorStop(step, "rgba(" + col + ",55,0,1)");
    gradient.addColorStop(0.7, "rgba(75,0,255,1)");

    ctx.fillStyle = gradient;
    rect(-width * 0.5, -height * 0.5, width, height);