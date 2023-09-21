import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { StoreProvider } from '@/store'
import App from './App'
import '@/assets/style/styles.css'
import '@/assets/style/animista.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider direction="ltr" theme={{ token: { colorPrimary: '#806b92', colorTextBase: '#fff' }, }} componentSize={'small'}>
        <StoreProvider initialValue={{ user: {} }}>
          <App />
        </StoreProvider>
      </ConfigProvider>
    </Router>
  </React.StrictMode>
)
