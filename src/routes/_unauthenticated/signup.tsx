import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_unauthenticated/signup')({
  component: () => <div>Signup Page</div>,
});