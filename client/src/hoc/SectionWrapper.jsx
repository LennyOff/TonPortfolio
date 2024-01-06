import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        style={{position:"relative",zIndex:'0',width:"100%"}}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

