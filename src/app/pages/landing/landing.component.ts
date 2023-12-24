import { Component } from "@angular/core";

import { CarouselComponent } from "./components/carousel/carousel.component";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [CarouselComponent],
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})
export default class LandingComponent {}
