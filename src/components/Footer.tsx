import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Icon name="Home" size={24} className="text-blue-400 mr-2" />
              <span className="text-xl font-bold">РемонтПро</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Профессиональная компания по ремонту и отделке помещений. Более 20
              лет создаем комфортные пространства для жизни и работы.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ремонт квартир
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ремонт офисов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ремонт ванных
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ремонт кухонь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Малярные работы
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span className="text-sm">г. Астрахань</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                <span className="text-sm">+7 (925) 545-17-36</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <span className="text-sm">olya_rozkhova_2018@mail.ru</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 РемонтПро. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
