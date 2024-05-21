import Image from 'next/image';
import * as S from './LandingTheModal';
import logo from '@/public/icons/common/logo.svg';
import Button from '@/components/core/common/Button';
import LandingTheModalImage from '@/public/images/common/LandingTheModal.png';

const investorLogos = [
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
  { src: '/icons/common/logo-investors.svg', width: 96.75, height: 28 },
];

export default function LandingTheModal() {
  return (
    <S.LandingTheModalWrap>
      <Image
        className="LandingTheModalImage"
        src={LandingTheModalImage}
        unoptimized
        alt=""
      />
      <S.Header>
        <div className="content-header">
          <div className="header-left">
            <Image src={logo} width={22.77} height={22.77} alt="" />
            <span>AiDexTrading</span>
          </div>
          <div className="header-center">
            <p>About</p>
            <p>Product</p>
            <p>Resources</p>
          </div>
          <div className="btn-hide">
            <Button padding="8px 8px" type="default">
              <Image
                src={'/icons/common/ri_menu-4-fill.svg'}
                width={16}
                height={16}
                alt=""
              />
            </Button>
          </div>
          <div className="header-right">
            <Button height="40px" padding="9px 20px" type="default">
              <div className="content">
                Get Started
                <Image
                  src={'/icons/common/arrow.svg'}
                  width={12}
                  height={12}
                  alt=""
                />
              </div>
            </Button>
            <Button height="40px" padding="13px 20px" type="primary">
              BOT
            </Button>
          </div>
        </div>
        <S.ContentBlock className="open-to-view">
          <div className="grow-on-your">
            <Button
              height="36px"
              padding="7px 16px"
              width="201px"
              type="default"
            >
              Grow on Your Own Bot
            </Button>
          </div>
          <div className="the-modern">
            <p>The modern</p>
            <p>bot trading platform</p>
          </div>
          <p className="description">
            Get on a journey of precision trading with AiDexTrading! Integrating
            with Jupiter, Orca, and Radium on the Solana network, SolTradingBot
            is your go-to companion for decentralized exchange transactions.
          </p>

          <div className="btn-contact-sales">
            <Button
              width="180px"
              height="48px"
              padding="7px 30px"
              type="default"
            >
              Get Started
            </Button>
            <Button
              width="180px"
              height="48px"
              padding="7px 30px"
              type="primary"
            >
              Contact Sales
            </Button>
          </div>
        </S.ContentBlock>
      </S.Header>
      <S.SliderWrap $count={investorLogos.length}>
        <div className="partners">
          {investorLogos.map((partner, index) => (
            <div className="partner" key={index}>
              <Image
                key={index}
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt=""
              />
            </div>
          ))}
          {investorLogos.map((partner, index) => (
            <div className="partner" key={index}>
              <Image
                key={index}
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt=""
              />
            </div>
          ))}
        </div>
      </S.SliderWrap>
    </S.LandingTheModalWrap>
  );
}
