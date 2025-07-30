import React from 'react'
import Card from './Card'

const ForeGroung = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit am grgrgrwgrbkhgvr adipisicing elit. Sequi, saepe. ",
      filsize: ".9mb",
      close: false,
      tag: { isopen: true, TagTitle: "Downloadnow", tagcolor: "green" }
    },
    {
      desc: "Lorem ipsum dolor sit am grgrgrwgrbkhgvr adipisicing elit. Sequi, saepe. ",
      filsize: ".9mb",
      close: false,
      tag: { isopen: true, TagTitle: "Downloadnow", tagcolor: "blue" }
    },
    {
      desc: "Lorem ipsum dolor sit afetsrkhgvr adipisicing elit. Sequi, saepe. ",
      filsize: ".9mb",
      close: true,
      tag: { isopen: true, TagTitle: "Downloadnow", tagcolor: "green" }
    },
    // Add more cards if needed
  ]

  return (
    <div className='relative w-full min-h-screen bg-blue-100/50 z-[3] p-5 overflow-y-auto'>
      <div className='flex flex-wrap gap-5'>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ForeGroung
