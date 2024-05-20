import styled from 'styled-components';

export const LandingProfessionalWrap = styled.div`
  position: relative;
  .LandingProfessionalB {
    width: 100%;
    height: 969px;
    border-radius: 48px;
    object-fit: cover;

    @media ${(props) => props.theme.breakpoints.lgMax} {
      height: 1300px;
    }

    @media ${(props) => props.theme.breakpoints.smMax} {
      height: 1200px;
    }

    @media ${(props) => props.theme.breakpoints.mdMax} {
      height: 1250px;
    }
  }
`;

export const ContentProfessional = styled.div`
  top: 90px;
  position: absolute;

  .professional {
    padding: 0 60px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      padding: 0 10px;
    }

    .btn-dex {
      margin-top: 80px;
    }

    .the-all {
      font-size: 18px;
      background: linear-gradient(
        90deg,
        #009596 0%,
        #c6f57a 50.5%,
        #e8ffc3 100%
      );
      background-clip: text;
      color: transparent;

      @media ${(props) => props.theme.breakpoints.smMax} {
        text-align: center;
      }
    }

    .professional-trading {
      margin-top: 30px;
      font-size: 64px;
      line-height: 70.4px;

      @media ${(props) => props.theme.breakpoints.smMax} {
        font-size: 54px;
        line-height: 59.4px;
      }
    }

    .trade-securely {
      font-size: 20px;
      line-height: 32px;
      color: #b5b5b5;
      margin-top: 30px;
      padding-right: 78px;

      @media ${(props) => props.theme.breakpoints.smMax} {
        font-size: 16px;
        line-height: 25.6px;
      }
    }
  }

  .image-right {
    margin: 25.5px 0 25.5px 34px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.smMax} {
      margin: 25.5px 0 0 0;
    }

    .image-grip {
      position: relative;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .image-square {
      position: absolute;
    }
  }
`;
