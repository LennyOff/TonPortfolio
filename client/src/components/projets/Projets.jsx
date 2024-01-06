import React,{useState} from 'react'
import {Tilt} from "react-tilt";
import './projets.css'
import arrow from '../../assets/arrow.svg'
import {projets} from '../../constants/index'
import { motion } from 'framer-motion';
import { SectionWrapper } from "../../hoc";
import { fadeIn } from '../../utils/motion';

const Employees = ({emp}) => {
    return(
        <div className='empCard'>
            <img src={emp.image} alt="" />
            <h2>{emp.name}</h2>
        </div>
    )
}

const ProjDesc = ({projet}) =>{
    return(
        <div className='projDesc'>
            <div className='projDescTitle'>
                <h1>{projet.nom}</h1>
            </div>
            <div className='projDescDesc'>
                <p>{projet.desc}</p>
            </div>
            <div className='projDescEmpContainer'>
                {projet.emps.map((emp,index)=>(
                    <Employees key={emp.id} index={index} emp={emp} />
                ))}
            </div>
        </div>
    )
}

const Proj = ({index,projet,stateChange}) => {
    const CardStyle = {
        backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 15%,
            rgba(0, 0, 0, 0.5) 35%,
            rgba(0, 0, 0, 0.3) 40%,
            rgba(0, 0, 0, 0.2) 60%,
            rgba(0, 0, 0, 0) 100%
            ),url(${projet.image})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    };

    const handleMouseEnter = (id) => {
        stateChange(id)
    }

    const handleMouseLeave = () => {
        stateChange(null)
    }

    return(
        <Tilt
        options={{
            max: 30,
            scale: 1.05,
            speed:20
          }}>
            <motion.div variants={fadeIn("","spring",index+0.5,.5)} onMouseEnter={() => handleMouseEnter(projet.id)} onMouseLeave={handleMouseLeave} className='projCard' style={CardStyle}>
                <div className='CardTopPart'></div>
                <div className='CardBottomPart'>
                    <h1>{projet.nom}</h1>
                    <p className='onMobileDesc'>{projet.desc}</p>
                </div>
            </motion.div>
        </Tilt>
    )
}

const Projets = () => {
    const [prjid, setPrjid] = useState(null)
    const stateChange = (id) =>{
        setPrjid(id)
    }

    const containerClass = 
    projets.length === 1
      ? 'projetsContenantSingle'
      : projets.length === 2
      ? 'projetsContenantDouble'
      : 'projetsContenant';

    const descriptionContainerClass =
    projets.length <= 3 ? 'projDescContainerTall' : 'projDescContainerShort';

  return (
    <div>
        <div className='spacer'>
            <img className="arrow" src={arrow} alt="" />
        </div>
        <div className='projets'>
            <div className='projetsTitle'>
                <h1>Projets en cours :</h1>
            </div>
            <div className={containerClass}>
                {projets.map((projet,index)=>(
                    <Proj key={projet.id} index={index} projet={projet} stateChange={stateChange}/>
                ))}
            </div>
            {prjid !== null 
                ? <div className={descriptionContainerClass}> <ProjDesc projet={projets[prjid]}/> </div>
                : null
            }
        </div>
    </div>
  )
}

export default SectionWrapper(Projets, "");