const lib='library.csv'
const csv=require('csvtojson');
csv()
.fromFile(lib)
.then((jsonObj)=>{
        const json = Object.entries(jsonObj)
        console.dir(json, {'maxArrayLength': null});
});