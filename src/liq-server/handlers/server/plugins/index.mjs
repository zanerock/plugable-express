import { handlers as registriesHandlers } from './registries'

import * as addHandler from './add'
import * as detailsHandler from './details'
import * as listHandler from './list'
import * as removeHandler from './remove'

const handlers = [addHandler, detailsHandler, listHandler, removeHandler, ...registriesHandlers]

export { handlers }
