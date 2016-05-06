import { getNotificationPermission, showNotification } from 'utils/notifications'

describe('(Utils) Notifications', () => {
  it('Should be able to ask for permissions', () => {
    getNotificationPermission.should.be.a('function')

    // This is due to PhantomJS, it *should* return a Promise when implemented properly
    expect(getNotificationPermission()).to.be.undefined
  })

  it('Should be able to show notifications', () => {
    showNotification.should.be.a('function')
    const _notification = showNotification('Title', { body: 'Body' })
    expect(_notification).to.have.property('show')
  })
})

