import Image from 'next/image';
import { Col, Row } from 'antd';

import * as S from './Footer';

export default function Footer() {
  return (
    <S.FooterWrap>
      <Row>
        <Col xs={24} md={10}>
          <div className="logo">
            <Image
              src={'/icons/common/logo.svg'}
              width={20.77}
              height={20.77}
              alt=""
            />
            <span>AiDexTrading</span>
          </div>
        </Col>
        <Col className="list-product" xs={24} md={14}>
          <Row>
            <Col className="resource" xs={12} sm={6}>
              <S.Item>
                <span className="title">Product</span>
                <div className="list-menu">
                  <p>Features</p>
                  <p>Docs</p>
                  <p>Integrations</p>
                </div>
              </S.Item>
            </Col>
            <Col className="resource" xs={12} sm={6}>
              <S.Item>
                <span className="title">Company</span>
                <div className="list-menu">
                  <p>About</p>
                  <p>Blog</p>
                  <p>Customers</p>
                </div>
              </S.Item>
            </Col>
            <Col xs={12} sm={6} className="resource-develop">
              <S.Item>
                <span className="title">Resources</span>
                <div className="list-menu">
                  <p>Community</p>
                  <p>Contact</p>
                  <p>Privacy policy</p>
                  <p>Terms of use</p>
                </div>
              </S.Item>
            </Col>
            <Col xs={12} sm={6} className="resource-develop">
              <S.Item>
                <span className="title">Developers</span>
                <div className="list-menu">
                  <p>API</p>
                  <p>Status</p>
                </div>
              </S.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="footer-end">
        <div className="list-tems">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Report Abuse</p>
          <p>©2024 AiDexTrading. All rights reserved.</p>
        </div>
        <div className="list-icons">
          <Image
            src={'/icons/features/button1.svg'}
            width={32}
            height={32}
            alt=""
          />
          <Image
            src={'/icons/features/button2.svg'}
            width={32}
            height={32}
            alt=""
          />
          <Image
            src={'/icons/features/button3.svg'}
            width={32}
            height={32}
            alt=""
          />
          <Image
            src={'/icons/features/button4.svg'}
            width={32}
            height={32}
            alt=""
          />
        </div>
      </div>
    </S.FooterWrap>
  );
}
