import React, { memo } from 'react'
import './loding-style.css'
function JMSLoading(): JSX.Element {
  return (
    <div className='loading-controller flex-center'>
      <div className="loading"><div></div><div></div></div>
    </div>
  )
}
export default memo(JMSLoading)