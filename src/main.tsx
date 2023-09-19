import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from './App'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <ConfigProvider direction="ltr" theme={{ token: { colorPrimary: '#00b96b' }, }} componentSize={'small'}>
        <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>
)
