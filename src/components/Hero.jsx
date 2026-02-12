import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sujal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build full-stack web applications, <br className='sm:block hidden' />
            and scalable backend systems.
          </p>

          {/* Buttons */}
          <div className='mt-6 flex gap-4 pointer-events-auto'>
            {/* Resume */}
            <a
              href='/Sujal_Verma_Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#915EFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7d4cff] transition'
            >
              View Resume
            </a>

            {/* GitHub */}
            <a
              href='https://github.com/sujalverma7557'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>



      <div className="absolute inset-0">
        <ComputersCanvas />
      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
