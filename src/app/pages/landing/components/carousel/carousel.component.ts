import { NgOptimizedImage } from "@angular/common";
import { Component, computed, inject, Signal, signal, WritableSignal } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { CAROUSEL_ANIMATION } from "./animations/carousel.animations";
import { PREVIEWS } from "./constants/carousel.constants";
import { Preview } from "./models/preview.model";
import { CarouselAnimationStatePipe } from "./pipes/carousel-animation-state.pipe";

@Component({
    selector: "app-carousel",
    standalone: true,
    imports: [CarouselAnimationStatePipe, NgOptimizedImage, RouterModule],
    animations: [CAROUSEL_ANIMATION],
    templateUrl: "./carousel.component.html",
    styleUrl: "./carousel.component.scss"
})
export class CarouselComponent {
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
