import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_point-of-sale/point-of-sale/')({
  component: () => <div>Hello /_authenticated/_point-of-sale/!</div>
})