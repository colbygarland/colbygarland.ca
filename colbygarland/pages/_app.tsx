import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { PageHead } from '../components/head';
import { Header } from '../components/header';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <div className="bg-gray-100 flex min-h-screen">
        <div className="w-full">
          <Header />
          <div className="px-10 lg:px-30">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
