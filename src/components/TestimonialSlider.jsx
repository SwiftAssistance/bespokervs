import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 6000);
    return () => clearInterval(timer);
  }, [goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial card */}
      <div className="relative bg-white shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-gold/5"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-dark/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        {/* Quote icon */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <Quote size={48} className="text-accent-gold/10" strokeWidth={1} />
        </div>

        <div className="relative p-8 md:p-16">
          {/* Quote */}
          <div
            className={`transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-dark font-light leading-relaxed mb-10 italic">
              "{currentTestimonial.quote}"
            </p>

            {/* Author info */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {currentTestimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-primary-dark text-lg">{currentTestimonial.author}</p>
                <p className="text-gray-500 text-sm">
                  {currentTestimonial.location} — {currentTestimonial.project}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        {/* Arrow buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={goToPrev}
            className="w-14 h-14 bg-primary-dark text-white flex items-center justify-center hover:bg-accent-gold transition-colors group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="w-14 h-14 bg-primary-dark text-white flex items-center justify-center hover:bg-accent-gold transition-colors group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-accent-gold'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
