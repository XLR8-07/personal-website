import { Flex } from "@radix-ui/themes"
import { SectionHeading } from "../section-heading"
import { PUBLICATIONS } from "@/constants/publication"
import { PublicationCard } from "./publication-card"

export const Publications = () => {
    return (
        <Flex direction={'column'} gap={'5'}>
            <SectionHeading title="Publications" />
            <Flex direction={'column'} className={'w-full'} gap={'4'}>
                {PUBLICATIONS.map((publication, index) => (
                    <PublicationCard key={index} publication={publication} index={index} />
                ))}
            </Flex>
        </Flex>
    )
}