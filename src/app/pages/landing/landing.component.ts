import { CommonModule } from "@angular/common";
import { Component, computed, Signal, signal, WritableSignal } from "@angular/core";

import { Preview } from "../../models/preview.model";
import { LandingAnimationStatePipe } from "../../pipes/landing-animation-state.pipe";
import { ANIMATIONS } from "./landing.animations";
import { PROJECTS } from "./landing.constants";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [CommonModule, LandingAnimationStatePipe],
    animations: ANIMATIONS,
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})
export default class LandingComponent {
    readonly previews: Preview[] = PROJECTS;
    readonly animationStatePipe: LandingAnimationStatePipe = new LandingAnimationStatePipe();
    currentPreviewIndex: WritableSignal<number> = signal(0);
    leftPreviewIndex: Signal<number> = computed(() =>
        this.currentPreviewIndex() - 1 < 0 ? this.previews.length - 1 : this.currentPreviewIndex() - 1
    );
    rightPreviewIndex: Signal<number> = computed(() =>
        this.currentPreviewIndex() + 1 > this.previews.length - 1 ? 0 : this.currentPreviewIndex() + 1
    );

    selectPreview(index: number): void {
        const animationState = this.animationStatePipe.transform(
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
