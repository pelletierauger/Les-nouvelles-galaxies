ffmpeg -y -f image2 -framerate 24 -i /Volumes/Volumina/frames/megaliths/megalith-01/megalith-01-%05d.png -c:v libx264 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv420p -sws_flags spline+accurate_rnd+full_chroma_int -vf "colorspace=bt709:iall=bt601-6-625:fast=1, colorbalance=bs=.0:bm=.0:bh=.125" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 -s 2560x1440 -shortest /Volumes/Volumina/video-renders/megaliths/megalith-01.mp4

ffmpeg -y -f image2 -framerate 24 -i /Volumes/Volumina/frames/megaliths/megalith-02/megalith-02-%05d.png -c:v libx264 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv420p -sws_flags spline+accurate_rnd+full_chroma_int -vf "colorspace=bt709:iall=bt601-6-625:fast=1, colorbalance=bs=.0:bm=.0:bh=.125" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 -s 2560x1440 -shortest /Volumes/Volumina/video-renders/megaliths/megalith-02.mp4

ffmpeg -y -f image2 -framerate 24 -i /Volumes/Volumina/frames/megaliths/megalith-03/megalith-03-%05d.png -c:v libx264 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv420p -sws_flags spline+accurate_rnd+full_chroma_int -vf "colorspace=bt709:iall=bt601-6-625:fast=1, colorbalance=bs=.0:bm=.0:bh=.125" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 -s 2560x1440 -shortest /Volumes/Volumina/video-renders/megaliths/megalith-03.mp4

ffmpeg -f image2 -framerate 24 \
-i /Volumes/Volumina/frames/the-day-computers/full-resolution/frame-%05d.png \
-i /Users/guillaumepelletier/Desktop/Salvaggio/03_The\ Day\ Computers\ Became\ Obsolete_HD.m4a \
-c:v libx264 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv420p \
-sws_flags spline+accurate_rnd+full_chroma_int \
-vf "colorspace=bt709:iall=bt601-6-625:fast=1" \
-color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 \
-crf 20 -preset slower \
-s 1280x720 \
-threads 1 \
-c:a copy \
 /Volumes/Volumina/video-renders/the-day-computers/half-slower-crf20.mp4

ffmpeg -y -f concat -safe 0 -r 24 \
-i /Users/guillaumepelletier/Desktop/Dropbox/Art/p5/Les-nouvelles-galaxies/Vert/ffmpeg-commands/megaliths.txt \
-i /Users/guillaumepelletier/Desktop/Dropbox/Création\ musicale/Projets\ Ableton\ Live\ 2023/Exportations/Signora\,\ Nimbé\,\ chords\ NOTLD\ Demo1.wav \
-c:v libx264 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv420p \
-sws_flags spline+accurate_rnd+full_chroma_int \
-vf "colorspace=bt709:iall=bt601-6-625:fast=1" \
-color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 \
-crf 20 -preset ultrafast \
-threads 1 \
-shortest \
 /Volumes/Volumina/video-renders/megaliths/megaliths.mp4



ffmpeg -y -f concat -safe 0 -r 24 \
-i /Users/guillaumepelletier/Desktop/Dropbox/Art/p5/Les-nouvelles-galaxies/Vert/ffmpeg-commands/megaliths.txt \
-i  /Users/guillaumepelletier/Desktop/Dropbox/Création\ musicale/Projets\ Ableton\ Live\ 2023/Exportations/Beth\ boueuse\ 2.wav \
-c:v libx264 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv420p \
-sws_flags spline+accurate_rnd+full_chroma_int \
-vf "colorspace=bt709:iall=bt601-6-625:fast=1" \
-color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 \
-crf 20 -preset ultrafast \
-threads 1 \
-shortest \
 /Volumes/Volumina/video-renders/megaliths/megaliths.mp4