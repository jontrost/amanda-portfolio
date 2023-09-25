import { animate, style, transition, trigger } from "@angular/animations";

import { TRANSITION_FADE_OUT_DURATION_MS } from "./landing.constants";

export const TransitionAnimation = [
    trigger("transition", [
        transition(":enter", [
            style({ opacity: 0 }),
            animate(`${TRANSITION_FADE_OUT_DURATION_MS}ms ease-in`, style({ opacity: 1 }))
        ]),
        transition(":leave", animate(`${TRANSITION_FADE_OUT_DURATION_MS}ms ease-out`, style({ opacity: 0 })))
    ])
];
