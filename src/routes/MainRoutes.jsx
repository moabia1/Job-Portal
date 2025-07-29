import JobListing from '@/pages/JobListing'
import LandingPage from '@/pages/LandingPage'
import OnBoarding from '@/pages/OnBoarding'
import JobPage from '@/pages/JobPage'
import MyJobs from '@/pages/MyJobs'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostJob from '@/pages/PostJob'
import SavedJob from '@/pages/SavedJob'
import AppLayout from '@/layout/AppLayout'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/onboaring" element={<OnBoarding />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/job/:id" element={<JobPage />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/saved-jobs" element={<SavedJob />} />
        <Route path="/my-jobs" element={<MyJobs />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes