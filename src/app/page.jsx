"use client";

import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { MainContainer } from './product-list/MainContainer';
import './page.scss';

export default function Home() {

  return (
    <div className='page-main-container'>
      <ConfigProvider
          theme={{
            algorithm: theme.lightAlgorithm
          }}
      >
        <MainContainer />
      </ConfigProvider>
    </div>
  );
}
