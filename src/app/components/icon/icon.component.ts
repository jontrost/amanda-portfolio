import { Component, computed, input, Signal } from "@angular/core";

type Icon = "arrow-left" | "chevron-circle-left" | "chevron-circle-right";

@Component({
    selector: "app-icon",
    standalone: true,
    imports: [],
    templateUrl: "./icon.component.html",
    styleUrl: "./icon.component.scss"
})
export class IconComponent {
    icon = input.required<Icon>();
    link: Signal<string> = computed(() => `assets/icons/${this.icon()}.svg#${this.icon()}`);
}
