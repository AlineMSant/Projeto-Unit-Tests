const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    const resultado = productDetails('Alcool gel', 'Máscara');

    const testArray = Array.isArray(resultado);

    expect(testArray).toBe(true)
    // Teste se o array retornado pela função contém dois itens dentro.
    let testLength;
    if (resultado.length === 2){
      testLength = true;
    }

    expect(testLength).toBe(true);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    let return2 = 0;

    for(i=0; i<resultado.length; i+=1){
      if(typeof resultado[i] === 'object'){
        return2 += 1;
      }
    }

    expect(return2).toBe(2)// a variavel return2 deve retornar 2 pois o for vai conferir se as posições possuem objetos e somar +1 toda vez que essa condição foi verdadeira. 

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let elementIsDifferent;
    if (resultado[0] !== resultado[1]) {
    elementIsDifferent = true;
    }

    expect(elementIsDifferent).toBe(true)
    // Teste se os dois productIds terminam com 123.
  });
});
