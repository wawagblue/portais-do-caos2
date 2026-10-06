/** Paleta = contrato da Fase 3. Se mudar uma cor, atualize o documento de identidade visual. */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: { extend: {
    colors: { noite: '#050a1e', fundo: '#0b1a2e', verde: '#7CFF3F', ciano: '#27d9e6' },
    fontFamily: { titulo: ['Bangers', 'Impact', 'sans-serif'], corpo: ['"Trebuchet MS"', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
