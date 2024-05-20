import Image from 'next/image';
import * as S from './LandingMoreThan';
import LandingMoreThanWrap from '@/public/images/common/LandingMoreThan.png';
import LandingAsset from '@/public/images/common/asset-more-than.svg';
import Button from '@/components/core/common/Button';

export default function LandingMoreThan() {
  return (
    <S.LandingMoreThanWrap>
      <Image className="LandingMoreThanWrap" src={LandingMoreThanWrap} alt="" />
      <div className="title-header">
        <span className="more-than">More than just</span>
        <span className="more-than">a security service</span>
        <p className="description">
          It goes beyond being just a security service, offering a multifaceted
          solution with additional features and functionalities to enhance
          overall system performance.
        </p>
        <div className="btn-contact-sales">
          <Button
            margin="40px 0 0 0"
            padding="0 30px"
            width="180px"
            height="48px"
            type="primary"
          >
            Contact Sales
          </Button>
        </div>
      </div>
      <div className="landing-asset open-to-view">
        <Image
          className="landing-asset-image"
          src={LandingAsset}
          unoptimized
          alt=""
        />
      </div>
    </S.LandingMoreThanWrap>
  );
}
