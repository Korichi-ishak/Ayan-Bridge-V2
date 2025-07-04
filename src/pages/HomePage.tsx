import { useState, useEffect, useRef } from 'react';
import { getTestimonials } from '../lib/api';
import type { Testimonial } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, BrainCircuit, MousePointer2, ShoppingBag, PiggyBank } from 'lucide-react';
import CreativeTestimonialCard from '../components/testimonial/CreativeTestimonialCard';
import PillarCard from '../components/ui/PillarCard';

const videoUrl = "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4";

const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start start', 'end start'],
    });

    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
      <motion.section ref={heroRef} style={{ opacity: heroOpacity }} className="h-screen sticky top-0 flex flex-col justify-center items-center text-center overflow-hidden">
        <motion.div style={{ scale: videoScale }} className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover" src={videoUrl} autoPlay loop muted playsInline/>
          <div className="absolute inset-0 bg-black/60"/>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Apprends. Crée. Investis. <span className="text-primary">Gagne.</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-white/80">
            La première plateforme tout-en-un qui connecte les créateurs de contenu, les apprenants et les investisseurs pour façonner le futur du savoir.
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-10 z-10">
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </motion.section>
  );
};

const FourPillarsSection = () => (
    <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once: true}} className="text-3xl sm:text-4xl font-bold text-white mb-4">Les 4 Piliers de Votre Succès</motion.h2>
        <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay: 0.1}} viewport={{once: true}} className="text-md sm:text-lg text-white/70 mb-12 md:mb-16">Une synergie unique pour démultiplier vos opportunités.</motion.p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: '1000px' }}>
        {[
          { icon: BrainCircuit, title: "Learn Hub", description: "Acquérez des compétences pointues grâce à nos formations d'experts." },
          { icon: MousePointer2, title: "Studio IA", description: "Créez des produits numériques de haute qualité en un temps record." },
          { icon: ShoppingBag, title: "Magasin", description: "Monétisez vos créations sur un marché dynamique et mondial." },
          { icon: PiggyBank, title: "Club Investisseur", description: "Investissez dans les créateurs et les projets d'avenir." }
        ].map((pillar, index) => (
          <PillarCard
            key={pillar.title}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
            index={index}
          />
        ))}
      </div>
    </section>
);

/*
// Nouveau composant pour afficher les informations de chaque produit
const ProductInfo = ({ product, onInView }: { product: Product, onInView: (url: string) => void }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      onInView(product.imageUrl);
    }
  }, [inView, product.imageUrl, onInView]);

  return (
    <div ref={ref} className="h-screen flex flex-col justify-center pl-8 md:pl-16">
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h3 className="text-4xl lg:text-5xl font-bold text-white">{product.name}</h3>
        <p className="text-xl text-white/70 mt-3">{product.creator}</p>
        <p className="text-lg text-white/80 mt-6 max-w-md">{product.description}</p>
        <div className="flex items-center mt-8 space-x-8">
          <p className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <Button size="lg">Ajouter au panier</Button>
        </div>
      </motion.div>
    </div>
  );
};


const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeImageUrl, setActiveImageUrl] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      if (allProducts.length > 0) {
        setActiveImageUrl(allProducts[0].imageUrl);
      }
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return null;
  }

 return (
    <section className="bg-secondary relative z-10">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-white">Nos Créations Exceptionnelles</h2>
            <p className="text-lg text-white/70 mt-4">Chaque produit est une porte vers une nouvelle compétence.</p>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:sticky top-0 h-screen flex items-center justify-center">
            <div className="w-full max-w-md aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence>
                <motion.img
                  key={activeImageUrl}
                  src={activeImageUrl}
                  alt="Product Image"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
          <div>
            {products.map((product) => (
              <ProductInfo key={product.id} product={product} onInView={setActiveImageUrl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
*/

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const allTestimonials = await getTestimonials();
      setTestimonials(allTestimonials);
    };
    fetchTestimonials();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="spotlight-section py-16 md:py-20 bg-secondary relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Ce que notre communauté dit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <CreativeTestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="bg-background text-white">
      <HeroSection />
      <FourPillarsSection />
      {/* <ProductsSection /> */}
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
