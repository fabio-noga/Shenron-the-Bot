# Shenron
A Simple Discord Bot
*by* me.

DISCLAIMER: This project it's full of inside memes and Portuguese NSFW (curse involved). It was made for fun, not for work. All documentation is in portuguese.

Este bot ajuda na interação do utilizador com o servidor e na interação entre utilizadores.

Funcionalidades:
 - [Comandos básicos](#comandos)
 - [Poll](#tabela-de-votação)
 - [Sistema de Votação](#voting-system)
 - [Talking](#talking)

Requisitos: Node
Inicialização: 
>node index

ou apenas executando o ficheiro start.bat

## Comandos

O bot é chamado através do prefixo "--", como por exemplo:
>--help

![commands](https://raw.githubusercontent.com/fabio-noga/Shenron-the-Bot/master/exImages/commands.png)

### Regras

Este comando envia uma direct message (DM) para o utilizar que o invoca

>--regras

![regras2](https://raw.githubusercontent.com/fabio-noga/Shenron-the-Bot/master/exImages/regras1.png)

![regras](https://raw.githubusercontent.com/fabio-noga/Shenron-the-Bot/master/exImages/regras.png)

### Ranks

>--ranks

![ranks](https://raw.githubusercontent.com/fabio-noga/Shenron-the-Bot/master/exImages/ranks.png)

### Roles

>role [normie|weeb|nsfw]

Retorna os roles disponíveis. Se for introduzido um [role] será dado/removido ao utilizador invocador o respetivo role.

>nsfw

Automaticamente dá o role **nsfw** ao utilizador invocador

### Meme

>--meme [italics|rari|lit|uh|rina|...]

Através de um vetor de strings, o bot devolverá um meme aleatório. Se for introduzido um [meme] 

### Tabela de Votação

>--poll , Isto é o título, Opção 1, Opção 2, Opção adicional

![poll](https://raw.githubusercontent.com/fabio-noga/Shenron-the-Bot/master/exImages/poll.png)

## Voting System

Este sistema permite, dado o um channel, criar um simples sistema de votação para as imagens(jpg, png ou gif) postadas.

![voting](https://raw.githubusercontent.com/fabio-noga/Shenron-the-Bot/master/exImages/meme.png)

## Talking

Ao dar tag ao bot (@Shenron) é possível criar uma interação com ele. Existem várias, por exemplo:

![talking](https://raw.githubusercontent.com/fabio-noga/Shenron-the-Bot/master/exImages/talking.png)

License: MIT

>Copyright (c) 2019 Fábio Noga (fabio-noga)
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction (except selling and/or obtaining gains without the original creator's consent), including without limitation the rights to use, copy, modify, merge, publish, distribute and sublicense, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
