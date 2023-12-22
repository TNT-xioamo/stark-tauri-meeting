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
  const audioCtx = new AudioContext()
  const newAudioStream: any = audioCtx.createMediaStreamSource(audioTrack.kind)

  for (let i = 0; i < audioTrack.channels.length; i++) {
    const audioChannel = audioTrack.channels[i]
    const newAudioChannel = newAudioStream?.createAudioChannel()
    for (let j = 0; j < audioChannel.samples.length; j++) {
      const audioSample = audioChannel.samples[j]
      if (audioSample.hasOwnProperty('keyboard')) {
        delete audioSample.keyboard
      }
    }
    newAudioStream.addChannel(newAudioChannel)
  }
  return newAudioStream
}