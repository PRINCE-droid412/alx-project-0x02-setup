import { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import Header from '../components/layout/Header';
import { CardProps } from '../interfaces';

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: 'Welcome to ALX',
      content: 'This project demonstrates reusable components using Next.js and TypeScript.',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6 space-y-6">
      <h1 className="text-4xl font-bold text-blue-700">Welcome To My Blog page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add New Post
      </button>

      <div className="space-y-4 w-full flex flex-col items-center">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-blue-50 p-6 space-y-6">
        {/* content remains the same */}
      </div>
    </div>
  );
}
