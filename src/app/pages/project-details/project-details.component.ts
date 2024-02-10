import { NgOptimizedImage } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PROJECTS } from "../../constants/projects.constants";
import { Project } from "../../models/project.model";

@Component({
    selector: "app-project-details",
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: "./project-details.component.html",
    styleUrl: "./project-details.component.scss"
})
export default class ProjectDetailsComponent implements OnInit {
    project: Project;
    selectedImageIndex: number = 0;
    private readonly activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        // Assert that the project will be found from the route since the route is always built from the project itself
        this.project = PROJECTS.find(
            (project) => project.route === this.activatedRoute.snapshot.paramMap.get("project")
        )!;
    }
}
