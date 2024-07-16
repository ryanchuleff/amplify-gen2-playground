import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_schedule')({
  component: () => <div>Hello /_authenticated/_schedule!</div>
})