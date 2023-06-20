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
    name: "Monsters Rolodex",
    description:
      "I utilized the Monsters Rolodex project as a platform to evaluate and refine my skills in making API calls while further strengthening my proficiency in React development.",
    image: "/3.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://monsters-rolodex-plum.vercel.app/",
  },
  {
    name: "Unichat",
    description:
      "I created a minimalist landing page as a means to evaluate and enhance my expertise in utilizing Tailwind CSS effectively.",
    image: "/4.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://monsters-rolodex-plum.vercel.app/",
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
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
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
