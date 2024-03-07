import React from 'react'
import imageA1 from "../assets/about_head.jpg"
import "../styles/About.css"
function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
            style={{ backgroundImage: `url(${imageA1})` }}
        ></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>{'\t'}Proiectul propus reprezintă un magazin online dedicat iubitorilor de flori, oferind o experiență inedită de cumpărare. În esență, acest site electronic pentru comerț cu flori servește drept platformă
virtuală pentru achiziționarea și explorarea unei game variate de aranjamente florale perfecte pentru orice fel de eveniment, precum si pentru a fi
oferite cadou pentru persoanele dragi.</p>
            <p>{'\t'}Cu o structură solidă și intuitivă, proiectul se bazează pe o bază de date eficientă, menită să stocheze informații detaliate despre fiecare achiziție
efectuată de către utilizatori. Această abordare asigură o gestionare eficientă a istoricului de cumpărături, oferind totodată posibilitatea
utilizatorilor să-și personalizeze experiența de cumpărare în funcție de preferințe și necesități.</p>
            <p>{'\t'}Interfața prietenoasă a sistemului facilitează navigarea fluidă și plăcută pentru utilizatori.
Astfel clienții în căutare de aranjamente florale sau de soluții personalizate pentru ocazii speciale
vor beneficia de o experiență de cumpărare simplificată și plină de bucurie.</p>
        </div>
        
    </div>
  )
}
export default About