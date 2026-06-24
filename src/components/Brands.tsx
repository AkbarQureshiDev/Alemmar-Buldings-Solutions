import { motion } from 'framer-motion'
import PrimaryBrands from './PrimaryBrands'
import ConstructionBrands from './ConstructionBrands'
import ToolsBrands from './ToolsBrands'
import { useLanguage } from '../context/LanguageContext'

const Brands = () => {
  const { t } = useLanguage();
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  // Individual section animation variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

  return (
    <motion.div 
      className="w-full overflow-hidden bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
          {/* Header Section */}
      <div className="text-center my-10">
      <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
             {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-gray-100">
              {t.brands.shopBy}
            <span className="text-[#6B5E18] !ml-2">{t.brands.brandsWord}</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-100 text-lg">{t.brands.subtitle}</p>
      </div>

      <motion.div variants={sectionVariants}>
        <PrimaryBrands />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ConstructionBrands />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ToolsBrands />
      </motion.div>
    </motion.div>
  )
}

export default Brands
