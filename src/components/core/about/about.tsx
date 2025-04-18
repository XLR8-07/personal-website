import { Flex } from '@radix-ui/themes';
import { AboutHeading } from './about-heading';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import BoxReveal from '@/components/magicui/box-reveal';
import { SectionHeading } from '../section-heading';
import { Selfie } from './selfie';

export const About = () => {
    return (
        <Flex direction={'column'} gap={'8'}>
            <Selfie />
            <AboutHeading />
            <Flex direction={'column'} gap={'3'}>
                <SectionHeading title={'About Me'} />
                <BoxReveal boxColor={'black'}>
                    <AnimatedShinyText className={'text-gray-500 dark:text-gray-300 text-sm sm:text-lg'} shimmerWidth={200}>
                        I&apos;m a Full-Stack Developer who loves turning complex ideas into elegant, scalable software. With 5+ years of experience across startups and tech-driven platforms, I&apos;ve built everything from fraud detection systems and analytics dashboards to browser extensions and real-time APIs.

                        My main stack includes React (Typescript, Next.js, Redux, Zustand), NestJS, PostgreSQL, and Python — but I&apos;m always exploring new tools that make development smarter and faster.

                        I&apos;ve also taught university courses (yes, including a full React Native class!), mentored thesis groups, and even launched a datathon or two. I care deeply about clean code, thoughtful architecture, and building things that actually help people.

                        Currently based in Berlin 🇩🇪 — open to freelance work, side projects, or just geeking out over cool ideas.
                    </AnimatedShinyText>
                </BoxReveal>
            </Flex>
        </Flex>
    );
}