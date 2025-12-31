import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-accent overflow-hidden relative">
      <FloatingHearts />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
            <span className="text-primary font-medium text-lg">Our Love Story</span>
            <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4">
            Happy New Year
          </h1>
          <p className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            2026
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mt-6 font-light">
            Another year of love, laughter, and beautiful memories together
          </p>
        </div>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Left Column - Your Message */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-primary/20 transform hover:scale-[1.02] transition-all duration-300 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-2xl">💕</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">From Me</h3>
                <p className="text-sm text-muted-foreground">With all my love</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg italic border-l-4 border-primary pl-4">
                "Write your heartfelt message here..."
              </p>
              <p>
                This is your space to express your feelings. Write about what they mean to you, 
                your favorite memories from the past year, and your dreams for 2026.
              </p>
              <p>
                Replace this text with your personal message filled with love and warmth.
              </p>
            </div>
          </div>

          {/* Right Column - Partner's Section */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-primary/20 transform hover:scale-[1.02] transition-all duration-300 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-2xl">❤️</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">To My Love</h3>
                <p className="text-sm text-muted-foreground">My everything</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg italic border-l-4 border-accent-foreground pl-4">
                "Add another beautiful message or poem..."
              </p>
              <p>
                You can write a poem, share your resolutions together, 
                or simply express gratitude for having them in your life.
              </p>
              <p>
                Make it personal and from the heart. They will love it!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-bounce-slow">
          <Link to="/memories">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" />
              Explore Our Memories
              <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="currentColor" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">Click to see our beautiful journey together</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent" />
    </div>
  );
};

export default Index;
