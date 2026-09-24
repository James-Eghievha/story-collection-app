import { useLanguage } from "../context/useLanguage";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  // Base classes applied to all buttons
  const baseClass = "px-4 py-2 text-sm font-medium transition-all focus:outline-none";

  // Classes applied to the active (selected) language button
  const class1 = "bg-blue-500 text-white shadow-md";

  // Classes applied to the inactive language buttons
  const class2 = "text-gray-600 hover:bg-blue-50";

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-blue-600" />
      <div className="flex bg-white rounded-full shadow-md border border-gray-200 overflow-hidden">
        <button
          onClick={() => setLanguage("en")}
          className={`${baseClass} ${language === "en" ? class1 : class2}`}
        >
          {t("english")}
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={`${baseClass} ${language === "es" ? class1 : class2}`}
        >
          {t("spanish")}
        </button>
      </div>      
    </div>
  );
};

export default LanguageToggle;