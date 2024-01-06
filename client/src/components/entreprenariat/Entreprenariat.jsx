import React from 'react'
import './entreprenariat.css'
import {entreprises} from '../../constants/index'

import { motion } from 'framer-motion';
import { SectionWrapper } from "../../hoc";
import { fadeIn } from '../../utils/motion';

const EntCard = ({index,entreprise}) => {
    return(
        <motion.div variants={fadeIn("right","spring",index,.5)} className='entCard'>
            <div className='entNames'>
                <p >{entreprise.name}</p>
            </div>
            <div className='entInfos'>
                <p>{entreprise.infos}</p>
            </div>
            <div className='entNumeroSiren'>
                <p>Siren : #{entreprise.siren}</p>
            </div>
        </motion.div> 
    )
}

const Entreprenariat = () => {
  return (
    <div className='entreprenariat'>
        <div className='entreprenariatTitle'>
            <h1>-Entreprenariat-</h1>
        </div>
        <div className='entreprenariatContent'>
            {entreprises.map((entreprise,index)=>(
                <EntCard key={entreprise.id} index={index} entreprise={entreprise} />
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Entreprenariat, "");