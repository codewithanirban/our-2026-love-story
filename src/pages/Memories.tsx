import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sparkles from "@/components/Sparkles";

/* ===============================
   Auto-load media from folder
================================ */
const mediaFiles = import.meta.glob(
  "@/assets/Memories/*.{jpg,jpeg,png,webp,mp4,webm}",
  { eager: true }
);

const galleryItems = Object.entries(mediaFiles).map(
  ([path, module], index) => ({
    id: index + 1,
    type: /\.(mp4|webm)$/i.test(path) ? "video" : "image",
    src: module.default
  })
);

/* ===============================
   Component
================================ */
const Memories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-background overflow-hidden relative">
      <Sparkles />

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="text-foreground hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </nav>

      <div className="relative z-10 container mx-auto px-4 pb-16">
        {/* Welcome Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🎉</span>
            <Heart
              className="w-6 h-6 text-primary animate-pulse"
              fill="currentColor"
            />
            <span className="text-4xl">🎊</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Welcome to 2026
          </h1>

          <p className="text-2xl md:text-3xl text-primary font-medium mb-2">
            With Me ❤️
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment with you is a treasure. Here’s a collection of our
            beautiful memories that made our love grow stronger.
          </p>
        </div>

        {/* Writeup Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-primary/20 text-center">
            <div className="text-4xl mb-4">💝</div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Our Journey Together
            </h2>
            <p className="text-lg italic text-muted-foreground">
              "তুমি আমার নীরবতার ভিতরে লুকিয়ে থাকা গান।"
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
            Our Beautiful Memories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-primary/20 aspect-square hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="memory"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 via-accent to-primary/20 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="text-5xl mb-4">❤️</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Here’s to Forever
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every second with you is a blessing. As we step into 2026, I can’t
              wait to create more beautiful memories together.
                           <p>- Anirban Meow ❤️</p>
            </p>

            <div className="flex items-center justify-center gap-2 text-primary text-2xl">
              <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
              <span className="font-serif font-bold">Forever Yours</span>
              <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent" />
    </div>
  );
};

export default Memories;
