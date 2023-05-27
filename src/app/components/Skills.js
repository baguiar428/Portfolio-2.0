import React from "react";
import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark cursor-progress absolute"
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5 }}
        // To make the "solar system" expand only once.
        viewport={{once: true}}
        >
          {name}
        </motion.div>  
    )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light 
        p-8 shadow-dark cursor-progress"
        whileHover={{scale:1.05}}>
          Web
        </motion.div>
        <Skill name="HTML" x="-24vw" y="2vw"/>
        <Skill name="CSS" x="-5vw" y="-10vw"/>
        <Skill name="Javascript" x="21vw" y="6vw"/>
        <Skill name="ReactJS" x="0vw" y="10vw"/>
        <Skill name="Next.js" x="-20vw" y="-15vw"/>
        <Skill name="Rails" x="19vw" y="-12vw"/>
        <Skill name="Unix" x="32vw" y="-5vw"/>
        <Skill name="Web Design" x="0vw" y="-21vw"/>
        <Skill name="Tailwind CSS" x="-27vw" y="18vw"/>
        <Skill name="Material UI" x="19vw" y="18vw"/>




      </div>
    </>
  );
};

export default Skills;
