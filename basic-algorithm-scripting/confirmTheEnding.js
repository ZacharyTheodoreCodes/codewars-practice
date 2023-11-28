function confirmEnding(str, target) {
  const ending = str.slice(str.length-target.length, str.length)
  if (ending == target){
    return true
  }
  return false
  }
  
  confirmEnding("Open sesame", "same");