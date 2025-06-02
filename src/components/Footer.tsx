import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Palette" size={32} className="text-purple-400" />
              <span className="text-2xl font-bold">ДизайнПро</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Обучаем веб-дизайну с 2020 года. Более 10,000 студентов уже
              получили новую профессию с нашей помощью.
            </p>
            <div className="flex space-x-4">
              <Icon name="Mail" size={20} className="text-purple-400" />
              <span className="text-gray-300">hello@designpro.ru</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Обучение</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Все курсы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Бесплатные уроки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Мастер-классы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Сертификация
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Сообщество
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ДизайнПро. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
