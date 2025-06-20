import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <Icon
            name="BookOpen"
            size={64}
            className="mx-auto text-purple-600 mb-6"
          />
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
          Ваш личный
          <br />
          <span className="text-purple-600">творческий дневник</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-merriweather leading-relaxed">
          Место для ваших мыслей, идей и вдохновения. Записывайте, создавайте,
          делитесь своими историями с миром.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Начать писать
          </button>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-200">
            Посмотреть записи
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
