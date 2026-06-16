import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-[#1F8268] text-white sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">apna</Link>
        <button className="bg-white text-[#1F8268] px-4 py-1.5 rounded-full font-semibold text-sm">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;