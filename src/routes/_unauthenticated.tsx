import { Outlet, createFileRoute } from '@tanstack/react-router';
import { clientQueryOptionsBySlug } from '@/services/client';
import { logger } from '@/utils/logger';

export const Route = createFileRoute('/_unauthenticated')({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
  beforeLoad: async () => {
    logger.debug('[DEBUG] | Loading unauthenticated layout');
  },
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(clientQueryOptionsBySlug(context.clientId))
  ,
});