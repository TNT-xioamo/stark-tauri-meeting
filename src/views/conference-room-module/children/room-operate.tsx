import React, { type PropsWithChildren, useEffect, useState, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { AiOutlineAudio, AiOutlineAudioMuted } from 'react-icons/ai'
import { FaVideo, FaVideoSlash } from 'react-icons/fa'


function JMSZoomOperate(_props: PropsWithChildren<{}>): JSX.Element {
  const [userMedia, setUserMedia] = useState([])
  const [audioWave, setAudioWave] = useState(0)
  const { roomStore } = useStore()
  const { mediaState } = roomStore.zoomInfo
  const [mediaStreamTrack, setMediaStreamTrack] = useState<MediaStream>()

  const [videoConstraint] = useState({
    video: { width: { min: 1280}, height: { min: 720}},
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true}
  })
  const liveVideo = useRef<HTMLVideoElement>(null)
  const liveAudio = useRef<HTMLAudioElement>(null)


  useEffect(() => {
    // _get_user_media()
  }, userMedia)
  const _open_user_media = () => {
    navigator.mediaDevices.getUserMedia(videoConstraint).then((stream) => {
      if (liveVideo.current) {
        liveVideo.current.srcObject = stream
        setMediaStreamTrack(stream)
        liveVideo.current.play()
      }
      if (liveAudio.current) {
        console.error(stream)
      }
      // video.addEventListener('canplay', onVideoCanPlay, false)
    })
  }
  const _get_user_media = async () => {
    try {
      // const stream = await navigator.mediaDevices.enumerateDevices()
      const stream = await navigator.mediaDevices.getUserMedia(videoConstraint)
      console.error(stream)
    } catch (error) {
      
    }
  }

  const _handle_live_void =() => {
    if (mediaStreamTrack && liveVideo.current) {
      mediaStreamTrack?.getTracks().forEach(el => {
        el.enabled = false
        el.stop()
      })
      liveVideo.current.srcObject = null
      liveVideo.current.pause()
    } else {
      console.error(mediaStreamTrack)
    }
  }

  const _handle_live_audio = () => {
    try {
      roomStore.setZoomInfoInfo({ mediaState: { isAudio: !mediaState?.isAudio } })
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className='zoom-default flex-center'>
        <video ref={liveVideo} id='liveVideo' src="" className='zoom-void' width="100%" height="100%"></video>
        <audio ref={liveAudio} id='liveAudio' src="" controls autoPlay className='zoom-audio'></audio>
        <div className='user-canvas' id='user-annotations'></div>
        <div className="zoom-operate flex">
          <div className='operate-media flex'>
            <div className='audio flex flex-column' onClick={() => _handle_live_audio()}>
              { mediaState?.isAudio ? <AiOutlineAudio size={21} /> : <AiOutlineAudioMuted size={21} /> }
              <div className='audio-voice flex flex-column flex-j-e'><div className='audio-wave' style={{ height: `${audioWave}px` }}></div></div>
            </div>
            <div className='void' onClick={() => _handle_live_void()}>{ mediaState?.isVideo ? <FaVideo size={21} /> : <FaVideoSlash size={21} /> }</div>
          </div>
          <div className='operate-user'></div>
          <div className='operate-over'></div>
        </div>
      </div>
    </>
  )
}

export default observer(JMSZoomOperate)