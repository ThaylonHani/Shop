const products = [
  {
    Key: Math.random() * 8,
    name: "Moletom Vermelho",
    price: 69.99,
    url: "/images/red-hoodie.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem pariatur maxime, porro reprehenderit voluptatibus laudantium vero, omnis recusandae, a officiis aliquam ab nam. Incidunt rem voluptas nobis fugiat nemo",
  },
  {
    Key: Math.random() * 8,
    name: "Moletom azul",
    price: 69.99,
    url: "/images/blue-hoodie.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem pariatur maxime, porro reprehenderit voluptatibus laudantium vero, omnis recusandae, a officiis aliquam ab nam. Incidunt rem voluptas nobis fugiat nemo",
  },
  {
    Key: Math.random() * 8,
    name: "Camisa social branca",
    price: 89.99,
    url: "/images/social-shirt.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem pariatur maxime, porro reprehenderit voluptatibus laudantium vero, omnis recusandae, a officiis aliquam ab nam. Incidunt rem voluptas nobis fugiat nemo",
  },
  {
    Key: Math.random() * 8,
    name: "Camisa rede social",
    price: 109.99,
    url: "/images/social-network-shirt.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem pariatur maxime, porro reprehenderit voluptatibus laudantium vero, omnis recusandae, a officiis aliquam ab nam. Incidunt rem voluptas nobis fugiat nemo",
  },
  {
    Key: Math.random() * 8,
    name: "Tênis azul",
    price: 99.99,
    url: "/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem pariatur maxime, porro reprehenderit voluptatibus laudantium vero, omnis recusandae, a officiis aliquam ab nam. Incidunt rem voluptas nobis fugiat nemo",
  },
  {
    Key: Math.random() * 8,
    name: "Tênis rosa",
    price: 109.99,
    url: "/images/pink-shoe.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem pariatur maxime, porro reprehenderit voluptatibus laudantium vero, omnis recusandae, a officiis aliquam ab nam. Incidunt rem voluptas nobis fugiat nemo",
  },
  {
    Key: Math.random() * 8,
    name: "Calça jeans",
    price: 119.99,
    url: "/images/jeans.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quidem pariatur maxime, porro reprehenderit voluptatibus laudantium vero, omnis recusandae, a officiis aliquam ab nam. Incidunt rem voluptas nobis fugiat nemo",
  },
];

export default function handler(req, res) {
  res.status(200).json(products);
}
