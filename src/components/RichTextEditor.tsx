import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  uploadedImages: string[];
}

const RichTextEditor = ({
  content,
  onChange,
  uploadedImages,
}: RichTextEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showImageGallery, setShowImageGallery] = useState(false);

  const insertText = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    const newText =
      content.substring(0, start) +
      before +
      selectedText +
      after +
      content.substring(end);

    onChange(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + selectedText.length,
      );
    }, 0);
  };

  const insertImage = (imageUrl: string) => {
    const imageMarkdown = `\n![Изображение](${imageUrl})\n`;
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const newText =
      content.substring(0, start) + imageMarkdown + content.substring(start);

    onChange(newText);
    setShowImageGallery(false);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + imageMarkdown.length,
        start + imageMarkdown.length,
      );
    }, 0);
  };

  const formatButtons = [
    { icon: "Bold", action: () => insertText("**", "**"), title: "Жирный" },
    { icon: "Italic", action: () => insertText("*", "*"), title: "Курсив" },
    {
      icon: "Underline",
      action: () => insertText("<u>", "</u>"),
      title: "Подчеркнутый",
    },
    { icon: "List", action: () => insertText("\n- ", ""), title: "Список" },
    { icon: "Quote", action: () => insertText("\n> ", ""), title: "Цитата" },
    { icon: "Code", action: () => insertText("`", "`"), title: "Код" },
  ];

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          {formatButtons.map((button, index) => (
            <button
              key={index}
              onClick={button.action}
              title={button.title}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-lg transition-colors duration-200"
            >
              <Icon name={button.icon as any} size={16} />
            </button>
          ))}

          <div className="h-6 w-px bg-gray-300 mx-2"></div>

          <button
            onClick={() => setShowImageGallery(!showImageGallery)}
            title="Вставить изображение"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-lg transition-colors duration-200"
          >
            <Icon name="Image" size={16} />
          </button>

          <button
            onClick={() => insertText("[", "](url)")}
            title="Вставить ссылку"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-lg transition-colors duration-200"
          >
            <Icon name="Link" size={16} />
          </button>
        </div>

        <div className="text-sm text-gray-500">Поддерживается Markdown</div>
      </div>

      {showImageGallery && uploadedImages.length > 0 && (
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-700 mb-3">
            Выберите изображение для вставки:
          </div>
          <div className="grid grid-cols-6 gap-2">
            {uploadedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => insertImage(image)}
                className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-purple-400 transition-colors duration-200"
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="relative">
        <textarea
          ref={textareaRef}
          placeholder="Начните писать свою историю... Используйте **жирный**, *курсив*, и другие возможности Markdown"
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-96 p-4 text-gray-700 border-none outline-none resize-none font-merriweather text-lg leading-relaxed placeholder-gray-400"
        />

        {content.trim() && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-500 border border-gray-200">
              {content.split(/\s+/).filter((word) => word.length > 0).length}{" "}
              слов
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RichTextEditor;
