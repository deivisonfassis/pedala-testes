# Relatório de testes unitários — Pedala v1.0

**Nome:** Deivison
**Data:** 11/11/2026
**Ferramenta:** executor no navegador

> Copie para `entregas/RELATORIO-TESTES-Pedala.md` e preencha no fim da aula.

## 1. Resultado dos testes

| Momento | Linha de resumo do Jest (ex.: `Tests: 2 failed, 11 passed, 13 total`) |
| --- | --- |
| Depois dos 12 testes guiados | Testes: 2 falharam, 13 passaram, 1 a fazer, 16 no total |
| Depois das correções guiadas | Testes: 15 passaram, 1 a fazer, 16 no total |
| No fim da aula | |

Print do terminal no fim da aula: [arraste aqui]

## 2. Defeitos encontrados pelos testes

| Teste que falhou | Regra | Esperado | Recebido | Issue | Corrigido? Commit |
| --- | --- | --- | --- | --- | --- |
| Teste 2 | RN01 | true | false | #
| Teste 11 | RN10 | 5 | 0 | #

## 3. Correções

Para cada defeito corrigido:

- **Função: validarIdade** 
- **Linha antes:** `Number.isInteger(idade) && idade > IDADE_MINIMA;   `
- **Linha depois:** ` Number.isInteger(idade) && idade >= IDADE_MINIMA;   `
- **Depois da correção, `npm test` mostrou:** 
---
- **Função: bonusRecarga** 
- **Linha antes: if (valor > 50)** `   `
- **Linha depois: if (valor >= 50)** `   `
- **Depois da correção, `npm test` mostrou:**

## 4. Cobertura

| Momento | % Lines | % Branch | % Funcs |
| --- | --- | --- | --- |
| Depois dos 12 testes guiados | | | |
| No fim da aula | | | |

Print do relatório de cobertura: [arraste aqui]

**Sem Node.js (plano B):** marque com X as funções que têm pelo menos um teste.

| Função | Tem teste? |
| --- | --- |
| validarIdade | X |
| validarCodigoBike | X |
| calcularMinutos | X |
| valorAvulso | X |
| valorPlano | X |
| valorViagem | |
| podeIniciar | |
| bonusRecarga | X |
| formatarMoeda | |

## 5. Reflexão

1. Qual defeito você só achou porque o relatório de cobertura mostrou uma linha sem teste? R. RN11
2. Depois de corrigir um defeito, como você teve certeza de que não quebrou outra regra? R. Não
3. 100% de cobertura garante que o código está certo? Por quê?
