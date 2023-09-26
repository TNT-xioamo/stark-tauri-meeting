import React, { type PropsWithChildren, memo } from 'react'
import { ConferenceWallpaper } from './conference-style-page'
import { DiIonic } from 'react-icons/di'
import { BiSolidPlusCircle, BiSolidChart, BiSolidCalendarCheck } from 'react-icons/bi'


function JMSConferenceMain(_props: PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <ConferenceWallpaper>
        <div className='conten flex-center'>
          <div className='cont-main flex'>
            <div className='item flex-center'>
              <BiSolidPlusCircle />
              <span>加入会议</span>
            </div>
            <div className='item flex-center'>
              <BiSolidChart />
              <span>快速会议</span>
            </div>
            <div className='item flex-center'>
              <BiSolidCalendarCheck />
              <span>预定会议</span>
            </div>
          </div>
          <div className='cont-icon'><DiIonic size={256} /></div>
        </div>
      </ConferenceWallpaper>
    </>
  )
}

export default memo(JMSConferenceMain)