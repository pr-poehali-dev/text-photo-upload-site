import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
        <Icon name={icon} size={24} className="text-purple-600" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed font-merriweather">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
