import { CommonModule } from "@angular/common";
import { Component, DestroyRef, OnInit } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { interval, Subject, take, takeUntil, timer } from "rxjs";

import { TransitionAnimation } from "./landing.animations";
import { AUTO_TRANSITION_DELAY_MS, Project, PROJECTS, TRANSITION_FADE_OUT_DURATION_MS } from "./landing.constants";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"],
    animations: [TransitionAnimation]
})
export default class LandingComponent implements OnInit {
    readonly projects: Project[] = PROJECTS;
    selectedProjectIndex: number = 0;
    projectManuallySelected: Subject<void> = new Subject<void>();
    projectTransitionFadeOutInProgress: boolean = false;

    constructor(private readonly destroyRef: DestroyRef) {}

    ngOnInit(): void {
        interval(AUTO_TRANSITION_DELAY_MS)
            .pipe(takeUntil(this.projectManuallySelected), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                const nextIndex = this.selectedProjectIndex + 1;
                this.selectProject(nextIndex < this.projects.length ? nextIndex : 0, false);
            });
    }

    selectProject(newIndex: number, manualSelection: boolean = true) {
        if (manualSelection) {
            this.projectManuallySelected.next();
        }

        if (newIndex !== this.selectedProjectIndex) {
            this.projectTransitionFadeOutInProgress = true;
            this.selectedProjectIndex = newIndex;
            timer(TRANSITION_FADE_OUT_DURATION_MS)
                .pipe(take(1), takeUntilDestroyed(this.destroyRef))
                .subscribe(() => (this.projectTransitionFadeOutInProgress = false));
        }
    }
}
