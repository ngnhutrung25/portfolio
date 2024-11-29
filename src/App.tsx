import AboutMe from "./components/AboutMe";
import Avatar from "./components/Avatar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <div
        className="fixed top-0 bottom-0 right-0 left-0 -z-10 bg-cover"
        style={{ backgroundImage: "url('./img/background2.jpg')" }}
      ></div>
      <div className="flex justify-center">
        <div className="bg-transparent px-5 sm:max-w-3xl lg:max-w-6xl 2xl:max-w-8xl py-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Left Side */}
            <div className="space-y-5">
              <Avatar />
              <Information />
              <Skills />
            </div>
            {/* Right Side */}
            <div className="space-y-5 lg:col-span-2">
              <AboutMe />
              <Experience />
              <Projects />
              <Education />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
