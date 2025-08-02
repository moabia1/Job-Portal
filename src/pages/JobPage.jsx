import { getSingleJob } from '@/api/apiCompanies';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import { Briefcase, MapPinIcon } from 'lucide-react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const JobPage = () => {

  const { isLoaded, user } = useUser();
  const { id } = useParams();
  

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded])
  

  if (!isLoaded || loadingJob) {
    return <BarLoader className='mb-4' width={"100%"} color='#36d7b7'/>
  }

  return (
    <div className='flex flex-col gap-8 mt-7'>
      <div className='flex flex-col-reverse gap-6 md:flex-row justify-between items-center'>
        <h1 className='gradient gradient-title font-extrabold pb-3 sm:text-6xl'>{job?.title}</h1>
        <img src={job?.company?.logo_url} alt={job?.title}  className='h-12'/>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <MapPinIcon/>
          {job?.location}
        </div>

        <div className='flex gap-2'>
          <Briefcase />
          {job?.applications?.length} Applicants
        </div>
      </div>
    </div>
  )
}

export default JobPage