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
        animation: shadow-drop-2-center .4s cubic-bezier(.25,.46,.45,.94) both;
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
      padding: 15px;
      backdrop-filter: blur(3px);
      &.slide-in-bottom {
        z-index: 2;
        animation: slide-in-bottom 1.2s cubic-bezier(.25,.46,.45,.94) both;
      }
      &.slide-out-bottom {
        animation: slide-out-bottom .75s cubic-bezier(.25,.46,.45,.94) both;
      }
      .ant-space {
        .ant-form {
          .form__title {
            text-align: center;
            background: linear-gradient(to right, red, blue);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            padding-bottom: 15px;
          }
          .ant-input-affix-wrapper {
            padding: 10px 12px;
            background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
            transition: background-image .5s;

          }
          .ant-input {
            color: #768bbc;
            background-color: rgba(2,2,2, 0);
            box-shadow: none;
            &::placeholder {
              color: #768bbc;
              padding-left: 6px;
            }
          }
          .ant-input-suffix, .ant-input-prefix {
            .ant-input-password-icon {
              color: #768bbc;
            }
          }
          .ant-btn-link {
            box-shadow: none;
          }
          .flex-spn {
            .ant-form-item-control-input-content {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
        }
        .form-sign_up {
          display: none;
        }
        .sign_show {
          animation: slide-in-right .5s cubic-bezier(.25,.46,.45,.94) both;
        }
        .sign_out {
          display: none;
          animation: slide-out-left .5s cubic-bezier(.25,.46,.45,.94) both;
        }
      }
    }
  }
`