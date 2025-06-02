import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Palette" size={32} className="text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">ДизайнПро</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#courses"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Курсы
            </a>
            <a
              href="#basics"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Основы
            </a>
            <a
              href="#examples"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Примеры
            </a>
            <a
              href="#resources"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Ресурсы
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Войти
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
