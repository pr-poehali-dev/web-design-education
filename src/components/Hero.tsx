import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Icon
            name="Palette"
            size={64}
            className="mx-auto mb-4 text-purple-200"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Веб-дизайн с нуля
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
          Всё что нужно знать начинающему веб-дизайнеру: основы, инструменты,
          ресурсы и практические советы для старта в профессии.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Изучить основы
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-300 text-white hover:bg-purple-600 px-8 py-4 text-lg"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Бесплатные ресурсы
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Users"
              size={32}
              className="mx-auto mb-3 text-purple-200"
            />
            <h3 className="font-semibold mb-2">10,000+ студентов</h3>
            <p className="text-purple-200 text-sm">Уже изучают дизайн с нами</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Award"
              size={32}
              className="mx-auto mb-3 text-purple-200"
            />
            <h3 className="font-semibold mb-2">Сертификат</h3>
            <p className="text-purple-200 text-sm">По окончании курса</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Clock"
              size={32}
              className="mx-auto mb-3 text-purple-200"
            />
            <h3 className="font-semibold mb-2">3 месяца</h3>
            <p className="text-purple-200 text-sm">От новичка до специалиста</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
