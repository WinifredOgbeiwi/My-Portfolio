import Ebook from "../../Images/projects/ebook.png";
import ShortenUrl from "../../Images/projects/shorten-url.png";
import Todo from "../../Images/projects/todo.png";
import WebsiteBuilder from "../../Images/projects/website-builder.png";
import Firma from "../../Images/projects/3.png";
import Easei from "../../Images/projects/4.png";
import Easei2 from "../../Images/projects/5.png";
const projectDatas = [
  {
    id: 3,
    cover: Firma,
    title: "Firma",
    description:
      "Firma is an innovative online marketplace that simplifies the way clients and lawyers connect, making it a seamless and efficient experience. Leveraging the power of the MERN stack, we've developed a platform that not only streamlines the legal hiring process but also offers a plethora of features designed to enhance legal journey such as",
    features:
      "Secure Wallet Integration, Real-time Messaging, Document Management, Review and Rating System: ",
    live: "https://firma.ink",
    technologies: ["React", "NodeJs", "ExpressJs", "Mongoose", "Bootstrap"],
  },
  {
    id: 4,
    cover: Easei2,
    title: "Easei",
    description:
      "Steller Website Builder is a dynamic and innovative website designed to showcase the expertise and capabilities of a company dedicated to crafting high-quality websites for clients. This project was created using React and styled with Tailwind CSS, reflecting modern web development standards and practices such as Component-Based Architecture, Scalibility, ",
      features:["Blog Integration,", "Contact Form "],
    live: "https://www.test.easei.africa/",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 1,
    cover: WebsiteBuilder,
    title: "Steller Website Builder",
    description:
      "Steller Website Builder is a dynamic and innovative website designed to showcase the expertise and capabilities of a company dedicated to crafting high-quality websites for clients. This project was created using React and styled with Tailwind CSS, reflecting modern web development standards and practices such as Component-Based Architecture, Scalibility, ",
    feature: "Blog Integration, Contact Form, FAQ",
    live: "https://i-made-website-builder.vercel.app/",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 2,
    cover: Ebook,
    title: "Ebook Library",
    description:
      " Ebook Library is a single page web platform , built with React and Tailwind CSS  that harnesses REST and Google Books APIs. It serves as a valuable resource for readers and authors, offering diverse eBooks accessible from anywhere. Users can search, read on any device, discover new content, and authors can showcase their work, fostering knowledge sharing and a love for literature.",
    live: "https://ebooks-google-api.vercel.app/",
    technologies: ["React", "Tailwind", "REST Api"],
  },
  {
    id: 6,
    cover: ShortenUrl,
    // github: "https://github.com/WinifredOgbeiwi/URL-Shortener",
    title:"URL Shorten",
    live: "https://url-shortener-winifredogbeiwi.vercel.app/",
    technologies: ["API","React","Tailwind","Url Shorten"] ,
    description:
      "A web app utilizing Goggle API that allows users to shorten URL links",
      technologies:["React", "Rest Api"]
  },
  
  // {
  //   id: 5,
  //   cover: "",
  //   github: "",
  //   live: "https://firma.ink",
  //   lang1: "REST API",
  //   lang2: "React",
  //   lang3: "Boostrap",
  //   lang4:"Node JS",
  //   lang5:"Mongoose",
  //   lang6:"Express JS",
  //   heading: " Ebook Shelf",
  //   description:
  //     "A web app utilizing Goggle API that allows users search for any book to read",
  // },
  // {
  //   id: 1,
  //   cover: Ebook,
  //   github: "https://github.com/WinifredOgbeiwi/Ebook-google-api",
  //   live: "https://ebooks-google-api-winifredogbeiwi.vercel.app/",
  //   lang1: "API",
  //   lang2: "React",
  //   lang3: "Tailwind",
  //   heading: " Ebook Shelf",
  //   description:
  //     "A web app utilizing Goggle API that allows users search for any book to read",
  // },

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
  // {
  //   id: 4,
  //   cover: Lokum,
  //   github: "https://github.com/WinifredOgbeiwi/Lokum-HeathCare-Service",
  //   live: "https://lokum-healthcare.netlify.app/",
  //   lang1: "React",
  //   lang2: "Tailwind",
  //   heading: "Lokum Med-Health Care",
  //   description:
  //     "A Landing page for Lokum Med-Health Care that incorporated FAQ section",
  // },
  // {
  //   id: 4,
  //   cover: Ebook,
  // },
  // {
  //   id: 5,
  //   cover: Ebook,
  // },
  //   {
  //     id: 6,
  //     cover: SearchFilter,
  //   },
];
export default projectDatas;
