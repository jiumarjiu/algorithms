var tpl
var data = {}
axios.get('exerc2d2.htm').then(function (res) {
  tpl = res.data
  A = []
  data.Array = []
  data.obj = []
  data.A = []
  n = 10
  passo = 0
  for (let index = 0; index < n; index++) {  
    number = Math.floor(Math.random() * 10)
    A.push(number)
    data.A.push(number)
  }
  while (A.length > 0) {
    min = 0
    Teta = []
    for (let i = 0; i < A.length; i++) {
      tmp = A[0]
      console.log('tmpinicial:'+tmp);
      for (let j = 0; j < A.length; j++) {
        tmp = tmp < A[j] ? tmp : A[j]
      }
      console.log('tmp:'+tmp);
      data.Array.push(A[A.indexOf(tmp)])
      A.splice(A.indexOf(tmp), 1)
      min = tmp
      console.log(A);
      console.log(data.Array)
      data.obj.push({
        min: min,
        array: [...data.Array]
      })
    }
  }
  console.log(data);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})




// axios.get('exerc2d1.htm').then(function (res) {
//   tpl = res.data
//   data.A = []
//   data.Array = []
//   n = 10
//   i = 0
//   for (let i = 0; i < n; i++) {
//     data.A.push(Math.floor(Math.random() * 100))
//   }
//   while (i < n-1) {
//     console.log('Array A');
//     console.log(data.A)
//     console.log(data.A.slice(i,n))
//     var min = Math.min(...data.A.slice(i,n))
//     console.log('valor minimo: ' + min)
//     var index = data.A.slice(i,n).indexOf(min)+i
//     console.log('index do min: '+ index)
//     data.A.splice(index,1)
//     data.A.splice(i,0,min)
//     console.log(data.A)
//     var tmp = []
//     data.A.forEach((el,k) => {
//       tmp.push({
//         k: el
//       })
//     })
//     data.Array.push({
//       passo: i,
//       minimo: min,
//       indexMin: index,
//       obj: tmp
//     })
//     i += 1
//   }
//   console.log('array final')
//   console.log(data.A);
//   console.log(data);
//   console.log('i :' + i);
//   document.getElementById('view').innerHTML = Mustache.render(tpl, data)
// })
