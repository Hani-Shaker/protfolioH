import './Home.css'
import TextType from '../../assets/animations/TextType.jsx';
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";

function Home() {

  const mediaItems = [
    { id: "facebook", url: "https://www.facebook.com/hany.hany.955312?rdid=mrUgFZTu92y69E3N&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XJZShHphQ%2F#" , icon:"fab fa-facebook-f"},
    { id: "linkedin", url: "https://www.linkedin.com/in/hani-shaker-81656034b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , icon:"fab fa-linkedin-in"},
    { id: "github", url: "https://github.com/Hani-Shaker" , icon:"fab fa-github"},
  ];
  return (
    <section className='home relative flex overflow-hidden' id='home'>
        <div className="home-content flex h-full">
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
    </section>
  )
}

export default Home
