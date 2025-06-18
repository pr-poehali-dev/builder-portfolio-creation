import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Ремонт квартир",
      description:
        "Комплексный ремонт квартир под ключ: от косметического до капитального",
      features: [
        "Дизайн-проект",
        "Демонтаж",
        "Черновая отделка",
        "Чистовая отделка",
      ],
      price: "от 3 500 ₽/м²",
    },
    {
      icon: "Building",
      title: "Ремонт офисов",
      description: "Профессиональный ремонт офисных помещений любой площади",
      features: ["Планировка", "Электрика", "Кондиционирование", "Мебель"],
      price: "от 2 800 ₽/м²",
    },
    {
      icon: "Bath",
      title: "Ремонт ванных",
      description:
        "Полная реконструкция ванных комнат с современными материалами",
      features: ["Гидроизоляция", "Плитка", "Сантехника", "Освещение"],
      price: "от 4 200 ₽/м²",
    },
    {
      icon: "ChefHat",
      title: "Ремонт кухонь",
      description: "Создание функциональных и красивых кухонных пространств",
      features: ["Планировка", "Столешницы", "Техника", "Мебель"],
      price: "от 3 800 ₽/м²",
    },
    {
      icon: "Paintbrush",
      title: "Малярные работы",
      description: "Качественная покраска стен, потолков и других поверхностей",
      features: ["Подготовка", "Грунтовка", "Покраска", "Декор"],
      price: "от 350 ₽/м²",
    },
    {
      icon: "Layers",
      title: "Напольные покрытия",
      description: "Укладка любых видов напольных покрытий",
      features: ["Ламинат", "Паркет", "Плитка", "Линолеум"],
      price: "от 450 ₽/м²",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и отделке помещений.
            Работаем быстро, качественно и в срок.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Icon
                    name={service.icon}
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Включает:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    {service.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Нужна консультация?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Наши специалисты бесплатно проконсультируют вас по любым вопросам и
            помогут выбрать оптимальное решение для вашего проекта
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
