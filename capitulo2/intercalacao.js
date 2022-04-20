var tpl
var data = {}

// decrescente
axios.get('intercalacao.htm').then(function (res) {
  tpl = res.data
  data.subtitle = 'Para '
  var A = [2,4,5,7,1,2,3,6]
  p = 0
  r = A.length
  q = (r-p)/2
  console.log(p)
  console.log(q)
  console.log(r)
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})
