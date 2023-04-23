import tourImage1 from './images/tour-1.jpeg'
import tourImage2 from './images/tour-2.jpeg'
import tourImage3 from './images/tour-3.jpeg'
import tourImage4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 5, href: "http://apps.jedllenado.com/", text: "[All Apps]" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.instagram.com/jedllenado/",
    icon: "fab fa-instagram",
  },
  {
    id: 2,
    href: "https://www.facebook.com/jed.llenado/",
    icon: "fab fa-facebook",
  },
  {
    id: 3,
    href: "https://www.jedllenado.com/",
    icon: "fas fa-envelope-open-text",
  },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1, 
    image: tourImage1.src,
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    date: 'august 26th, 2020',
    location: 'china',
    days: 6,
    cost: 2100
  },
  {
    id: 2, 
    image: tourImage2.src,
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    date: 'october 1th, 2020',
    location: 'indonesia',
    days: 11,
    cost: 1400
  },
  {
    id: 3, 
    image: tourImage3.src,
    title: 'explore hongkong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    date: 'september 15th, 2020',
    location: 'hongkong',
    days: 8,
    cost: 5000
  },
  {
    id: 4, 
    image: tourImage4.src,
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    date: 'december 5th, 2019',
    location: 'kenya',
    days: 8,
    cost: 3300
  },
]
