import Icon from "@/components/ui/icon";

const CareerInfo = () => {
  const roadmapSteps = [
    {
      step: 1,
      title: "Изучите основы",
      description: "Композиция, цвет, типографика",
      duration: "1-2 недели",
    },
    {
      step: 2,
      title: "Освойте Figma",
      description: "Главный инструмент дизайнера",
      duration: "2-3 недели",
    },
    {
      step: 3,
      title: "Создайте портфолио",
      description: "3-5 учебных проектов",
      duration: "1-2 месяца",
    },
    {
      step: 4,
      title: "Изучите HTML/CSS",
      description: "Базовые знания вёрстки",
      duration: "2-4 недели",
    },
  ];

  const firstSteps = [
    {
      title: "Изучите теорию",
      description: "Основы композиции и цветовой теории",
      icon: "BookOpen",
    },
    {
      title: "Скачайте Figma",
      description: "Бесплатный инструмент для дизайна",
      icon: "Download",
    },
    {
      title: "Практикуйтесь",
      description: "Повторяйте чужие дизайны",
      icon: "Repeat",
    },
    {
      title: "Найдите сообщество",
      description: "Общайтесь с другими дизайнерами",
      icon: "Users",
    },
  ];

  const skills = [
    { skill: "Figma / Adobe XD", type: "Обязательно" },
    { skill: "Основы композиции", type: "Обязательно" },
    { skill: "Цветовая теория", type: "Обязательно" },
    { skill: "HTML/CSS основы", type: "Желательно" },
    { skill: "Английский язык", type: "Желательно" },
  ];

  return (
    <section
      id="career"
      className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            С чего начать в веб-дизайне
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Пошаговый план изучения веб-дизайна для полных новичков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Дорожная карта */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Icon name="Map" size={24} className="text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Дорожная карта</h3>
            </div>
            <div className="space-y-3">
              {roadmapSteps.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.description}
                    </div>
                    <div className="text-xs text-purple-600 mt-1">
                      {item.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Первые шаги */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Icon name="Rocket" size={24} className="text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Первые шаги</h3>
            </div>
            <div className="space-y-4">
              {firstSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon
                    name={step.icon}
                    size={20}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      {step.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Навыки */}
          <div className="bg-white rounded-xl p-6 shadow-lg md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Icon
                name="CheckCircle"
                size={24}
                className="text-orange-600 mr-2"
              />
              <h3 className="text-xl font-semibold">Что изучать</h3>
            </div>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="font-medium text-gray-900">{skill.skill}</div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      skill.type === "Обязательно"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {skill.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Мотивационная статистика */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">
            Почему стоит начать
          </h3>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">3-6</div>
              <div className="text-gray-600">Месяцев изучения</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                Бесплатно
              </div>
              <div className="text-gray-600">Можно начать</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerInfo;
