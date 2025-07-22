// app/page.tsx
import Header from '../components/layout/Header';
import { WelcomeProps } from '../interfaces';

const Home = () => {
  const props: WelcomeProps = {
    message: 'Welcome to your Next.js project with TypeScript and Tailwind CSS!',
  };

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">{props.message}</h1>
      </main>
    </div>
  );
};

export default Home;