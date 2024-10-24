import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId , baseUrl } from '../env'

export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:"production",
  apiVersion:"2024-10-17",
  token:process.env.TOKEN,
 useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})





