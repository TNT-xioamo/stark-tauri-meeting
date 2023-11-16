import React, { type PropsWithChildren, memo } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { ImSpinner9, ImPacman, ImUser } from 'react-icons/im'
import { Checkbox, Form, Input } from 'antd'

function JMSModalConference(_props: PropsWithChildren<{ isModalOpen: String | undefined, setClose: Function }>): JSX.Element {
  const { isModalOpen, setClose } = _props
  type FieldType = {
    meetingcode?: string
    meetingname?: string
    checkbox?: boolean
  }

  const _handle_open = () => {
    setClose(void 0)
  }
  const _render_modal_join = () => {
    return (
      <div className="conference-modal_join modal-item">
        <div className='container-title flex'><AiFillPlusCircle color="#ff5f58" onClick={() => setClose(void 0)} /></div>
          <div className='modal-body'>
            <Form name="join">
              <Form.Item<FieldType> name="meetingcode">
                <Input placeholder='Please enter the meeting' prefix={<ImPacman color="#a40771" />} />
              </Form.Item>
              <Form.Item<FieldType> name="meetingname">
                <Input placeholder='Please enter the meetingname' prefix={<ImUser color="#a40771" />} />
              </Form.Item>
              <Form.Item<FieldType> name="checkbox" className='form-item_check'>
                <Checkbox>自动连接音频</Checkbox>
                <Checkbox>入会开启摄像头</Checkbox>
                <Checkbox>入会开启麦克风</Checkbox>
              </Form.Item>
            </Form>
          </div>
        <div className='modal-join flex-center'>
          <ImSpinner9 onClick={_handle_open} size={40} color='#f273fe' />
        </div>
      </div>
    )
  }
  const _render_modal_fast = () => {
    return (
      <div className="conference-modal_fast modal-item">
        <div className='container-title flex'><AiFillPlusCircle color="#ff5f58" onClick={() => setClose(void 0)} /></div>
        快速会议
      </div>
    )
  }
  const _render_modal_booking = () => {
    return (
      <div className="conference-modal_booking modal-item">
         <div className='container-title flex'><AiFillPlusCircle color="#ff5f58" onClick={() => setClose(void 0)} /></div>
        预约会议
      </div>
    )
  }
  return (
    <>
      <div className="join-conference-container">
        {
          isModalOpen === 'join' ? _render_modal_join() : ( isModalOpen === 'fast' ? _render_modal_fast() : ( isModalOpen === 'booking' ? _render_modal_booking() : void 0 ))
        }
      </div>
    </>
  )
}

export default memo(JMSModalConference)