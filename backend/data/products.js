// aqui ficam todas as descricoes de produtos puxando todo produto adicionado na loja, com toda sua descricao e atributos que o tornam um produto

const products = [
  {
    name: "AirPods com estojo de recarga (2a geração)",
    image: "/images/airpods.jpg",
    description:
      "Tecnologia Bluetooth das mais recentes e desejadas no mercado, os AirPods possuem total compatibilidade com aparelhos diversos da Apple. São sem io, com configurações simples e práticas, contudo eficientes. Possuem ótima nota relacianada a bateria, conforto e desempenho.",
    brand: "Apple",
    category: "Electronics",
    price: 999.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Caixa de chocolate Garoto 250g",
    image: "/images/CaixaDeChocolateGaroto(Ajustado).jpeg",
    description:
      "Nosso chocolate nacional, possui diversas variedades de sabores conseguindo ter uma qualidade indescritivel em todos de sua caixa. A mais de 80 anos fazendo história no mercado de chocolate, sendo uma das 10 maiores fábricas de chocolate no mundo.",
    brand: "Garoto",
    category: "Food",
    price: 13.99,
    countInStock: 20,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Engradado com cerveja artesanal com 6 unidades",
    image: "/images/GradeDeCervejaArtesanal(Ajustado).jpeg",
    description:
      "Um kit contendo 6 cervejas adicionais acompanhado de um suporte de madeira Personalizado para presentes.",
    brand: "Fabrica do Joao Artesanal",
    category: "Drinks",
    price: 95.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Brinquedo LEGO Batman com mais de 1000 peças",
    image: "/images/BrinquedoLEGO(Ajustado).jpeg",
    description:
      "A franquia LEGO trouxe como novo projeto o LEGO Batman tornando possível a construção da BatCaverna e trazendo consigo grande diversão na sua montagem.",
    brand: "LEGO",
    category: "Toys",
    price: 299.99,
    countInStock: 5,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Kit de agendas Golden Coil - 3 Agendas por Kit",
    image: "/images/KitDeAgendas(Ajustado).jpeg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Golden Coil",
    category: "school supplies",
    price: 90.0,
    countInStock: 12,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Caixa de Sabão OMO 1Kg - Removedor de manchas",
    image: "/images/CaixaDeSabaoOMO(Ajustado).jpeg",
    description:
      "OMO multiação possui eficacia comprovada. Ainda contando contando com nova formula que retira as manchas mais dificeis",
    brand: "OMO",
    category: "Cleaning products",
    price: 28.35,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
