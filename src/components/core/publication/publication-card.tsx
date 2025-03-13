'use client';

import BlurFade from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { Publication } from "@/types/publication"
import { Avatar, Box, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FaEye } from "react-icons/fa";




export const PublicationCard = ({ publication, index }: { publication: Publication, index: number }) => {
    const { theme } = useTheme();

    return (
        <MagicCard gradientColor={theme === 'dark' ? 'black' : 'lightgray'} className={'w-full cursor-pointer'}>
            <Flex direction={'row'}>
                <Card size={'2'} className='relative w-[140px] h-[100px] mx-2 my-2 object-cover flex justify-center items-center'>
                    <Inset clip={'padding-box'}>
                        {/* <Flex className={'group cursor-pointer z-50 transition-all hover:bg-opacity-15 hover:backdrop-blur-sm h-full w-full absolute'} align={'center'} justify={'center'}>
                        <FaEye size={'3rem'} className={'transition-all text-[--gray-12] opacity-0 group-active:scale-90 group-hover:opacity-100'} />
                    </Flex> */}
                        <BlurFade yOffset={0} delay={0.5 * index} inView>
                            <Image priority src={publication.publisherLogo} alt={'placeholder'} width={500} height={275} className={'-z-20 h-fit rounded-xl'} />
                        </BlurFade>
                    </Inset>
                </Card>
                <Flex direction={'column'} className={'my-2 mx-1'}>
                    <Heading size={'3'} weight={'bold'}>
                        {publication.title}
                    </Heading>
                    <Text size={'1'} className={'text-[--gray-12] mt-1'}>
                        {publication.authors.join(', ')}
                    </Text>
                </Flex>
            </Flex>

        </MagicCard>
    )
}