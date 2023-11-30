import styled from 'styled-components'

export const ZoomContainer = styled.div`
  width: 100%;
  height: 100%;
  .zoom-default {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    .zoom-watermark {
      width: 100%;
      height: 100%;
    }
    .zoom-void {
      /* background-color: #000; */
      object-fit: cover;
      transform: rotateY(180deg);
      background-color: #fff;
    }
    .zoom-audio {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      display: none;
    }
    .zoom-operate {
      position: fixed;
      bottom: 12px;
      left: 12px;
      width: calc(100% - 48px);
      height: 20px;
      z-index: 2;
      border-radius: 10px;
      padding: 10px;
      box-shadow: -10px -10px 20px 10px #D3D5DD inset;
      svg { color: #333; }
      .operate-user_item {
        border-radius: 7px;
        padding: 5px 10px;
        &:hover {
          background-color: #CACACA;
        }
      }
      .operate-media {
        flex: 1;
        .audio {
          font-size: 12px;
          position: relative;
          .audio-voice {
            height: 10px;
            width: 5px;
            position: absolute;
            z-index: 1;
            right: 8px;
            bottom: 9px;
            border-radius: 10px;
            overflow-y: hidden;
            .audio-wave {
              background-color: #04c966;
              width: 100%;
              border-radius: 12px;
              vertical-align: bottom;
            }
          }
        }
        .void {
          margin-left: 15px;
        }
      }
      .operate-user {
        flex: 2;
        .operate-user_item {
          /* margin-left: 20px; */
        }
      }
      .operate-over {
        flex: 1;
      }
    }
  }
`
