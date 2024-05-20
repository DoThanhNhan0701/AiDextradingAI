import styled from 'styled-components';

export const LandingFasterWrap = styled.div`
  margin-top: 160px;

  .title {
    text-align: center;

    h5 {
      font-size: 64px;
      line-height: 70.4px;
    }

    p {
      padding-top: 30px;
      font-size: 20px;
      line-height: 32px;
      max-width: 520px;
      margin: auto;
    }
  }
`;

export const ContentMission = styled.div`
  width: 100%;

  .ant-row {
    @media ${(props) => props.theme.breakpoints.mdMax} {
      margin: 0 !important;
    }

    .ant-col {
      @media ${(props) => props.theme.breakpoints.mdMax} {
        padding: 0 !important;
      }
    }
  }
`;

export const Mission = styled.div`
  margin-top: 80px;
  padding: 40px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  span {
    font-size: 40px;
    line-height: 44px;
  }

  p {
    margin-top: 24px;
    max-width: 521px;
    font-size: 18px;
    line-height: 28.8px;
    color: #b5b5b5;
  }

  .image {
    position: relative;

    .graph-background {
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin-top: 30px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
    }

    .graph-dot {
      top: 10%;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      left: 0;
    }

    .text-popup {
      top: 20%;
      left: 35%;
      position: absolute;
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 8px 12px;
      border: 1px solid rgba(198, 245, 122, 0.4);
      border-radius: 8px;

      @media ${(props) => props.theme.breakpoints.mdMax} {
        left: 0;
      }

      span {
        margin-left: 8px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16.8px;

        @media ${(props) => props.theme.breakpoints.mdMax} {
          font-size: 12px;
        }
      }

      p {
        font-size: 14px;
        margin-top: 0;
        line-height: 16.8px;

        @media ${(props) => props.theme.breakpoints.mdMax} {
          font-size: 12px;
        }
      }
    }
  }
`;

export const Vision = styled.div`
  margin-top: 80px;
  padding: 40px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;

  span {
    font-size: 40px;
    line-height: 44px;
  }

  p {
    margin-top: 24px;
    max-width: 521px;
    font-size: 18px;
    line-height: 28.8px;
    color: #b5b5b5;
  }

  .media {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: -108px;
  }
`;

export const OptimizedForSecurity = styled.div`
  margin-top: 40px;
  position: relative;
  width: 100%;
  border-radius: 48px;
  overflow: hidden;

  .background {
    position: absolute;
    inset: 0;
    display: flex;
    transform: rotateX(180deg);
    max-width: 100%;
    overflow: hidden;

    div {
      position: relative;
      flex: 1;
      height: 100%;
    }

    img {
      object-fit: cover;
      object-position: calc(100% + 1px) 50%;
    }

    .right {
      transform: rotateY(180deg);
    }
  }

  .content-base {
    position: relative;
    z-index: 1;
    top: 0;
    width: 100%;
    padding: 60px;
    height: 100%;

    .left-content {
      .title {
        margin-top: 59px;
        font-size: 40px;
        line-height: 44px;
        display: block;
        text-align: left;
      }

      .description {
        font-size: 18px;
        line-height: 28.8px;
        max-width: 456px;
        margin-top: 24px;
        text-align: left;
      }
    }
  }

  .OptimizedAsset {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }
`;

export const ListFeatures = styled.div`
  margin-top: 80px;
`;

export const Item = styled.div`
  width: 100%;
  padding: 10px;

  .header {
    display: flex;
    align-items: center;
    gap: 14px;

    .title {
      font-size: 20px;
      line-height: 26px;
    }
  }

  .description {
    font-size: 16px;
    color: #b5b5b5;
    line-height: 25.6px;
    margin-top: 20px;
  }
`;
