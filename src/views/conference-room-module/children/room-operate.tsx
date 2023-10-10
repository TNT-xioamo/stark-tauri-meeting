import React, { type PropsWithChildren, memo, useEffect, useState, useRef } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { AiTwotoneAudio, AiOutlineDown, AiFillCamera } from 'react-icons/ai'

function JMSZoomOperate(_props: PropsWithChildren<{}>): JSX.Element {
  const [userMedia, setUserMedia] = useState([])
  const [mediaStreamTrack, setMediaStreamTrack] = useState<MediaStream>()

  const [videoConstraint, setVideoConstraint] = useState({
    width: { min: 1280},
    height: { min: 720},
    facingMode: { exact: 'environment'}
  })
  const liveVideo = useRef<HTMLVideoElement>(null)
  const liveAudio = useRef<HTMLAudioElement>(null)
  
  useEffect(() => {
    _open_user_media()
  }, userMedia)
  const _open_user_media = () => {
    navigator.mediaDevices.getUserMedia({ video: videoConstraint, audio: false }).then((stream) => {
      if (liveVideo.current) {
        liveVideo.current.srcObject = stream
        setMediaStreamTrack(stream)
        liveVideo.current.play()
      }
      // video.addEventListener('canplay', onVideoCanPlay, false)
    })
  }
  const _get_user_media = () => {
    // const cameradevices = []
    // const promise = navigator.mediaDevices.enumerateDevices().then((devices) => {
    //   devices.forEach
    //   for (let index = 0; index < devices.length; index++) {
    //     const device = devices[index]
    //     if (device.kind === 'videoinput') {
    //       cameradevices.push({ label: device.label, id: device.deviceId });
    //     }
    //   }
    // })
  }

  const _handle_live =() => {
    if (mediaStreamTrack && liveVideo.current) {
      mediaStreamTrack?.getTracks().forEach(el => {
        console.log(el)
        el.enabled = false
        el.stop()
      })
      liveVideo.current.srcObject = null
      liveVideo.current.pause()
    } else {
      console.log(mediaStreamTrack)
    }
  }
  return (
    <>
      <div className='zoom-default flex-center'>
        <video ref={liveVideo} id='liveVideo' src="" className='zoom-void' width="100%" height="100%"></video>
        <audio ref={liveAudio} id='liveAudio' src="" controls autoPlay className='zoom-audio'></audio>
        <div className="zoom-operate flex">
          <div className='audio'><AiTwotoneAudio /></div>
          <div className='void'><AiFillCamera onClick={() => _handle_live()} /></div>
        </div>
      </div>
    </>
  )
}

export default memo(JMSZoomOperate)