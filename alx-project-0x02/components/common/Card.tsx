import { type CardProps } from '../../interfaces';

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
