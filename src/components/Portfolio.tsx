import { useState } from "react";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все работы" },
    { id: "apartment", name: "Квартиры" },
    { id: "office", name: "Офисы" },
    { id: "bathroom", name: "Ванные" },
    { id: "kitchen", name: "Кухни" },
  ];

  const projects = [
    {
      id: 1,
      title: "Ремонт 3-комнатной квартиры",
      category: "apartment",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      description: "Полный ремонт с перепланировкой",
    },
    {
      id: 2,
      title: "Современный офис",
      category: "office",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      description: "Офисное пространство 200 кв.м",
    },
    {
      id: 3,
      title: "Ванная комната премиум",
      category: "bathroom",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=300&fit=crop",
      description: "Элитная отделка ванной комнаты",
    },
    {
      id: 4,
      title: "Кухня-студия",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=500&h=300&fit=crop",
      description: "Современная кухня с островом",
    },
    {
      id: 5,
      title: "Лофт-квартира",
      category: "apartment",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop",
      description: "Стильный лофт в центре города",
    },
    {
      id: 6,
      title: "Коворкинг пространство",
      category: "office",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop",
      description: "Современное коворкинг пространство",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Посмотрите на результаты нашей работы — каждый проект выполнен с
            особым вниманием к деталям
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Icon
                    name="Eye"
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
            <Icon name="Plus" size={20} className="mr-2" />
            Показать больше работ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
