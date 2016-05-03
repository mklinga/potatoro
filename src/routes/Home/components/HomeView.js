import React from 'react'

export const HomeView = (props) => (
  <div>
    <h2>Home View</h2>
    {props.running
      ? <span>Running</span>
      : <span>Not running</span>}
  </div>
)

HomeView.propTypes = {
  running: React.PropTypes.bool.isRequired
}

export default HomeView
