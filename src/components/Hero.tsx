import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Качественный ремонт
              <span className="text-orange-400"> вашего дома</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed"></p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-blue-100">
                    Завершенных проектов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">20+</div>
                  <div className="text-sm text-blue-100">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-sm text-blue-100">
                    Поддержка клиентов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">100%</div>
                  <div className="text-sm text-blue-100">Гарантия качества</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
