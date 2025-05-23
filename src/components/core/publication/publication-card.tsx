'use client';

import BlurFade from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { Publication } from "@/types/publication"
import { Badge, Button, Card, Dialog, Flex, Heading, IconButton, Inset, Text, Tooltip } from '@radix-ui/themes';
import { Separator } from "radix-ui";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { SiPaperswithcode } from "react-icons/si";




export const PublicationCard = ({ publication, index }: { publication: Publication, index: number }) => {
    const { theme } = useTheme();

    return (
        <MagicCard gradientColor={theme === 'dark' ? 'black' : 'lightgray'} className={'w-full cursor-pointer'}>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Flex direction={'row'}>
                        <Card size={'2'} className='relative w-[140px] h-[100px] mx-2 my-2 object-cover flex justify-center items-center'>
                            <Inset clip={'padding-box'}>
                                <BlurFade yOffset={0} delay={0.5 * index} inView>
                                    <Image priority src={publication.thumbnailImage ? publication.thumbnailImage : publication.publisherLogo} alt={publication.publisher} width={550} height={300} className={'object-cover'} />
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
                    <Dialog.Description className={'text-sm text-gray-12 max-h-[180px] text-ellipsis overflow-hidden line-clamp-[9]'}>
                        {publication.longDescription}
                    </Dialog.Description>
                    <Separator.Root className="bg-black dark:bg-white h-[1px] w-full" style={{ margin: "15px 0" }} />
                    <Flex direction={'row'} align={'center'} justify={'center'}>
                        <Flex direction={'column'} justify={'center'} gap={'2'} className={'w-[300px]'}>
                            <Button color={'gray'} className={'cursor-pointer'} onClick={() => {
                                window.open(publication.link, '_blank');
                            }}>
                                Read More
                            </Button>
                            <Button color={'gray'} className={'cursor-pointer'} onClick={() => {
                                window.open(publication.pdfLink, '_blank');
                            }}>
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
                            <Flex direction={'row'} align={'center'} justify={'center'} gap={'2'}>
                                <Tooltip content={'Github Repository'}>
                                    <IconButton color={'gray'} size={'3'} radius={'full'} className={'cursor-pointer'} onClick={() => {
                                        window.open(publication.githubLink, '_blank');
                                    }}>
                                        <FaGithub size={'1.65rem'} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content={'Papers with Code'}>
                                    <IconButton color={'gray'} size={'3'} radius={'full'} className={'cursor-pointer'} onClick={() => {
                                        window.open(publication.papersWithCodeLink, '_blank');
                                    }}>
                                        <SiPaperswithcode size={'1.65rem'} />
                                    </IconButton>
                                </Tooltip>
                            </Flex>
                        </Flex>
                        <Separator.Root
                            className="bg-black dark:bg-white h-[100px] w-[1px]"
                            decorative
                            orientation="vertical"
                            style={{ margin: "0 15px" }}
                        />
                        <Flex gap={'2'} wrap={'wrap'}>
                            {publication.technologies?.map((tech, index) => (
                                <BlurFade key={index} delay={0.1 * index} inView>
                                    <Badge variant={'solid'} highContrast>
                                        {tech}
                                    </Badge>
                                </BlurFade>
                            ))}
                        </Flex>
                    </Flex>

                </Dialog.Content>
            </Dialog.Root>
        </MagicCard>
    )
}