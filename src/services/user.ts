import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'
import { queryOptions /*, useMutation */} from '@tanstack/react-query'
import { logger } from '@/utils/logger'
import { getCurrentUser } from 'aws-amplify/auth';

const amplifyClient = generateClient<Schema>({
  authMode: 'userPool'
})

export const getUserByAuth = () => 
  queryOptions({
    queryKey: ['autocomplete-profiles'],
    queryFn: async () => {
      const { userId } = await getCurrentUser();
      const response = await amplifyClient.models.User.get(
        { id: userId },
      )
      const results = response.data

      if (!results) {
        logger.error('[ERROR] | Current User Fetch Failure', response)
        return null;
      }
      logger.debug('[DEBUG] | Current User Fetch Results', results);

      return results;
    }
  });