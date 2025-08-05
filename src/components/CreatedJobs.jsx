import { getApplications } from "@/api/apiApplications";
import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { use, useEffect } from "react";
import { BarLoader } from "react-spinners";
import JobCard from "./JobCard";

const CreatedJobs = () => {
  const { user, isLoaded } = useUser();

  const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreateJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });
  useEffect(() => {
    fnCreateJobs();
  },[]);

  if (loadingCreatedJobs) {
    return <BarLoader width={"100%"} color="#36d7b7" />;
  }
  return (
    <div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {createdJobs?.length ? (
          createdJobs?.map((job) => {
            return (
              <JobCard
                key={job.id}
                job={job}
                onJobSaved={fnCreateJobs}
                isMyJob
              />
            );
          })
        ) : (
          <div>No Jobs Found</div>
        )}
      </div>
    </div>
  );
};

export default CreatedJobs;
