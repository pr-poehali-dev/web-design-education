import CourseCard from "./CourseCard";

const Courses = () => {
  const courses = [
    {
      title: "Основы веб-дизайна",
      description: "Изучите принципы композиции, типографики и цветовой теории",
      duration: "4 недели",
      level: "Начинающий",
      price: "₽19,990",
      icon: "Paintbrush",
      topics: ["Композиция", "Типографика", "Цвет", "UI/UX"],
    },
    {
      title: "Figma с нуля",
      description: "Освойте главный инструмент современного дизайнера",
      duration: "3 недели",
      level: "Начинающий",
      price: "₽14,990",
      icon: "Figma",
      topics: ["Figma", "Прототипирование", "Компоненты", "Автолейауты"],
    },
    {
      title: "Адаптивный дизайн",
      description: "Создавайте дизайн для всех устройств и экранов",
      duration: "6 недель",
      level: "Средний",
      price: "₽24,990",
      icon: "Smartphone",
      topics: ["Responsive", "Mobile First", "Сетки", "Брейкпоинты"],
    },
    {
      title: "UX исследования",
      description: "Изучите пользователей и создавайте удобные интерфейсы",
      duration: "5 недель",
      level: "Средний",
      price: "₽22,990",
      icon: "Search",
      topics: ["Пользователи", "Тестирование", "Аналитика", "Интервью"],
    },
    {
      title: "Веб-анимации",
      description: "Добавьте жизни в ваши проекты с помощью анимации",
      duration: "4 недели",
      level: "Продвинутый",
      price: "₽18,990",
      icon: "Zap",
      topics: ["CSS анимации", "Micro-interactions", "Lottie", "Принципы"],
    },
    {
      title: "Дизайн-системы",
      description: "Создавайте масштабируемые и согласованные интерфейсы",
      duration: "8 недель",
      level: "Продвинутый",
      price: "₽29,990",
      icon: "Grid3x3",
      topics: ["Токены", "Компоненты", "Документация", "Процессы"],
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Практические курсы от ведущих дизайнеров индустрии. Выберите свой
            путь развития в веб-дизайне.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
