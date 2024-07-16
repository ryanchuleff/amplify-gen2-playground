import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_point-of-sale/point-of-sale/other')({
  component: () => <div>Hello /_authenticated/_point-of-sale/other!</div>
})