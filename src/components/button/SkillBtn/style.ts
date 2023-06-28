import { styled, keyframes } from 'styled-components';

const shakeBottom = keyframes`
0%,
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    10% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      -webkit-transform: rotate(-4deg);
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
    80% {
      -webkit-transform: rotate(-2deg);
      transform: rotate(-2deg);
    }
    90% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
`;

export const StyledSkillBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;
  padding: 3rem;
  button {
    width: 100%;
    height: 6.4rem;
    color: #fff;
    backdrop-filter: blur(0.5rem);
    border-radius: 0.4rem;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    img {
      width: 3.4rem;
    }

    &:hover {
      animation: ${shakeBottom} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
  }
`;
