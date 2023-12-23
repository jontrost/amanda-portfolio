import { animate, state, style, transition, trigger } from "@angular/animations";

//rename this probably
export type AnimationState = "left" | "center" | "right" | "hidden";

export const ANIMATIONS = [
    trigger("rotationAnimation", [
        state(
            "left",
            style({
                opacity: "20%",
                transform: "translateX(-75%) scale(0.75)"
            })
        ),
        state(
            "center",
            style({
                opacity: "100%",
                "z-index": "1",
                transform: "translateX(0) scale(1)"
            })
        ),
        state(
            "right",
            style({
                opacity: "20%",
                transform: "translateX(75%) scale(0.75)"
            })
        ),
        state(
            "hidden",
            style({
                opacity: "0",
                transform: "translateX(0) scale(0.8)"
            })
        ),
        transition("void => center", [style({ "z-index": "1" }), animate("750ms ease-in-out")]),
        transition("* => *", animate("750ms ease-in-out"))
    ])
];
