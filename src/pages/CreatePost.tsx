import { useState, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon";
import ImageUpload from "@/components/ImageUpload";
import RichTextEditor from "@/components/RichTextEditor";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = useCallback((imageUrl: string) => {
    setUploadedImages((prev) => [...prev, imageUrl]);
  }, []);

  const handleSave = () => {
    const postData = {
      title,
      content,
      images: uploadedImages,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem("draft-post", JSON.stringify(postData));
    alert("Черновик сохранен!");
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      alert("Заполните заголовок и содержание");
      return;
    }

    const postData = {
      title,
      content,
      images: uploadedImages,
      publishedAt: new Date().toISOString(),
    };

    const posts = JSON.parse(localStorage.getItem("published-posts") || "[]");
    posts.push(postData);
    localStorage.setItem("published-posts", JSON.stringify(posts));

    alert("Запись опубликована!");
    setTitle("");
    setContent("");
    setUploadedImages([]);
  };

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
              <button
                onClick={handleSave}
                className="text-gray-500 hover:text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
              >
                Сохранить черновик
              </button>
              <button
                onClick={handlePublish}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
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

            <ImageUpload onImageUpload={handleImageUpload} />

            <RichTextEditor
              content={content}
              onChange={setContent}
              uploadedImages={uploadedImages}
            />

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
                {uploadedImages.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <Icon name="Image" size={16} />
                    <span>{uploadedImages.length} изображений</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
