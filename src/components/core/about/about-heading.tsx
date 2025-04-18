import { TextAnimate } from '@/components/magicui/text-animate';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Flex, Heading } from '@radix-ui/themes';

export const AboutHeading = () => {
    return (
        <Flex gap={'2'} justify={'between'} className={'w-full'}>
            <Flex direction={'column'} className={'overflow-x-hidden'}>
                <Heading size={{ initial: '7', sm: '9' }}>
                    <TextAnimate animation="slideUp" by="word">Hi! I&apos;m Ashiq 👋🏼</TextAnimate>
                </Heading>
                <Heading size={{ initial: '5', sm: '7' }} className={'overflow-hidden'}>
                    <TypingAnimation> Software Engineer | Former Lecturer  </TypingAnimation>
                </Heading>
            </Flex>
        </Flex>
    );
}