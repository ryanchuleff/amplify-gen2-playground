import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_profile/profile/$profileId/activities')({
  component: () => <div>Hello /_authenticated/_profile/$profileId/activities!</div>
})