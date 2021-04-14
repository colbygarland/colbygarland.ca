import { AboutList } from '../components/aboutList';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <AboutList />
      <p>
        View my work <Link href="/work">here.</Link>
      </p>
    </>
  );
};
export default Home;
