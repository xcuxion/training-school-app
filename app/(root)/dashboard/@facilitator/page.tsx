import MainContent from '@/app/school/(student)/learning-space/main-content'
import SideSection from '@/app/school/(student)/learning-space/side-section'
import React from 'react'

const FacilitatorDashboard = () => {
  return (
    <div className='w-full '>
        <MainContent className=''>
            Heya, I am the main
        </MainContent>
        <SideSection>
            Hey, I am on the side
        </SideSection>
    </div>
  )
}

export default FacilitatorDashboard