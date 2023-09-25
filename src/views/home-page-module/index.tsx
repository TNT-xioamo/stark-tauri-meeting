import React, { memo, useRef, useState } from 'react'
import { HomeWallpaper } from './home-style-page'
import { Image, Space } from 'antd'

import workGif from '@/assets/image/gif/home.gif'
export default memo(function JMSHomeMain() {
  const [ isStartOpen, setStartOpen ] = useState(false)
  const refStart =  useRef<HTMLDivElement>(null)
  const _handle_start = () => {
    if (!isStartOpen) {
      refStart.current?.classList.add('slide-in-bottom')
      refStart.current?.classList.remove('slide-out-bottom')
    } else {
      refStart.current?.classList.add('slide-out-bottom')
      // refStart.current?.classList.remove('slide-in-bottom')
    }
    setStartOpen(!isStartOpen)
  }
  const _handle_ok = ()  => {

  }
  return (
    <>
      <HomeWallpaper>
        <div className='workbench flex-center'>
          <Image width={300} src={workGif} preview={false} alt="" className='workbench-gif' />
          <div className='sys-stark flex-center'>
            <p className='sys-hello'>欢迎使用 Stark X</p>
            <Space className='stark-start flex-center'>
              <div className='start-cor flex-center' onClick={() => _handle_start()}>开启</div>
            </Space>
          </div>
          <div ref={refStart} className='start-modal'></div>
        </div>
      </HomeWallpaper>
    </>
  )
})