import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Examples = () => {
  const examples = [
    {
      title: "Лендинг стартапа",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      tags: ["Минимализм", "Конверсия", "B2B"],
      description: "Современный лендинг с фокусом на конверсию",
    },
    {
      title: "Интернет-магазин",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      tags: ["Каталог", "UX", "Мобильный"],
      description: "Удобный интерфейс для онлайн-покупок",
    },
    {
      title: "Мобильное приложение",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      tags: ["iOS", "Финтех", "Дизайн-система"],
      description: "Интуитивный дизайн финансового приложения",
    },
    {
      title: "Корпоративный сайт",
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      tags: ["Премиум", "Многостраничный", "CMS"],
      description: "Представительский сайт крупной компании",
    },
  ];

  return (
    <section id="examples" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Практические примеры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изучайте реальные проекты и анализируйте решения опытных дизайнеров.
            Каждый пример разобран с объяснением принципов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-700">
                    {example.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {example.title}
                </h3>
                <p className="text-gray-600 mb-4">{example.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {example.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
