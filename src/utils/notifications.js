/* @flow */
export const getNotificationPermission = (): Promise => {
  return Notification.requestPermission()
}

export const showNotification = (title: string, options: { body: string }): Object => {
  return new Notification(title, options)
}
