const csvFilePath='library.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    for (const [key, value] of Object.entries(jsonObj)) {
        // console.log(value)
        const json = value
        console.log(key, json.Name)

      }
});