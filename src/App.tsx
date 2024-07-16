import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { GlobalLoadingIndicator, Splash, NotFound } from '@/components/common';
import { Spinner, Toaster } from '@/components/ui';
import { queryClient } from '@/main';
import {
  RouterProvider,
  ErrorComponent,
  createRouter,
} from '@tanstack/react-router'
import { useEffect, Suspense } from 'react';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { generateClient } from 'aws-amplify/api';

import type { Schema } from '../amplify/data/resource'

const router = createRouter({
  routeTree,
  // context: {
  //   auth: undefined!,
  //   clientId: undefined!,
  //   // queryClient,
  // },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <Spinner />
    </div>
  ),
  defaultNotFoundComponent: () => <NotFound />,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const InnerApp = () => {
  const auth = useAuthenticator();

  return (
    <Suspense fallback={<Splash />}>  
      <RouterProvider router={router} context={{ 
        auth,
        queryClient,
      }} />
    </Suspense>
  )
};

const amplifyClient = generateClient<Schema>();

const App = () => {

  useEffect(() => {
    const fetch = async () => {
      const results = await amplifyClient.queries.getClientBySlug(
        { slug: 'samplegyms' },
        { authMode: 'identityPool' }
      )
      console.log('app levevl: ', results);
    };
    fetch();
  }, []);

  return (
    <Authenticator.Provider>
      <GlobalLoadingIndicator />

      <InnerApp />

      <Toaster />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </Authenticator.Provider> 
  );
}

export default App;
