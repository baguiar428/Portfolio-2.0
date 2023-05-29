import React, {useRef} from "react";
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ type, time, place }) => {
    
    const ref = useRef(null);
  
    return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}>
        <h3 className="capitalize font-bold text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        {/* To add info description include below 
            and add "w=info" as argument to "Details"  */}
        {/* <p className="font-medium w-full">
                {info}
            </p> */}
      </motion.div>
    </li>
  );
};

const Education = () => {
    const ref = useRef(null); 
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">

        <motion.div
        style={{scaleY: scrollYProgress}}
className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"/>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Software Engineering Certificate"
            time="Sep 2022 - Jan 2023"
            place="Flatiron School"
          />
          <Details
            type="LPIC-1: Linux Administrator Certification"
            time="Aug 2017"
            place="Linux Professional Institute (LPI)"
          />
          <Details
            type="Bachelors Degree in Liberal Arts, Information Technology"
            time="Jan 2015 - May 2017"
            place="Rutgers University, New Brunswick"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;