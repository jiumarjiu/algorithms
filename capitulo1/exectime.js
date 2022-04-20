var tpl
var data = {}
const t = 1e6
axios.get('exectime.htm').then(function (res) {
  tpl = res.data
  data.tempo = [
    t.toExponential(3),
    (t*60).toExponential(3),
    (t*60*60).toExponential(3),
    (t*60*60*24).toExponential(3),
    (t*60*60*24*30).toExponential(3),
    (t*60*60*24*365).toExponential(3),
    (t*60*60*24*365*100).toExponential(3)
  ]
  data.tempo2 = [
    t,
    (t*60),
    (t*60*60),
    (t*60*60*24),
    (t*60*60*24*30),
    (t*60*60*24*365),
    (t*60*60*24*365*100)
  ]
  data.log = data.tempo.map(row => {
    x = {
      res: '2^'+row
    }
    return x
  })
  data.raiz = data.tempo2.map(row => {
    console.log(row);
    x = {
      res: Math.sqrt(row)
    }
    return x
  })
  data.n = data.tempo2.map(row => {
    x = {
      res: row.toExponential()
    }
    return x
  })
  data.nlog2n = data.tempo2.map(row => {
    x = {
      res: Math.log2(row)
    }
    return x
  })
  data.nsquare2 = data.tempo2.map(row => {
    x = {
      res: row**2
    }
    return x
  })
  data.nsquare3 = data.tempo2.map(row => {
    x = {
      res: row**3
    }
    return x
  })
  data.twosquaren = data.tempo2.map(row => {
    x = {
      res: 2**row
    }
    return x
  })
  console.log(data);
  document.getElementById('view').innerHTML = Mustache.render(tpl, data)
})

function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}


// axios.get('exectime.htm').then(function (res) {
//   tpl = res.data
//   data.funcoes = [
//     {'funcao': 'lg n'},
//     {'funcao': 'n^1/2'},
//     {'funcao': 'n'},
//     {'funcao': 'n lg n'},
//     {'funcao': 'n^2'},
//     {'funcao': 'n^3'},
//     {'funcao': '2^n'},
//     {'funcao': 'n!'}
//   ]
//   console.log(data);
//   document.getElementById('view').innerHTML = Mustache.render(tpl, data)
// })

// const getBaseLog = (base, y) => {
//   return Math.log(y) / Math.log(base)
// }
// var t = 1000000












// const fun = (n) => {
//   const b = 2**(n/8)
//   return n < b
// }


// var teste = false
// n = 2
// while (teste == false) {
//   console.log('nwhile: '+ n)
//   teste = fun(n)
//   n++
//   if (n>100) {
//     break
//   }
// }
// n = n-1
// document.write('Apartir de '+n+' valores a ordenação por inserção supera a por intercalação')

// const exer1dot2traco3 = (n) => {
//   var a = 100*n**2
//   var b = 2**n
//   if (a <= b) {
//     return n
//   }
//   return 0
// }

// var teste = 0
// n = 1
// while (teste == 0) {
//   teste = exer1dot2traco3(n)
//   n++
// }
// document.getElementById("1.2-3").innerHTML = 'O menor valor de n é'+teste



