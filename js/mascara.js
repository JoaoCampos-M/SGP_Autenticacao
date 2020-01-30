var cpf = document.getElementById('cpf');

cpf.addEventListener("keyup", () => {
  let value = cpf.value.replace(/[^0-9]/g, "").replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
  
  cpf.value = value;
});

var num = document.getElementById('numero');

num.addEventListener("keyup", () => {
  let value = num.value.replace(/[^0-9]/g, "").replace(/^([\d]{2})?([\d]{5})?([\d]{4})?/, "($1) $2-$3");
  
  num.value = value;
});
