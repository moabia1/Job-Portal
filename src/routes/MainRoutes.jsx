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
import ProtectedRoutes from './ProtectedRoutes'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/onboarding"
          element={
            <ProtectedRoutes>
              <OnBoarding />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoutes>
              <JobListing />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/job/:id"
          element={
            <ProtectedRoutes>
              <JobPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/post-job"
          element={
            <ProtectedRoutes>
              <PostJob />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/saved-jobs"
          element={
            <ProtectedRoutes>
              <SavedJob />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/my-jobs"
          element={
            <ProtectedRoutes>
              <MyJobs />
            </ProtectedRoutes>
          }
        />
      </Route>
    </Routes>
  );
}

export default MainRoutes