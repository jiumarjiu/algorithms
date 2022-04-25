var tpl
var tpl
var data = {}

axios.get('exerc1d4.htm').then(function (res) {
  tpl = res.data
  A = []
  B = []
  n = 10
  for (let i = 0; i < n; i++) {
    A.push(Math.round(Math.random()))   
  }
  for (let i = 0; i < n; i++) {
    B.push(Math.round(Math.random()))    
  }
  C = binsum(A,B)
  console.log(binToDec(C))
  console.log(binsum(A,B))
  data.A = {
    A: A,
    dec: binToDec(A)
  }
  data.B = {
    B: B,
    dec: binToDec(B)
  }
  data.C = {
    C: C,
    dec: binToDec(C)
  }
  console.log(data);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})


const binToDec = (array => {
  dec = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
      tmp = (2*array[i])**(array.length - i -1)
      dec += (2*array[i])**(array.length - i -1)
    }
  }
  return dec
})

const binsum = ((array1,array2) => {
  Sum = []
  carry = 0
  for (let i = array1.length-1; i >= 0 ; i--) {
    soma = (array1[i]+array2[i]+carry)%2
    carry = array1[i]+array2[i]+carry < 2 ? 0 : 1
    Sum.unshift(soma)
  }
  Sum.unshift(carry)
  return Sum
})











// axios.get('exerc1d4.htm').then(function (res) {
//   tpl = res.data
//   Bin = []
//   A = []
//   B = []
//   C = []
  // n = 5
  // for (let i = 0; i < n; i++) {
  //   A.push(Math.round(Math.random()))
  //   Bin.push('2^'+i.toString())    
  // }
  // for (let i = 0; i < n; i++) {
  //   B.push(Math.round(Math.random()))    
  // }
//   var carry = 0
//   for (let i = 0; i < A.length; i++) {
//     soma = (A[i] + B[i] + carry)%2 
//     carry = A[i] + B[i] + carry < 2 ? 0 : 1
//     C.push(soma)
//     if (i == (A.length - 1)) {
//       C.push(carry)
//     }
//   }
  // data.A = {
  //   A: A,
  //   dec: binToDec(A)
  // }
  // data.B = {
  //   B: B,
  //   dec: binToDec(B)
  // }
  // data.C = {
  //   C: C,
  //   dec: binToDec(C)
  // }
//   data.Bin = Bin
//   console.log(data);
//   document.getElementById('view').innerHTML = Mustache.render(tpl, data)
// })

// const binToDec = (array => {
//   var decimal = 0
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     decimal += element*2**i
//   }
//   return decimal
// })