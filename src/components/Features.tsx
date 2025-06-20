import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: "Edit3",
      title: "Редактор текста",
      description:
        "Удобный редактор для создания красивых записей с форматированием и стилями.",
    },
    {
      icon: "Image",
      title: "Фотографии",
      description:
        "Добавляйте изображения к своим записям, создавайте визуальные истории.",
    },
    {
      icon: "Share2",
      title: "Делитесь идеями",
      description:
        "Публикуйте записи и вдохновляйте других своими мыслями и творчеством.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Всё для творчества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-merriweather">
            Простые инструменты для создания красивых записей и ведения дневника
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
