import Head from 'next/head';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
  <Head>
    <></>
  </Head>

  <StrictMode>
    <App />
  </StrictMode>
  </>
)
