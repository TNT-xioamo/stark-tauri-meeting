import styled from 'styled-components'

export const ConferenceWallpaper = styled.div`
  height: 100%;
  width: 100%;
  .conten {
    height: 100%;
    justify-content: space-between;
    padding: 0 10vw;
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
          background: linear-gradient(0deg,#cc6aa5,#623ECC,#EB16A4);
          animation: bg-pan-top 2s both;
          background-size: 100% 600%;
          svg {
            color: #FF6EEC;
          }
        }
        span {
          -webkit-background-clip: text;
          margin-left: 8px;
        }
      }
    }
    .cont-icon {
      position: relative;
      filter: drop-shadow(0 0 3em #d76ac3);
      border-radius: 50%;
      &.icon-andt {
        -webkit-animation: changeright 6s linear infinite;
      }
      svg {
        &:hover {
          color: #d76ac3 !important;
        }
      }
    }
    .join-conference-container {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      transform: translate3d(170px, -194px, -2px);
      .modal-item {
        padding: 10px;
        background: linear-gradient(rgba(108, 84, 132, .6), rgba(205, 126, 167, .8));
        animation: slide-in-right-row 1.2s cubic-bezier(.25,.46,.45,.94) both;
        .container-title {
          svg {
            transform: rotate(-40deg);
          }
        }
        .modal-body {
          padding: 20px;
          animation: slide-in-right 1.4s cubic-bezier(.25,.46,.45,.94) both;
        }
        .modal-join {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          border: 2px solid #FF90C2;
          box-shadow: #FF6EEC 0 0 1em;
          svg {
            -webkit-animation: changeright 6s linear infinite;
          }
        }
        .ant-form {
          .form__title {
            text-align: center;
            background: linear-gradient(to right, red, blue);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            padding-bottom: 15px;
          }
          .form-item_check {
            .ant-form-item-control-input-content {
              display: flex;
              flex-direction: column;
            }
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
      }
    }
  }
  
`