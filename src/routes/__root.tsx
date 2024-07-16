import NiceModal from '@ebay/nice-modal-react';
import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

interface RouterContext {
  auth: string
  clientId: string
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: () => {
    return {
      clientId: window.location.host.split('.')[0]
    }
  },
  component: () => (
    <NiceModal.Provider>
      <Outlet />
    </NiceModal.Provider>
  ),
});
