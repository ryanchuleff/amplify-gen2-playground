import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'
import { queryOptions /*, useMutation */} from '@tanstack/react-query'
import { logger } from '@/utils/logger'

const amplifyClient = generateClient<Schema>({
  authMode: 'userPool'
})

export const searchProfilesByLookup = (lookup: string) => 
  queryOptions({
    queryKey: ['autocomplete-profiles'],
    queryFn: async () => {
      const response = await amplifyClient.queries.searchUsers(
        { lookup },
      )
      const results = response.data

      if (!results) {
        logger.error('[ERROR] | AutoComplete Profile Search Failure', response)
        return null;
      }
      logger.debug('[DEBUG] | AutoComplete Profile Search Results', results);

      return results;
    }
  });