# Como rodar o Elas Beauty Studio

## Requisitos

- Node.js 22 ou superior
- npm
- VS Code ou outro editor
- Codex instalado/configurado, caso queira editar o projeto com ele

## Instalação

Abra o terminal dentro da pasta do projeto e execute:

```bash
npm install
```

## Rodar localmente

```bash
npm run dev
```

O terminal mostrará o endereço local do site. Normalmente será algo como
`http://localhost:3000` ou `http://localhost:5173`.

## Criar a versão de produção

```bash
npm run build
```

## Principais arquivos para personalização

- `app/page.tsx`: textos, serviços, profissionais, depoimentos, links e estrutura.
- `app/globals.css`: cores, fontes, espaçamentos, responsividade e animações.
- `app/layout.tsx`: título, descrição e informações de compartilhamento.
- `public/`: imagens, favicon e capa do site.

## Informações que precisam ser substituídas

No arquivo `app/page.tsx`, procure por:

- `WHATSAPP_URL`: coloque o número real no formato `55 + DDD + número`.
- nomes, especialidades, descrições e fotos das profissionais;
- link do Instagram;
- horários de funcionamento;
- depoimentos reais das clientes.

Exemplo de WhatsApp:

```ts
const WHATSAPP_URL =
  "https://wa.me/5583999999999?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.";
```

## Editar com o Codex

Abra esta pasta como projeto e peça alterações específicas, por exemplo:

```text
Troque o número do WhatsApp para 5583999999999 em todos os botões.
```

```text
Substitua as profissionais de demonstração pelos dados abaixo, preservando o design.
```

```text
Altere somente as cores principais para combinar com esta nova logo.
```

Evite enviar pedidos genéricos como “mude tudo”. Quanto mais específica for a
alteração, mais fácil será preservar o restante da página.
