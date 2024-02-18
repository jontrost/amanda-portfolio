import { NgOptimizedImage } from "@angular/common";
import { Component, computed, inject, OnInit, Signal, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

import { IconComponent } from "../../components/icon/icon.component";
import { PROJECTS } from "../../constants/projects.constants";
import { Project } from "../../models/project.model";

@Component({
    selector: "app-project-details",
    standalone: true,
    imports: [IconComponent, NgOptimizedImage, RouterModule],
    templateUrl: "./project-details.component.html",
    styleUrl: "./project-details.component.scss"
})
export default class ProjectDetailsComponent implements OnInit {
    project: Project;
    currentImageIndex: WritableSignal<number> = signal(1);
    previousImageIndex: Signal<number> = computed(() =>
        this.currentImageIndex() - 1 < 0 ? this.project.galleryImages.length - 1 : this.currentImageIndex() - 1
    );
    nextImageIndex: Signal<number> = computed(() =>
        this.currentImageIndex() + 1 > this.project.galleryImages.length - 1 ? 0 : this.currentImageIndex() + 1
    );
    private readonly activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        // Assert that the project will be found from the route since the route is always built from the project itself
        this.project = PROJECTS.find(
            (project) => project.route === this.activatedRoute.snapshot.paramMap.get("project")
        )!;
    }

    displayPreviousImage(): void {
        this.currentImageIndex.set(this.previousImageIndex());
    }

    displayNextImage(): void {
        this.currentImageIndex.set(this.nextImageIndex());
    }
}
