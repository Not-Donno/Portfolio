import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-6 ${monaSans.className}`}>
            🧭 Experience
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            <strong>Error 404: Work Experience Not Found</strong><br />
            But hey, don’t leave just yet—skills are fully loaded!
          </p>

          <p className="text-white mb-6">
            While I might not have formal job experience yet, I've been actively learning and applying skills through self-driven projects, courses, and collaborations. Here’s what I bring to the table:
          </p>
      </div>
    </section>
  );
};

export default Blog;
