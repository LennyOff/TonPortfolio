
import './App.css'
import {Hero,About,Header,Contact,Entreprenariat,Projets} from './components/index'
import { motion } from "framer-motion";
import { staggerContainer } from './utils/motion';

function App() {

  return (
    <>
      <div className='background'>
        <div className='backgroundColors'>
          <motion.div 
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className='websiteContainer'
          >
            <Header/>
            <Hero/>
            <About/>
            <Entreprenariat/>
            <Projets/>
            <Contact/>
          </motion.div>
          <div className='Color1'></div>
          <div className='Color2'></div>
          <div className='Color3'></div>
          <div className='Color4'></div>
          <div className='Color5'></div>
        </div>
      </div>
    </>
  )
}

export default App
