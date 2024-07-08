import React from 'react'

const Close = ({ height = 28, width = 28, ...args }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} enableBackground="new 0 0 24 24" viewBox="0 0 24 
    24"
      {...args}>
      <path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M15.7,14.3c0.4,0.4,0.4,1,0,1.4 c-0.4,0.4-1,0.4-1.4,0L12,13.4l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L8.3,9.7c-0.4-0.4-0.4-1,0-1.4 c0.4-0.4,1-0.4,1.4,0l2.3,2.3l2.3-2.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L13.4,12L15.7,14.3z"></path>
    </svg>
  )
}

export default Close