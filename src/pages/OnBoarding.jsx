import { useUser } from '@clerk/clerk-react'
import React from 'react'

const OnBoarding = () => {
  const { user } = useUser();
  console.log(user)
  return (
    <div>OnBoarding</div>
  )
}

export default OnBoarding