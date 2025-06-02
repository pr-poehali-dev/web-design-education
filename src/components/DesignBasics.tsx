import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DesignBasics = () => {
  const principles = [
    {
      icon: "Layers",
      title: "Иерархия",
      description:
        "Организуйте контент по важности, используя размер, цвет и расположение",
      example: "Заголовки должны быть крупнее основного текста",
      details: [
        "Визуальный вес элементов",
        "Z-паттерн и F-паттерн чтения",
        "Правило 7±2 для восприятия",
      ],
    },
    {
      icon: "Grid3x3",
      title: "Сетка и выравнивание",
      description:
        "Создавайте порядок и структуру с помощью невидимых направляющих",
      example: "Все элементы выровнены по общей сетке",
      details: [
        "12-колоночная сетка",
        "Модульная сетка для контента",
        "Базовая линия для текста",
      ],
    },
    {
      icon: "Palette",
      title: "Цветовая гармония",
      description:
        "Используйте цвет для создания настроения и направления внимания",
      example: "Не более 3-4 основных цветов в палитре",
      details: [
        "Психология цвета в дизайне",
        "Контрастность и доступность",
        "60-30-10 правило цветов",
      ],
    },
    {
      icon: "Type",
      title: "Типографика",
      description:
        "Выбирайте читаемые шрифты и создавайте правильную иерархию текста",
      example: "Комбинируйте не более 2-3 шрифтов",
      details: [
        "Serif vs Sans-serif выбор",
        "Интерлиньяж и кернинг",
        "Адаптивная типографика",
      ],
    },
    {
      icon: "Minimize2",
      title: "Пространство",
      description:
        "Используйте белое пространство для создания баланса и фокуса",
      example: "Больше пространства = больше внимания",
      details: [
        "Микро и макро пространство",
        "Правило близости в группировке",
        "Дыхание в интерфейсах",
      ],
    },
    {
      icon: "Eye",
      title: "Контраст",
      description:
        "Создавайте четкие различия между элементами для лучшей читаемости",
      example: "Темный текст на светлом фоне",
      details: [
        "WCAG стандарты доступности",
        "Цветовой и тональный контраст",
        "Контраст размеров и форм",
      ],
    },
    {
      icon: "Repeat",
      title: "Повторение",
      description: "Создавайте единство дизайна через повторяющиеся элементы",
      example: "Одинаковые кнопки по всему сайту",
      details: [
        "Паттерны в интерфейсах",
        "Консистентность элементов",
        "Дизайн-системы и гайдлайны",
      ],
    },
    {
      icon: "Move",
      title: "Движение и анимация",
      description: "Используйте анимации для улучшения пользовательского опыта",
      example: "Плавные переходы между состояниями",
      details: [
        "12 принципов анимации",
        "Микровзаимодействия",
        "Performance анимаций",
      ],
    },
    {
      icon: "Smartphone",
      title: "Адаптивность",
      description: "Проектируйте для всех устройств и размеров экранов",
      example: "Mobile-first подход к дизайну",
      details: [
        "Breakpoints и медиазапросы",
        "Флексибильные сетки",
        "Touch-friendly интерфейсы",
      ],
    },
  ];

  return (
    <section id="basics" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Основы веб-дизайна
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Фундаментальные принципы, которые должен знать каждый дизайнер. Эти
            основы помогут создавать красивые и функциональные интерфейсы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit group-hover:bg-purple-200 transition-colors">
                  <Icon
                    name={principle.icon as any}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {principle.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center flex-1">
                <p className="text-gray-600 mb-4">{principle.description}</p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-purple-700 font-medium">
                    💡 {principle.example}
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-gray-900 text-sm">
                    Изучите подробнее:
                  </h5>
                  {principle.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start space-x-2 text-xs text-gray-600"
                    >
                      <Icon
                        name="ChevronRight"
                        size={12}
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы применить знания на практике?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Пройдите интерактивные упражнения по каждому принципу дизайна и
              получите персональную обратную связь от опытных дизайнеров.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Play" size={20} className="mr-2" />
                Начать практику
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать чек-лист принципов
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignBasics;
