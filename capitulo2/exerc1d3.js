var tpl
var tpl
var data = {}
axios.get('exerc1d3.htm').then(function (res) {
  data.A = []
  data.v = Math.floor(Math.random() * 100)
  tpl = res.data
  n = 10
  for (let index = 0; index < n; index++) {  
    number = Math.floor(Math.random() * 100)
    data.A.push(number)
  }
  data.indice = returnMe(data.A, data.v) ? returnMe(data.A, data.v) : 'NIL'
  console.log(data);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})

function returnMe(Array, valor) {
  for (var i = 0; i < Array.length; i++) {
    if (valor === Array[i]) return i
  }
}

// invariante de laço --- 
