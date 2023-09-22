import React, { memo } from 'react'
import { HomeWallpaper } from './home-style-page'
import { Button, Image, Space } from 'antd';

import workGif from '@/assets/image/gif/home.gif'
export default memo(function JMSHomeMain() {
  
  return (
    <>
      <HomeWallpaper>
        <div className='workbench flex-center'>
          <Image width={300} src={workGif} preview={false} alt="" className='workbench-gif' />
          <div className='sys-stark flex-center'>
            <p className='sys-hello'>欢迎使用 Stark X</p>
            <div className='stark-start flex-center'>
              <div className='start-cor flex-center'>开启</div>
            </div>
          </div>
        </div>
      </HomeWallpaper>
    </>
  )
})