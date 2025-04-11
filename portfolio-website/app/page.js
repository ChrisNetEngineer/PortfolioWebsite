import Nav from "./components/nav";
import FrontPage from "./components/Front";
import LinkWithMeIcon from "./components/LinkWithMeIcon";
import InternshipExperiences from "./components/InternshipExperiences";
import Footer from "./components/footer";
import Projects from "./components/ProjectCards";

export default function Home() {
  return (
    <div className="font-extralight">
      {/* Navagation Bar */}
      <div className="bg-gradient-to-b from-sky-500/70 dark:from-gray-900/50 dark:to-transparent">
        <Nav />
      </div>
      {/* Introduction section */}
      <div>
        <FrontPage />
        <LinkWithMeIcon />
      </div>
      {/* Internship Experiences */}
      <div>
        <InternshipExperiences />
      </div>
      {/* Project Cards */}
      <Projects />  
      {/* Copyright Footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
