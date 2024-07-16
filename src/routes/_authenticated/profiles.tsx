import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/profiles')({
  component: () => <div>User Profile Page</div>,
});