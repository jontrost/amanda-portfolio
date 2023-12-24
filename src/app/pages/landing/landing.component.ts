import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, Signal, WritableSignal, computed, inject, signal } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { CAROUSEL_ANIMATION } from "../../animations/carousel.animations";
import { Preview } from "../../models/preview.model";
import { CarouselAnimationStatePipe } from "../../pipes/carousel-animation-state.pipe";
import { PREVIEWS } from "./landing.constants";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [CommonModule, CarouselAnimationStatePipe, NgOptimizedImage, RouterModule],
    animations: [CAROUSEL_ANIMATION],
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})
export default class LandingComponent {
    currentPreviewIndex: WritableSignal<number> = signal(1);
    leftPreviewIndex: Signal<number> = computed(() =>
        this.currentPreviewIndex() - 1 < 0 ? this.previews.length - 1 : this.currentPreviewIndex() - 1
    );
    rightPreviewIndex: Signal<number> = computed(() =>
        this.currentPreviewIndex() + 1 > this.previews.length - 1 ? 0 : this.currentPreviewIndex() + 1
    );
    readonly previews: Preview[] = PREVIEWS;
    readonly carouselAnimationStatePipe: CarouselAnimationStatePipe = new CarouselAnimationStatePipe();
    private readonly router = inject(Router);

    viewPreview(index: number): void {
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

    viewDetails(name: string): void {
        this.router.navigate([encodeURI(`project/${name.toLowerCase().replace(/\W+/g, "-")}`)]);
    }
}
