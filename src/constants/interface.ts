interface Service {
  icon: string;
  title: string;
  content: string;
}

interface Destination {
  imgUrl: string;
  title: string;
  averageRate: number;
  location: string;
  price: number;
  href: string;
}

interface BasicInformation {
  title: string;
  info: string;
}

type Gallery = string[];
