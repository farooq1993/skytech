import { motion } from 'framer-motion';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageUrls = [
    {
      src: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
      alt: "Dubai skyline with futuristic technology overlay - SkyTech LLC Engineering & IT"
    },
    {
      src: "https://topsurfaceuae.com/wp-content/uploads/2023/08/Office-Kitchen_SoftGrid-Switch-1-web-1600x1078-1.jpg",
      alt: "Engineering team working on site in Dubai - SkyTech LLC Construction Services"
    },
    {
      src: "https://c0.wallpaperflare.com/preview/931/296/849/business-idea-planning-board-business-plan.jpg",
      alt: "Modern IT solutions for businesses in UAE - SkyTech LLC IT Services"
    },
  ];
  
  

  const sliderSettings = {
    autoplay: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...sliderSettings}>
          {imageUrls.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[85vh] object-cover"
              />

              {/* First Image Text */}
              {index === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-20">
                  {/* ... (your first image content) ... */}
                  <h2 className="text-white-800 text-3xl md:text-4xl lg:text-5xl font-semibold text-center drop-shadow-lg">
                  Dubai skyline with futuristic technology overlay - SkyTech LLC Engineering & IT
                  </h2>
                </div>
              )}

              {/* Second Image Text */}
              {index === 1 && (
                <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
                  <h2 className="text-white-800 text-3xl md:text-4xl lg:text-5xl font-semibold text-center drop-shadow-lg">
                    Elegant acoustic solutions created to lower noise and echoes in indoor areas.
                  </h2>
                </div>
              )}

              {/* Third Image Text */}
              {index === 2 && (
               <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
               <h2 className="text-white-800 text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                 Empowering businesses with secure, scalable, and smart IT solutions in the UAE.
               </h2>
             </div>
              )}
            </div>
          ))}

        </Slider>
      </div>

      {/* Blob Animation */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-24 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >

          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="animate-bounce mt-8"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..."
            className="fill-current text-bule"
            opacity=""
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05..."
            className="fill-current text-white"
            opacity=""
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57..."
            className="fill-current text-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
