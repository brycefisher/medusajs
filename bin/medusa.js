#! /usr/bin/env node

var program = require('commander'),
    fs = require('fs'),
    path = require('path');

program
  .command('*')
  .description('Kick off Crossbrowseringtesting.com api requests for several urls')
  .action(function(urls_file, user, password) {
    fs.readFile(path.resolve(urls_file), {encoding: 'utf8'}, function(err, url_string) {
      if (err) throw err;
      var urls = url_string.split('\n'),
          url='',
          i=0;

      for (; i<urls.length; i++) {
        url = urls[i].trim();
        if (url.length) {
          console.log('Initiating API request for ' + url);
        }
      }
    });
  });

program.parse(process.argv);
