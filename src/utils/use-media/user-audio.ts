export const _get_audio_sevices = async (callBack?: Function, onError?: Function) => {
  try {
    const audioDevices = await navigator.mediaDevices.enumerateDevices()
    const mics = audioDevices.filter(d => d.kind === 'audioinput')
    const selectedMic = mics[0]
    const constraints = {
      audio: {
        channelCount: 2,
        sampleRate: 44100,
        sampleSize: 16,
        echoCancellation: true,
        deviceId: selectedMic.deviceId
      }  
    }
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    callBack && callBack(stream)
    return stream
  } catch (error) {
    console.error(error)
    onError && onError(error)
  }
}

/**
 * 
 * @param audioTrack 待处理的音频流
 * @returns 返回新音频流
 */

export const _remove_keyboard_sound = (audioTrack: any) => {
  const audioCtx = new (window.AudioContext)()
  const newAudioStream: any = audioCtx.createMediaStreamSource(audioTrack)
  const filter = audioCtx.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = 1000
  filter.connect(audioCtx.destination)
  newAudioStream.connect(filter)
  return newAudioStream
}