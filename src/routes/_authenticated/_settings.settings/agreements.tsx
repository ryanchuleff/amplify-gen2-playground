import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_settings/settings/agreements')({
  component: () => <div>Hello /_authenticated/_settings/agreements!</div>
})