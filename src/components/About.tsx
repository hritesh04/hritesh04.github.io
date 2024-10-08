import { SectionHeadline } from "./common/SectionHeadline"

export const About = ():React.ReactNode => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-[#0e1010]">
          <div className="px-4">
            <SectionHeadline title="About" />
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
              <div className="w-80 h-80 md:w-1/3 md:h-auto">
                <img 
                  src="/profile_pic.jpeg" 
                  alt="Hritesh Mondal" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  I'm Hritesh - A Backend Developer
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Hi there! I'm Hritesh Mondal, a backend developer based in India. I specialize in building robust and scalable server-side applications that power seamless digital experiences. My expertise encompasses languages and frameworks such as Node.js, TypeScript and Golang allowing me to create efficient APIs and databases tailored to your needs.
                  </p>
                  <p>
                    From designing intricate data architectures to optimizing performance, I thrive on solving complex problems and enhancing application functionality. I prioritize understanding project goals, ensuring that the backend solutions align perfectly with the project vision.
                  </p>
                  <p>
                    Let's work together to create reliable and high-performing backend systems that elevate your projects!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}