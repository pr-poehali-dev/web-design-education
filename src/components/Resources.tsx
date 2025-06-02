import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Resources = () => {
  const toolCategories = [
    {
      title: "Дизайн-инструменты",
      icon: "Wrench",
      tools: [
        {
          name: "Figma",
          description: "Основной инструмент для UI/UX дизайна",
          type: "Бесплатно",
        },
        {
          name: "Adobe XD",
          description: "Профессиональный инструмент от Adobe",
          type: "Подписка",
        },
        {
          name: "Sketch",
          description: "Популярный инструмент для Mac",
          type: "Платно",
        },
      ],
    },
    {
      title: "Цветовые палитры",
      icon: "Palette",
      tools: [
        {
          name: "Coolors.co",
          description: "Генератор цветовых схем",
          type: "Бесплатно",
        },
        {
          name: "Adobe Color",
          description: "Создание палитр от Adobe",
          type: "Бесплатно",
        },
        {
          name: "Paletton",
          description: "Теория цвета на практике",
          type: "Бесплатно",
        },
      ],
    },
    {
      title: "Шрифты",
      icon: "Type",
      tools: [
        {
          name: "Google Fonts",
          description: "Бесплатные веб-шрифты",
          type: "Бесплатно",
        },
        {
          name: "Adobe Fonts",
          description: "Премиум шрифты от Adobe",
          type: "Подписка",
        },
        {
          name: "Font Pair",
          description: "Сочетания шрифтов",
          type: "Бесплатно",
        },
      ],
    },
    {
      title: "Иконки и графика",
      icon: "Image",
      tools: [
        {
          name: "Feather Icons",
          description: "Минималистичные иконки",
          type: "Бесплатно",
        },
        {
          name: "Unsplash",
          description: "Качественные фотографии",
          type: "Бесплатно",
        },
        {
          name: "Lucide",
          description: "Современные SVG иконки",
          type: "Бесплатно",
        },
      ],
    },
  ];

  return (
    <section id="resources" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ресурсы и инструменты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подборка лучших инструментов и ресурсов для веб-дизайнеров. Всё
            необходимое для создания качественных проектов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icon
                      name={category.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{tool.name}</h4>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-white rounded text-gray-700">
                        {tool.type}
                      </span>
                      <Button size="sm" variant="ghost">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Download" size={20} className="mr-2" />
            Скачать полный список ресурсов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
