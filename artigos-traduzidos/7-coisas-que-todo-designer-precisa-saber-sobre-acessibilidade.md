# 7 Coisas que Todo Designer Precisa Saber sobre Acessibilidade

Artigo original
https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b#.l6epg4bts

Acessibilidade permite que pessoas com deficiência percebam, entendam, naveguem, interajam com e contribuam com a web. Imagine um mundo onde
desenvolvedores sabem tudo o que há pra saber sobre acessibilidade. Você projeta e eles constroem... perfeito. Neste mundo, apenas o design
em si pode causar problemas em pessoas com deficiência utilizando um produto.

Estas orientações irão abranger as maiores coisas que você precisa saber para que seus produtos sejam "no ponto" para atender o mínimo de
padrões na Section 508 e no Web Content Accessibility Guidelines 2.0. O resto ficará por conta do desenvolvimento e da qualidade de testes.

## 1.Acessibilidade não é uma barreira para a inovação

A acessibilidade não lhe forçará a fazer um produto que seja feio, chato ou bagunçado. Isso introduzirá um conjunto de restrições a incorporar
na medida em que considerar o seu design. Estas restrições de design lhe darão novas ideias para explorar o que conduzirá a melhores produtos
para todos os seus usuários.

Na medida em que ler estas orientações, considere que não queremos projetar para seus colegas de design.
![Eager to escape the tech bubble for a weekend, Designer Dude and his circle of start-up friends went to Yosemite, where he spent most of his time dribbbling on a slack-line near their basecamp.](https://cdn-images-2.medium.com/max/800/0*bhC1d9AMLq7EA4bv.)
Projete para os diversos grupos de usuários que irão interagir com seus produtos.

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
