import Icon from "@/components/ui/icon";

const CareerInfo = () => {
  const salaryData = [
    { level: "Стажёр", salary: "30-50 тыс. ₽", experience: "0-1 год" },
    { level: "Джуниор", salary: "50-80 тыс. ₽", experience: "1-2 года" },
    { level: "Мидл", salary: "80-150 тыс. ₽", experience: "2-4 года" },
    { level: "Сеньор", salary: "150-300 тыс. ₽", experience: "4+ года" },
  ];

  const careerPaths = [
    {
      title: "UX/UI Дизайнер",
      description: "Проектирование пользовательских интерфейсов",
      icon: "Smartphone",
    },
    {
      title: "Product Designer",
      description: "Комплексная работа над продуктом",
      icon: "Layers",
    },
    {
      title: "Арт-директор",
      description: "Руководство дизайн-командой",
      icon: "Users",
    },
    {
      title: "Фрилансер",
      description: "Самостоятельная работа с клиентами",
      icon: "Briefcase",
    },
  ];

  const requirements = [
    { skill: "Figma, Sketch, Adobe XD", type: "Инструменты" },
    { skill: "HTML/CSS основы", type: "Технические" },
    { skill: "Типографика и композиция", type: "Дизайн" },
    { skill: "Пользовательский опыт", type: "UX" },
    { skill: "Коммуникация с командой", type: "Soft skills" },
  ];

  return (
    <section
      id="career"
      className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Профессия веб-дизайнера
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Узнайте всё о карьере в веб-дизайне: зарплаты, требования и пути
            развития
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Зарплаты */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Icon
                name="DollarSign"
                size={24}
                className="text-green-600 mr-2"
              />
              <h3 className="text-xl font-semibold">Зарплаты</h3>
            </div>
            <div className="space-y-3">
              {salaryData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium text-gray-900">
                      {item.level}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.experience}
                    </div>
                  </div>
                  <div className="font-bold text-purple-600">{item.salary}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Карьерные пути */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Icon
                name="TrendingUp"
                size={24}
                className="text-blue-600 mr-2"
              />
              <h3 className="text-xl font-semibold">Карьерные пути</h3>
            </div>
            <div className="space-y-4">
              {careerPaths.map((path, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon
                    name={path.icon}
                    size={20}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      {path.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {path.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Требования */}
          <div className="bg-white rounded-xl p-6 shadow-lg md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Icon
                name="CheckCircle"
                size={24}
                className="text-orange-600 mr-2"
              />
              <h3 className="text-xl font-semibold">Требования</h3>
            </div>
            <div className="space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="font-medium text-gray-900">{req.skill}</div>
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                    {req.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Статистика рынка */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Рынок труда</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                15000+
              </div>
              <div className="text-gray-600">Вакансий в месяц</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Удалённая работа</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2-4</div>
              <div className="text-gray-600">Месяца обучения</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                300%
              </div>
              <div className="text-gray-600">Рост за 5 лет</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerInfo;
