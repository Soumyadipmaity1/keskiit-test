import EventHighlights from '@/components/HomePage/event-highlights'
import GuidingPillars from '@/components/HomePage/GuidingPillers'
import { HeroSection } from '@/components/HomePage/HeroASection'
import NoticeboardComponent from '@/components/HomePage/noticeboard'
// import OurJourney from '@/components/HomePage/Our-journey'
import StatisticsComponent from '@/components/HomePage/Statistics'
import TestimonialSection from '@/components/HomePage/testimonials'
import React from 'react'

function page() {
  return (
    <div className='w-full'>
      <HeroSection/>
      <StatisticsComponent/>
      <NoticeboardComponent/>
      <EventHighlights/>
      {/* <OurJourney/> */}
      <GuidingPillars/>
      <TestimonialSection/>
    </div>
  )
}

export default page
