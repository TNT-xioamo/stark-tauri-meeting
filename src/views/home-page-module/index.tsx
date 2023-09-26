import React, { memo, useRef, useState } from 'react'
import { HomeWallpaper } from './home-style-page'
import { Image, Space, Button, Checkbox, Form, Input } from 'antd';
import { BsMailbox, BsSuitSpadeFill } from 'react-icons/bs'


import workGif from '@/assets/image/gif/home.gif'
export default memo(function JMSHomeMain() {
  const [ isStartOpen, setStartOpen ] = useState(false)

  const refStart =  useRef<HTMLDivElement>(null)
  const refIn = useRef<HTMLFormElement | any>(null)
  const refUp = useRef<HTMLFormElement | any>(null)

  type FieldType = {
    username?: string
    password?: string
    remember?: string
  }

  const _handle_start = () => {
    if (!isStartOpen) {
      refStart.current?.classList.add('slide-in-bottom')
      refStart.current?.classList.remove('slide-out-bottom')
    } else {
      refStart.current?.classList.add('slide-out-bottom')
    }
    setStartOpen(!isStartOpen)
  }
  const _handle_dom = ()  => {
    const refIn = document.getElementById('signIn')
    const refUp = document.getElementById('signUp')
    refIn?.classList.remove('sign_show', 'sign_out')
    refUp?.classList.remove('sign_show', 'sign_out')
    return {refIn, refUp}
  }
  const _handle_sign_in = ()  => {
    const {refIn, refUp} = _handle_dom()
    refUp?.classList.add('sign_out')
    refUp?.style && (refUp.style.display = 'none')
    refIn?.classList.add('sign_show')
    refIn?.style && (refIn.style.display = 'block')
  }

  const _handle_sign_up = ()  => {
    const {refIn, refUp} = _handle_dom()
    refIn?.classList.add('sign_out')
    refIn?.style && (refIn.style.display = 'none')
    refUp?.classList.add('sign_show')
    refUp?.style && (refUp.style.display = 'block')
  }
  return (
    <>
      <HomeWallpaper>
        <div className='workbench flex-center'>
          <Image width={300} src={workGif} preview={false} alt="" className='workbench-gif' />
          <div className='sys-stark flex-center'>
            <p className='sys-hello'>欢迎使用 Stark X</p>
            <Space className='stark-start flex-center'>
              <div className='start-cor flex-center' onClick={() => _handle_start()}>开启</div>
            </Space>
          </div>
          <div ref={refStart} className='start-modal flex-center'>
            {
               isStartOpen &&
              <Space>
                <Form ref={refIn} name="signIn" className='form-sign_in'>
                  <h2 className="form__title">Sign In</h2>
                  <Form.Item<FieldType>
                    name='username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input placeholder='user' prefix={<BsMailbox color="#a40771" />} />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password placeholder='password' prefix={<BsSuitSpadeFill color="#a40771" />} />
                  </Form.Item>
                  <Form.Item className='flex-spn'>
                    <Button type="link" onClick={_handle_sign_up}>Sign up</Button>
                    <Button type="primary" htmlType="submit" size="large">Sign In</Button>
                  </Form.Item>
                </Form>
                <Form ref={refUp} name="signUp" className='form-sign_up sign-up_show'>
                  <h2 className="form__title">Sign up</h2>
                  <Form.Item<FieldType>
                    name='username'
                    rules={[{ required: true, message: 'Please input your user!' }]}
                    >
                    <Input placeholder='email' prefix={<BsMailbox color="#a40771" />} />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password placeholder='password' prefix={<BsSuitSpadeFill color="#a40771" />} />
                  </Form.Item>
                  <Form.Item className='flex-spn'>
                    <Button type="link" onClick={_handle_sign_in}>Sign In</Button>
                    <Button type="primary" htmlType="submit" size="large">Sign up</Button>
                  </Form.Item>
                </Form>
              </Space>
            }
          </div>
        </div>
      </HomeWallpaper>
    </>
  )
})