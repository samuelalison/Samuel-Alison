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
    name: "Car-Showcase-App",
    description:
    "I developed a car showcase application using Next.js and TypeScript, enhancing the UI with the Tailwind CSS library. This combination allowed for efficient styling and responsive design. Tailwind CSS provided pre-built components and utility classes, ensuring consistent and customizable styles throughout the app. The integration of Tailwind CSS added a modern and elegant touch to the visually appealing user interface, enhancing the overall user experience of the car showcase platform.",
    image: "/car-showcase.png",
    github: "https://github.com/samuelalison/crwn-clothing-v2",
    link: "https://car-showcase-two-inky.vercel.app/",
  },
  {
    name: "Github Finder App",
    description:
      "I developed a GitHub Finder app using HTML, Bootstrap, and JavaScript. The app utilizes the GitHub API to fetch and display user information and repositories. By employing these technologies, I designed a user-friendly interface that allows users to search for GitHub profiles and explore relevant details. This project enabled me to enhance my skills in front-end development and API consumption.",
    image: "/Githubfinder.png",
    github: "https://github.com/samuelalison/monsters-rolodex",
    link: "https://samuelalison.github.io/githubfinderapp/",
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
