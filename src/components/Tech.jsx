import postman from "../assets/about/postman.png";
import tailwind from "../assets/about/tailwindcss.png";
import react from "../assets/about/react.png";
import node from "../assets/about/node.png";
import laravel from "../assets/about/laravel.png";
import figma from "../assets/about/figma.png";
import puppeteer from "../assets/about/puppeteer-svgrepo-com.svg";
import { Link } from "react-router-dom";

function Tech() {
  const data = [
    {
        name: "React",
        image: react,
        description: "With over 2 years of experience, I've honed my skills in React, and it has become my go-to framework. I've successfully used React to create a diverse range of applications, from Food Delivery Apps to Ecommerce and Social Media platforms. I'm a seasoned React developer, ready to tackle any project.",
        website: "https://reactjs.org/",
    },
    {
        name: "Tailwind CSS",
        image: tailwind,
        description: "I've been proficient in Tailwind CSS for over 2 years. This utility-first CSS framework has allowed me to craft visually appealing websites and web apps efficiently. From Food Delivery Apps to Ecommerce and Social Media platforms, I've utilized Tailwind CSS to create them all. Let me bring the power of Tailwind to your project.",
        website: "https://tailwindcss.com/",
    },
    {
        name: "Postman",
        image: postman,
        description: "My experience with Postman spans over 2 years, and I've developed a deep appreciation for its capabilities. I've harnessed Postman to build robust websites and web apps. Whether it's a Food Delivery App, Ecommerce platform, or Social Media application, I've got it covered with Postman's API testing and development tools.",
        website: "https://www.postman.com/",
    },
    {
        name: "Node.js",
        image: node,
        description: "Node.js has been my trusted companion for over 2 years. I've harnessed its power to create a multitude of websites and web apps. My mastery of Node.js extends to projects like Food Delivery Apps, Ecommerce platforms, and Social Media applications. Let's make your project a success with Node.js.",
        website: "https://nodejs.org/en/",
    },
    {
        name: "Laravel",
        image: laravel,
        description: "I've immersed myself in Laravel for the past 2 years and developed a strong affinity for this PHP framework. With Laravel, I've built a variety of websites and web apps, including Food Delivery Apps, Ecommerce platforms, and Social Media applications. As a Laravel expert, I'm equipped to take on any challenge.",
        website: "https://laravel.com/",
    },
    {
        name: "Figma",
        image: figma,
        description: "Figma has been my design tool of choice for the past 2 years. I've used it to craft stunning websites and web apps. Whether it's a Food Delivery App, Ecommerce platform, or Social Media application, I bring my Figma expertise to the table. Let's turn your ideas into visually captivating realities with Figma.",
        website: "https://www.figma.com/",
    },
    {
        name: "Puppeteer",
        image: puppeteer,
        description: "My proficiency with Puppeteer spans over 2 years, and I'm passionate about using it to build websites and web apps. From Food Delivery Apps to Ecommerce platforms and Social Media applications, Puppeteer empowers me to deliver exceptional results. Let's automate your web tasks and achieve more with Puppeteer.",
        website: "https://pptr.dev/",
    },
];

  return (
    <div className=" w-full  px-14 mt-32 sm:mt-0  z-10 grid gap-3 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {data.map((item, index) => (

      <div
      key={index}
      className="card rounded-md transition-all ease-in-out duration-500   border border-slate-200 hover:border-slate-300 dark:hover:border-slate-700  dark:border-slate-800 flex overflow-hidden hover:bg-sky-100/30 dark:hover:bg-sky-800/30 gap-2 flex-col p-3 cursor-pointer col-span-1 w-full ">
        <div className="group--one flex gap-2 justify-start items-center">
          <Link to={item.website} >
          <img
          className="w-8 h-8"
          src={item.image} alt="" />
          </Link>
          <p
          className="text-base font-semibold text-slate-800 dark:text-slate-200"
          >
          {item.name}
          </p>
        </div>
        <p
        className="text-xs text-slate-700 dark:text-slate-300"
        >
        {item.description}
        </p>
      </div>
      ))}
    </div>
  );
}

export default Tech;
