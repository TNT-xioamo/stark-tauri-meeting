export const _video_sevices = async (callBack?: Function, onError?: Function) => {
  try {
    const audioDevices = await navigator.mediaDevices.enumerateDevices()
    const mics = audioDevices.filter(d => d.kind === 'audioinput')
    const selectedMic = mics[0]
    const constraints = {
      video: { width: { min: 1280}, height: { min: 720}},
    }
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    callBack && callBack(stream)
    return stream
  } catch (error) {
    console.error(error)
    onError && onError(error)
  }
}