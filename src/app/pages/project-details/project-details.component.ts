import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-project-details",
    standalone: true,
    imports: [],
    templateUrl: "./project-details.component.html",
    styleUrl: "./project-details.component.scss"
})
export default class ProjectDetailsComponent implements OnInit {
    projectName: string | null = null;
    private readonly activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        this.projectName = this.activatedRoute.snapshot.paramMap.get("project");

        if (this.projectName == null) {
            // Handle error
            // Look for a type-safe way to get the param from the route
        }
    }
}
