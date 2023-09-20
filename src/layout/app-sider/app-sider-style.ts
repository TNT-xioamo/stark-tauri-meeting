import styled from 'styled-components'

type Custom = {
  theme?: string
}

export const SiderWallpaper = styled.div<Custom>`
  z-index: 2;
  height: 100%;
  width: 235px;
  border-radius: 10px;
  background-image: linear-gradient(${props => props?.theme.sider.top }, ${props => props?.theme.sider.bottom });
  box-shadow: 0 0 5px 4px #9c9c9c30;
`