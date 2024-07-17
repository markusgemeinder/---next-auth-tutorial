import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='https://www.youtube.com/watch?app=desktop&si=h18lA8OxWQ76hwjv&v=MNm1XhDjX1s&feature=youtu.be'>
        Tutorial
      </Link>
      <p>paused at 14:01</p>
    </div>
  );
};

export default Home;
