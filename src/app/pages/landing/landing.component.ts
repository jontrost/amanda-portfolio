import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})
export default class LandingComponent {
    projects: string[] = [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
        "Project 5",
        "Project 6",
        "Project 7",
        "Project 8",
        "Project 9",
        "Project 10",
        "Project 11"
    ];
    // Rename this
    selectedProjectPreview: string = this.projects[0];

    // Add rxjs observable with debounceTimer that cycles through each preview automatically
    previewProject(projectIndex: number) {
        this.selectedProjectPreview = this.projects[projectIndex];
    }
}
