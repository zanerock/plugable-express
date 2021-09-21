// import asyncHandler from 'express-async-handler'
import express from 'express'

import { handlers } from './handlers'

const app = express()
const cache = new WeakMap()

app.initialized = false

app.initialize = ({ model, reporter = console }) => {
  for (const handler of handlers) {
    reporter.log(`registering handler for path: ${handler.verb.toUpperCase()}:${handler.path}`)
    app[handler.verb](handler.path, handler.func({ cache, model, reporter }))
  }
  
  app.initialized = true
  
  return app
}

export { app }
