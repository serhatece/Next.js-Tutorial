export const components: { title: string; href: string; description: string }[] = [
    {
      title: "Yeni Gelenler",
      href: "/shop/new-arrivals",
      description: "Mağazamıza yeni eklenen en trend kıyafetleri keşfedin.",
    },
    {
      title: "İndirimli Ürünler",
      href: "/shop/discounts",
      description: "Sezonun en popüler ürünlerinde kaçırılmayacak indirimler!",
    },
    {
      title: "Beden Rehberi",
      href: "/shop/size-guide",
      description:
        "Doğru bedeni seçmek için kapsamlı beden rehberimizi inceleyin.",
    },
    {
      title: "Koleksiyonlar",
      href: "/shop/collections",
      description: "Farklı tarzlara uygun özel koleksiyonlarımızı inceleyin.",
    },
    {
      title: "Kadın & Erkek",
      href: "/shop/categories",
      description: "Kadın ve erkek kategorilerindeki en yeni ürünlere göz atın.",
    },
    {
      title: "Müşteri Yorumları",
      href: "/shop/reviews",
      description:
        "Müşterilerimizin en sevdiği ürünler ve deneyimleri hakkında yorumları okuyun.",
    },
  ];

  export interface SSsType{
    id:string;
    title:string;
    description:string;

}

export const sssList:SSsType[] =[
    {
        id: "item-1",
        title: "Title 1 sss",
        description: "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
    },
    {
        id: "item-2",
        title: "Title 2 sss",
        description: "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
    },
    {
        id: "item-3",
        title: "Title 3 sss",
        description: "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
    }
]

export interface CarouselType{
  id:number;
  image:string;
}
export const CarouselList:CarouselType[]=[
  {
      id:1,
      image:"/slider/5.jpg"
  },
  {
      id:2,
      image:"/slider/6.jpg"
  },
  {
      id:4,
      image:"/slider/7.jpg"
  }
]



export interface ProductType{
  id: number;
  title: string;
  price: number;
  mrp: number;
  description: string;
  image: string;
};

export const products: ProductType[] = [
  {
    id: 1,
    title: 'Product One',
    price: 100,
    mrp: 120,
    description: 'Description for product one',
    image: '/products/1.jpg',
  },
  {
    id: 2,
    title: 'Product Two',
    price: 150,
    mrp: 170,
    description: 'Description for product two',
    image: '/products/2.jpg',
  },
  {
    id: 3,
    title: 'Product Three',
    price: 200,
    mrp: 220,
    description: 'Description for product three',
    image: '/products/3.jpg',
  },
  {
    id: 4,
    title: 'Product Four',
    price: 250,
    mrp: 270,
    description: 'Description for product four',
    image: '/products/4.jpg',
  },
  {
    id: 5,
    title: 'Product Five',
    price: 300,
    mrp: 320,
    description: 'Description for product five',
    image: '/products/5.jpg',
  },
  {
    id: 6,
    title: 'Product Six',
    price: 350,
    mrp: 370,
    description: 'Description for product six',
    image: '/products/6.jpg',
  },
  {
    id: 7,
    title: 'Product Seven',
    price: 400,
    mrp: 420,
    description: 'Description for product seven',
    image: '/products/7.jpg',
  },
  {
    id: 8,
    title: 'Product Eight',
    price: 450,
    mrp: 470,
    description: 'Description for product eight',
    image: '/products/8.jpg',
  },
  {
    id: 9,
    title: 'Product Nine',
    price: 500,
    mrp: 520,
    description: 'Description for product nine',
    image: '/products/9.jpg',
  },
  {
    id: 10,
    title: 'Product Ten',
    price: 550,
    mrp: 570,
    description: 'Description for product ten',
    image: '/products/10.jpg',
  },
  {
    id: 11,
    title: 'Product Eleven',
    price: 600,
    mrp: 620,
    description: 'Description for product eleven',
    image: '/products/11.jpg',
  },
  {
    id: 12,
    title: 'Product Twelve',
    price: 650,
    mrp: 670,
    description: 'Description for product twelve',
    image: '/products/12.jpg',
  },
];