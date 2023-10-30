import Ebook from "../../Images/projects/ebook.png";
import WebsiteBuilder from "../../Images/projects/website-builder.png";
import Firma from "../../Images/projects/3.png";
import Url from "../../Images/projects/url_shorten.png";
import Easei2 from "../../Images/projects/5.png";
import Lokum from "../../Images/projects/7.png";
import Lays from "../../Images/projects/8.png";
const projectDatas = [
  //   {id:"",
  // cover:"",
  // title:"",
  // description:"",
  // feature:"",
  // technologies:"",
  // live:""
  // }
  {
    id: 1,
    cover: Firma,
    title: "Firma",
    description:
      "Firma is an innovative online marketplace that simplifies the way clients and lawyers connect, making it a seamless and efficient experience. Leveraging the power of the MERN stack, we've developed a platform that not only streamlines the legal hiring process but also offers a plethora of features designed to enhance legal journey such as",
    features:
      "Secure Wallet Integration, Real-time Messaging, Document Management, Review and Rating System: ",
    github: "",
    live: "https://firma.ink",
    technologies: ["React", "NodeJs", "ExpressJs", "Mongoose", "Bootstrap"],
  },
  {
    id: 2,
    cover: Easei2,
    title: "Easei",
    description:
      "Steller Website Builder is a dynamic and innovative website designed to showcase the expertise and capabilities of a company dedicated to crafting high-quality websites for clients. This project was created using React and styled with Tailwind CSS, reflecting modern web development standards and practices such as Component-Based Architecture, Scalibility, ",
    features: ["Blog Integration,", "Contact Form "],
    live: "https://www.test.easei.africa/",
    github: "",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 3,
    cover: WebsiteBuilder,
    title: "Steller Website Builder",
    description:
      "Steller Website Builder is a dynamic and innovative multi-paged website designed to showcase the expertise and capabilities of a company dedicated to crafting high-quality websites for clients. This project was created using React and styled with Tailwind CSS, reflecting modern web development standards and practices such as Component-Based Architecture, Scalibility, ",
    feature: "Blog Integration, Contact Form, FAQ",
    live: "https://i-made-website-builder.vercel.app/",
    github: "",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 4,
    cover: Lays,
    title: "Lays Landing Page",
    live: "https://i-made-lays-website.vercel.app/",
    technologies: ["React", "Tailwind", ""],
    feature: "",
    description: "",
    github: "",
  },
  {
    id: 5,
    cover: Ebook,
    title: "Ebook Library",
    description:
      " Ebook Library is a single page web platform , built with React and Tailwind CSS  that harnesses REST and Google Books APIs. It serves as a valuable resource for readers and authors, offering diverse eBooks accessible from anywhere. Users can search, read on any device, discover new content, and authors can showcase their work, fostering knowledge sharing and a love for literature.",
    live: "https://ebooks-google-api.vercel.app/",
    technologies: ["React", "Tailwind", "REST Api"],
  },

  {
    id: 6,
    cover: Url,
    github: "https://github.com/WinifredOgbeiwi/URL-Shortener",
    title: "URL Shorten",
    live: "https://url-shortener-winifredogbeiwi.vercel.app/",
    technologies: ["Rest API", "React", "Tailwind",],
    description:
      "LinkShortenPro is your go-to web app, designed with simplicity in mind. It allows one to quickly and effortlessly shorten long URLs into concise, shareable links. It utilizes Goggle API that allows users to shorten URL links and its built with Mobile Compatibility",
  },
  {
    id: 7,
    cover: Lokum,
    github: "https://github.com/WinifredOgbeiwi/Lokum-HeathCare-Service",
    live: "https://lokum-healthcare.netlify.app/",
    lang1: "React",
    lang2: "Tailwind",
    heading: "Lokum Med-Health Care",
    description:
      "A Landing page for Lokum Med-Health Care that incorporated FAQ section",
  },
  // {
  //   id: 3,
  //   cover: Todo,
  //   github: "https://github.com/WinifredOgbeiwi/Todo-List",
  //   live: "todo-list-winifredogbeiwi.vercel.app",
  //   lang1: "HTML",
  //   lang2: "CSS",
  //   lang3: "JavaScript",
  //   heading: "Todo List",
  //   description:
  //     "A web app inclusive of a login and sign in page that allows users to input tasks with the ability to edit and delete ",
  // },

];
export default projectDatas;
