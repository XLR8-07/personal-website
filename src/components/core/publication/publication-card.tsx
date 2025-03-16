'use client';

import BlurFade from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { Publication } from "@/types/publication"
import { Button, Card, Dialog, Flex, Heading, Inset, Text } from '@radix-ui/themes';
import { Separator } from "radix-ui";
import { useTheme } from 'next-themes';
import Image from 'next/image';
// import { FaEye } from "react-icons/fa";




export const PublicationCard = ({ publication, index }: { publication: Publication, index: number }) => {
    const { theme } = useTheme();

    return (
        <MagicCard gradientColor={theme === 'dark' ? 'black' : 'lightgray'} className={'w-full cursor-pointer'}>
            <Dialog.Root>
                <Dialog.Trigger>
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
                            <Flex className={'mr-2'} justify={'end'}>
                                <Image src={publication.publisherLogo} alt={'placeholder'} width={70} height={50} className={'-z-20 h-fit'} />
                            </Flex>
                        </Flex>
                    </Flex>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Inset clip={'padding-box'} side={'top'} pb={'current'} pt={'current'} px={'current'}>
                        <Image priority src={publication.coverImage} alt={'placeholder'} width={700} height={400} className={'w-fit rounded-t-xl'} />
                    </Inset>
                    <Dialog.Title>
                        {publication.title}
                    </Dialog.Title>
                    <Dialog.Description>
                        {publication.authors.join(', ')}
                    </Dialog.Description>
                    <Separator.Root className="bg-black dark:bg-white h-[1px] w-full" style={{ margin: "15px 0" }} />
                    {/* <Text size={'1'}>
                        {publication.shortDescription}
                    </Text> */}
                    <Flex direction={'row'} align={'center'} justify={'start'}>
                        <Flex direction={'column'} justify={'center'} gap={'2'}>
                            <Button variant={'outline'}>
                                Read More
                            </Button>
                            <Button>
                                PDF
                            </Button>
                        </Flex>
                        <Separator.Root
                            className="bg-black dark:bg-white h-[100px] w-[1px]"
                            decorative
                            orientation="vertical"
                            style={{ margin: "0 15px" }}
                        />
                        <Flex direction={'column'} justify={'center'} gap={'2'}>
                            <Text size={'1'}>Code Repository</Text>

                        </Flex>
                        <Separator.Root
                            className="bg-black dark:bg-white h-[100px] w-[1px]"
                            decorative
                            orientation="vertical"
                            style={{ margin: "0 15px" }}
                        />
                        <Flex direction={'column'} justify={'center'} gap={'2'}>
                            <Text size={'1'}>Code Repository</Text>
                        </Flex>
                    </Flex>

                </Dialog.Content>
            </Dialog.Root>
        </MagicCard>
    )
}