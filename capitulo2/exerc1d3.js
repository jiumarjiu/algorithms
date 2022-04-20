var tpl
var tpl
var data = {}
axios.get('exerc1d3.htm').then(function (res) {
  tpl = res.data
  indice = null
  A = []
  n = 10
  v = Math.floor(Math.random() * 10)
  for (let i = 0; i < n; i++) {
  }
  console.log(A);
  for (let i = 0; i < A.length; i++) {
    if (v == A[i]) {
      indice = i
      break
    }
  }
  data.A = A
  data.n = n
  data.valor = v
  data.indice = indice
  console.log('indice: '+ indice)
  console.log('valor:' + v)
  console.log(data);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})
