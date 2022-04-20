var tpl
var data = {}
axios.get('exerc2d1.htm').then(function (res) {
  tpl = res.data
  data.A = []
  data.Array = []
  n = 10
  i = 0
  for (let i = 0; i < n; i++) {
    data.A.push(Math.floor(Math.random() * 100))
  }
  while (i < n-1) {
    console.log('Array A');
    console.log(data.A)
    console.log(data.A.slice(i,n))
    var min = Math.min(...data.A.slice(i,n))
    console.log('valor minimo: ' + min)
    var index = data.A.slice(i,n).indexOf(min)+i
    console.log('index do min: '+ index)
    data.A.splice(index,1)
    data.A.splice(i,0,min)
    console.log(data.A)
    var tmp = []
    data.A.forEach((el,k) => {
      tmp.push({
        k: el
      })
    })
    data.Array.push({
      passo: i,
      minimo: min,
      indexMin: index,
      obj: tmp
    })
    i += 1
  }
  console.log('array final')
  console.log(data.A);
  console.log(data);
  console.log('i :' + i);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})
