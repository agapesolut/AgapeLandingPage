# Ágape Solutions - Landing Page Premium

Bem-vindo ao projeto da nova Landing Page da **Ágape Solutions**. Este site foi desenvolvido com foco em design de alta performance, estética premium e facilidade de uso para o usuário final.

---

## ✨ Características do Site

- **Design de Elite**: Estética moderna inspirada em padrões internacionais de design (estilo Apple/Awwwards).
- **Modo Escuro e Claro**: O usuário pode alternar entre os temas para melhor conforto visual.
- **Totalmente Responsivo**: Funciona perfeitamente em celulares, tablets e computadores.
- **Animações Fluídas**: Navegação suave e elementos que ganham vida ao rolar a página.
- **Fácil Edição**: O código foi organizado para que textos e imagens possam ser alterados facilmente.

---

## 🛠️ Guia para o Cliente (Como Editar)

O site foi preparado para que você possa fazer alterações básicas sem precisar de conhecimentos avançados em programação. Procure pelos comentários no código que dizem `// CLIENTE: ...`.

### 1. Alterar Textos e Títulos
Todos os textos do site estão localizados na pasta `src/components`. Basta abrir o arquivo da seção que deseja mudar (ex: `Hero.jsx` para a primeira parte do site) e editar o texto entre as aspas.

### 2. Links e Redes Sociais
No arquivo `Footer.jsx` (Rodapé), você encontrará os links para as redes sociais. Basta substituir os links atuais pelos seus perfis oficiais.

### 3. Formulário de Contato
O formulário utiliza o serviço **EmailJS**. Para que as mensagens cheguem no seu e-mail, você precisará atualizar as chaves de integração no arquivo `Form.jsx`.

### 4. Imagens e Logotipos
As imagens do site estão na pasta `public`. Para trocar um logotipo ou foto, basta substituir o arquivo na pasta mantendo o mesmo nome, ou atualizar o caminho da imagem nos arquivos `.jsx`.

---

## 🚀 Como Rodar o Projeto (Para Desenvolvedores)

Se você for um desenvolvedor e precisar rodar o projeto localmente:

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para gerar a versão final de produção:
   ```bash
   npm run build
   ```

---

## 📄 Licença

Este projeto é de propriedade exclusiva da **Ágape Solutions**. Todos os direitos reservados.

---
*Desenvolvido com foco em excelência e inovação.*
