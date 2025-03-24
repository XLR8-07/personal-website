import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
    {
        title: 'M.I.D.A.S',
        imgSrc: 'images/textlight.png',
        technologies: [ 'Python', 'OpenCV', 'Arduino', 'TensorFlow', 'Keras' ],
        shortDescription: 'Mask Identification Door Access System',
        longDescription: `M.I.D.A.S is a mask identification door access system that uses a camera to detect if a person is wearing a mask. \n\nEnsure public health and safety during the COVID-19 pandemic by automating mask detection at entry points using low-cost, accessible hardware and AI. `,
        githubLink: 'https://github.com/XLR8-07/M.I.D.A.S',
        liveLink: 'https://github.com/XLR8-07/M.I.D.A.S'
    },
    {
        title: 'ChatGPT Clone',
        imgSrc: 'images/chatgpt-clone.png',
        technologies: [ 'Python' ],
        shortDescription: '_a ChatGPT clone web application.',
        longDescription: `The ChatGPT Clone is a streamlined AI chat app that replicates the experience of interacting with OpenAI's ChatGPT. It allows users to engage in conversations with an AI model, providing insightful and responsive answers. \n\nPerfect for exploring AI-driven interactions, this clone offers a straightforward way to experience and test AI capabilities in real time.`,
        githubLink: 'https://github.com/Scynes/nextjs-chatgpt-clone',
        liveLink: 'https://nextjs-chatgpt-clone-five.vercel.app'
    },
    {
        title: 'News Blog',
        imgSrc: 'images/news-blog.png',
        technologies: [ 'JavaScript', 'HTML', 'CSS' ],
        shortDescription: '_a demo landing page for a news website.',
        longDescription: `This is a creative demo representation of a news website’s landing page, showcasing a blend of modern design elements. \n\nIt offers excellent practice in layout design using both flex and grid, highlighting innovative approaches to organizing content and enhancing user experience.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/6/news-landing-page/'
    }
]