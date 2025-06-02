import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Tools = () => {
  const programs = {
    figma: {
      name: "Figma",
      level: "Начинающий - Продвинутый",
      price: "Бесплатно / $12-45/мес",
      rating: 5,
      features: [
        {
          category: "Основные инструменты",
          items: [
            "Векторные инструменты рисования",
            "Компоненты и варианты",
            "Автолейауты для адаптивности",
            "Совместная работа в реальном времени",
            "Комментарии и обратная связь",
            "Версионность и история изменений",
          ],
        },
        {
          category: "Прототипирование",
          items: [
            "Интерактивные прототипы",
            "Анимации и переходы",
            "Overlays и модальные окна",
            "Условная логика",
            "Переменные и выражения",
            "Презентация прототипов",
          ],
        },
        {
          category: "Дизайн-системы",
          items: [
            "Библиотеки компонентов",
            "Стили текста и цветов",
            "Токены дизайна",
            "Документация компонентов",
            "Публикация библиотек",
            "Синхронизация между командами",
          ],
        },
      ],
      tutorials: [
        "Создание первого макета за 30 минут",
        "Построение адаптивного лендинга",
        "Создание интерактивного прототипа",
        "Работа с компонентами и вариантами",
        "Настройка дизайн-системы",
      ],
    },
    adobe: {
      name: "Adobe Creative Suite",
      level: "Средний - Эксперт",
      price: "$20.99-52.99/мес",
      rating: 4,
      features: [
        {
          category: "Photoshop",
          items: [
            "Обработка и ретушь фотографий",
            "Создание макетов веб-страниц",
            "Работа со слоями и масками",
            "Фильтры и эффекты",
            "Экспорт для веба",
            "Создание анимированных GIF",
          ],
        },
        {
          category: "Illustrator",
          items: [
            "Векторная графика и иллюстрации",
            "Создание логотипов и иконок",
            "Типографические композиции",
            "Паттерны и текстуры",
            "Экспорт в SVG",
            "Подготовка графики для веба",
          ],
        },
        {
          category: "XD",
          items: [
            "UI/UX дизайн приложений",
            "Wireframing и прототипирование",
            "Интерактивные переходы",
            "Голосовые прототипы",
            "Совместная работа",
            "Передача в разработку",
          ],
        },
      ],
      tutorials: [
        "Создание лендинга в Photoshop",
        "Дизайн мобильного приложения в XD",
        "Создание иконок в Illustrator",
        "Обработка фото для веб-проектов",
        "Анимация интерфейсов",
      ],
    },
    sketch: {
      name: "Sketch",
      level: "Средний - Продвинутый",
      price: "$9/мес (только Mac)",
      rating: 4,
      features: [
        {
          category: "Дизайн интерфейсов",
          items: [
            "Векторное редактирование",
            "Символы и библиотеки",
            "Стили текста и слоёв",
            "Artboards для разных экранов",
            "Экспорт ассетов",
            "Плагины и расширения",
          ],
        },
        {
          category: "Совместная работа",
          items: [
            "Sketch Cloud для шеринга",
            "Комментарии и обратная связь",
            "Версионность проектов",
            "Интеграция с инструментами",
            "Handoff для разработчиков",
            "Inspect для спецификаций",
          ],
        },
      ],
      tutorials: [
        "Основы работы в Sketch",
        "Создание мобильного интерфейса",
        "Работа с символами",
        "Подготовка ассетов для iOS/Android",
        "Настройка рабочего процесса",
      ],
    },
  };

  const tutorials = [
    {
      title: "Полный курс по Figma",
      duration: "8 часов",
      level: "Начинающий",
      lessons: 24,
      description: "От основ до создания сложных дизайн-систем",
      topics: [
        "Интерфейс и основные инструменты",
        "Работа с векторными объектами",
        "Компоненты и варианты",
        "Автолейауты и адаптивность",
        "Прототипирование и анимации",
        "Дизайн-системы и библиотеки",
      ],
    },
    {
      title: "Adobe для веб-дизайнера",
      duration: "12 часов",
      level: "Средний",
      lessons: 36,
      description: "Комплексное изучение Photoshop, Illustrator и XD",
      topics: [
        "Photoshop: от обработки до веб-дизайна",
        "Illustrator: векторная графика и иконки",
        "XD: прототипирование и UI дизайн",
        "Интеграция между программами",
        "Оптимизация для веба",
        "Подготовка файлов для разработки",
      ],
    },
    {
      title: "Sketch: профессиональный подход",
      duration: "6 часов",
      level: "Средний",
      lessons: 18,
      description: "Эффективная работа и продвинутые техники",
      topics: [
        "Настройка рабочего пространства",
        "Продвинутая работа с символами",
        "Плагины для ускорения работы",
        "Создание дизайн-систем",
        "Передача в разработку",
        "Интеграция с другими инструментами",
      ],
    },
  ];

  return (
    <section id="tools" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Инструменты веб-дизайнера
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подробный разбор функционала основных программ для веб-дизайна.
            Изучите возможности каждого инструмента и выберите подходящий для
            ваших задач.
          </p>
        </div>

        <Tabs defaultValue="programs" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="programs">Программы</TabsTrigger>
            <TabsTrigger value="tutorials">Курсы</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-8">
            {Object.entries(programs).map(([key, program]) => (
              <Card key={key} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {program.name}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Уровень: {program.level}</span>
                        <span>Цена: {program.price}</span>
                        <div className="flex items-center">
                          {[...Array(program.rating)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={16}
                              className="text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-purple-600">Рекомендуем</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Основной функционал:
                      </h4>
                      <div className="space-y-4">
                        {program.features.map((category, index) => (
                          <div key={index}>
                            <h5 className="font-medium text-purple-600 mb-2">
                              {category.category}
                            </h5>
                            <ul className="space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start space-x-2 text-sm text-gray-600"
                                >
                                  <Icon
                                    name="Check"
                                    size={16}
                                    className="text-green-500 mt-0.5 flex-shrink-0"
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Практические туториалы:
                      </h4>
                      <div className="space-y-3">
                        {program.tutorials.map((tutorial, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="text-sm text-gray-700">
                              {tutorial}
                            </span>
                            <Button size="sm" variant="ghost">
                              <Icon name="Play" size={16} />
                            </Button>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 space-y-3">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать {program.name}
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Icon
                            name="ExternalLink"
                            size={16}
                            className="mr-2"
                          />
                          Официальная документация
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((course, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{course.level}</Badge>
                      <span className="text-sm text-gray-500">
                        {course.duration}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <p className="text-gray-600 text-sm">
                      {course.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <span>📚 {course.lessons} уроков</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h5 className="font-medium text-gray-900">
                        Программа курса:
                      </h5>
                      {course.topics.map((topic, topicIndex) => (
                        <div
                          key={topicIndex}
                          className="flex items-start space-x-2 text-sm text-gray-600"
                        >
                          <Icon
                            name="ChevronRight"
                            size={14}
                            className="mt-0.5 flex-shrink-0"
                          />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать обучение
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Не знаете с чего начать?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Пройдите бесплатный тест и получите персональные рекомендации по
            выбору инструментов и программы обучения под ваши цели.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            <Icon name="Target" size={20} className="mr-2" />
            Пройти тест на выбор инструментов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tools;
