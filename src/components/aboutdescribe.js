import React from "react";
import About1 from "./about";

const AboutDescribe = () => {
  return (
    <div className="w-full text-black pb-12 lg:pt-8 lg:pb-24 dark:bg-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <About1 />
        </div>

        <div data-aos="fade-down" className="text-black dark:text-white">
          <p className="font-bold text-3xl mb-6 text-center">About Me:</p>
          <hr className="my-6 border-t-2 border-gray-300 dark:border-gray-700" />
          <p className="mb-6">
            I was born on August 17, 2003, in the charming town of Pokhara,
            Nepal. My journey into the world of web development, blogging, and
            freelancing has been a rewarding and exciting one. Here's a closer
            look at my experiences and accomplishments in these areas:
          </p>
        </div>

        <div data-aos="fade-down" className="text-black dark:text-white">
          <p className="font-bold text-2xl mb-4">Web Development:</p>
          <p className="mb-6">
            My fascination with web development ignited at a young age when I
            started learning the basics of HTML, CSS, and JavaScript. Over the
            years, I've diligently improved my skills, delving into advanced
            technologies like React, Node.js, and MongoDB. I've had the
            privilege of designing and developing various websites, showcasing
            my ability to create visually appealing and functional web
            solutions.
          </p>

          <hr className="my-6 border-t-2 border-gray-300 dark:border-gray-700" />
        </div>

        <div data-aos="fade-down" className="text-black dark:text-white">
          <p className="font-bold text-2xl mb-4">Blogging:</p>
          <p className="mb-6">
            My passion for writing led me to start a blog where I share insights
            and experiences from the tech world. My blog covers a wide range of
            topics, including web development tutorials and industry trends.
            It's been an incredible journey, and I'm grateful that my writing
            has not only educated but also inspired fellow developers and tech
            enthusiasts.
          </p>

          <hr className="my-6 border-t-2 border-gray-300 dark:border-gray-700" />
        </div>

        <div data-aos="fade-down" className="text-black dark:text-white">
          <p className="font-bold text-2xl mb-4">Freelancing:</p>
          <p className="mb-6">
            My proficiency in web development and blogging opened doors to
            freelancing opportunities. I've completed numerous successful
            freelance projects for clients worldwide. My ability to understand
            client requirements, deliver high-quality work, and meet deadlines
            has earned me a strong reputation as a freelance web developer and
            content creator.
          </p>
        </div>

        <div data-aos="fade-down" className="text-black dark:text-white">
          <p className="font-bold text-2xl mb-4">Achievements:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              I've received recognition for my web development skills, with
              several of my projects featured on web development platforms and
              forums.
            </li>
            <li>
              My blog has gained a dedicated readership that values my
              informative and engaging content.
            </li>
            <li>
              Positive feedback from satisfied clients has been a testament to
              my freelance work's quality and professionalism.
            </li>
          </ul>
        </div>

        <div data-aos="fade-down" className="text-black dark:text-white">
          <p className="font-bold text-2xl mb-4">Future Endeavors:</p>
          <p className="mb-6">
            I remain committed to pushing the boundaries of my skills and
            knowledge in the ever-evolving field of web development. I aspire to
            contribute to open-source projects, collaborate with industry
            leaders, and expand my blogging platform to reach an even wider
            audience.
          </p>

          <p className="font-bold text-2xl mb-4">Conclusion:</p>
          <p>
            Born in Pokhara, Nepal, in 2003, my journey in web development,
            blogging, and freelancing has been marked by growth and achievement.
            My passion for technology, combined with my dedication and talent,
            continues to propel me forward on a path of success. I'm excited
            about the opportunities that lie ahead in the digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDescribe;
