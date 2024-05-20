import { Col, Row } from 'antd';
import * as S from './LandingFaster';
import Image from 'next/image';
import GraphBackground from '@/public/icons/common/graph-background.svg';
import GraphDot from '@/public/icons/common/graph-dot.svg';
import Media from '@/public/icons/common/media-icon.svg';
import OptimizedLeft from '@/public/icons/common/OptimizedLeft.svg';
import OptimizedAsset from '@/public/icons/common/asset-container.svg';
import Button from '@/components/core/common/Button';

const data = [
  {
    icon: '/icons/features/icon1.svg',
    title: 'Lightning Speed Swap',
    description:
      'Absolute compatibility with DEXs. Ensures maximum multi-threaded transaction speed',
  },
  {
    icon: '/icons/features/icon2.svg',
    title: 'Security Takes Priority',
    description:
      'A decentralized cloud data management method ensures security and reliability',
  },
  {
    icon: '/icons/features/icon3.svg',
    title: 'Private Transactions',
    description:
      'User transactions are executed privately, minimizing losses due to slippage',
  },
  {
    icon: '/icons/features/icon4.svg',
    title: 'Direct Referral System',
    description:
      'Referral other users to use BOT to receive passive commissions',
  },
  {
    icon: '/icons/features/icon5.svg',
    title: 'Flat UI Easy To Use',
    description:
      'Intuitive and simple interface even for new or advanced users',
  },
  {
    icon: '/icons/features/icon6.svg',
    title: 'Staking BOT tokens',
    description:
      'Stake AiDexTradingBot`s stable tokens to earn passive income without trading',
  },
];

export default function LandingFaster() {
  return (
    <S.LandingFasterWrap>
      <div className="title">
        <h5>Faster. Smarter.</h5>
        <p>
          Use social login integrations, lower user friction, and facilitate
          more transactions.
        </p>
      </div>
      <S.ContentMission>
        <Row gutter={24} style={{ width: '100%' }}>
          <Col xs={24} md={14}>
            <S.Mission className="open-to-view-left">
              <span>Mission</span>
              <p>
                Our mission is to democratize access to advanced trading tools
                on the Solana network, empowering users of all levels to
                navigate the decentralized finance landscape with confidence.
              </p>
              <div className="image">
                <Image
                  className="graph-background"
                  src={GraphBackground}
                  unoptimized
                  alt=""
                />
                <Image
                  className="graph-dot"
                  src={GraphDot}
                  unoptimized
                  alt=""
                />
                <div className="text-popup">
                  <Image
                    src={'/icons/common/icon-grap.svg'}
                    width={18}
                    height={18}
                    alt=""
                  />
                  <span>Alert -</span>
                  <p> The login page has mobile issues.</p>
                </div>
              </div>
            </S.Mission>
          </Col>
          <Col xs={24} md={10}>
            <S.Vision className="open-to-view-left">
              <span>Vision</span>
              <p>
                Our vision at AiDexTrading is to be the leading force in shaping
                the future of decentralized trading on the network.
              </p>
              <Image className="media" src={Media} unoptimized alt="" />
            </S.Vision>
          </Col>
        </Row>
        <S.OptimizedForSecurity>
          <div className="background">
            <div>
              <Image className="left" src={OptimizedLeft} alt="" fill />
            </div>
            <div>
              <Image className="right" src={OptimizedLeft} alt="" fill />
            </div>
          </div>
          <div className="content-base open-to-view">
            <Row>
              <Col xs={24} md={10}>
                <div className="left-content">
                  <span className="title">Optimized for security</span>
                  <p className="description">
                    Designed with a focus on security, the system employs robust
                    encryption protocols, regular security updates, and advanced
                    authentication measures to ensure a highly secure
                    environment.
                  </p>
                  <Button
                    padding="7px 30px"
                    height="48px"
                    width="178px"
                    margin="30px 0 59px 0"
                    type="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </Col>
              <Col xs={24} md={14}>
                <Image
                  className="OptimizedAsset"
                  src={OptimizedAsset}
                  unoptimized
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </S.OptimizedForSecurity>
        <S.ListFeatures>
          <Row style={{ width: '100%' }} gutter={[80, 60]}>
            {data.map((item, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <S.Item>
                  <div className="header">
                    <Image src={item.icon} width={24} height={24} alt="" />
                    <p className="title">{item.title}</p>
                  </div>
                  <p className="description">{item.description}</p>
                </S.Item>
              </Col>
            ))}
          </Row>
        </S.ListFeatures>
      </S.ContentMission>
    </S.LandingFasterWrap>
  );
}
