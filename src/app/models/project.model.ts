import { Image } from "./project-image.model";

export interface Project {
    name: string;
    route: string;
    description: string;
    previewImage: Image;
    galleryImages: Image[];
}
