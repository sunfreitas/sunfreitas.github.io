# 7 Coisas que Todo Designer Precisa Saber sobre Acessibilidade

Artigo original
https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b#.l6epg4bts

Acessibilidade permite que pessoas com deficiência percebam, entendam, naveguem, interajam com e contribuam com a web. Imagine um mundo onde
desenvolvedores sabem tudo o que há pra saber sobre acessibilidade. Você projeta e eles constroem... perfeito. Neste mundo, apenas o design
em si pode causar problemas em pessoas com deficiência utilizando um produto.

Estas orientações irão abranger as maiores coisas que você precisa saber para que seus produtos sejam "no ponto" para atender o mínimo de
padrões na [Section 508](http://www.section508.gov/section-508-standards-guide) e no [Web Content Accessibility Guidelines 2.0](http://www.w3.org/TR/WCAG20/). O resto ficará por conta do desenvolvimento e da qualidade de testes.

## 1.Acessibilidade não é uma barreira para a inovação

A acessibilidade não lhe forçará a fazer um produto que seja feio, chato ou bagunçado. Isso introduzirá um conjunto de restrições a incorporar
na medida em que considerar o seu design. Estas restrições de design lhe darão novas ideias para explorar o que conduzirá a melhores produtos
para todos os seus usuários.

Na medida em que ler estas orientações, considere que não queremos projetar para seus colegas de design.

![Eager to escape the tech bubble for a weekend, Designer Dude and his circle of start-up friends went to Yosemite, where he spent most of his time dribbbling on a slack-line near their basecamp.](https://cdn-images-2.medium.com/max/800/0*bhC1d9AMLq7EA4bv.)

Projete para os diversos grupos de usuários que irão interagir com seus produtos.

![](https://cdn-images-2.medium.com/max/1200/0*Y8EzNegFamAO5_zV.)

Isso pode incluir pessoas que são cegas, daltônicos ou baixa visão, aqueles que são surdos ou possuem baixa audição, pessoas com dificuldades
de movimentação, que podem ser temporárias ou permamentes, ou pessoas com deficiências cognitivas. Projete para pessoas que são jovens, velhas,
usuários poderosos, casuais para aqueles que apenas apereciam a qualidade da experiência.

Inclua essas orientações de acessibilidade como puder em qualquer conjunto de restrições de design. Elas são parte do desafio em criar
produtos fantásticos.

##2.Não utilize a cor como a única forma de transmitir informação
Isso ajuda pessoas que não podem, ou tem dificuldade com, distinguir uma cor da outra. Isso inclui pessoas daltônicas (1 em cada 12 homens e
1 em cada 200 mulheres), tem baixa visão (1 a cada 30 pessoas), ou são cegas(uma em cada 188 pessoas).

Utilize cor para realçar ou complementar o que já é visível

Neste exemplo mostrado em escala de cinza, quantos campos você diria que estão em estadod e erro?


A maioria que vê em escala de cinza diz que a resposta é um, o campo "verificação humana". Isso porque o triângulo com a marca de exclamação
dentro indica que algo está errado.

Agora olhe para esta mesma tela em cores. Quantos campos estão em estado de erro?

Com a cor a resposta se torna "todos os quatro".

Existem diversas forma aceitáveis de fazer este formulário visualmente acessível. Você poderia colocar um ícone triângulo vermelho em todos
os campos de erro. Você pode utilizar texto para indicar e explicar porque um dado campo está errado. Você pode usar dicas, bordas..., texto em
negrito, sublineados, itálicos, etc. As escolhas são infinitas, mas a única regra é apenas usar mais do que a cor sozinha.

Como você projetaria este formulário de cadastro sendo que a cor não é o único meio visual para mostrar um campo com erro?

Atualização: Acontece que a questão de acessibilidade descrita acima no exemplo do PayPal é causada pelo plugin do LastPass no meu navegador.
Obrigado a Tony Amidei (@subface) do PayPal por apontar isto pra mim. Como projetado, os ícones de triângulo deveriam sempre aparecer em 
campos em estado de erro.

## 3.Garanta contraste suficiente entre o texto e o seu background
De acordo com o WCAG, a taxa de contraste entre o texto e seu background deve ser de pelo menos 4,5 para 1. Se sua fonte for pelo menos 
negrito 24px ou 19px, o mínimo cai para 3 por 1.

Esta orientação ajuda os usuários com baixa visão, dautônicos ou visão prejudicada ver e ler o texto na sua tela.

Isso significa que o quando o texto for negrito 24px, 19px ou maior, o maior cinza que você pode utilizar em um funto branco é #959595.

Para textos menores, o maior cinza que você pode utilizar em um fundo branco é #767676. Se você tem um plano de fundo cinza, o texto
precisa ser mais escuro.

Existem algumas grandes ferramentas que podem ajudar a você encontrar uma paleta de cores acessíveis para seus designs incluindo Color Safe. Há
também o WebAIM's Color Contrast Checker, que lhe deixará testar as cores que você jé tem escolhido.

Logos ou elementos atualmente em um estado desabilitado estão isentos deste padrão. Isso inclui botões ou itens de menu inativos. Placeholder ou
textos fantasmas para campos de formulário *não* estão isentos deste padrão.

Aqui está um exemplo de um blog popular com o contraste do texto abaixo do padrão. Apenas o contraste da letra "M" gigante atende ao padrão.

![](https://cdn-images-2.medium.com/max/800/0*tvvQcCsqdHROnBzK.)

O exemplo seguinte da BBC mostra a UI com passagem de combinação de cores. Você pode dizer que eles estão ativamente procurando passar taxas de
contraste desde que seu cinza mais alto é #767676.

![](https://cdn-images-2.medium.com/max/800/0*Y0AhWKKQ3mbgUzWs.)

Eu estou orgulhoso de trabalhar com o time da Salesforce Design System, onde eles abraçaram as orientações de contraste de cores para a
aplicação mobile da Salesforce1.

![Passing colors in Salesforce1](https://cdn-images-2.medium.com/max/800/1*o6kxU1Gm4SaOPpTmhPOg0A.png)

Explore utilizar combinações de cores de alto contraste. Designers que tem feito este exercício estão frequentemente surpresos pela forma como
eles preferem designs com maior contraste. Estou confiante que você também vai achar que exibir texto utilizando o mínimo de contraste permitido
não irá depreciar seus produtos.

Confira [Projectors Don't Lie](https://medium.com/salesforce-ux/projectors-dont-lie-b85ef628b04) and [Accessible Interface Design](https://medium.com/salesforce-ux/accessible-interface-design-d80e95cbb2c1) para mais sobre contraste de cor.

##4.Proporcione incicação de foco visual para foco de teclado

Vamos dar um momento para parabenizar a folha de estilo reset e todas as utilidades que tem dado ao moderno web designer. Sem a folha de estilo
reset, seria muito mais difícil criar experiências consistentes através de diferentes dispositivos e navegadores.

E agora vamos dar um momento para culpar as folhas de estilo reset por desempenhar um papel em uma das tolices de acessibilidade mais difundidas
na internet.

> *:focus{outline:o;}*

Este única linha de CSS torna quase impossível para um usuário sem deficiência visual utilizar o site apenas com o teclado. Felizmente, desde que
os resets CSS iniciais foram liberados, muitos outros populares incluindo o do [Erick Meyer](http://meyerweb.com/eric/thoughts/2011/01/03/reset-revisited/) tem sido atualizados para remover o un-styling da pseudo classe :focus.

A intenção de remover o estilo para o focus foi nobre o bastante: remover estilos de foco padrão com a intenção de que designers e desenvolvedores
o substituirão por algo que é ambos visível e relaciona o estilo de suas páginas web. É muito fácil não gostar da borda cinza trachejada no 
focus do IE e Firefox ou a auréola azul no Chrome.

![](https://cdn-images-2.medium.com/max/800/1*ADqQnz8LvA2ACpAsYrQH9w.png)

O problema é que muitos websites não criam seus próprios estilos para focus. Estes indicadores de foco, os quais são fundamentais para o sucesso 
de usuários de teclado, são largamente ausentes na web.

Como um exercício rápido para experimentar um site que jamais fornece foco visual, abra uma aba e visite o website da companhia que faz o seu
celular. Pressione a tecla Tab repedidamente para navegar através da página. Você vê o indicador do foco visual enquanto navega? Talvez você veja 
para alguns links na página mas não para todos? Leve em consideração o efeito que isso tem em alguém que usa apenas o teclado para interagir
com a web.

Se você estivar num Mac, você pode habilitar o Acesso Completo ao Teclado dentro de Preferências de Sistema > Teclado > Atalhos. Fica na parte inferior.

![](https://d262ilb51hltx0.cloudfront.net/max/800/1*j7NH2HQiSo8Ly7KOgGx-nA.png)

Se você remove o foco padrão, substitua por algo que seja *melhor* do que o que o seu navegador disponibiliza.

No exemplo abaixo, a BBC utiliza uma barra de cor para indicar qual link de sessão está em foco.

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*BNrgAFEkXG8HxbA1.)

O Twitter usa uma combinação de foco padrão e uma dica para mostrar o foco do teclado. O ícone também muda do cinza para o verde. Estes três
visuais separados para indicar o foco para usuários de teclado.

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*Rzkmsk2iwQz6h4yM.)

Quando fornever seus própios estados de foco, tenha certeza de remover o estado padrão de forma que você não encontre algo parecido com este
exemplo onde o retângulo azul do Chrome sobrepõe esta pílula azul do menu.

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*SYm5Ja2u1Ed5ptGL.)

## 5.Seja carinhoso com formulários


