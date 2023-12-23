import { Pipe, PipeTransform } from "@angular/core";

import { AnimationState } from "../pages/landing/landing.animations";

@Pipe({
    name: "landingAnimationState",
    standalone: true
})
export class LandingAnimationStatePipe implements PipeTransform {
    transform(index: number, leftIndex: number, currentIndex: number, rightIndex: number): AnimationState {
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
