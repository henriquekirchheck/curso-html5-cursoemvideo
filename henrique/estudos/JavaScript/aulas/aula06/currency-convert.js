const salario = 12345.67

console.log(salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))