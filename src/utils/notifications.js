/* @flow */
export const getNotificationPermission = (): Promise => {
  return window.Notification.requestPermission()
}

export const showNotification = (title: string, options: { body: string }): Object => {
  return new window.Notification(title, options)
}
