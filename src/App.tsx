import React, { useState, memo } from 'react'
import JMSLayoutMain from '@/views/main'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <JMSLayoutMain />
      </div>
    </>
  )
}

export default memo(App)
