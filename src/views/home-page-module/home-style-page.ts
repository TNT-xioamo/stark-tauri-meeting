import styled from 'styled-components'


export const HomeWallpaper = styled.div`
  color: #333;
  height: 100%;
  width: 100%;
  .workbench {
    height: inherit;
    flex-direction: column;
    .ant-image {
      border-radius: 50%;
    }
    .workbench-gif {
      border-radius: 50%;
      pointer-events: none;
      filter: drop-shadow(0 0 3em #d76ac3);
    }
    .sys-stark {
      padding-top: 30px;
      text-align: center;
      flex-direction: column;
      .sys-hello {
        padding-top: 5px;
        color: #fff;
        font-size: 1.5em;
        font-weight: 900;
      }
      .stark-start {
        cursor: pointer;
        width: 80px;
        height: 80px;
        color: #fff;
        background-color: #8178a3;
        border-radius: 50%;
        filter: drop-shadow(0 0 3em #6addff);
      }
    }
  }
`