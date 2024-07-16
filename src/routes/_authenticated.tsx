import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import { clientQueryOptionsBySlug } from '@/services/client';
import { getUserByAuth } from '@/services/user';
import { logger } from '@/utils/logger';

export const Route = createFileRoute('/_authenticated')({
  component: () => (
    <div>
      <h1>Your in the Authenticated Layout</h1>
      <nav>
        {/* Add navigation menu items */}
      </nav>
      <Outlet />
    </div>
  ),
  beforeLoad: async ({ context }) => {
    logger.debug('[DEBUG] | Loading authenticated layout');

    if (context.auth !== 'authenticated') {
      // logger.warn('[WARN] | User not authenticated');
      // await context.queryClient.cancelQueries(clientQueryOptionsBySlug(context.clientId))
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(clientQueryOptionsBySlug(context.clientId))
    context.queryClient.ensureQueryData(getUserByAuth())
  },
});