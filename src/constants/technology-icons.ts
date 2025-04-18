import { Technology } from '@/types/technology';
import { IconType } from 'react-icons';
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiReactjsLine, RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { FaMicrochip, FaPython } from "react-icons/fa";
import { SiTensorflow, SiKeras, SiFlask, SiOpencv, SiPytorch } from "react-icons/si";

export const TECHNOLOGY_ICONS: Record<Technology, IconType> = {
    'React': RiReactjsLine,
    'Next.js': RiNextjsFill,
    'Tailwind': RiTailwindCssFill,
    'HTML': RiHtml5Fill,
    'CSS': RiCss3Fill,
    'TypeScript': BiLogoTypescript,
    'JavaScript': RiJavascriptFill,
    'MongoDB': BiLogoMongodb,
    'PostgreSQL': BiLogoPostgresql,
    'Arduino': FaMicrochip,
    'TensorFlow': SiTensorflow,
    'Keras': SiKeras,
    'Flask': SiFlask,
    'OpenCV': SiOpencv,
    'Python': FaPython,
    'PyTorch': SiPytorch
}