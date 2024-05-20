import styled from 'styled-components';

export const FooterWrap = styled.div`
  margin-top: 241px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.smMax} {
    margin-top: 61.5px;
  }

  .ant-row {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.mdMax} {
    padding: 10px;
  }

  .list-product {
    @media ${(props) => props.theme.breakpoints.mdMax} {
      margin-top: 60px;
    }
  }

  .resource {
    @media ${(props) => props.theme.breakpoints.smMax} {
      text-align: center;
    }
  }

  .resource-develop {
    @media ${(props) => props.theme.breakpoints.smMax} {
      margin-top: 60px;
      text-align: center;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      justify-content: center;
    }

    span {
      display: block;
      font-size: 19px;
      font-weight: 700;
    }
  }

  .footer-end {
    margin-top: 60px;
    border-top: 1px solid #b5b5b5;
    padding: 60px 0 40px 0;
    display: flex;
    justify-content: space-between;

    @media ${(props) => props.theme.breakpoints.smMax} {
      flex-direction: column;
      padding: 0 27.5px;
    }

    .list-tems {
      display: flex;
      align-items: center;
      gap: 20px;
      color: #b5b5b5;

      @media ${(props) => props.theme.breakpoints.smMax} {
        flex-wrap: wrap;
        margin-top: 60px;
      }
    }

    .list-icons {
      display: flex;
      align-items: center;
      gap: 8px;

      @media ${(props) => props.theme.breakpoints.smMax} {
        margin-top: 20px;
      }
    }
  }
`;

export const Item = styled.div`
  .title {
    font-size: 16px;
    line-height: 25.6px;
  }

  .list-menu {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
      color: #b5b5b5;
      line-height: 16.8px;
    }
  }
`;
