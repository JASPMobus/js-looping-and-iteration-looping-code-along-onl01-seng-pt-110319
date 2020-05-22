// Code your solutions in this file
function writeCards(arrayOfNames) {
  let ret = []
  
  for (let i = 0; i < arrayOfNames.length; i++) {
   ret.append("Thank you, ${arrayOfNames[i]}, for the wonderful birthday gift!")
  }
  
  return ret
}