import styled from 'styled-components';

export const LandingMoreThanWrap = styled.div`
  margin-top: 160px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.smMax} {
    margin-top: 80px;
  }

  @media ${(props) => props.theme.breakpoints.xsMax} {
    margin-top: 10px;
  }

  .LandingMoreThanWrap {
    width: 100%;
    height: 505px;
    border-radius: 48px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      height: 400px;
    }
  }

  .title-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 160px;

    .more-than {
      font-size: 64px;
      line-height: 70.4px;
      text-align: center;

      @media ${(props) => props.theme.breakpoints.smMax} {
        font-size: 54px;
        line-height: 59.4px;
      }
    }

    .description {
      padding-top: 30px;
      max-width: 545px;
      font-size: 18px;
      line-height: 28.8px;
      margin: auto;
      text-align: center;

      @media ${(props) => props.theme.breakpoints.smMax} {
        font-size: 16px;
        line-height: 25px;
      }
    }

    .btn-contact-sales {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
  }

  .landing-asset {
    display: flex;
    justify-content: center;
    margin-top: 76px;
    margin-bottom: 160px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      margin-bottom: 0;
      margin-top: 0;
    }

    .landing-asset-image {
      width: 100%;
    }
  }
`;
