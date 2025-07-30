import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { DiApple } from "react-icons/di";
import { GiSplitCross } from "react-icons/gi";
import { motion } from "motion/react"



const Card = ({data,reference}) => {
  return (
    
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}}dragTransition={{ bounceDamping:10}}className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-600 text-white p-5 overflow-hidden'>
        
        <FaFileAlt />
        <p className='leading-tight text-sm mt-5 font-semibold'>  {data.desc}</p>
            <div className='absolute  bottom-0   h-20 left-0 w-full ' > 

                <div className='flex  h-10 items-center    justify-around   '>
                    <h5>{data.filsize}</h5>
                    <span className='h-7 w-7 rounded-full flex bg-zinc-700 
                    items-center justify-center  '>
                       {!data.close?<GiSplitCross size="0.8em " color='#fff'/>:<DiApple size="0.8em " color='#fff' />} </span>
                        
                        </div>
                        
                        
                       {
                        data.tag.isopen &&( <div className={`font-semibold w-full h-10 absolute   bottom -0 ${data.tag.tagcolor==="green"?"bg-green-300": "bg-blue-300" } flex items-center text-black justify-center`}>
                            <h3> {data.tag.TagTitle}</h3>

                        
                </div>)
                       }
            </div>
        </motion.div> 
     
  )
}

export default Card
