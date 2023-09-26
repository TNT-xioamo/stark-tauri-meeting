import React, { type PropsWithChildren, memo } from 'react'
import { ConferenceWallpaper } from './conference-style-page'



function JMSConferenceMain(_props: PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <ConferenceWallpaper>
        JMSConferenceMain
      </ConferenceWallpaper>
    </>
  )
}

export default memo(JMSConferenceMain)