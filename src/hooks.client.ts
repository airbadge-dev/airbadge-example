import { handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit'
import * as Sentry from '@sentry/sveltekit'

Sentry.init({
  dsn: 'https://675b8cd6559a5a4806ea76b1d32ff1d3@o4506863366832128.ingest.us.sentry.io/4506863375220736',
  tracesSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // If you don't want to use Session Replay, just remove the line below:
  integrations: [replayIntegration()]
})

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry()
