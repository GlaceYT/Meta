"use client";
import "./magicalRating.css";

export function MagicalTestimonialFeed() {
  const testimonials = [
    {
      name: "Neo",
      quote: "The Matrix is everywhere, it’s all around us.",
      rating: 5,
    },
    {
      name: "Trinity",
      quote: "Dodge this.",
      rating: 4,
    },
    {
      name: "Morpheus",
      quote: "What if I told you that everything is a lie?",
      rating: 5,
    },
    {
      name: "Agent Smith",
      quote: "Mr. Anderson, welcome back.",
      rating: 3,
    },
  ];

  return (
    <section className="dark-bg py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-neon mb-12">
          Testimonials from the Grid
        </h2>

        {/* Continuous scrolling feed with glowing boxes */}
        <div className="scroll-container">
          <div className="scroll-content flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-box glass-effect rounded-lg p-8 m-4">
                <blockquote className="text-xl text-white italic opacity-80">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="mt-4 text-lg font-bold text-neon">
                  — {testimonial.name}
                </footer>
                <div className="stars mt-4 flex justify-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Star icon for the rating display
const StarIcon = () => (
  <svg className="w-6 h-6 text-neon" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default MagicalTestimonialFeed;
