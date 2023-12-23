import { Pipe, PipeTransform } from "@angular/core";

import { CarouselAnimationState } from "../animations/carousel.animations";

@Pipe({
    name: "carouselAnimationState",
    standalone: true
})
export class CarouselAnimationStatePipe implements PipeTransform {
    transform(index: number, leftIndex: number, currentIndex: number, rightIndex: number): CarouselAnimationState {
        switch (index) {
            case leftIndex:
                return "left";
            case currentIndex:
                return "center";
            case rightIndex:
                return "right";
            default:
                return "hidden";
        }
    }
}
