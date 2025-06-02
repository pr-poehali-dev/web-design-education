import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DesignBasics = () => {
  const principles = [
    {
      icon: "Layers",
      title: "Иерархия",
      description:
        "Организуйте контент по важности, используя размер, цвет и расположение",
      example: "Заголовки должны быть крупнее основного текста",
    },
    {
      icon: "Grid3x3",
      title: "Сетка и выравнивание",
      description:
        "Создавайте порядок и структуру с помощью невидимых направляющих",
      example: "Все элементы выровнены по общей сетке",
    },
    {
      icon: "Palette",
      title: "Цветовая гармония",
      description:
        "Используйте цвет для создания настроения и направления внимания",
      example: "Не более 3-4 основных цветов в палитре",
    },
    {
      icon: "Type",
      title: "Типографика",
      description:
        "Выбирайте читаемые шрифты и создавайте правильную иерархию текста",
      example: "Комбинируйте не более 2-3 шрифтов",
    },
    {
      icon: "Minimize2",
      title: "Пространство",
      description:
        "Используйте белое пространство для создания баланса и фокуса",
      example: "Больше пространства = больше внимания",
    },
    {
      icon: "Eye",
      title: "Контраст",
      description:
        "Создавайте четкие различия между элементами для лучшей читаемости",
      example: "Темный текст на светлом фоне",
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
              className="group hover:shadow-lg transition-all duration-300"
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

              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{principle.description}</p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-purple-700 font-medium">
                    💡 {principle.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignBasics;
