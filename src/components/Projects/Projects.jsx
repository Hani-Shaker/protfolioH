import './Projects.css'
// import shoes from '../../assets/images/logo-shoes.png'
function Projects() {
    const projects = [
    { id: "1", title: "furniture", urlImg: "../../../images/project1.png", repo:"", view:"https://furniture-us.netlify.app/", category: "website", body:"A website showcasing products related to home furnishings."},  
    { id: "2", title: "workshop", urlImg: "../../../images/project2.png", repo:"https://github.com/Hani-Shaker/workshop", view:"https://hani-shaker.github.io/workshop/", category: "app", body:"A desktop program specifically designed for those who repair devices for their clients by documenting the repair process."},  
    { id: "3", title: "Shoes Shop", urlImg: "../../../images/project3.png", repo:"https://github.com/Hani-Shaker/project-4", view:"https://hani-shaker.github.io/project-4/", category: "website", body:"Selling the best types of devices"},
    { id: "4", title: "Password Generator", urlImg: "../../../images/project4.png", repo:"https://github.com/Hani-Shaker/password-generator", view:"https://hani-shaker.github.io/password-generator/", category: "website", body:"Create strong passwords for free."},
    { id: "5", title: "Simple Calculator", urlImg: "../../../images/project5.png", repo:"https://github.com/Hani-Shaker/Simple-Calculator", view:"https://hani-shaker.github.io/Simple-Calculator/", category: "website", body:"Simple calculator"},
    { id: "6", title: "Movies web", urlImg: "../../../images/project6.png", repo:"https://github.com/Hani-Shaker/Movies-web", view:"https://hani-shaker.github.io/Movies-web/", category: "website", body:"A website for watching the latest movies"},
    { id: "7", title: "Curd", urlImg: "../../../images/project7.png", repo:"https://github.com/Hani-Shaker/curd", view:"https://hani-shaker.github.io/curd/", category: "website", body:"Product organization website."},
    { id: "8", title: "To Do List", urlImg: "../../../images/project8.png", repo:"https://github.com/Hani-Shaker/To-Do-List", view:"https://hani-shaker.github.io/To-Do-List/", category: "website", body:"Writing quick assignments"},
    { id: "9", title: "Restaurant", urlImg: "../../../images/project9.png", repo:"", view:"https://darkl.netlify.app/", category: "website", body:"Fast food website."},

  ];
  return (
    <section id='projects'>
      <h2 className='font-bold text-4xl text-center h-40 flex items-center justify-center '>Projects</h2>
      <div className="projects-cont w-8/10 h-dvh mx-auto mt-10 flex flex-wrap justify-center gap-15">
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
                {item.repo && <a href={item.repo} target="_blank" rel="noopener noreferrer" className='size-10 bg-green-900 flex justify-center items-center rounded-3xl'><i className="fa-brands fa-github text-3xl"></i></a>}
                {item.view && <a href={item.view} target="_blank" rel="noopener noreferrer" className='size-10 bg-green-900 flex justify-center items-center rounded-3xl'><i className="fa-solid fa-link text-3xl"></i></a>}
              </div>
            </div>
          </div>
          ))}
      </div>
    </section>
  )
}

export default Projects
