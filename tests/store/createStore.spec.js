import createStore from 'store/createStore'
import { useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

describe('(Store) createStore', () => {
  let _store

  const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: __BASENAME__
  })

  beforeEach(() => {
    _store = createStore({}, browserHistory)
  })

  it('Should return an object', () => {
    expect(typeof _store).to.equal('object')
  })
})

