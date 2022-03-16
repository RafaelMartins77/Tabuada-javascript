function gerar() {
  var num = document.getElementById('txtn')
  var re = document.getElementById('lista')

  if (num.value.length == 0){
    alert('[ERRO], por favor insira o numero para a tabuada')
  } else {
    re.innerHTML = ''
    for (var c = 0; c<=10; c++){
      m = c * Number(num.value)
      re.innerHTML += `<option value="${c}"> ${num.value} X ${Number(c)} = ${m}</option>`
    }
  }
}

/* outra forma de resolver
let c =1
while(c<=10){
  let item = document.createElement('option')
  item.text = `${num.value} x ${c} = ${m}`
  re.appendChild(item)
  c++
}
*/
