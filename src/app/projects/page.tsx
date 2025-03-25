import ProjectGallery from '@/components/projects/projectsection'
import ProjectsHeroSection from '@/components/projects/ProjectsHerosection'
import React from 'react'

function page() {
  return (
    <div className=''>
      <ProjectsHeroSection/>
      <ProjectGallery/>
    </div>
  )
}

export default page
