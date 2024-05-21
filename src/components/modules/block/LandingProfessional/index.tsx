import GripImage from '@/public/icons/common/grid-profesial.svg';
import { Col, Row } from 'antd';
import Image from 'next/image';
import * as S from './LandingProfessional';
import Button from '@/components/core/common/Button';
import LandingProfessionalB from '@/public/images/common/LandingProfessional.png';

export default function LandingProfessional() {
  return (
    <S.LandingProfessionalWrap>
      <Image
        className="LandingProfessionalB"
        src={LandingProfessionalB}
        unoptimized
        alt=""
      />
      <S.ContentProfessional className="open-to-view">
        <Row className="professional">
          <Col sm={24} lg={12}>
            <div>
              <p className="the-all">The all-in-one solution</p>
              <div className="professional-trading">
                Professional Trading BOT using private Nodes
              </div>
              <p className="trade-securely">
                Trade securely with unprecedented ease and tap into the
                liquidity of these decentralized ecosystems.
              </p>
            </div>
            <div className="btn-dex">
              <Button
                width="500px"
                height="62px"
                padding="18px 24px"
                type="default"
                className="dex"
              >
                <div className="content">
                  <Image
                    src={'/icons/common/dex-icon.svg'}
                    width={24}
                    height={24}
                    alt=""
                  />
                  DEX Integration
                </div>
              </Button>
              <Button
                width="500px"
                height="62px"
                margin="10px 0 0 0"
                padding="18px 24px"
                type="default"
                className="dex"
              >
                <div className="content">
                  <Image
                    src={'/icons/common/market-icon.svg'}
                    width={24}
                    height={24}
                    alt=""
                  />
                  Market Data Analysis
                </div>
              </Button>
              <Button
                width="500px"
                height="62px"
                margin="10px 0 0 0"
                padding="18px 24px"
                type="default"
                className="dex"
              >
                <div className="content">
                  <Image
                    src={'/icons/common/snipper-icon.svg'}
                    width={24}
                    height={24}
                    alt=""
                  />
                  Sniper Monitor
                </div>
              </Button>
            </div>
          </Col>
          <Col sm={24} lg={12}>
            <div className="image-right">
              <Image
                className="image-grip"
                src={GripImage}
                unoptimized
                alt=""
              />
              <Image
                className="image-square"
                src={'/icons/common/square.png'}
                width={195.76}
                height={195.76}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </S.ContentProfessional>
    </S.LandingProfessionalWrap>
  );
}
