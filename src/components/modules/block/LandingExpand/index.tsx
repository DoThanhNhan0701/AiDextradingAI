import Image from 'next/image';
import * as S from './LandingExpand';
import LandingExpandImage from '@/public/images/common/LandingExpand.png';
import Button from '@/components/core/common/Button';

export default function LandingExpand() {
  return (
    <S.LandingExpandWrap>
      <Image
        className="LandingExpandImage"
        src={LandingExpandImage}
        unoptimized
        alt=""
      />
      <div className="conten">
        <h5 className="title">Expand your trading</h5>
        <p className="description">
          We are committed to providing a seamless and feature-rich platform
          that not only enhances trading strategies but also fosters a community
          of informed and empowered traders.
        </p>
        <p className="description">
          Through cutting-edge technology and user-centric design, we aim to
          redefine the trading experience on TON,SOL,BASE,BTC L2,... making it
          accessible, efficient, and rewarding for every user.
        </p>

        <div className="btn">
          <Button padding="0 30px" height="48px" width="145px" type="primary">
            Start BOT
          </Button>
        </div>
      </div>
    </S.LandingExpandWrap>
  );
}
