const list = require('./list-with-link.json');
const exec = require('child_process').execSync;
const fs = require('fs');
const slugify = require('@sindresorhus/slugify');

function run(list) {
  list.forEach(function(item) {
    var title = getTitle(item);
    console.log(title);
    const cmd = `wget -O m4a/${title} -q ${item.link}`
    exec(cmd, {encoding: 'utf8'});
  });
}

function getTitle(item) {
  var a = slugify(item.title);
  var arr = item.href.split('/');
  var b = arr[arr.length-1].replace('.html', '')
  var no = a.split('-')[0];
  return no + '-' + b + '.m4a';
}

run(list);
