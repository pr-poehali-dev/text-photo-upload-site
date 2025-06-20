import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <Icon name="User" size={48} className="text-purple-600" />
            </div>
          </div>

          <div className="p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center font-montserrat">
              О себе
            </h1>

            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-600 mb-6 font-merriweather leading-relaxed">
                Добро пожаловать в мой творческий дневник! Здесь я делюсь своими
                мыслями, идеями и наблюдениями о жизни, творчестве и
                вдохновении.
              </p>

              <p className="text-gray-600 font-merriweather leading-relaxed">
                Этот дневник — место для размышлений, экспериментов с идеями и
                поиска новых путей самовыражения. Каждая запись — это шаг на
                пути к лучшему пониманию себя и мира вокруг.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  Увлечения
                </h3>
                <p className="text-gray-600 font-merriweather">
                  Чтение, фотография, прогулки на природе
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Lightbulb"
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  Вдохновение
                </h3>
                <p className="text-gray-600 font-merriweather">
                  Искусство, музыка, путешествия
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  Цели
                </h3>
                <p className="text-gray-600 font-merriweather">
                  Творческий рост, самопознание
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
