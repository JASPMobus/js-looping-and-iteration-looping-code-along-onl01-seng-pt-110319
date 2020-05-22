// Code your solutions in this file
function writeCards(arrayOfNames) {
  let ret = []
  
  for (let i = 0; i < arrayOfNames.length; i++) {
   ret.push(`Thank you, ${arrayOfNames[i]}, for the wonderful surprise gift!`)
  }
  
  return ret
}

function countDown(fromThis) {
  while fromThis >= 0 {
    console.log(fromThis)
    
    fromThis--
  }
}