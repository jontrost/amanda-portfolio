import { CommonModule } from "@angular/common";
import { Component, computed, Signal, signal, WritableSignal } from "@angular/core";

import { Preview } from "../../models/preview.model";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [CommonModule],
    animations: ["./landing.animations.ts"],
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})
export default class LandingComponent {
    currentPreviewIndex: WritableSignal<number> = signal(0);
    leftPreviewIndex: Signal<number> = computed(() => this.decrementPreviewIndex());
    rightPreviewIndex: Signal<number> = computed(() => this.incrementPreviewIndex());
    // extract this
    previews: Preview[] = [
        {
            name: "Project 1",
            imagePath: "/assets/images/placeholder.jpg"
        },
        {
            name: "Project 2",
            imagePath: "/assets/images/placeholder.jpg"
        },
        {
            name: "Project 3",
            imagePath: "/assets/images/placeholder.jpg"
        },
        {
            name: "Project 4",
            imagePath: "/assets/images/placeholder.jpg"
        },
        {
            name: "Project 5",
            imagePath: "/assets/images/placeholder.jpg"
        }
    ];

    selectLeftPreview() {
        this.currentPreviewIndex.set(this.decrementPreviewIndex());
    }

    selectRightPreview() {
        this.currentPreviewIndex.set(this.incrementPreviewIndex());
    }

    incrementPreviewIndex() {
        return this.currentPreviewIndex() + 1 > this.previews.length - 1 ? 0 : this.currentPreviewIndex() + 1;
    }

    decrementPreviewIndex() {
        return this.currentPreviewIndex() - 1 < 0 ? this.previews.length - 1 : this.currentPreviewIndex() - 1;
    }
}
