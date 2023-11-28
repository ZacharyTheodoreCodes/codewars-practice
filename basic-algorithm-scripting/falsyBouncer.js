function bouncer(arr) {
    let newArr  = arr.slice()
    return newArr.filter(Boolean)
  }
  

  console.log(  bouncer([7, "ate", "", false, 9]));