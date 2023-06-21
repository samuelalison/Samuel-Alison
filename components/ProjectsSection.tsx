import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "crwn-clothing",
    description:
    "I developed an e-commerce application that leveraged Firebase for seamless authentication processes. By undertaking this project, I aimed to gain valuable insights into the intricacies of a full-stack application development process.",
    image: "/1.png",
    github: "https://github.com/samuelalison/crwn-clothing-v2",
    link: "https://crwn-clothing-v2-wine.vercel.app/",
  },
  {
    name: "Todo-List App",
    description: "I developed a to-do list application as a means to assess and enhance my proficiency in React programming..",
    image: "/2.png",
    github: "https://github.com/samuelalison/todo-list-app",
    link: "https://todo-list-app-lake.vercel.app/",
  },
  {
    name: "HooBank",
    description:
      "I created a minimalist landing page as a means to evaluate and enhance my expertise in utilizing Tailwind CSS effectively.",
    image: "/4.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://hoobank-five-pink.vercel.app/",
  },
  {
    name: "Jobwala",
    description:
      "I took on the challenge of building a random design I found on the internet using React. Leveraging the power of this JavaScript library, I meticulously crafted the layout, components, and interactivity of the website. This project not only honed my React skills but also showcased my ability to bring designs to life in a dynamic and efficient manner.",
    image: "/Jobfinder.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "jobwala-samuelalison.vercel.app",
  },
  {
    name: "Monsters Rolodex",
    description:
      "I utilized the Monsters Rolodex project as a platform to evaluate and refine my skills in making API calls while further strengthening my proficiency in React development.",
    image: "/3.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://monsters-rolodex-plum.vercel.app/",
  },
  {
    name: "Github Finder App",
    description:
      "I developed a GitHub Finder app using HTML, Bootstrap, and JavaScript. The app utilizes the GitHub API to fetch and display user information and repositories. By employing these technologies, I designed a user-friendly interface that allows users to search for GitHub profiles and explore relevant details. This project enabled me to enhance my skills in front-end development and API consumption.",
    image: "/Githubfinder.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://samuelalison.github.io/githubfinderapp/",
  },
  {
    name: "Number Guesser",
    description:
      "I designed and implemented a simple game called 'Number Guesser'. Using HTML, CSS, and JavaScript, I created an interactive game where players can attempt to guess a randomly generated number within a specified range. The game provides feedback on each guess and keeps track of the number of attempts. This project allowed me to apply my front-end development skills and enhance my understanding of JavaScript programming concepts.",
    image: "/Number Guesser.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://samuelalison.github.io/Game-NumberGuesser/",
  },
  {
    name: "Patricia",
    description:
    "I meticulously reconstructed a landing page for Patricia Websites, a prominent Nigerian fintech giant, solely for the purpose of skill evaluation. By leveraging HTML and CSS, I curated a sleek and contemporary layout that effectively showcased their services, thereby enhancing my proficiency in web development.",
    image: "/Patricia.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://samuelalison.github.io/PATRICIA-WEBSITE-/",
  },
  {
    name: "Flutterwave",
    description:
    "I recreated an existing landing page for Flutterwave, a prominent Nigerian fintech company, as a way to test and showcase my skills. Using HTML, JavaScript and Sass, I meticulously reproduced the layout and design, ensuring accuracy and attention to detail. This project provided an opportunity to demonstrate my proficiency in front-end development, JavaScript programming, and styling with Sass.",
    image: "/Flutterwave.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://samuelalison.github.io/flutterwave-Html-Css-Js-Sass/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
