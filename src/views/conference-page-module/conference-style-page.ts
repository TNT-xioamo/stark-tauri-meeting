import styled from 'styled-components'

export const ConferenceWallpaper = styled.div`
  height: 100%;
  width: 100%;
  .conten {
    height: 100%;
    justify-content: space-between;
    padding: 0 100px;
    .cont-main {
      flex-direction: column;
      .item {
        padding: 12px 25px;
        border-radius: 12px;
        background: linear-gradient(to right, #cd7ea7, #6c5484);
        box-shadow: 7px 5px 10px -4px #cd7ea7;
        margin: 10px 0;
        &:hover {
          box-shadow: 0px 5px 8px 1px #cd7ea7;
          background: linear-gradient(to right, #d13686, #9553d8);
        }
        span {
          /* color: transparent; */
          -webkit-background-clip: text;
        }
      }
    }
  }
`