
import { JobCard } from "./jobCard"
import { type JobsData } from "./jobCard"

type JobListingProps = {
    jobs: JobsData
}

export function JobListing({ jobs }: JobListingProps) {

   return (
    <article>
        {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
        ))}
    </article>
   )
}