## Intro

Download <http://teahour.fm/> episodes

## Dependencies

* node <https://nodejs.org/en/>
* hquery <https://github.com/lyuehh/hquery>
* ffmpeg; optional

## run

* npm install
* ./get-list.sh
* node get-link.js
* node get-m4a.js
* cd ./m4a; mkdir ../mp3/; ls -1 *.m4a | parallel 'ffmpeg -i {} ../mp3/{.}.mp3'
* done
