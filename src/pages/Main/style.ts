import { styled } from 'styled-components';

// image
import { mainImg } from '../../consts/image';

export const StyledMain = styled.div`
  background: url(${mainImg.bgMain}) no-repeat 0% 0%;
  min-height: 108rem;
  background-size: cover;
  main {
    color: #fff;
    position: relative;
    section {
      .inner {
        max-width: 144rem;
        margin: 0 auto;
        padding: 4.5rem 0 0;
        .title {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
      }
      table {
        td {
          padding-left: 1rem;
        }
      }
      &.sec01 {
        padding-top: 4rem;
        .inner {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(640px, 1fr));
          align-items: center;
        }
      }
    }

    .hs {
      &-info {
        display: flex;
        gap: 4rem;
        figure {
          width: 26rem;
          height: 26rem;
        }
        .info {
          display: flex;
          align-items: center;
          &-my {
            .name {
              font-size: 3rem;
              font-weight: 600;
              span {
                font-weight: 400;
                opacity: 0.8;
              }
            }
          }
          &-link {
            display: flex;
            gap: 2.5rem;
            a {
              figure {
                width: 3.3rem;
                height: auto;
                img {
                  height: 2.8rem;
                }
              }
              figcaption {
                color: #fff;
                font-size: 1rem;
                margin-top: 0.5rem;
              }
            }
          }
        }
      }
      &-carrer {
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 0.8rem;
        padding: 3rem;
      }

      &-project {
        .project-container {
          width: 100%;
          ul {
            border: 0.1rem solid rgba(255, 255, 255, 0.1);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
            gap: 1.5rem;
            border-radius: 0.4rem;
            padding: 3rem;
          }
          .thumbnail {
            aspect-ratio: 16/10;
            overflow: hidden;
            border-radius: 0.4rem;
            img {
              object-fit: cover;
            }
          }
          .info {
            margin-top: 1rem;
            color: #fff;
          }
        }
      }
    }
  }
`;
