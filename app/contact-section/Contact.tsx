import Link from "next/link";
import Image from "next/image";

import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="initial"
      animate="animate"
      className="relative z-10 w-full bg-[#0E1016] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-center text-center">
        {/* Heart Icon */}
        <Image
          src={heartIcon}
          alt="Heart Icon"
          className="heartbeat mb-6 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px]"
        />
        {/* Message */}
        <AnimatedBody
          text="Got a question, proposal, project, or want to work together on something?"
          className="text-[#e4ded7] text-[16px] sm:text-[18px] md:text-[20px] max-w-[700px] mb-6"
        />

        {/* Email Button */}
        <Link
          href="mailto:abhinavgautam123456@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
          target="_blank"
          aria-label="Send me an email"
          className="mt-4 inline-block text-[#e4ded7] underline underline-offset-4 hover:text-white transition"
        >
          <AnimatedBody text="Send me an email" />
        </Link>

        {/* Optional Socials */}
        <div className="mt-8 text-sm text-[#aaa]">
          <p>Or find me on:</p>
          <div className="mt-2 flex gap-4 justify-center">
            <Link href="https://github.com/Not-Donno" target="_blank" className="hover:underline">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/abhinavsingh-donno/" target="_blank" className="hover:underline">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
