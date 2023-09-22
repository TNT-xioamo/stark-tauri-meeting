import styled from 'styled-components';
export const AppWallpaper = styled.main`
  &.app {
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-image: linear-gradient(${props => props.theme.page.top}, ${props => props.theme.page.bottom});
    color: #fff;
  }
`