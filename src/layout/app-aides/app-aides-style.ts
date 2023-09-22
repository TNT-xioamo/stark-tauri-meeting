import styled from 'styled-components'

export const AidesWallpaper = styled.div `
  .btn-aides {
    position: absolute;
    z-index: 6;
    right: 10px;
    top: 10px;
    width: 60px;
    height: 20px;
    border-radius: 15px;
    padding: 5px 10px;
    background-color: rgba( 0, 0, 0, .2);
    cursor: pointer;
    color: #89deff;
    &:hover {
      background-color: rgba( 0, 0, 0, .3);
    }
  }
  .aides-main {
    position: absolute;
    right: 6px;
    top: 6px;
    background-color: rgba( 0, 0, 0, .2);
    border-radius: 15px;
    z-index: 5;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    .aides-show {
      height: 80vh;
      width: 70vw;
      padding: 10px;
      color: #fff;
      &.scale-up-tr {
        animation: scale-h5-w5 1s forwards;
      }
      &.scale-hide {
        animation: scale-h0-w0 1.3s forwards;
        right: 10px;
        top: 10px;
        .aid-item {
          animation: slide-rotate-ver-r-bck .4s cubic-bezier(.39,.575,.565,1.000) both;
        }
        .aides-label {
          animation: slide-rotate-hor-top .5s cubic-bezier(.25,.46,.45,.94) both;
        }
      }
      .aides-label {
        font-weight: 700;
      }
      .aides-body {
        flex-wrap: wrap;
        align-items: center;
        padding-top: 15px;
        justify-content: space-between;
        .aid-item {
          flex: 30.3%;
          height: 200px;
          background-color: rgba(255, 255, 255, .3);
          border-radius: 16px;
          flex-direction: column;
          margin-bottom: 10px;
          &:nth-child(3n + 2) {
            margin-left: 10px;
            margin-right: 10px;
          }
          .aid-text {
            animation:focus-in-contract .7s cubic-bezier(.25,.46,.45,.94) both;
          }
        }
      }
    }
  }
`