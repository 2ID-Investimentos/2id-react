# Como rodar o projeto Vite React

### Pré-requisitos

Antes de começar, verifique se você tem o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados em sua máquina. Você pode verificar a instalação com os comandos:

```bash
node -v
npm -v
Se não tiver instalado, baixe e instale a versão mais recente do Node.js aqui.

Passo a passo para rodar o projeto
Clone o repositório

No terminal, clone o projeto para o seu diretório local:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências

Entre no diretório do projeto e execute o comando para instalar as dependências:

bash
Copiar código
cd seu-repositorio
npm install
Possíveis erros:

Erro de versão de pacote: Caso haja conflitos de dependência ou erros de versão de pacote, use o seguinte comando:

bash
Copiar código
npm install --legacy-peer-deps
Esse comando ignora conflitos entre versões de pacotes.

ERESOLVE unable to resolve dependency tree: Isso pode acontecer quando há conflitos de dependências. Para resolver, use:

bash
Copiar código
npm install --force
Esse comando força a instalação, mesmo com possíveis erros.

Inicie o servidor de desenvolvimento

Com as dependências instaladas, você pode rodar o servidor de desenvolvimento:

bash
Copiar código
npm run dev
O servidor será iniciado e você verá uma mensagem com o endereço local onde o projeto pode ser acessado, geralmente http://localhost:5173.

Compilação para produção

Para gerar os arquivos otimizados para produção, execute:

bash
Copiar código
npm run build
Os arquivos serão gerados na pasta dist.

Servidor local para visualizar a build

Se quiser rodar a build localmente para testar, use o seguinte comando:

bash
Copiar código
npm run preview
Ferramentas utilizadas
Vite
React
Node.js
Problemas comuns
Porta em uso: Caso a porta padrão (5173) já esteja em uso, o Vite tentará outra porta automaticamente, ou você pode especificar uma porta com:

bash
Copiar código
npm run dev -- --port 3000
Dependências desatualizadas: Se houver problemas com versões de dependências ou pacotes incompatíveis, considere atualizar as dependências usando:

bash
Copiar código
npm update
Se encontrar outros problemas, verifique os logs de erro no terminal para entender a causa ou procure por soluções na comunidade do Vite e do React.
```
