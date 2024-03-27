import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}


// import { AppProps } from "next/app";
// import RootLayout from "@/layouts/RootLayout"; // Adjust the path accordingly

// import "../styles/globals.css";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <RootLayout>
//       <Component {...pageProps} />
//     </RootLayout>
//   );
// }

// export default MyApp;

