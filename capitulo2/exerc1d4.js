var tpl
var tpl
var data = {}
axios.get('exerc1d4.htm').then(function (res) {
  tpl = res.data
  Bin = []
  A = []
  B = []
  C = []
  n = 5
  for (let i = 0; i < n; i++) {
    A.push(Math.round(Math.random()))
    Bin.push('2^'+i.toString())    
  }
  for (let i = 0; i < n; i++) {
    B.push(Math.round(Math.random()))    
  }
  var carry = 0
  for (let i = 0; i < A.length; i++) {
    soma = (A[i] + B[i] + carry)%2 
    carry = A[i] + B[i] + carry < 2 ? 0 : 1
    C.push(soma)
    if (i == (A.length - 1)) {
      C.push(carry)
    }
  }
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
  data.Bin = Bin
  console.log(data);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})

const binToDec = (array => {
  var decimal = 0
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    decimal += element*2**i
  }
  return decimal
})