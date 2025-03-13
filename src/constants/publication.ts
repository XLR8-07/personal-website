import { Publication } from "@/types/publication";

export const PUBLICATIONS: Publication[] = [
    {
        title: 'FracAtlas: A Dataset for Fracture Classification, Localization and Segmentation of Musculoskeletal Radiographs',
        shortDescription: 'With the recent growth of computer vision algorithms, there is a surge of interest in computer-aided diagnosis. We present FracAtlas, a new dataset of X-Ray scans curated from the images collected from 3 major hospitals in Bangladesh. Our dataset includes 4,083 images that have been manually annotated for bone fracture classification, localization, and segmentation with the help of 2 expert radiologists and an orthopedist',
        longDescription: 'Digital radiography is one of the most common and cost-effective standards for the diagnosis of bone fractures. For such diagnoses expert intervention is required which is time-consuming and demands rigorous training. With the recent growth of computer vision algorithms, there is a surge of interest in computer-aided diagnosis. The development of algorithms demands large datasets with proper annotations. Existing X-Ray datasets are either small or lack proper annotation, which hinders the development of machine-learning algorithms and evaluation of the relative performance of algorithms for classification, localization, and segmentation. We present FracAtlas, a new dataset of X-Ray scans curated from the images collected from 3 major hospitals in Bangladesh. Our dataset includes 4,083 images that have been manually annotated for bone fracture classification, localization, and segmentation with the help of 2 expert radiologists and an orthopedist using the open-source labeling platform, makesense.ai. There are 717 images with 922 instances of fractures. Each of the fracture instances has its own mask and bounding box, whereas the scans also have global labels for classification tasks. We believe the dataset will be a valuable resource for researchers interested in developing and evaluating machine learning algorithms for bone fracture diagnosis.',
        authors: ['Md Ashiqur Rahman', 'Iftekharul Abedeen' , 'Fatema Zohra Prottyasha' , 'Tasnim Ahmed', 'Tareque Mohmud Chowdhury' , 'Swakkhar Shatabda'],
        year: 2023,
        publisher: 'Nature Scientific Data',
        publisherType: 'Journal',
        publisherLogo: '/logos/Publication/publishers/nature_logo.png',
        coverImage: 'Cover Image',
        link: 'https://www.nature.com/articles/s41597-023-02432-4'
    },
    {
        title: 'MosquitoFusion: A Multiclass Dataset for Real-Time Detection of Mosquitoes, Swarms, and Breeding Sites Using Deep Learning',
        shortDescription: 'we present an integrated approach to real-time mosquito detection using our multiclass dataset (MosquitoFusion) containing 1204 diverse images and leverage cutting-edge technologies, specifically computer vision, to automate the identification of Mosquitoes, Swarms, and Breeding Sites.',
        longDescription: 'Mosquitoes are a major public health concern, causing diseases like malaria, dengue, and Zika. Accurate detection of mosquitoes is crucial for effective mosquito control. We present MosquitoFusion, a multiclass dataset of 1,204 diverse images containing mosquitoes, swarms, and breeding sites. Leveraging cutting-edge technologies, specifically computer vision, we automate the identification of mosquitoes, swarms, and breeding sites. Our dataset is a valuable resource for researchers developing and evaluating machine learning algorithms for mosquito detection.',
        authors: ['Md Ashiqur Rahman', 'Iftekharul Abedeen' , 'Fatema Zohra Prottyasha' , 'Tasnim Ahmed', 'Tareque Mohmud Chowdhury' , 'Swakkhar Shatabda'],
        year: 2024,
        publisher: 'International Conference on Learning Representations (ICLR)',
        publisherType: 'Conference',
        publisherLogo: '/logos/Publication/publishers/iclr_logo.png',
        coverImage: 'Cover Image',
        link: 'https://openreview.net/forum?id=3s4hFx8pYs&referrer=%5Bthe%20profile%20of%20Md%20Ashiqur%20Rahman%5D(%2Fprofile%3Fid%3D~Md_Ashiqur_Rahman3)'
    }
]