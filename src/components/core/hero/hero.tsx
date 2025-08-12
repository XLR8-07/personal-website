import { Flex, Callout } from '@radix-ui/themes';
import TextRevealByWord from '../../magicui/text-reveal';
import { ScrollIndicator } from './scroll-indicator';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const Hero = () => {
    return (
        <Flex direction={'column'} gap={'4'}>
            <Callout.Root color="amber" size="1">
                <Callout.Icon>
                    <ExclamationTriangleIcon />
                </Callout.Icon>
                <Callout.Text>
                    Site is currently under development, please excuse the timeline and data.
                </Callout.Text>
            </Callout.Root>
            <ScrollIndicator />
            <TextRevealByWord text={"Welcome to my website!"} />
        </Flex>
    );
}