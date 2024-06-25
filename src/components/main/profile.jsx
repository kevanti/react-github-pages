import kevin from '../../img/kevin.jpg'
import facebook from '../../img/facebook.svg'
import linkedin from '../../img/linkedin.svg'
import github from '../../img/github.svg'
import instagram from '../../img/instagram.svg'
import download from '../../img/download.svg'
function Profile(){
    return(
        <section className="main_section_profile">
            <div className="main_section_profile_container">
                <img src={kevin} alt="" className="main_section_profile_container_img" />
            </div>
            <p className="main_section_profile_name">
                Kevin Álvarez
            </p>
            <p className="main_section_profile_study">
                Desarrollo de Aplicaciones Web
            </p>
            <div className="main_section_profile_social">
                <a href="https://github.com/kevanti" className="main_section_profile_social_buttons github"><img src={github} alt="" /></a>
                <a href="" className="main_section_profile_social_buttons linkedin"><img src={linkedin} alt="" /></a>
                <a href="" className="main_section_profile_social_buttons instagram"><img src={instagram} alt="" /></a>
                
            </div>
            <a href="/img/kevin.pdf" className="main_section_profile_cv" download="kevin.pdf"><img src={download} alt="" /> Descargar CV</a>
        </section>
    )
}
export {Profile};