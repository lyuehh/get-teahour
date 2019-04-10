#!/bin/sh
curl -s http://teahour.fm/ | hquery -p -r  '$.html("#episodes .dropdown-menu")' | hquery -p -l json -a 'li a|attr:href,text:title' > list.json
