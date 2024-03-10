import { Project } from "../models/project.model";

// Fix gallery images

// Convert all these to jpg or webp

export const PROJECTS: Project[] = [
    {
        name: "Characters of Carnival",
        route: "characters-of-carnival",
        description:
            'This project was made for the exhibit "Carnival as Resistance" which depicted the ritual and artifacts alongside the modern day practices of Carnival in Antigua and Barbuda. I illustrated the four most important characters of carnival along with the line drawings in the style of fashion sketches. Participants in the parade dress up as these four characters during the annual celebration. The layout of the mural was made in collaboration with Hannah Caulkins.',
        previewImage: {
            path: "/assets/projects/characters-of-carnival/preview.jpg",
            width: 1200,
            height: 900
        },
        galleryImages: [
            {
                path: "/assets/projects/characters-of-carnival/full-layout.jpg",
                width: 1400,
                height: 788
            },
            {
                path: "/assets/projects/characters-of-carnival/intro.jpg",
                width: 1200,
                height: 1800
            },
            {
                path: "/assets/projects/characters-of-carnival/highlander.jpg",
                width: 1200,
                height: 1800
            },
            {
                path: "/assets/projects/characters-of-carnival/john-bull.jpg",
                width: 1200,
                height: 1800
            },
            {
                path: "/assets/projects/characters-of-carnival/moko-jumbie.jpg",
                width: 1200,
                height: 1800
            },
            {
                path: "/assets/projects/characters-of-carnival/skellihopper.jpg",
                width: 1200,
                height: 1800
            },
            {
                path: "/assets/projects/characters-of-carnival/wide-angle.jpg",
                width: 1400,
                height: 788
            }
        ]
    },
    {
        name: "Ethereal Dance",
        route: "ethereal-dance",
        description:
            "Dance choreography can be thought of as designing movement for the body, but how does that compare to designing visual motion? Through research and personal experimentation, I intend to explore possible ways to mimic or depict dance using graphics. I will be considering questions such as: what design elements can display movement while referencing the human body; and what portrayals of dance are the most successful at representing the movements of the human body? I specifically want to discover how graphic shapes and lines can take on an abstract form to represent the angles of the body alignment captured through movement and dance. The exhibition element displays how design is integrated with dance in the real world: The creation, branding, and marketing of Ethereal Dance Company.",
        previewImage: {
            path: "/assets/projects/ethereal-dance/preview.jpg",
            width: 1200,
            height: 900
        },
        galleryImages: [
            {
                path: "/assets/projects/ethereal-dance/preview.jpg",
                width: 1200,
                height: 900
            },
            {
                path: "/assets/projects/ethereal-dance/brand-assets.png",
                width: 4833,
                height: 2258
            },
            {
                path: "/assets/projects/ethereal-dance/brand-guide.png",
                width: 2300,
                height: 1550
            },
            {
                path: "/assets/projects/ethereal-dance/final.gif",
                width: 1160,
                height: 751
            },
            {
                path: "/assets/projects/ethereal-dance/poster.png",
                width: 3000,
                height: 2200
            },
            {
                path: "/assets/projects/ethereal-dance/trifold-mockup-closed.png",
                width: 2200,
                height: 1400
            },
            {
                path: "/assets/projects/ethereal-dance/trifold-mockup.png",
                width: 1800,
                height: 1500
            }
        ]
    },
    {
        name: "Sprint Block Party",
        route: "sprint-block-party",
        description:
            "I designed this identifier for an event on the Sprint Headquarters Campus. The purpose of the event was to celebrate the grand opening of all of a newly renovated building as well as recognize the Network team for the launch of 5G. I wanted the identifier to signify a fun summer event while keeping the design Sprint branded. The color palate and use of the light brush helped make the event recognizable as a Sprint event. The identifier was used on flyers to promote the event as well as rotating announcements on TV screens throughout campus. It was also included on the photo booth printed pictures you could get at the event.",
        previewImage: {
            path: "/assets/projects/sprint-block-party/preview.jpg",
            width: 1200,
            height: 900
        },
        galleryImages: [
            {
                path: "/assets/projects/sprint-block-party/graphic.png",
                width: 2251,
                height: 2251
            },
            {
                path: "/assets/projects/sprint-block-party/photo-booth.jpg",
                width: 3911,
                height: 2572
            }
        ]
    }
];
