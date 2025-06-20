import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-purple-600 font-medium"
      : "text-gray-600 hover:text-purple-600";
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 font-montserrat"
          >
            Творческий дневник
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 ${isActive("/")}`}
            >
              Главная
            </Link>
            <Link
              to="/posts"
              className={`transition-colors duration-200 ${isActive("/posts")}`}
            >
              Мои записи
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 ${isActive("/about")}`}
            >
              О себе
            </Link>
            <Link
              to="/create"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Icon name="Plus" size={16} />
              <span>Создать</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
