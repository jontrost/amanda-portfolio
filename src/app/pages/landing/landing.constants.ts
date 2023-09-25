export interface Project {
    name: string;
    imagePath: string;
}

export const TRANSITION_FADE_OUT_DURATION_MS: number = 250; // Keep the scss link transition duration in sync with this
export const AUTO_TRANSITION_DELAY_MS: number = 5000;
export const PROJECTS: Project[] = [
    {
        name: "Ethereal Dance",
        imagePath: "/assets/projects/ethereal-dance/preview.gif"
    },
    {
        name: "One Million Projects Flyer",
        imagePath: "/assets/projects/one-million-projects-flyer/preview.jpg"
    },
    {
        name: "Social Assurance Infographic",
        imagePath: "/assets/projects/social-assurance-infographic/preview.png"
    },
    {
        name: "Sprint Back to School",
        imagePath: "/assets/projects/sprint-back-to-school/preview.png"
    },
    {
        name: "Sprint Block Party",
        imagePath: "/assets/projects/sprint-block-party/preview.png"
    },
    {
        name: "Sprint Social Statics",
        imagePath: "/assets/projects/sprint-social-statics/preview.png"
    }
];
