import React from 'react'
import ButtonFrost from './ButtonFrost';
import PhotoTransition from './PhotoTransition';

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
                <ButtonFrost onClick={() => alert("Send epost til jonassundt98@gmail.com")}>KONTAKT</ButtonFrost>
            </div>
        </div>
    )
}

export default About


