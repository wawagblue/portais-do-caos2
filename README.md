# Corpo Humano: Portais do Caos

Site em Angular 20 + Tailwind 3 inspirado na capa de *Rick and Morty*. Clique em um órgão, atravesse o portal e veja como ele funciona e onde entra a teoria do caos. Cada órgão tem um guia vindo da [Rick and Morty API](https://rickandmortyapi.com/) (precisa de internet).

## Como rodar no VS Code
1. Instale o [Node.js 20.19+ ou 22+](https://nodejs.org/).
2. Abra esta pasta no VS Code (`Arquivo > Abrir Pasta...`) e aceite instalar as extensões recomendadas.
3. No terminal do VS Code (`Ctrl+'`):
   ```bash
   npm install
   npm start        # http://localhost:4200
   ```
   Ou use `Ctrl+Shift+B` (tarefa "ng serve").

## Estrutura
- `src/app/core`: dados dos órgãos, serviços e a chamada à API
- `src/app/pages`: telas (início, corpo, detalhe, contato, 404)
- `src/app/shared`: componentes (corpo em SVG, cards, atrator de Lorenz)
- `tailwind.config.js` e `src/styles.css`: paleta e estilos

## Entregas
- [CONCEITO.md](CONCEITO.md)
- Moodboard: _link ou arquivo aqui_
- Identidade visual: _link ou arquivo aqui_
