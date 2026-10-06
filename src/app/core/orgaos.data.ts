export interface Orgao {
  id: string; nome: string; funcao: string; caos: string;
  cor: string;      // cor do órgão no SVG
  d: string;        // forma do órgão (path do SVG)
  guiaId: number;   // personagem da API que guia o portal
  seed: number;     // condição inicial do atrator de Lorenz
}

export const ORGAOS: Orgao[] = [
  { id: 'cerebro', nome: 'Cérebro', cor: '#ff7bd0', guiaId: 1, seed: 0,
    d: 'M80 34a20 14 0 1 0 40 0a20 14 0 1 0-40 0z',
    funcao: 'Cerca de 86 bilhões de neurônios trocam sinais elétricos e químicos. Ele processa os sentidos, guarda memórias e comanda o corpo todo.',
    caos: 'A atividade neural vive à beira do caos: pequenas variações em um neurônio podem mudar todo o padrão de pensamento, o que dá flexibilidade ao cérebro.' },
  { id: 'coracao', nome: 'Coração', cor: '#ff3b4e', guiaId: 2, seed: 1,
    d: 'M100 162c-24-20-8-40 0-26 8-14 24 6 0 26z',
    funcao: 'Um músculo que bombeia cerca de 5 litros de sangue por minuto, levando oxigênio e nutrientes a todas as células.',
    caos: 'O intervalo entre batimentos saudáveis é levemente caótico e fractal. Um ritmo regular demais costuma indicar um coração menos adaptável.' },
  { id: 'pulmoes', nome: 'Pulmões', cor: '#5cc8ff', guiaId: 3, seed: 2,
    d: 'M66 120a14 26 0 1 0 28 0a14 26 0 1 0-28 0zM106 120a14 26 0 1 0 28 0a14 26 0 1 0-28 0z',
    funcao: 'Trocam gases: entra oxigênio, sai gás carbônico. Centenas de milhões de alvéolos fazem essa troca com o sangue.',
    caos: 'Os brônquios se ramificam como uma árvore fractal, repetindo o mesmo padrão em escalas menores para caber uma enorme área de troca no peito.' },
  { id: 'figado', nome: 'Fígado', cor: '#b5651d', guiaId: 4, seed: 3,
    d: 'M70 170q30-14 60 2 0 20-24 22-30 2-36-24z',
    funcao: 'Filtra o sangue, produz bile, armazena energia e processa substâncias. Faz mais de 500 funções e ainda consegue se regenerar.',
    caos: 'Seu metabolismo é uma rede de reações interligadas e não lineares, em que um pequeno desequilíbrio pode se amplificar no corpo inteiro.' },
  { id: 'intestino', nome: 'Intestino', cor: '#ffb347', guiaId: 5, seed: 4,
    d: 'M76 204h48v34H76z',
    funcao: 'Digere o que sobrou do estômago e absorve nutrientes e água. Suas dobras e vilosidades aumentam muito a superfície de absorção.',
    caos: 'A microbiota é um ecossistema complexo: pequenas mudanças na dieta podem causar grandes efeitos, como em qualquer sistema caótico.' },
];
