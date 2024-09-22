import { SectionHeadline } from "./common/SectionHeadline";
import { SkillItem } from "./skills/SkillItem";
import { SkillList } from "./skills/SkillList";

export const Skills = ():React.ReactNode => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-[#0e1010]">
          <div className="px-4">
            <SectionHeadline title="Skills" />
            <div className="flex">
            <p className="text-base text-left sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto ">Here, I showcase the programs I work with and the programming languages I master. From Photoshop to JavaScript, each skill contributes to the mosaic of my professional expertise.
            </p>
            <SkillList>
              <SkillItem name="HTML5" />
              <SkillItem name="CSS3" />
              <SkillItem name="JavaScript" />
              <SkillItem name="React" />
              <SkillItem name="Next.js" />
              <SkillItem name="Tailwind CSS" />
              <SkillItem name="Node.js" />
              <SkillItem name="MongoDB" />
              <SkillItem name="PostgreSQL" />
              <SkillItem name="Git" />
              <SkillItem name="Golang"/>
              <SkillItem name="Docker" />
              <SkillItem name="Github Actions" />
              <SkillItem name="Linux" />
              <SkillItem name="Vercel" />
              <SkillItem name="Render" />
            </SkillList>
            </div>
          </div>
        </section>
      );
}   