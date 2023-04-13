import '@/styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Layout from './Layout';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 220,
      easing: 'ease-in-out',
      delay: 0,
      once: false
    });
  }, []);
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>)
}
