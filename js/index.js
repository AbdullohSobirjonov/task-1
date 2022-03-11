var greatsentence = "JavaScript is a must-now programing langue for modern devoloper " // Sentence

function something(newarray) {  //We are going ti open function 

          var total = ''

     for (var i of newarray.split (" ") ) {   // New arrary baln split qib joy ochvomiza
          result = total + i.split('').reverse().join('') + " "  //

     }

     return {
          result1 : greatsentence.split (' ').reverse().join(' '),// Result1 da oxiridan boshiga teskari oqivotti
          result2: total.split(' ').reverse().join(' ') //bunda result1 teskari qibervotti
     }
}

     console.log(something (greatsentence)); 


