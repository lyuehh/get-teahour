const list = require('./list.json');
const prefix = 'http://teahour.fm';
const exec = require('child_process').execSync;
const fs = require('fs');

function run(list) {
  list.forEach(function(item) {
    console.log('processing ', item);
    const url = prefix + item.href;
    const cmd = `curl -s ${url} | hquery -p -r '$(".actions a").attr("href")'`
    var link = exec(cmd, {encoding: 'utf8'}).trim();
    console.log(link);
    item.link = link;
  });
  fs.writeFileSync('./list-with-link.json', JSON.stringify(list, null, 2), {encoding: 'utf8'});
  console.log(list);
}

run(list);
