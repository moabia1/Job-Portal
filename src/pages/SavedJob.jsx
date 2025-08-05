import { getSavedJob } from '@/api/apiJobs'
import JobCard from '@/components/JobCard'
import useFetch from '@/hooks/useFetch'
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinners'

const SavedJob = () => {
  const { isLoaded, user } = useUser();

  const {
    loading: loadingSavedJobs,
    data: savedJob,
    fn: fnSavedJobs
  } = useFetch(getSavedJob)


  useEffect(() => {
    if (isLoaded) fnSavedJobs();
  }, [isLoaded])
  

  if (!isLoaded || loadingSavedJobs) {
    return <BarLoader width={"100%"} color='#36d7b7'/>
  }
  return (
    <div>
      <h1 className="gradient gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Saved Jobs
      </h1>

      {loadingSavedJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedJob?.length ? (
            savedJob.map((saved) => {
              return (
                <JobCard
                  key={saved.id}
                  job={saved?.job}
                  savedInit={true}
                  onJobSaved={fnSavedJobs}
                />
              );
            })
          ) : (
            <div>No Saved Jobs Found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SavedJob