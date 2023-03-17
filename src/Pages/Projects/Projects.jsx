
import ActualProject from './Components/Actual'
import WebProjects from './Components/Webs'
import './Projects.css'


export default function Projects() {

  return (
    <div>
      <ActualProject/>
      <WebProjects/>
      <section className='main_section-app'>
        <h1 className='title_mainSection'> Apps </h1>
        <p className='subtitle_mainSection'> The best expeiencia the gestion de Foods </p>
        <p className='reference_mainSection'> Learn more </p>
        <img src="" alt="" />
      </section>

      <h3> Proyectos Backend </h3>
    </div>
  )

  
}