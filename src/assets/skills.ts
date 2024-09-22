import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaLinux } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiGithubactions, SiVercel, SiRender, SiTypescript } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

interface SkillConfig {
    icon: IconType;
    color: string;
    textColor: string;
    background: string;
}

export const skillsConfig: Record<string, SkillConfig> = {
    'HTML5': { icon: FaHtml5, color: 'text-orange-600', textColor: 'text-orange-800', background: 'bg-orange-100' },
    'CSS3': { icon: FaCss3Alt, color: 'text-blue-500', textColor: 'text-blue-700', background: 'bg-blue-100' },
    'JavaScript': { icon: FaJs, color: 'text-yellow-400', textColor: 'text-yellow-600', background: 'bg-yellow-100' },
    'TypeScript': { icon: SiTypescript, color: 'text-blue-400', textColor: 'text-blue-600', background: 'bg-blue-100' },
    'React': { icon: FaReact, color: 'text-blue-400', textColor: 'text-blue-600', background: 'bg-blue-100' },
    'Next.js': { icon: SiNextdotjs, color: 'text-black', textColor: 'text-gray-800', background: 'bg-gray-100' },
    'Tailwind CSS': { icon: SiTailwindcss, color: 'text-teal-500', textColor: 'text-teal-700', background: 'bg-teal-100' },
    'Node.js': { icon: FaNodeJs, color: 'text-green-600', textColor: 'text-green-800', background: 'bg-green-100' },
    'MongoDB': { icon: SiMongodb, color: 'text-green-500', textColor: 'text-green-700', background: 'bg-green-100' },
    'PostgreSQL': { icon: BiLogoPostgresql, color: 'text-blue-400', textColor: 'text-blue-600', background: 'bg-blue-100' },
    'Git': { icon: FaGitAlt, color: 'text-orange-600', textColor: 'text-orange-800', background: 'bg-orange-100' },
    'Golang': { icon: TbBrandGolang, color: 'text-blue-500', textColor: 'text-blue-700', background: 'bg-blue-100' },
    'Linux': { icon: FaLinux, color: 'text-black', textColor: 'text-black', background: 'bg-white' },
    'Docker': { icon: FaDocker, color: 'text-blue-600', textColor: 'text-blue-800', background: 'bg-blue-100' },
    'Github Actions': { icon: SiGithubactions, color: 'text-gray-800', textColor: 'text-gray-900', background: 'bg-gray-100' },
    'Vercel': { icon: SiVercel, color: 'text-black', textColor: 'text-gray-800', background: 'bg-gray-100' },
    'Render': { icon: SiRender, color: 'text-blue-500', textColor: 'text-blue-700', background: 'bg-blue-100' },
};