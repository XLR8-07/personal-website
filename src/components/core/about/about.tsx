import { Flex, Link } from '@radix-ui/themes';
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
                    <AnimatedShinyText className={'text-gray-400 text-sm sm:text-lg'} shimmerWidth={200}>
                        Hello! I&apos;m Ashiq, a Software Engineer with interests in Data
                        Science, Robotics and Computer Vision.
                        <br />
                        Currently, I am a Senior Software Engineer at{" "}
                        <Link href="https://mycashbacks.com">
                            mycashbacks GmbH
                        </Link>
                        , Berlin, Germany where I am primarily working on the mycashbacks
                        browser extension and the google cloud function for the mycashbacks
                        backend. Before being a Senior Software Engineer, I was a Lecturer in
                        the Department of CSE, United International University, Bangladesh where
                        I used to teach Data Science and Mobile Application Development. I love
                        to play Video Games, Guitar and Badminton in my free time.
                    </AnimatedShinyText>
                </BoxReveal>
            </Flex>
            { /* <Technology /> */}
        </Flex>
    );
}