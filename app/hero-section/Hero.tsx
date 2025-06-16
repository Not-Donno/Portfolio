import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/hero.png";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link href="#" target="_blank" aria-label="TITLE">
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              DONNO
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/Not-Donno"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abhinavsingh-donno/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              LN
            </motion.p>
          </Link>
          <Link
            href="https://www.instagram.com/its_abhinavsinghh/"
            target="_blank"
            aria-label="View Instagram Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              IG
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-50 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:mt-20 lg:py-40 w-full overflow-visible">
        <div className="relative flex flex-row flex-wrap items-center justify-center w-full overflow-visible">
          <AnimatedWords
            title="ABHINAV SINGH"
            style="text-[100px] leading-[0.85] overflow-visible inline-block pt-0 mb-0 mr-2"
          />

          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="headshot"
              data-blobity-tooltip="Donno?"
              data-blobity-invert="false"
              className="w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Java Developer/Web Developer/Graphic Designer
          </p>
        </motion.div>

        <motion.div
          className="hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Turning ideas into interactive experiences! I'm Abhinav, a self-taught developer crafting digital magic.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
