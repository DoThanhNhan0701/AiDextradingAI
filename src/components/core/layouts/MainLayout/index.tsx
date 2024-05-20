import { Layout } from 'antd';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

const { Content } = Layout;

import * as S from './MainLayout';

type AdminLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function MainLayout({
  title = 'AiDextrading - web',
  children,
}: AdminLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="AiDextrading - web" />
        <meta name="keywords" content="AiDextrading - web" />
      </Head>
      <S.AdminLayoutWrap>
        <Layout className="site-layout">
          <Content>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </Content>
        </Layout>
      </S.AdminLayoutWrap>
    </>
  );
}
