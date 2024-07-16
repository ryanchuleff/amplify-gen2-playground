import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_settings/settings/categories')({
  component: () => <div>Hello /_authenticated/_settings/categories!</div>
})