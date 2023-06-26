## Sistema de Cadastro e Pesquisa - Aula de Estrutura de dados - FATEC - ADS

Este é um exemplo de código JavaScript que implementa um sistema de cadastro e pesquisa de dados de clientes. O código permite salvar informações de clientes em uma lista e realizar pesquisas com base em critérios específicos.
Funcionalidades

O código possui as seguintes funcionalidades:

    Salvar Dados: A função salvarDados é chamada quando o usuário clica no botão de salvar. Ela obtém os valores dos campos de entrada (nome, RA, idade, sexo e resultado) e cria um objeto objPessoa com esses valores. Em seguida, o objeto é adicionado à lista dadosSalvosCliente. Os campos de entrada são então limpos para permitir a inserção de novos dados.

    Pesquisar Dados: A função pesquisar é chamada quando o usuário clica no botão de pesquisa. Ela obtém os valores dos campos de pesquisa (nome, RA, idade) e verifica se há dados salvos na lista dadosSalvosCliente. Se não houver dados salvos, é exibido um alerta informando que não há cadastros. Caso contrário, a tabela de resultados é atualizada com base nos critérios de pesquisa.
        A tabela de resultados é inicializada com os cabeçalhos das colunas.
        Dependendo da opção selecionada no campo de ordem, os dados salvos são ordenados em ordem crescente (A-Z) ou decrescente (Z-A) com base no nome do cliente.
        Os dados salvos que atendem aos critérios de pesquisa (ou todos, se nenhum critério for especificado) são adicionados à tabela de resultados.

## Utilização

Para utilizar o código, siga as etapas abaixo:

    Copie o código JavaScript fornecido para o seu arquivo HTML ou arquivo JavaScript separado.

    Adicione os elementos HTML necessários ao seu arquivo para capturar as informações dos clientes e exibir os resultados da pesquisa. Certifique-se de fornecer os IDs corretos para os elementos de entrada e tabela.

    Chame as funções salvarDados e pesquisar nos eventos apropriados, como ao clicar nos botões de salvar e pesquisar.

    Teste o sistema preenchendo os campos de entrada, salvando dados e realizando pesquisas. Os resultados da pesquisa serão exibidos na tabela.

Lembre-se de adaptar o código às necessidades específicas do seu projeto, como a integração com um backend ou o armazenamento de dados em um banco de dados.

Espero que este readme tenha sido útil! Se você tiver alguma dúvida adicional, sinta-se à vontade para perguntar.
