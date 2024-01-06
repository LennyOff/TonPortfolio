import React from 'react'
import './about.css'

import { motion } from 'framer-motion';
import { SectionWrapper } from "../../hoc";
import { fadeIn } from '../../utils/motion';


const Card = ({id,title,desc}) => {
  return(
    <motion.div variants={fadeIn("up","spring",id*0.5,0.75)} className='stratCard'>
      <div className='stratTitle'>
        <h1 className='stratTitleText'>{title}</h1>
      </div>
      <div className='stratDescription'>
        <p className='stratDescriptionText'>{desc}</p>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <div className='about'>
      <div className='aboutContent'>
        <motion.div variants={fadeIn("","spring",0.5,0.75)} className='contentTitle'>
          <h1>-Mes stratégies de Trading-</h1>
        </motion.div>
        <div className='contentCards'>
          <Card id='1' title="News Trading" desc="Se baser sur les grandes actualitées économiques afin d'éviter les périodes a haute volatilité pour garantir un meilleur randemant sur le long terme."/>
          <Card id='2' title="Trend following" desc="Suivre la tendance générale du marché pour evité de prendre des risques inutiles ou de prendre des trades a faible chances de réussite."/>
          <Card id='3' title="Technical analysis" desc="Analise approfondie du marché a l'aide d'indicateurs techniques poussés et maitrisés pour garantir des trades gagnants."/>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, "");

// en fontion des infos récentes , en fonction du marché pour eviter des risques innutiles (unnecessary) , analyse poussée du marchée a l'aide d'indicateurs