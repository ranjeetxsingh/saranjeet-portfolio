import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Social Media",
    desc: "",
    img: "/static/projects/main-poster.jpg",
    link: "https://www.behance.net/gallery/204561685/Personal-Project",
    tags: ["PhotoShop"],
  },
  {
    id: 1,
    title: "Brand Indentity",
    desc: "",
    img: "/static/projects/coffee-shop.jpg",
    link: "https://www.behance.net/gallery/204557381/New-Coffee-Store",
    tags: ["PhotoShop"],
  },
  {
    id: 2,
    title: "Boats Earphone Social Media Post",
    desc: "",
    img: "/static/projects/boats-earphone.jpg",
    link: "https://www.behance.net/gallery/204034023/Earphone-Social-Media-Post",
    tags: ["PhotoShop"],
  },
  {
    id: 5,
    title: "Social Media Post",
    desc: "",
    img: "/static/projects/dental.jpg",
    link: "https://www.behance.net/gallery/204562517/Social-Media-Post",
    tags: ["PhotoShop"],
  },
  {
    id: 4,
    title: "Product Manipulation",
    desc: "",
    img: "/static/projects/nandos.jpg",
    link: "https://www.behance.net/gallery/205499025/Product-Manipulation",
    tags: ["PhotoShop"],
  },
  {
    id: 7,
    title: "Perfume Poster",
    desc: "",
    img: "/static/projects/perfume.jpg",
    link: "https://www.behance.net/gallery/203862555/Perfume-Poster",
    tags: ["PhotoShop"],
  },
  {
    id: 8,
    title: "Product Manipulation",
    desc: "",
    img: "/static/projects/maaza.jpg",
    link: "https://www.behance.net/gallery/204023167/Product-Manipulation",
    tags: ["PhotoShop"],
  },
  {
    id: 6,
    title: "Logo Designing",
    desc: "",
    img: "/static/projects/Purohit-Logo.png",
    link: "https://www.behance.net/gallery/203677797/Sweet-Shop-Logo",
    tags: ["PhotoShop"],
  },
  {
    id: 3,
    title: "Product Manipulation",
    desc: "",
    img: "/static/projects/sprite.jpg",
    link: "https://www.behance.net/gallery/204557269/Product-Manipulation",
    tags: ["PhotoShop"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
