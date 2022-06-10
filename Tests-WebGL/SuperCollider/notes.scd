


Premier fragment :
la voix du dessous qui n'est pas commentée out (6), va en descendant : 6, 4, 3

(
var f = ~toFreq.("F3") * 0.midiratio;
// Synth.new(\tri, [\freq, f * 0.5 * -9.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
// Synth.new(\tri, [\freq, f, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * 6.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * 8.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * 10.midiratio, \lfoFreq, rrand(6, 12), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * 15.midiratio, \lfoFreq, rrand(6, 12), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
)

Second fragment :
Ensuite, je décommente la vraie voix du dessous, qui va en descendant : -6, -8, -9
Donc je termine le second fragment comme ça :
-9, //, 3, 8, 10, 15

Ensuite pour vrai :
-9, //, 3, 8, 10, 15
-9, //, 1, 8, 10, 15
-9, //, 0, 8, 10, 15
-9, //, -1, 8, 10, 15
-9, //, -2, 8, 10, 15



Ensuite, je vais là :
-9, //, -2, 8, 10, 15
-9, //, -2, 7, 10, 15
-9, //, -2, 5, 10, 15

J'ai encore mes trois notes descendantes, ici 8, 7, 5.




// La voix du dessus (15), va en descendant : 15, 12, 10... et rien ne change en-dessous.
(
var f = ~toFreq.("F3") * 0.midiratio;
Synth.new(\tri, [\freq, f * 0.5 * -9.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
// Synth.new(\tri, [\freq, f, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * -2.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * 5.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * 7.midiratio, \lfoFreq, rrand(6, 12), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
Synth.new(\tri, [\freq, f * 15.midiratio, \lfoFreq, rrand(6, 12), \pan, rrand(-0.5, 0.5), \amp, 0.85]);
)


// Cette alternance dans la basse est aussi très belle
-9, //, 6, 8, 10, 15
-13, //, 6, 8, 10, 15
je peux me rendre jusqu'à -14, aussi, dans la basse



au-dessus des vagues

[-6, 1, 6, 8, 10, 15]
[-6, -1, 6, 8, 10, 15]
[-6, -2, 6, 8, 10, 15]