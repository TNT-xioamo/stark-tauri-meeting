import React, { type PropsWithChildren, useEffect, useState, useRef } from 'react'
import { Button, Watermark } from 'antd'

import { observer } from 'mobx-react-lite'
import { AiOutlineAudio, AiOutlineAudioMuted, AiOutlineTeam, AiOutlineUsergroupAdd, AiTwotoneSetting } from 'react-icons/ai'
import { FaVideo, FaVideoSlash } from 'react-icons/fa'
import { MdScreenShare, MdStopScreenShare } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'
import { PiRecordDuotone } from 'react-icons/pi'
import { useStore } from '@/store'
import { _create_peer, _recording_media, _remove_keyboard_sound } from '@/utils'




function JMSZoomOperate(_props: PropsWithChildren<{ callBack: Function }>): JSX.Element {
  const [userMedia, setUserMedia] = useState([])
  const [audioWave, setAudioWave] = useState(0)
  const { roomStore } = useStore()
  const { mediaState } = roomStore.zoomInfo
  const [mediaStreamTrack, setMediaStreamTrack] = useState<MediaStream>()

  const [videoConstraint] = useState({
    video: { width: { min: 1280}, height: { min: 720}, facingMode: 'environment' },
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true}
  })
  const liveVideo = useRef<HTMLVideoElement>(null)
  const liveAudio = useRef<HTMLAudioElement>(null)


  useEffect(() => {
  }, userMedia)

  const _get_user_media = () => {
    _recording_media(videoConstraint, (stream: MediaStream) => {
      setMediaStreamTrack(stream)
      _props.callBack(false)
      _handle_live_audio(stream)
    }, () => {})
  }

  const _get_user_devices = async () => {
    const userDevices = await navigator.mediaDevices.enumerateDevices()
    const mics = userDevices.filter(d => d.kind === 'audioinput')
    const selectedMic = mics[0]
    const constraints = { audio: { deviceId: selectedMic.deviceId }}
  }

  const _handle_live_void = () => {

  }


  const _handle_live_audio = (stream?: MediaStream) => {
    try {
      if (liveAudio.current) {
        // liveAudio.current.srcObject = _remove_keyboard_sound(stream ?? mediaStreamTrack)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const _handle_screen_share = () => {
    try {
      // roomStore.SET_MEDIA_STATE({ isShare: !mediaState?.isShare })
    } catch (error) {
      
    }
  }
  const _handle_invite_users = async () => {}

  const _handle_group_users = async () => {}

  return (
    <>
      <div className='zoom-default flex-center'>
        <Watermark font={{ color: 'rgba(0, 0, 0, 0.1)' }} className='zoom-watermark' content="Stark X">
          <video ref={liveVideo} id='liveVideo' src="" className='zoom-void' playsInline muted width="100%" height="100%"></video>
        </Watermark>
        <audio ref={liveAudio} id='liveAudio' src="" controls autoPlay className='zoom-audio'></audio>
        <div className='user-canvas' id='user-annotations'></div>
        <div className="zoom-operate flex-center">
          <div className='operate-media flex'>
            <div className='audio operate-user_item flex flex-column' onClick={() => _handle_live_audio()}>
              { mediaState?.isAudio ? <AiOutlineAudio size={21} /> : <AiOutlineAudioMuted size={21} /> }
              <div className='audio-voice flex flex-column flex-j-e'><div className='audio-wave' style={{ height: `${audioWave}px` }}></div></div>
            </div>
            <div className='void operate-user_item flex-center' onClick={() => _handle_live_void()}>{ mediaState?.isVideo ? <FaVideo size={21} /> : <FaVideoSlash size={21} /> }</div>
          </div>
          <div className='operate-user flex flex-j-b'>
            <div className='operate-user_item flex-center' onClick={() => _handle_screen_share()}>{ mediaState?.isShare ? <MdScreenShare  size={21} /> : <MdStopScreenShare size={21} /> }</div>
            <div className='operate-user_item flex-center' onClick={() => _handle_invite_users()}><AiOutlineUsergroupAdd size={21} /></div>
            <div className='operate-user_item flex-center' onClick={() => _handle_group_users()}><AiOutlineTeam size={21} /></div>
            <div className='operate-user_item flex-center'><RiMessage2Fill size={21} /></div>
            <div className='operate-user_item flex-center'><PiRecordDuotone size={21} /></div>
            <div className='operate-user_item flex-center'><AiTwotoneSetting size={21} /></div>
          </div>
          <div className='operate-over flex flex-j-e'><Button danger shape="round">结束会议</Button></div>
        </div>
      </div>
    </>
  )
}

export default observer(JMSZoomOperate)
