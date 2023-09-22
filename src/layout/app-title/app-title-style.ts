import styled from 'styled-components'


export const TitleWallpaper = styled.div`
  .titlebar {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
    height: 25px;
    width: 100vw;
    background: ${props => props?.theme.page.top };
    cursor: pointer;
  }
`