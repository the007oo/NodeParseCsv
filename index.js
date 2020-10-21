const fs = require('fs')
const csv = require('csv-parser')

let jArray = []

fs.createReadStream('./statics.csv')
    .pipe(csv())
    .on('data', (data) => jArray.push(data))
    .on('end', () => {
        for (x in jArray) {
            let jObj = jArray[x]
            
            let user = { name: jObj.name, surname: jObj.surname, email: jObj.email, phone: jObj.phone }
            console.log(user)
        }
    })
