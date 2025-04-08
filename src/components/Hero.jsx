import { motion } from 'framer-motion';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-orange-400">SkyTech LLC</span> - Your Integrated<br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">
              Engineering & Technology Partner
            </span> in Dubai
          </h1>
          
          <motion.p 
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Combining <span className="font-semibold">10+ years</span> of engineering excellence with cutting-edge IT solutions to deliver comprehensive services for construction firms and businesses across UAE.
          </motion.p>

          <motion.div 
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <a 
              href="#engineering-services" 
              className="relative bg-orange-500 text-white px-8 py-4 rounded-md font-medium hover:bg-orange-600 transition-all duration-300 text-lg shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
            >
              Engineering Solutions
            </a>
            <a 
              href="#it-services" 
              className="relative bg-white text-blue-800 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-white/30 transform hover:-translate-y-1"
            >
              IT Services
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="animate-bounce mt-8"
          >
            <ChevronDoubleDownIcon className="h-8 w-8 mx-auto text-orange-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16 md:h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-current text-white" 
            opacity=".25" 
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-current text-white" 
            opacity=".5" 
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current text-white" 
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;