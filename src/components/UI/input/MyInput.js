import React from 'react'

import classes from './MyInput.module.css'

// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} />
})

export default MyInput
