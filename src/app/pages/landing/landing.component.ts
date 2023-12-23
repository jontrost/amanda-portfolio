import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, computed, Signal, signal, WritableSignal } from "@angular/core";

import { CAROUSEL_ANIMATION } from "../../animations/carousel.animations";
import { Preview } from "../../models/preview.model";
import { CarouselAnimationStatePipe } from "../../pipes/carousel-animation-state.pipe";
import { PROJECTS } from "./landing.constants";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [CommonModule, CarouselAnimationStatePipe, NgOptimizedImage],
    animations: [CAROUSEL_ANIMATION],
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})
export default class LandingComponent {
    readonly previews: Preview[] = PROJECTS;
    readonly carouselAnimationStatePipe: CarouselAnimationStatePipe = new CarouselAnimationStatePipe();
    currentPreviewIndex: WritableSignal<number> = signal(1);
    leftPreviewIndex: Signal<number> = computed(() =>
        this.currentPreviewIndex() - 1 < 0 ? this.previews.length - 1 : this.currentPreviewIndex() - 1
    );
    rightPreviewIndex: Signal<number> = computed(() =>
        this.currentPreviewIndex() + 1 > this.previews.length - 1 ? 0 : this.currentPreviewIndex() + 1
    );

    selectPreview(index: number): void {
        const animationState = this.carouselAnimationStatePipe.transform(
            index,
            this.leftPreviewIndex(),
            this.currentPreviewIndex(),
            this.rightPreviewIndex()
        );

        if (animationState === "left") {
            this.currentPreviewIndex.set(this.leftPreviewIndex());
        } else if (animationState === "right") {
            this.currentPreviewIndex.set(this.rightPreviewIndex());
        }
    }
}
