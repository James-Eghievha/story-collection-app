// Import Link from React Router to allow navigation to story detail pages
import { Link } from "react-router-dom";

// Import useLanguage to access translations
import { useLanguage } from "../context/useLanguage";

// Import icons used in the card
import { BookOpen, User } from "lucide-react";

const StoryCard = ({ story }) => {
  // Destructure the translation function from the language context
  const { t } = useLanguage();

  // Helper function that returns a gradient color based on the story's slug
  const getStoryColor = (slug) => {
    const colors = {
      "tortoise-hare": "from-green-400 to-blue-500",
      "little-red-riding-hood": "from-red-400 to-pink-500",
      "three-little-pigs": "from-yellow-400 to-orange-500",
      "goldilocks-three-bears": "from-amber-400 to-yellow-500",
      "jack-beanstalk": "from-emerald-400 to-green-500",
    };
    return colors[slug] || "from-purple-400 to-pink-500"; // Fallback gradient
  }

  return (
    // Main card container with hover and transition styles
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform overflow-hidden group">
      {/* Top banner section with a gradient background */}
      <div
        className={`h-32 bg-linear-to-br ${getStoryColor(story.slug)} p-6 flex items-center justify-center`}
      >
        {/* Icon displayed inside the top banner */}
        <BookOpen className="w-12 h-12 text-white drop-shadow-md group-hover:scale-110 transition-transform"/>
      </div>

      {/* Content section of the card */}
      <div className="p-6">
        {/* Story title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
          {story.title}
        </h3>

        {/* Author information */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          {/* User icon */}
          <User className="w-4 h-4 mr-2" />
          {/* Translated label + author's name */}
          <span>
            {t("author")}: {story.author}
          </span>
        </div>

        {/* Content preview (first 150 characters) */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
          {story.content.replace(/\\n/g, " ").substring(0, 150)}...
        </p>

        {/* Link to the full story detail page */}
        <Link
          to={`/story/${story.slug}`}
          className="inline-flex items-center space-x-2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          {/* Small book icon inside the button */}
          <BookOpen className="w-4 h-4" />
          {/* Translated label for the button text */}
          <span className="font-medium">{t("readStory")}</span>
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;