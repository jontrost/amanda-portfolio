import { Component, Input, OnInit } from "@angular/core";

type Icon = "arrow-left";

@Component({
    selector: "app-icon",
    standalone: true,
    imports: [],
    templateUrl: "./icon.component.html",
    styleUrl: "./icon.component.scss"
})
export class IconComponent implements OnInit {
    @Input() icon: Icon;
    link: string;

    // maybe this can be an input signaL??
    ngOnInit(): void {
        this.link = `assets/icons/${this.icon}.svg#${this.icon}`;
    }
}
