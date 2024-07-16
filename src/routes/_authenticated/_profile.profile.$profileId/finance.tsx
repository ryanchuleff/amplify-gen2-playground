import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_profile/profile/$profileId/finance')({
  component: () => <div>Hello /_authenticated/_profile/$profileId/finance!</div>
})