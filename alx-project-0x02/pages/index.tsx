// app/page.tsx
import Header from '../components/layout/Header';
import { WelcomeProps } from '../interfaces';

const Home = () => {
  const props: WelcomeProps = {
    message: 'Welcome to my Next.js project with TypeScript & Tailwind CSS!, This is a simple page demonstrating the use of TypeScript interfaces and Tailwind',
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