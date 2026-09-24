import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";

// Importing useParams to get URL params, and Link for navigation
import { useParams, Link } from "react-router-dom";

// Importing our language context
import { useLanguage } from "../context/useLanguage";

// Importing icons from lucide-react
import { ArrowLeft, User, BookOpen } from "lucide-react";

// Importing Supabase client
import { supabase } from "../services/supabase";

const StoryDetail = () => {
  // Extract the slug from the URL
  const { slug } = useParams();
  
  // Get the current language and translation function
  const { language, t } = useLanguage();

  // State to hold the fetched story
  const [story, setStory] = useState(null);

  // State to manage loading state
  const [loading, setLoading] = useState(true);

  // Fetch story from Supabase whenever slug or language changes
  useEffect(() => {
    const loadStory = async () => {
      // Set loading to true while fetching
      setLoading(true);
      
      try {
        // Fetch a single story by slug and language
        const { data, error } = await supabase
          .from("stories")
          .select("*")
          .eq("slug", slug)
          .eq("language", language)
          .single();

        if (error) throw error;
        
        // Debug log the data
        console.log(data);

        // Set the fetched story
        setStory(data);
      } catch (error) {
        // Log error if fetch fails
        console.error("Failed to load story:", error.message);
      } finally {
        // Set loading to false after fetch is done
        setLoading(false);
      }
    };

    // Call the async function
    loadStory();    
  }, [slug, language]);

  // Function to determine background gradient based on story slug
  const getStoryGradient = (storySlug) => {
    const gradients = {
      "tortoise-hare": "from-green-400 via-blue-500 to-purple-600",
      "little-red-riding-hood": "from-red-400 via-pink-500 to-rose-600",
      "three-little-pigs": "from-yellow-400 via-orange-500 to-red-600",
      "goldilocks-three-bears": "from-amber-400 via-yellow-500 to-orange-600",
      "jack-beanstalk": "from-emerald-400 via-green-500 to-teal-600",
    };
    return gradients[storySlug] || "from-purple-400 via-pink-500 to-indigo-600";
  };

  if (loading) {
    // Render loading screen
    return <LoadingScreen message="Loading your story..." />; 
  }

  // If no story found
  if (!story) {
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
        {/* Centered content */}
        <div className="text-center">
          {/* Not found message */}
          <p className="text-gray-600 text-xl mb-4">Story not found</p>

          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors"
          >
            {/* Left arrow icon */}
            <ArrowLeft className="w-4 h-4" />
            {/* Back text */}
            <span>{t("backToStories")}</span>
          </Link>
        </div>
      </div>
    );  
  }

  // Final rendering of story
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Story banner section */}
      <div className={`bg-linear-to-r ${getStoryGradient(story.slug)} py-16`}>
        <div className="container mx-auto px-4">
          {/* Back to list button */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-white hover:text-gray-200 transition-colors mb-8 bg-white/20 backdrop-blur-sm  rounded-full px-4 py-2 hover:bg-white/30"
          >
            {/* Arrow icon */}
            <ArrowLeft className="w-4 h-4" />
            {/* Label */}
            <span className="font-medium">{t("backToStories")}</span>
          </Link>

          {/* Story title and author */}
          <div className="text-center text-white">
            {/* Book icon */}
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-16 h-16 drop-shadow-lg" />
            </div>

            {/* Story title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {story.title}
            </h1>

            {/* Author section */}
            <div className="flex items-center justify-center space-x-2 text-lg">
              <User className="w-5 h-5" />
              <span>
                {t("author")}: {story.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Story content section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Card with story text */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Render paragraphs */}
              {story.content
                .replaceAll("\\n", "\n") // Convert escaped newlines
                .split("\n\n") // Split into paragraphs
                .map((paragraph, index) => {
                  console.log(paragraph);
                  return (
                    // Individual paragraph with styles
                    <p
                      key={index}
                      className="text-gray-800 leading-relaxed mb-6 text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-3 first-letter:mt-1 first-letter:align-top"
                      style={{ textIndent: index === 0 ? "0" : "2em" }}
                    >
                      {paragraph}
                    </p>
                  );        
                })
              }
            </div>
          </div>

          {/* Back button at bottom */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t("backToStories")}</span>
            </Link>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default StoryDetail;