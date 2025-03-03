import styled from 'styled-components'

type Custom = {
  theme?: string
}

export const SiderWallpaper = styled.div<Custom>`
  z-index: 2;
  height: calc(100% - 85px);
  max-width: 235px;
  border-radius: 10px;
  background-image: linear-gradient(${props => props?.theme.sider.top }, ${props => props?.theme.sider.bottom });
  padding: 5px 7px;
  box-sizing: border-box;
  margin-left: 10px;
  margin-top: 25px;
  -moz-box-shadow: 0px 0px 10px ${props => props?.theme.sider.top };
  -webkit-box-shadow: 0px 0px 10px ${props => props?.theme.sider.top };
  box-shadow: 0px 0px 10px ${props => props?.theme.sider.top };
  &:hover {
    animation: scale-up-center .7s cubic-bezier(.39,.575,.565,1.000) both;
  }
  .ant-menu {
    background: none;
    border-inline-end: 0px !important;
    .ant-menu-item-selected {
      background-color: rgba(255, 255, 255, 0.3);
      color: #fff;
    }
    .ant-menu-item {
      &:hover {
        svg {
          color: #e46490;
        }
      }
      &.ant-menu-item-selected {
        svg {
          color: #e46490;
        }
      }
    }
  }

`