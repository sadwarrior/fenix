const fs = require('fs')

const getDataObj = (cb) => {
  const regex = /<email>(\D+?)<\/email>/g;
  fs.readFile('uploads/dataset.xml', "utf-8", function(err, data) {
    let m;
    let result = "";
    while ((m = regex.exec(data)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      m.forEach((match, groupIndex) => {
        if (groupIndex === 1) {
          result += match + '|'
        }
      });
    }
    return cb(result)
  })
}

exports.getDataObj = getDataObj;
