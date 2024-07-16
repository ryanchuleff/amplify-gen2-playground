import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'
import { queryOptions /*, useMutation */} from '@tanstack/react-query'
import { logger } from '@/utils/logger'

const amplifyClient = generateClient<Schema>();

export const clientQueryOptionsById = (clientId?: string) => 
  queryOptions({
    queryKey: ['client'],
    queryFn: async () => {
      if (!clientId) {
        logger.error('[ERROR] | Client id required!');
        return null;
      }

      const response = await amplifyClient.models.Client.get(
        { id: clientId }
      )
      const clientResults = response.data

      if (!clientResults) {
        logger.error('[ERROR] | Fetch Client (by id) Failure', response)
        return null;
      }
      logger.debug('[DEBUG] | Client Fetch (by id) Results', clientResults);

      return clientResults;
    }
  });

  export const clientQueryOptionsBySlug = (slug?: string) => 
    queryOptions({
      queryKey: ['client'],
      queryFn: async () => {
        if (!slug) {
          logger.error('[ERROR] | Client slug required!');
          return null;
        }
        logger.debug('slug: **', slug, '**');
        const response = await amplifyClient.queries.getClientBySlug(
          { slug },
          { authMode: 'identityPool' }
        )
        const clientResults = response.data
  
        if (!clientResults) {
          logger.error('[ERROR] | Fetch Client (by slug) Failure', response)
          return null;
        }
        logger.debug('[DEBUG] | Client Fetch (by slug) Results', clientResults[0]);
  
        return clientResults[0];
      }
    });