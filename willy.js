var fs = require('fs');
var array = fs.readFileSync("lyrics.txt").toString().split("\n")

array.forEach(function(elem, index, array1){
  if (elem.substr(elem.length-1) != '?') {
    if (elem.substr(elem.length-1) != '!'){
      console.log(elem + '.');}
  } else {
    console.log(elem);
  }

  // console.log(array);
})



// if(str.substr(str.length-1) != '!' || != '?' ) {
//     console.log(str + '.');
//   } else {
//     console.log(str);
//   }

// if(str.lastIndexOf(this) != '?' || '!' ){
//     console.log(str + '.');
//   } else {
//     console.log(str);
//   }