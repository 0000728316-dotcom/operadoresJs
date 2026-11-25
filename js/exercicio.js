/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */

   let precoCafe = 8.50;
   let precoBolo = 12.00;
   let taxaOperaional = 15.00;
   let quantidadeVenBolo =18;
   let quantidadeVenCafe = 42;
   let taxaOperacional = 0.15;
   let totalClientes= 30;
   let cookiesProduzidos = 125;
   let capacidadeCaixa = 6;

   
   let faturamentoBruto = (precoCafe * quantidadeVenCafe) + (precoBolo * quantidadeVenBolo);

   let faturamentoLiquido = (faturamentoBruto) - (faturamentoBruto * taxaOperacional);

   console.log(faturamentoBruto);

   console.log (faturamentoLiquido)

   let ticketMedio = faturamentoBruto / totalClientes;

   console.log (ticketMedio)

   let sobraCookies = cookiesProduzidos % capacidadeCaixa;

   console.log(sobraCookies)











   






/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado defere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */

   let idade = 17;
   let codigo ="100";
   let codigoBanco = 100;
   saldoDisponivel = 250.00;
   valorCompra = 250.00;

   let maiorIdade = idade >= 18;
   console.log("O cliente atingiu a maioridade civil (18 anos)?", maiorIdade);

   let codigoDigitado1 = codigo == "100";
   console.log ("2. O código digitado confere com o banco considerando apenas o valor?", codigoDigitado1)

   let codigoDigitado2 = codigo === codigoBanco;
   console.log("3. O código digitado confere com o banco considerando valor e tipo de dado?", codigoDigitado2);

   let senha =  codigo !== codigoBanco;
   console.log ("4. O tipo do dado digitado defere do tipo esperado no banco?",senha )

   let debito = saldoDisponivel == valorCompra;
   console.log (" 5. O saldo do cliente cobre o valor da compra?", debito)







/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */