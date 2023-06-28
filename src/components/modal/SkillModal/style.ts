import { styled } from 'styled-components';

export const StyledSkillModal = styled.div`
  top: ${() => window.scrollY + 'px'};
  left: 0;
  .modal {
    width: 0;
    height: 0;
    transition: 0.3s ease-in-out;
    opacity: 0;
    display: flex;
    align-content: center;
    justify-content: center;
    &.active {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: ${() => window.scrollY + 'px'};
      left: 0;
      opacity: 1;

      .modal-container {
        visibility: visible;
      }
    }

    &-container {
      color: #000;
      top: 50vh;
      left: 50vw;
      position: absolute;
      width: 50rem;
      height: 50%;
      border-radius: 0.8rem;
      padding: 2rem;
      box-sizing: border-box;
      transform: translate(-50%, -50%);
      visibility: hidden;
      figure {
        width: 10rem;
        margin: 0 auto;
        figcaption {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 500;
          margin: 1.5rem 0;
          color: #fff;
        }
      }
    }
    &-contents {
      background-color: #fff;
      border-radius: 0.4rem;
      padding: 2rem;
      box-sizing: border-box;
      min-height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      button {
        background-color: #000;
        width: 100%;
        color: #fff;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 0.4rem;
        justify-content: center;
      }
    }
  }
`;
