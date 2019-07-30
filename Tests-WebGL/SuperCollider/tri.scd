(
SynthDef.new(\tri, {
    arg out = 0, freq = 440, pan = 0, lfoFreq = 0.1, atk = 1, dec = 1, sustime = 3, rel = 20, sus = 0.7, pMod = 0.2, amp = 1;
    var sig, env, lfo, mod;
    
    // Safety measures, constraining values.
    amp = min(max(amp, 0), 1.5);
    freq = min(max(freq, 50), 1000);
    
    lfo = SinOsc.kr(lfoFreq, mul: 0.5, add: 0.5);
    env = EnvGen.ar(Env.new([0.0, 1.0, sus, sus, 0.00001], [atk, dec, sustime * 1, rel * 4], [\linear, \linear, \linear, \exponential]), doneAction: 2);
//     sig = Pulse.ar([freq, freq+1], width: SinOsc.kr(pMod).range(0.25, 0.75), mul: 1.0, add: 0.0) * 0.11;
    mod = SinOsc.ar(freq * 1) * 800 * 8;
    sig = LFTri.ar([freq, freq+1] + mod) * SinOsc.ar(freq * 2) * 0.1;
    sig = sig * env;
    sig = (sig * 0.75) + (sig * 0.25);
// sig = sig * lfo;
//     envf = XLine.kr(400, 20000, sustime * 0.1);
//     sig = LPF.ar(sig, envf);
sig = sig * amp;
    sig = Balance2.ar(sig[0], sig[1], pan, 1);
    Out.ar(out, sig);
}).add;
)
s.peakCPU;
(
var am = 4;
var f = ~toFreq.("Db3") * 6.midiratio * 1;
Synth.new(\tri, [\freq, f * 0.5 * -13.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.5 * am]);
Synth.new(\tri, [\freq, f * 1.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.85 * am]);
Synth.new(\tri, [\freq, f * 6.midiratio * 1, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.5 * am]);
Synth.new(\tri, [\freq, f * 8.midiratio, \lfoFreq, rrand(0.1, 6), \pan, rrand(-0.5, 0.5), \amp, 0.5 * am]);
Synth.new(\tri, [\freq, f * 10.midiratio * 1, \lfoFreq, rrand(6, 12), \pan, rrand(-0.5, 0.5), \amp, 0.5 * am]);
Synth.new(\tri, [\freq, f * 15.midiratio * 1, \lfoFreq, rrand(6, 12), \pan, rrand(-0.5, 0.5), \amp, 0.5 * am]);
)


Synth.new(\tri, [\freq, ~toFreq.("F3") * -5.midiratio * 1, \atk, 0.01, \dec, 0.1, \sustime, 1, \rel, 0.5, \lfoFreq, rrand(6, 12), \pan, rrand(-0.5, 0.5), \amp, 0.5 * 8]);

(
~mel1.stop;
~mel1 = Pbind(
    \instrument, \tri,
    \dur, Pseq([1/5], inf),
    \freq, ~toFreq.("G3") * Pseq([0, Rest(), 4, Rest(), 2].midiratio.stutter(1), inf)
        * Pseq([0, -7].midiratio.stutter(5), inf),
    \atk, 0.05, 
    \dec, 0.01,
    \rel, 1, 
    \sustime, 0.01,
    \amp, Pseq([Pseries(1, -0.15, 5)], inf) * 16,
    \pan, Pwhite(-0.5, 0.5, inf),
    \out, ~reverbBus
).play(t, quant: 1);
)
1/3/4 * 2;
(
~mel2.stop;
~mel2 = Pbind(
    \instrument, \tri,
    \dur, Pseq([1/5], inf),
    \freq, ~toFreq.("B4") * Pseq([3, -2, Rest(), -4, Rest(), 0, -2, Rest(), -4, Rest()].midiratio.stutter(1), inf)
    * Pseq([0, 0].midiratio.stutter(10), inf),
    \atk, 0.04, 
    \dec, 0.01,
    \rel, 0.1, 
    \sustime, 0.01,
    \amp, Pseq([Pseries(1, -0.3/4, 5)], inf) * 4,
    \pan, Pwhite(-0.5, 0.5, inf),
    \out, ~reverbBus
).play(t, quant: 1);
)

Pseries(4, -1, 5).asStream.nextN(5);

(
t = TempoClock.new;
t.tempo_(56/60);
)
