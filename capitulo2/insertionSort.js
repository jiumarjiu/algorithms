var tpl
var data = {}
// decrescente
axios.get('insertionsort.htm').then(function (res) {
  tpl = res.data
  data.Array = []
  Inicio = []
  count = 0
  A = []
  n = 6
  for (let index = 0; index < n; index++) {  
    number = Math.floor(Math.random() * 100)
    A.push(number)
    Inicio.push(number)
  }
  for (let j = 1; j < A.length; j++) {
    i = j - 1
    chave = A[j]
    console.log('chave: '+chave);
    while (i>=0 && A[i]<chave) {
      count += 1
      console.log('valor i: '+ A[i]);
      A[i+1] = A[i]
      A[i] = chave 
      i = i - 1
      console.log(A);
      var tmp = []
      A.forEach((el,k) => {
        tmp.push({
          k: el
        })
      })
      data.Array.push({
        count: count,
        posicao: j,
        obj: tmp,
        chave: chave
      })
    }
  }
  data.subtitle = 'Para '+n+' elementos em um Array: '+Inicio+'. Foram necessários '+count+' passos para ordenar'
  console.log(data);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})













// crescente
// axios.get('insertionsort.htm').then(function (res) {
//   tpl = res.data
//   data.Array = []
//   count = 0
//   A = []
//   n = 6
//   for (let index = 0; index < n; index++) {  
//     A.push(Math.floor(Math.random() * 100))
//   }
//   for (let j = 1; j < A.length; j++) {
//     i = j - 1
//     chave = A[j]
//     console.log('chave: '+chave);
//     while (i>=0 && A[i]>chave) {
//       count += 1
//       console.log('valor i: '+ A[i]);
//       A[i+1] = A[i]
//       A[i] = chave 
//       i = i - 1
//       console.log(A);
//       var tmp = []
//       A.forEach((el,k) => {
//         tmp.push({
//           k: el
//         })
//       })
//       data.Array.push({
//         count: count,
//         posicao: j,
//         obj: tmp,
//         chave: chave
//       })
//     }
//   }
  
//   console.log(data);
//   document.getElementById('view').innerHTML = Mustache.render(tpl, data)
// })




























// decrescente
// axios.get('insertionsort.htm').then(function (res) {
//   tpl = res.data
//   data.Array = []
//   A = []
//   n = 30
//   // for (let i = 0; i < n; i++) {
//   //   A.push(Math.floor(Math.random() * 100))    
//   // }
//   for (let i = 0; i < n; i++) {
//     A.push(i)
//   }
//   console.log(A);
//   var count = 0
//   for (let j = 1; j < A.length; j++) {
//     // chave é a carta atual
//     const chave = A[j]
//     console.log('chave: '+chave)
//     var i = j-1
//     while (chave > A[i] && count < 10**n) {
//       count += 1
//       A[i+1] = A[i]
//       A[i] = chave
//       i = i-1
//       console.log(A)
//       var tmp = []
//       A.forEach((el,k) => {
//         tmp.push({
//           k: el
//         })
//       })
//       data.Array.push({
//         posicao: j,
//         chave: chave,
//         count: count,
//         obj: tmp
//       })
//     }
//     console.log('count: '+count);
//   }
//   data.subtitle = 'Para '+n+' elementos em um Array. Foram necessários '+count+' passos para ordenar'
//   console.log(data);
//   document.getElementById('view').innerHTML = Mustache.render(tpl, data)
// })

// crescente
// axios.get('insertionsort.htm').then(function (res) {
//   tpl = res.data
//   data.Array = []
//   A = []
//   n = 30
//   // for (let i = 0; i < n; i++) {
//   //   A.push(Math.floor(Math.random() * 100))    
//   // }
//   for (let i = 0; i < n; i++) {
//     A.push(i)
//   }
//   A.reverse()
//   console.log(A);
//   var count = 0
//   for (let j = 1; j < A.length; j++) {
//     // chave é a carta atual
//     const chave = A[j]
//     console.log('chave: '+chave)
//     var i = j-1
//     while (chave < A[i] && count < 10**n) {
//       count += 1
//       A[i+1] = A[i]
//       A[i] = chave
//       i = i-1
//       console.log(A)
//       var tmp = []
//       A.forEach((el,k) => {
//         tmp.push({
//           k: el
//         })
//       })
//       data.Array.push({
//         posicao: j,
//         chave: chave,
//         count: count,
//         obj: tmp
//       })
//     }
//     console.log('count: '+count);
//   }
//   data.subtitle = 'Para '+n+' elementos em um Array. Foram necessários '+count+' passos para ordenar'
//   console.log(data);
//   document.getElementById('view').innerHTML = Mustache.render(tpl, data)
// })