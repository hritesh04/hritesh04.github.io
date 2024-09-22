import { projects } from "../assets/projects";
import { SectionHeadline } from "./common/SectionHeadline";
import { ProjectItem } from "./projects/ProjectItem";
import { ProjectList } from "./projects/ProjectList";

export const Projects = ():React.ReactNode => {
    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0e1010]">
          <div className="px-4">
          <SectionHeadline title="Recent projects" />
          <ProjectList>
            {
              projects.map((project)=>{
                return  <ProjectItem title={project.title} description={project.description} siteLink={project.siteLink} images={project.images} />
              })
            }
          </ProjectList>
          </div>
        </section>
      );
}