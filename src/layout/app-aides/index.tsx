import React, { type PropsWithChildren, useState, useRef } from 'react'
import { AidesWallpaper } from './app-aides-style'
import { observer } from 'mobx-react-lite'
import { LiaEarlybirds, LiaSmileWinkSolid } from 'react-icons/lia'
import { SiAuthy, SiAwsamplify, SiBilibili, SiBrevo, SiCardano, SiClarifai } from 'react-icons/si'

function JMSAppAides(_props: PropsWithChildren<{}>) :JSX.Element {
  const [ aidesOpen, setAidesOpen ] = useState(false)
  const aidesRef = useRef<HTMLDivElement>(null)
  const aidesModle = [
    { icon: <SiAuthy />, text: 'Awaken the early birds', key: 1 },
    { icon: <SiAwsamplify />, text: 'Awaken the early birds', key: 2 },
    { icon: <SiBilibili />, text: 'Awaken the early birds', key: 3 },
    { icon: <SiBrevo />, text: 'Awaken the early birds', key: 4 },
    { icon: <SiCardano />, text: 'Awaken the early birds', key: 5 },
    { icon: <SiClarifai />, text: 'Awaken the early birds', key: 6 }
  ]
  const _handle_awaken_aides = () => {
    aidesRef.current?.classList.add('scale-hide')
    if (!aidesOpen) return setAidesOpen(!aidesOpen)
    const hide = setTimeout(() => {
      setAidesOpen(!aidesOpen)
      window.clearTimeout(hide)
    }, 1000)
  }

  return (
    <>
      <AidesWallpaper>
        <div className='btn-aides flex-center' onClick={ () => _handle_awaken_aides() }>
          {
            !aidesOpen ? <span className='aid-item flex-center'><LiaEarlybirds /> 助手</span> : <span className='aid-item flex-center'><LiaSmileWinkSolid /> 关闭</span>
          }
        </div>
        <div className='aides-main'>
          {
            aidesOpen ? <div ref={aidesRef} className='aides-show scale-up-tr'>
              <div className='aides-label aid-text'>推荐</div>
              <div className='aides-body flex  aides-animation'>
                { aidesModle.map(item => {
                  return (
                    <div className='aid-item flex-center' key={ item.key }>
                      { item.icon && <span>{ item.icon }</span> }
                      <span className='aid-text'>{ item.text }</span>
                    </div>
                  )
                }) }
              </div>
            </div> : void 0
          }
        </div>
      </AidesWallpaper>
    </>
  )
}

export default observer(JMSAppAides)