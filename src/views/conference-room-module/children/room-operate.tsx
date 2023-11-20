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
    _get_user_media()
  }, userMedia)

  const _get_user_media = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(videoConstraint)
      setMediaStreamTrack(stream)
      if (liveVideo.current) {
        liveVideo.current.srcObject = stream
        liveVideo.current.play()
      }
      if (liveAudio.current) {
        liveAudio.current.srcObject = stream
        liveAudio.current.play()
      }
      console.error(stream)
    } catch (error) {
      
    }
  }

  const _handle_live_void =() => {
    try {
      const videoTra = mediaStreamTrack?.getVideoTracks()[0]
      if (videoTra && mediaState?.isVideo && liveVideo.current) {
        console.log(videoTra)
        liveVideo.current.srcObject = null
        // videoTra.enabled = false
        // videoTra.stop()
      }
    } catch (error) {
      
    }
  }

  const _handle_live_audio = () => {
    try {
      const audioTra = mediaStreamTrack?.getAudioTracks()[0]
      if (audioTra && mediaState?.isAudio) {
        audioTra.stop()

      } else {}
      console.log(audioTra)
      // liveAudio.current && liveAudio.current()
      roomStore.SET_MEDIA_STATE({ isAudio: !mediaState?.isAudio })
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