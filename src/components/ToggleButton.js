/* @flow */
import React from 'react'

type Props = {
  active: number | string,
  onChange: Function
}

export const ToggleButton = (props: Props) => {
  const selected = props.active || props.children[0].props.value

  return (
    <div>
    {React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        className: (selected === child.props.value ? 'active' : undefined),
        onClick: () => props.onChange(child.props.value)
      })
    })}
    </div>
  )
}

ToggleButton.propTypes = {
  active: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]),
  children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
}

export default ToggleButton
