import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_settings/settings/accounts')({
  component: () => <div>Hello /_authenticated/_settings/accounts!</div>
})