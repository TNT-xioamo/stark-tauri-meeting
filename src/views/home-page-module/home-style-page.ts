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
        width: 80px;
        height: 80px;
        color: #fff;
        background-color: #8178a3;
        border-radius: 50%;
        margin-top: 40px;
        animation:shadow-drop-2-center .4s cubic-bezier(.25,.46,.45,.94) both;
        &:hover {
          animation: heartbeat 1.5s ease-in-out infinite both;
          filter: drop-shadow(0 0 2em #6addff);
        }
        .start-cor {
          cursor: pointer;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          border: 3px solid #7be0ff;
        
        }
      }
    }
    .start-modal {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      color: #fff;
      transform: translateY(-20px);
      bottom: 0px;
      opacity: 0;
      z-index: -2;
      &.slide-in-bottom {
        z-index: 2;
        animation: slide-in-bottom 1.2s cubic-bezier(.25,.46,.45,.94) both;
      }
      &.slide-out-bottom {
        animation: slide-out-bottom .75s cubic-bezier(.25,.46,.45,.94) both;
      }
    }
  }
`