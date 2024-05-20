import styled from 'styled-components';

export const LandingExpandWrap = styled.div`
  margin-top: 160px;
  position: relative;

  .LandingExpandImage {
    width: 100%;
    height: 653px;
    object-fit: cover;
    border-radius: 48px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      height: 693px;
    }
  }

  .conten {
    position: absolute;
    top: 0;
    width: 100%;

    .title {
      text-align: center;
      margin-top: 160px;
      font-size: 64px;
      line-height: 70.4px;

      @media ${(props) => props.theme.breakpoints.smMax} {
        font-size: 54px;
        line-height: 59.4px;
      }
    }

    .description {
      padding-top: 30px;
      max-width: 929px;
      margin: auto;
      width: 100%;
      text-align: center;
      font-size: 18px;
      line-height: 28.8px;
      color: #b5b5b5;

      @media ${(props) => props.theme.breakpoints.smMax} {
        font-size: 16px;
        line-height: 25.6px;
        padding: 20px 10px 0 10px;
      }
    }
  }

  .btn {
    margin-top: 40px;
    display: flex;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.smMax} {
      margin-top: 63px;
      margin-bottom: 40px;
    }
  }
`;
