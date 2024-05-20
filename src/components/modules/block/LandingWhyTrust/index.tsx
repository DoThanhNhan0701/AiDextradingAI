import { Col, Row } from 'antd';
import * as S from './LandingWhyTrust';
import Image from 'next/image';

const data = [
  {
    icon: '/icons/features/icon1.svg',
    title: 'Secure Key Management',
    description:
      'AiDexTrading employs robust key management practices, ensuring the secure storage and handling of private keys. By utilizing industry-standard encryption protocols and secure key storage solutions, we prioritize the protection of user assets, minimizing the risk of unauthorized access.',
  },
  {
    icon: '/icons/features/icon2.svg',
    title: 'Multi-Factor Authentication',
    description:
      'Enhancing the security of user accounts, AiDexTrading implements multi-factor authentication (MFA). This additional layer of verification, typically involving a combination of passwords and one-time codes, adds an extra barrier against unauthorized access, fortifying the overall security posture of the trading platform.',
  },
  {
    icon: '/icons/features/icon3.svg',
    title: 'Regular Security Audits and Updates',
    description:
      'Regular security audits are conducted to identify and address potential vulnerabilities promptly. We stay vigilant against emerging threats and vulnerabilities, implementing timely software updates and patches to ensure that our platform is fortified against evolving security challenges.',
  },
];

export default function LandingWhyTrust() {
  return (
    <S.LandingWhyTrust>
      <Row>
        <Col xs={24} xl={14}>
          <span className="title">Why trust us?</span>
          <p className="description">
            Our track record of reliability, transparency, and consistently
            delivering on promises establishes a compelling foundation for trust
            in our services.
          </p>
        </Col>
        <Col xs={24} xl={10}>
          <div className="list-btn">
            <div className="btn-why shadown">Realistic scenarios</div>
            <div className="btn-why">In depth Analysis</div>
            <div className="btn-why">Continuous training</div>
          </div>
        </Col>
      </Row>
      <S.ContentWhy>
        <div className="list-btn">
          <div className="btn-why shadown">Realistic scenarios</div>
        </div>
        <p className="realistic-scenarios">Realistic scenarios</p>
        <S.ListRealisticScenarios>
          <Row>
            {data.map((item, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <S.ItemRealisticScenarios key={index}>
                  <div className="header">
                    <Image src={item.icon} width={24} height={24} alt="" />
                    <p>{item.title}</p>
                  </div>
                  <p className="description">{item.description}</p>
                </S.ItemRealisticScenarios>
              </Col>
            ))}
          </Row>
        </S.ListRealisticScenarios>
      </S.ContentWhy>
    </S.LandingWhyTrust>
  );
}
