# Exercício 10 — Somar números acima de um limite

**Dificuldade:** fácil  
**Pratique:** arrays, laço `for`, condição e soma acumulada

## Objetivo

Crie uma função chamada `somarMaioresQue` que receba uma lista de números e um limite, e devolva a soma dos números da lista que sejam maiores que esse limite.

## Requisitos

- A função recebe um array de números e um número como limite.
- A função devolve um `number`.
- Some apenas os números estritamente maiores que o limite.
- Se nenhum número passar do limite ou a lista estiver vazia, devolva `0`.

## Exemplos

| Lista | Limite | Saída esperada |
| --- | ---: | ---: |
| `[4, 9, 2, 7]` | `5` | `16` |
| `[3, 1, 4]` | `8` | `0` |
| `[]` | `2` | `0` |

Escreva sua tentativa em `index.ts`. Pense em qual variável pode guardar a soma enquanto você percorre a lista e em qual condição indica que um número deve entrar nessa soma. Se travar, peça uma pista por vez.
