var tpl
var data = {}

// decrescente
axios.get('intercalacao.htm').then(function (res) {
  tpl = res.data
  data.subtitle = 'Para '
  var A = [2,4,5,7,1,2,3,6]
  p = 0
  q = A.length/2
  r = A.length
  merge(A,p,q,r)
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})


const merge = ((Array, p, q, r) => {
  L = Array.slice(p,q)
  L[L.length] = Math.max(...Array)+1
  // console.log(L);
  R = Array.slice(q,r)
  R[R.length] = Math.max(...Array)+1
  // console.log(R);
  i = 0
  j = 0
  for (let k = p; k < r; k++) {
    if (L[i] <= R[j]) {
      Array[k] = L[i]
      i++
    } else {
      Array[k] = R[j]
      j++
    }
    console.log(Array);
  }
  // console.log(Array);
  return Array
})