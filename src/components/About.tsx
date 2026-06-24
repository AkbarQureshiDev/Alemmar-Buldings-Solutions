import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import ali from "../assets/ali.png";
import nadeem from "../assets/nadeem.png";
import AboutPage from '../assets/AboutPage.png'

const About = () => {
  const { t, language } = useLanguage();
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1100px] mx-auto">
        {/* --- TOP SECTION: Introduction & Two Images --- */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="w-full  text-center lg:text-left"
            variants={fadeInLeft}
          >
            <motion.div 
              className="inline-block bg-[#002B36] text-white text-sm font-bold px-4 py-2 rounded mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t.aboutPage.ourIntroduction}
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#002B36] leading-tight mb-2">
              {t.aboutPage.establishedSince}
              <span className="relative px-4">
                {t.aboutPage.establishedYear}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 -mb-2"></span>
              </span>
            </h2>
            <div className="mt-12 text-gray-600 leading-relaxed text-lg space-y-6">
              <p>
                {t.aboutPage.introP1}
              </p>
              <p>
                {t.aboutPage.introP2}
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-auto hidden lg:grid h-auto"
            variants={fadeInRight}
          >
            <motion.div 
              className="w-full h-full overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={AboutPage}
                alt="About"
                className="w-full h-full object-cover"
              />
            </motion.div>
           </motion.div>
        </motion.div>

        {/* --- LEADERSHIP TEAM SECTION --- */}
        <motion.h2 
          className="text-3xl md:text-4xl font-['Poppins'] text-[#002B36] my-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {t.aboutPage.leadershipTitle}
        </motion.h2>

        {/* --- SECTION 1: CEO --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            {/* Mobile: Image First */}
            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2"
              variants={scaleIn}
            >
              <div className="h-[400px] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                <img
                  src={nadeem}
                  alt={language === 'en' ? 'Nadeem Farooq Khan' : 'نديم فاروق خان'}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Mobile: Content Second */}
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
              variants={fadeInLeft}
            >
              <h3 className="text-3xl font-bold font-['Poppins'] text-[#1a1a1a] mb-4">
                {language === 'en' ? 'Nadeem Farooq Khan' : 'نديم فاروق خان'}
              </h3>
              <p className="text-sm text-red-600 font-semibold mb-4 uppercase tracking-wide">
                {t.aboutPage.ceoTitle}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.aboutPage.ceoBio}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- SECTION 2: Marketing Manager --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mobile: Image First */}
            <motion.div 
              className="w-full lg:w-1/2 order-1"
              variants={scaleIn}
            >
              <div className="h-[400px] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                <img
                  src={ali}
                  alt={language === 'en' ? 'Ali Ur Rahman' : 'علي الرحمن'}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Mobile: Content Second */}
            <motion.div 
              className="w-full lg:w-1/2 order-2 text-center lg:text-left"
              variants={fadeInRight}
            >
              <h3 className="text-3xl font-bold font-['Poppins'] text-[#1a1a1a] mb-4">
                {language === 'en' ? 'Ali Ur Rahman' : 'علي الرحمن'}
              </h3>
              <p className="text-sm text-red-600 font-semibold mb-4 uppercase tracking-wide">
                {t.aboutPage.marketingTitle}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.aboutPage.marketingBio}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
