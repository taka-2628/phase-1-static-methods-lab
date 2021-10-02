//OPTIMIZED 01
class Formatter {
  static capitalize(string){
    const first = string.charAt(0).toUpperCase()
    const rest = string.slice(1)
    return first + rest
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    const exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const empArr = []
    const arr = string.split(" ")
    // console.log(arr) => [ 'the', 'code', 'book', 'by', 'simon', 'singh' ]
    for (let i = 0; i < arr.length; i++){
      if (i === 0){
        const first = arr[i].charAt(0).toUpperCase()
        const rest = arr[i].slice(1)
        empArr.push(first + rest)
        // console.log(empArr) => [ 'The' ]
      } else {
        const test = exception.includes(arr[i])
        // console.log(test) => false false true false false
        if (!test){
          // console.log(arr[i]) => code book simon singh
          const first = arr[i].charAt(0).toUpperCase()
          const rest = arr[i].slice(1)
          empArr.push(first + rest)
        } else {
          // console.log(arr[i]) => log
          empArr.push(arr[i])
        }
      }
    }
    return empArr.join(" ")
  }
}

console.log(Formatter.capitalize("code"))
// => Code
console.log(Formatter.titleize("the code book by simon singh"))
// => The Code Book by Simon Singh

/* ORIGINAL SOLUTION
class Formatter {
  static capitalize(string){
    const empArr = []
    string.split(" ").forEach(word => {
      const first = word.charAt(0).toUpperCase()
      const rest = word.slice(1)
      empArr.push(first + rest)
    })
    return empArr.join(" ")
  }

  static sanitize(string){
    const empArr = []
    string.split(" ").forEach(word => { 
      empArr.push(word.replace(/[^A-Za-z0-9-']+/g, ""))
    })
    return empArr.join(" ")
  }

  static titleize(string){
    const exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const empArr = []
    const arr = string.split(" ")
    // console.log(arr) => [ 'the', 'code', 'book', 'by', 'simon', 'singh' ]
    for (let i = 0; i < arr.length; i++){
      if (i === 0){
        const first = arr[i].charAt(0).toUpperCase()
        const rest = arr[i].slice(1)
        empArr.push(first + rest)
        // console.log(empArr) => [ 'The' ]
      } else {
        const test = exception.includes(arr[i])
        // console.log(test) => false false true false false
        if (!test){
          // console.log(arr[i]) => code book simon singh
          const first = arr[i].charAt(0).toUpperCase()
          const rest = arr[i].slice(1)
          empArr.push(first + rest)
        } else {
          // console.log(arr[i]) => log
          empArr.push(arr[i])
        }
      }
    }
    return empArr.join(" ")
  }
}

Formatter.titleize("the code book by simon singh")
*/