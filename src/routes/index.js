// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

import Edit from './Edit'

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: CoreLayout,
    indexRoute: Home(store),
    childRoutes: [
      Edit(store)
    ]
  }

  return routes
}

export default createRoutes
