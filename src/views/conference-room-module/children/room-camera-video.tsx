import React, { type PropsWithChildren, memo, useEffect, useState, useRef } from 'react'


function JMSZoomCamera(_props: PropsWithChildren<{ camera: Array<any> }>): JSX.Element {
  return (
    <>
      <div className='zoom-camera'></div>
    </>
  )
}
export default memo(JMSZoomCamera)
