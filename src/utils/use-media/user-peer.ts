
import Peer from 'peerjs'

export const _create_peer = () => {
  const peer = new Peer()
  console.error(peer)
}

export const _recording_media = async (videoConstraint: MediaStreamConstraints, onSuccess: Function, onError: Function = () => {}) => {
  try {
    const stream = videoConstraint && await navigator.mediaDevices.getUserMedia(videoConstraint)
    stream ? onSuccess(stream) : onError()
  } 
  catch (error) {
    onError(error || '获取媒体信息异常！')
  }
}
