const R = require("../app/js/regras.js");

describe("Exemplo · valorAvulso", () => {
  test("viagem avulsa de 10 minutos custa R$ 8,00", () => {
    const minutos = 10;

    const resultado = R.valorAvulso(minutos);

    expect(resultado).toBe(8);
  });
});

describe("RN01 · validarIdade", () => {
  test("Teste 1: aceita 16 anos", () => {
    const idade = 16;

    const resultado = R.validarIdade(idade);

    expect(resultado).toBe(true);
  });
  test("Teste 2: recusa 15 anos", () => {
    const idade = 15;

    const resultado = R.validarIdade(idade);

    expect(resultado).toBe(false);
  });

  test("Teste 03 - Aceitar 17 anos", () => {
    const idade = 17;
    const resultado = R.validarIdade(idade);
    expect(resultado).toBe(true);
  });
});

describe("RN02 · validarCodigoBike", () => {
  test('Teste 3: aceita "BK0123"', () => {
    const codigo = "BK0123";

    const resultado = R.validarCodigoBike(codigo);

    expect(resultado).toBe(true);
  });
  test('Teste 4: recusa "BK12", com só 2 números', () => {
    const codigo = "BK12";

    const resultado = R.validarCodigoBike(codigo);

    expect(resultado).toBe(false);
  });

  test('Teste 4: recusa "BK123", com só 3 números', () => {
    const codigo = "BK123";

    const resultado = R.validarCodigoBike(codigo);

    expect(resultado).toBe(false);
  });
});

describe("RN03 · calcularMinutos", () => {
  test("Teste 5: de 08:10 a 08:35 são 25 minutos", () => {
    const inicio = "08:10";
    const fim = "08:35";

    const resultado = R.calcularMinutos(inicio, fim);

    expect(resultado).toBe(25);
  });
});

describe("RN04 e RN06 · valorAvulso", () => {
  test("Teste 6: 30 minutos custam R$ 18,00", () => {
    const minutos = 30
    const resultado = R.valorAvulso(minutos)
    expect(resultado).toBe(18)
  });
  test("Teste 7: 100 minutos custam R$ 40,00, o teto", () => {
    const minutos = 100
    const resultado = R.valorAvulso(minutos)
    expect(resultado).toBe(40)
  });
});

describe("RN05 · valorPlano", () => {
  test("Teste 8: 45 minutos custam R$ 0,00",()=>{
    const minutos = 45
    const resultado = R.valorPlano(minutos)
    expect(resultado).toBe(0)
  });
  test("Teste 9: 50 minutos custam R$ 2,00",()=>{
    const minutos = 50
    const resultado = R.valorAvulso(minutos)
    expect(resultado)
  });
});

describe("RN10 · bonusRecarga", () => {
  test("Teste 10: recarga de R$ 49 não tem bônus",()=>{
    const recarga = 49
    const resultado = R.bonusRecarga(recarga)
    expect(resultado).toBe(0)
  });
  test("Teste 11: recarga de R$ 50 ganha R$ 5 de bônus", ()=>{
    const recarga = 50
    const resultado = R.bonusRecarga(recarga)
    expect(resultado).toBe(5)
  });
  test("Teste 12: recarga de R$ 100 ganha R$ 20 de bônus", ()=>{
    const recarga = 100
    const resultado = R.bonusRecarga(recarga)
    expect(resultado).toBe(20)
  });
});

describe("Cobertura", () => {
  test.todo(
    "Escreva aqui os testes das linhas que o relatório de cobertura mostrou sem teste",
  );
});
