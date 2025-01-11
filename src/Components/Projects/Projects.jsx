import React from 'react'
import './projects.css';
import Card from '../Card/Card'
import varr from '../../assets/va.png'
import fw from '../../assets/fw.png'
import tti from '../../assets/tti.png'
import br from '../../assets/br.png'
import cb from '../../assets/cb.png'

const Projects = () => {

  return (
    <div id='projects'>
        <h1 id='qa'>1 YEAR EXPERIENCE IN FRONT END DEVELOPER</h1>
            <div className="slider">
                <Card  title="VIRTUAL ASSISTENT" image={varr} />
                <Card  title="AI POWERED FITNESS WEBSITE" image={fw} />
                <Card  title="AI TEXT TO IMAGE" image={tti} />
                <Card  title="BACKGR OUND REMOVER WEBSITE" image={br}/>
                <Card  title="AI SEARCH WEBSITE" image={cb} />

            </div>

    </div>
  )
}

export default Projects