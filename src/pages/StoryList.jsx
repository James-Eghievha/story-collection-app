import StoryCard from "../components/StoryCard";
import { supabase } from "../services/supabase";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/useLanguage";
import { Stars, Sparkles } from "lucide-react";
import LoadingScreen from "../components/LoadingScreen";

const StoryList = () => {
  // Access the current language and translation function from context
  const { language, t } = useLanguage();

  // Set up state to hold fetched stories
  const [stories, setStories] = useState([]);

  // Track whether stories are still being loaded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStories = async () => {
      // Set loading to true before fetching
      setLoading(true);

      try {
        // Query Supabase for stories in the selected language
        const { data, error } = await supabase
          .from("stories") // Select from "stories" table
          .select("*") // Fetch all columns
          .eq("language", language) // Filter by selected language
          .order("id", { ascending: true }); // Order by ID

        // If there's an error, throw it to be caught
        if (error) throw error;

        // Set stories data into state, or empty array if null
        setStories(data || []);
      } catch (error) {
        // Log errors to console
        console.error("Failed to fetch stories:", error.message);
      } finally {
        // Set loading to false after fetch (success or fail)
        setLoading(false);
      }
    };
    loadStories();
  }, [language]); // Re-run this effect when language changes

  // Show loading screen while data is being fetched
  if (loading) {
    return <LoadingScreen message="Loading magical stories..." />; 
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page header with animated icons and translated title */}          
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Stars className="w-8 h-8 text-yellow-500 animate-pulse" />
            <h1>{t("storyList")}</h1>
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>

          {/* Subheading with dynamic message based on language */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("storyListSubtitle")}
          </p>
        </div>

        {/* Grid layout for displaying all story cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.slug} // Unique key for each story
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered fade-in
            >
              {/* Render the individual story card */}
              <StoryCard story={story} />
            </div> 
          ))}      
        </div>
      </div>
    </div>
  );
};

export default StoryList;