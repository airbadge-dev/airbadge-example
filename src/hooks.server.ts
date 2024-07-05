import { sequence } from '@sveltejs/kit/hooks'
import * as Sentry from '@sentry/sveltekit'
import { SvelteKitAuth } from '@airbadge/sveltekit'

// use GitHub OAuth provider
import GitHub from '@auth/sveltekit/providers/github'

// use Prisma database adapter
import { PrismaAdapter } from '@auth/prisma-adapter'

// import Prisma client for database adapter
import { PrismaClient } from '@prisma/client'

Sentry.init({
  dsn: 'https://675b8cd6559a5a4806ea76b1d32ff1d3@o4506863366832128.ingest.us.sentry.io/4506863375220736',
  enableTracing: false,
  tracesSampleRate: 1
})

// init database client
const db = new PrismaClient()

// add Auth.js + Stripe handler
// API is similar to Auth.js
const { handle: handleAuth } = SvelteKitAuth({
  adapter: PrismaAdapter(db),
  providers: [ GitHub ],
  trustHost: true
})

export const handle = sequence(
  Sentry.sentryHandle(),
  handleAuth,
)

export const handleError = Sentry.handleErrorWithSentry()
