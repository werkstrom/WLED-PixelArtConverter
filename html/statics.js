var curlStart = 'curl -X POST "http://';
var curlMid1 = '/json/state" -d \'';
var curlEnd = '\' -H "Content-Type: application/json"';

const haStart = '#Uncomment if you don\'t allready have these defined in your switch section of your configuration.yaml\n#- platform: command_line\n  #switches:\n    ';
const haMid1 = '\n      friendly_name: ';
const haMid2 = '\n      unique_id: ';
const haMid3= '\n      command_on: >\n        ';
const haMid4 = '\n      command_off: >\n        curl -X POST "http://';
const haEnd = '/json/state" -d \'{"on":false}\' -H "Content-Type: application/json"';
const haCommandLeading = '        ';

const JSONledStringStart = '{"on":true, "bri":';
const JSONledStringMid1 = ', "seg":{"i":[';
const JSONledShortStringStart = '{';
const JSONledShortStringMid1 = '"seg":{"i":[';
const JSONledStringEnd = ']}}';
      
