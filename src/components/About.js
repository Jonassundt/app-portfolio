import React from 'react'
import ButtonFrost from './ButtonFrost';
import PhotoTransition from './PhotoTransition';
import logoNORWAI from '../images/logo_NorwAI.png';
import logoNTNU from '../images/logo_ntnu.png';

export const About = () => {

    return (
        <div className='container'>
            <div className='inner-container'>
                <div className='phototransition-container'>
                    <PhotoTransition height="300px" width="300px" />
                </div>
                <h2>Om</h2>
                <h4>Jeg heter Jonas og er nettopp ferdigutdannet på Datateknologi ved NTNU Trondheim,
                    der jeg skrev masteroppgave innen Kunstig Intelligens. Ved siden av studiet har
                    jeg jobbet ved NorwAI som forskningsassistent, både i sommerjobb og deltidsjobb
                    ved siden av studiet.</h4>
                
                {/* Logos container */}
                <div className='logos-container'>
                    <img src={logoNORWAI} alt="NorwAI Logo" className="logo logo-norwai" onClick={() => window.open("https://www.ntnu.edu/norwai", "_blank")}/>
                    <img src={logoNTNU} alt="NTNU Logo" className="logo logo-ntnu" onClick={() => window.open("https://www.ntnu.no/", "_blank")}/>
                </div>
                
                <ButtonFrost onClick={() => alert("Send epost til jonassundt98@gmail.com")}>KONTAKT</ButtonFrost>


            </div>
        </div>
    )
}

export default About


