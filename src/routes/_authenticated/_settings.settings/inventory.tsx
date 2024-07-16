import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_settings/settings/inventory')({
  component: () => <div>Hello /_authenticated/_settings/inventory!</div>
})