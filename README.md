
# 🔐 QRCode/Password Terminal App

Projeto simples desenvolvido em **JavaScript Vanilla** com foco em modularização utilizando **ESM6**.

O objetivo principal é exibir no terminal:
- Um **QR Code**, gerado com o pacote [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal)
- Ou uma **senha**, definida a partir de variáveis no arquivo `.env`

---

## 📚 Tecnologias e Pacotes Utilizados

- [JavaScript (ESM6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal) – Geração de QR Code no terminal
- [`chalk`](https://www.npmjs.com/package/chalk) – Estilização de textos no terminal
- [`prompt`](https://www.npmjs.com/package/prompt) – Entrada de dados via terminal


---

## 🚀 Como executar

Clone o repositório:
   ```
   git clone git@github.com:LeandroJunges/projeto-qrcode-DIO.git
   cd projeto-qrcode-DIO
   ```




Instale as dependências:

```
npm install
```


Configure o arquivo .env:

```
env
UPPERCASE_LETTERS:boolean
LOWERCASE_LETTERS: boolean
NUMBERS: boolean
SPECIAL_CHARACTERS: boolean
PASSWORD_LENGTH: boolean
```

Execute o projeto:

```
npm run start
```

## 🧩 Estrutura do Projeto

Sempre exibir os detalhes

```
src/
├── index.js
├── prompts-schemas/
├── services/
│ ├── password/
│ └── qr-code/
.env
```

## 💡 Objetivo educacional
Este projeto tem como foco:

- Praticar e entender modularização com ESM6

- Aplicar conceitos de JavaScript moderno

- Utilizar pacotes externos de forma integrada

- Trabalhar com variáveis de ambiente em aplicações simples