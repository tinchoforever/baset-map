var fs = require('fs');
var csv=require('csvtojson')
var baset = "baset.csv";
csv().fromFile(baset).then(function(data){ 
	json = JSON.stringify(data); //convert it back to json
    fs.writeFile('baset.json', json, 'utf8', function(){}); // write it back });
});