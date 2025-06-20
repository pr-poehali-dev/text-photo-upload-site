import { useState } from "react";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 font-montserrat">
              Новая запись
            </h1>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                Сохранить черновик
              </button>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Опубликовать
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Заголовок записи..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-2xl font-semibold text-gray-900 border-none outline-none font-montserrat placeholder-gray-400"
              />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Icon name="Bold" size={18} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Icon name="Italic" size={18} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Icon name="List" size={18} />
                </button>
                <div className="h-6 w-px bg-gray-200"></div>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Icon name="Image" size={18} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Icon name="Link" size={18} />
                </button>
              </div>

              <textarea
                placeholder="Расскажите свою историю..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-96 text-gray-700 border-none outline-none resize-none font-merriweather text-lg leading-relaxed placeholder-gray-400"
              />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>Сегодня, {new Date().toLocaleDateString("ru-RU")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Type" size={16} />
                  <span>{content.length} символов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
