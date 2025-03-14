import { Flex } from "@radix-ui/themes"
import { SectionHeading } from "../section-heading"
import { PUBLICATIONS } from "@/constants/publication"
import { PublicationCard } from "./publication-card"
import BlurFade from "@/components/magicui/blur-fade"
export const Publications = () => {
    return (
        <Flex direction={'column'} gap={'5'}>
            <SectionHeading title="Publications" />
            <Flex direction={'column'} className={'w-full'} gap={'4'}>
                {PUBLICATIONS.map((publication, index) => (
                    <BlurFade key={index} delay={0.25 * index} inView>
                        <PublicationCard key={index} publication={publication} index={index} />
                    </BlurFade>
                ))}
            </Flex>
        </Flex>
    )
}