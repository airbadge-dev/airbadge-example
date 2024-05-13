import { sequence } from '@sveltejs/kit/hooks'
import * as Sentry from '@sentry/sveltekit'
import { SvelteKitAuth } from '@airbadge/sveltekit'

// use GitHub OAuth provider
import GitHub from '@auth/core/providers/github'

// use Prisma database adapter
import { PrismaAdapter } from '@auth/prisma-adapter'

// import Prisma client for database adapter
import { PrismaClient } from '@prisma/client'

// import env vars for OAuth client
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private'

Sentry.init({
  dsn: 'https://675b8cd6559a5a4806ea76b1d32ff1d3@o4506863366832128.ingest.us.sentry.io/4506863375220736',
  enableTracing: false,
  tracesSampleRate: 1
})

// init database client
const db = new PrismaClient()

// add Auth.js + Stripe handler
// API is similar to Auth.js
export const handle = sequence(
  Sentry.sentryHandle(),
  SvelteKitAuth({
    adapter: PrismaAdapter(db),
    providers: [
      GitHub({
        clientId: GITHUB_ID,
        clientSecret: GITHUB_SECRET
      })
    ],

  })
)
export const handleError = Sentry.handleErrorWithSentry()
