import styled from 'styled-components';

export const LandingTheModalWrap = styled.div`
  .LandingTheModalImage {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px 0px 48px 48px;

    @media (max-width: 820px) {
      height: 600px;
    }

    @media ${(props) => props.theme.breakpoints.mdMax} {
      height: 700px;
    }

    @media ${(props) => props.theme.breakpoints.smMax} {
      height: 700px;
    }

    @media ${(props) => props.theme.breakpoints.xsMax} {
      height: 625px;
    }
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  padding: 20px 0;
  max-width: 1360px;
  width: 100%;

  .content-header {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.smMax} {
      padding: 0 10px;
    }
  }

  .btn-hide {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 192.67px;

    span {
      font-size: 18px;
      font-weight: 700;
      color: #f3f3f3;
    }
  }

  .header-center {
    display: flex;
    font-weight: 500;
    gap: 24px;

    @media ${(props) => props.theme.breakpoints.mdMax} {
      display: none;
    }

    p {
      cursor: pointer;
    }
  }

  .header-right {
    display: flex;
    gap: 8px;

    .content {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    @media ${(props) => props.theme.breakpoints.mdMax} {
      display: none;
    }
  }
`;

export const ContentBlock = styled.div`
  margin-top: 80px;
  padding: 0 10px;

  .grow-on-your {
    display: flex;
    justify-content: center;
  }

  .the-modern {
    margin-top: 30px;
    text-align: center;
    font-size: 70px;
    line-height: 70px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      font-size: 54px;
      line-height: 54px;
    }
  }

  .description {
    max-width: 520px;
    margin: auto;
    line-height: 32px;
    text-align: center;
    font-size: 20px;
    margin-top: 30px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      font-size: 16px;
      line-height: 25.6px;
    }
  }

  .btn-contact-sales {
    margin-top: 40px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

export const LogoInvestors = styled.div`
  padding: 90px 0;
  overflow: hidden;

  .list-investor {
    display: flex;
    align-items: center;
    gap: 120px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(28 * 6 * -1));
    }
  }
`;

export const SliderWrap = styled.div<{ $count: number }>`
  --slide-width: 300px;
  --slides-in-view: 4;

  overflow: hidden;
  width: calc(1 * ${(props) => props.$count});
  padding: 90px 0;

  @media ${(props) => props.theme.breakpoints.mdMax} {
    padding: 45px 0;
  }

  @media ${(props) => props.theme.breakpoints.smMax} {
    padding: 40px 0;
  }

  .partners {
    animation: scroll 20s linear infinite;
    display: flex;
    align-items: center;
    gap: 120px;
    width: calc(var(--slide-width) * 2 * ${(props) => props.$count});

    .partner {
      width: var(--slide-width);
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        calc(var(--slide-width) * ${(props) => props.$count} * -1)
      );
    }
  }
`;
