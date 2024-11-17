import React from 'react'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'

const page = () => {
  return (
    <div className='max-w-screen max-h-screen'>
      <Hero />


      <div className='flex flex-col items-center py-10'>
        <ProjectGrid />
      </div>
    </div>
  )
}

export default page
