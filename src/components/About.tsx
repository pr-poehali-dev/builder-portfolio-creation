import Icon from "@/components/ui/icon";

const About = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Даем гарантию на все виды работ от 2 до 5 лет",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Мастера с опытом работы более 10 лет",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Завершаем проекты точно в оговоренные сроки",
    },
    {
      icon: "Wallet",
      title: "Честные цены",
      description: "Фиксированная стоимость без скрытых доплат",
    },
    {
      icon: "Truck",
      title: "Свои материалы",
      description: "Работаем только с проверенными поставщиками",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Всегда на связи для решения ваших вопросов",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            О нашей компании
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HomeРемонт — это команда профессионалов, которая превращает ваши
            идеи в реальность. Мы специализируемся на комплексном ремонте и
            отделке помещений любой сложности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Icon
                    name={benefit.icon}
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Завершенных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Лет успешной работы</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99,9%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
