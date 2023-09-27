import React, { type PropsWithChildren, memo, useState, useRef } from 'react'
import { DiIonic } from 'react-icons/di'
import { BiSolidPlusCircle, BiSolidChart, BiSolidCalendarCheck } from 'react-icons/bi'
import JMSModalConference from './children/modal-conference'
import { ConferenceWallpaper } from './conference-style-page'


function JMSConferenceMain(_props: PropsWithChildren<{}>): JSX.Element {
  const [modalOpen, setModalOpen]: any = useState(void 0)
  const refIcon = useRef<HTMLDivElement>(null)

  const _handle_conference_click = (key?: String) => {
    setModalOpen(key)
  }

  return (
    <>
      <ConferenceWallpaper>
        <div className='conten flex-center'>
          <div className='cont-main flex'>
            <div className='item flex-center' onClick={() =>_handle_conference_click('join')}>
              <BiSolidPlusCircle />
              <span>加入会议</span>
            </div>
            <div className='item flex-center' onClick={() =>_handle_conference_click('fast')}>
              <BiSolidChart />
              <span>快速会议</span>
            </div>
            <div className='item flex-center' onClick={() =>_handle_conference_click('booking')}>
              <BiSolidCalendarCheck />
              <span>预定会议</span>
            </div>
          </div>
          <div ref={refIcon} className={`cont-icon ${ !modalOpen && 'icon-andt'}`}>
            <DiIonic size={256} color="#e46490"  />
            <JMSModalConference isModalOpen={modalOpen} setClose={setModalOpen} />
          </div>
        </div>
      </ConferenceWallpaper>
    </>
  )
}

export default memo(JMSConferenceMain)