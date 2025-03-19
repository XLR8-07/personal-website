export interface Publication {
    title: string;
    shortDescription: string;
    longDescription?: string;
    authors: string[];
    year: number;
    link: string;
    pdfLink: string;
    publisher: string;
    publisherType: 'Journal' | 'Conference' | 'Book';
    publisherLogo: string;
    coverImage: string;
    technologies?: string[];
    githubLink?: string;
    papersWithCodeLink?: string;
}
