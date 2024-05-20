import styled from 'styled-components';

export const MainWrap = styled.div`
  width: 100%;

  .content-main-landing {
    max-width: 1360px;
    margin: auto;

    .open-to-view {
      transition-duration: 1000ms;
      transition-delay: 200ms;
      translate: 0 calc(20px + 30%);
      opacity: 0;

      &.show {
        opacity: 1;
        translate: 0 0;
      }
    }

    .open-to-view-left {
      transition: all 1000ms ease;
      transition-delay: 200ms;
      transform: translateX(-100%);
      opacity: 0;

      &.show {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;
