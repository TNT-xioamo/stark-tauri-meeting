import React, { type PropsWithChildren, memo, useEffect } from 'react'
// import { window } from '@tauri-apps/api'
import JMSZoomOperate from './children/room-operate'
import './room-style.css'
import { ZoomContainer } from './room-style'

function JMSConferenceRoom(_props: PropsWithChildren<{}>): JSX.Element {
  useEffect(() => {
    const handleBeforeUnload = async (event: any) => {
      event.preventDefault();
      event.returnValue = false;
      event.returnValue = 'Do you want to save your data before closing?'
      // if (shouldClose) {
      //   // 在这里执行保存数据的逻辑
      //   // 通过与Rust后端通信，使用 tauri.promisified.invoke
      //   // const saveDataResponse = await window?.tauri?.promisified.invoke({ cmd: 'saveData' })
      //   // console.log(saveDataResponse); // 处理保存数据的回应
      // }
    }
    // window.addEventListener('beforeunload', handleBeforeUnload);
    // return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [])
  return (
    <>
      <ZoomContainer>
        <JMSZoomOperate />
      </ZoomContainer>
    </>
  )
}

export default memo(JMSConferenceRoom)