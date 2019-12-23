
(
SystemClock.sched(2, {
~shimmerC = Pbind(
    \instrument, \guitare,
    \dur, 1 / 16,
    \spos, ~har - ~loc + Pwhite(-0.0001, 0.0001, inf),
    \rel, 0.1,
    \atk, 0.5,
    \rate, [0.5, 1] * -8.midiratio,
    \amp, 12,
    \pan, Pwhite(-0.5, 0.5, inf),
    \out, ~highPassBus
).play(t);
});
SystemClock.sched(2 + 15, { 
~bassClusters = Task {
{~bassCluster.(); [2, 4, 6].choose.wait;}.loop;}.start;
});
)

~bassClusters.stop;