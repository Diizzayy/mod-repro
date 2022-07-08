import { GraphQLClient } from 'graphql-request'
import { useAsyncData } from '#imports'

export const useSpaceX = (q: string) => {
  const client = new GraphQLClient('https://api.spacex.land/graphql')

  return useAsyncData(q, () => client.request(q))
}
