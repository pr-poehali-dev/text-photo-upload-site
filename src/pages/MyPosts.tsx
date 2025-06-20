import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const MyPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Утренние размышления",
      excerpt:
        "Сегодняшнее утро принесло новые идеи о том, как важно находить время для творчества...",
      date: "15 июня 2025",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Прогулка по парку",
      excerpt:
        "Природа всегда была источником вдохновения. Сегодняшняя прогулка открыла новые перспективы...",
      date: "12 июня 2025",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Творческий процесс",
      excerpt:
        "Размышления о том, как рождаются идеи и почему важно их записывать...",
      date: "8 июня 2025",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-montserrat">
              Мои записи
            </h1>
            <p className="text-gray-600 font-merriweather">
              Коллекция ваших мыслей и идей
            </p>
          </div>

          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2">
            <Icon name="Plus" size={16} />
            <span>Новая запись</span>
          </button>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {post.date}
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed font-merriweather">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-4">
                    <button className="text-purple-600 hover:text-purple-700 flex items-center space-x-2">
                      <Icon name="Eye" size={16} />
                      <span>Читать</span>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 flex items-center space-x-2">
                      <Icon name="Edit2" size={16} />
                      <span>Редактировать</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyPosts;
