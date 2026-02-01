import './Home.css'
import TextType from '../../assets/animations/TextType.jsx';
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";

function Home() {
    const projects = [
    // { id: "1", title: "furniture", urlImg: "../../../images/project1.png", repo:"", view:"https://furniture-us.netlify.app/", category: "website", body:"A website showcasing products related to home furnishings."},  
    { id: "2", title: "workshop", urlImg: "../../../images/project2.png", repo:"https://github.com/Hani-Shaker/workshop", view:"https://hani-shaker.github.io/workshop/", category: "app", body:"A desktop program specifically designed for those who repair devices for their clients by documenting the repair process."},  
    { id: "3", title: "Shoes Shop", urlImg: "../../../images/project3.png", repo:"https://github.com/Hani-Shaker/project-4", view:"https://hani-shaker.github.io/project-4/", category: "website", body:"Selling the best types of devices"},
    { id: "4", title: "Ecommerce", urlImg: "../../../images/project10.png", repo:"https://github.com/Hani-Shaker/E-commerce", view:"https://e-commerce-inter.netlify.app/", category: "website", body:"E-commerce website for anything you need."},
  ];
  const mediaItems = [
    { id: "facebook", url: "https://www.facebook.com/hany.hany.955312?rdid=mrUgFZTu92y69E3N&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XJZShHphQ%2F#" , icon:"fab fa-facebook-f"},
    { id: "linkedin", url: "https://www.linkedin.com/in/hani-shaker-81656034b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , icon:"fab fa-linkedin-in"},
    { id: "github", url: "https://github.com/Hani-Shaker" , icon:"fab fa-github"},
  ];
  return (
    <section className='home relative flex overflow-hidden flex-col' id='home'>
      <div className='relative main-section w-8/10 h-xl-dvh mx-auto flex items-center'>
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 animate-pulse-glow" 
                style={{ background: 'var(--gradient-glow)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-20 animate-pulse-glow"
                style={{ background: 'radial-gradient(ellipse at center, hsl(270 70% 60% / 0.2), transparent 70%)', animationDelay: '1.5s' }} />
        </div>
        <div className="home-content  flex h-full">
            <div className="left-home w-1/2 h-full px-10 py-30 flex flex-col gap-5">
              <h2 className="font-bold text-4xl">Welcome</h2>
              <h3 className="font-bold text-3xl">I 'M HANI SHAKER</h3>
              <div className="work flex gap-1 font-bold text-2xl">
                ,I am<div className="switch-words">
                        <TextType 
                          text={["a Frontend Developer", "a Backend Developer", "a Node.js Developer", "using React", "using MongoDB"]}
                          typingSpeed={75}
                          pauseDuration={1500}
                          showCursor={true}
                          cursorCharacter="|"
                        />
                  </div>
              </div>
              <div className="short-about">I’m a <h6>junior web developer</h6> who loves building websites and working with others. <h6>welcome to website.</h6></div>

              <Link to="/contact"
                className="hire-me" onClick={() =>
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                }>Hire Me</Link>
              <div className="media">
                <ul className='flex gap-2.5'>
                  {mediaItems.map((item) => (
                    <li key={item.id} className='w-12 h-12 font-bold text-2xl flex justify-center items-center rounded-4xl'>
                      <a href={item.url} target="_blank">
                        <span><i className={item.icon}></i></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right-home w-1/2 h-full flex justify-center items-center">
                <div className="flex items-center h-full">
                  <img src={profile} alt="img" className='profile w-100 m-15'/>
                </div>
            </div>
        </div>
      </div>
      <div className='featured-projects'>
        <h2 className='font-bold text-4xl'>Featured Projects</h2>
        <div className="projects-cont w-9/10 mx-auto py-20 flex flex-wrap justify-center gap-15">
          {projects.map((item) => (
          <div className="project w-80 transition hover:scale-105 rounded-4xl overflow-hidden flex justify-center flex-col" key={item.id}>
            <div className="top-product relative flex justify-center items-center overflow-hidden w-100 transform translate-x-[-10%]">
              <img src={item.urlImg} alt="img" className='project-img h-50'/>
            </div>
            <div className="project-body flex flex-col gap-1 p-3">
              <div className=" h-9/12">
                <h3 className="font-bold text-2xl">{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <div className="links flex justify-between h-1/12">
                {item.repo && <a href={item.repo} target="_blank" rel="noopener noreferrer" className='size-10 flex justify-center items-center rounded-3xl'><i className="fa-brands fa-github text-3xl"></i></a>}
                {item.view && <a href={item.view} target="_blank" rel="noopener noreferrer" className='size-10 flex justify-center items-center rounded-3xl'><i className="fa-solid fa-link text-3xl"></i></a>}
              </div>
            </div> 
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
