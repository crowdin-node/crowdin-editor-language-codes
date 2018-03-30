const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const codes = {}

fs.createReadStream(path.join(__dirname, '../codes.csv'))
  .pipe(csv())
  .on('data', function (data) {
    codes[data.crowdinLanguageCode] = Object.assign({}, data)
  })
  .on('end', () => {
    fs.writeFileSync(
      path.join(__dirname, '../codes.json'),
      JSON.stringify(codes, null, 2)
    )
  })
