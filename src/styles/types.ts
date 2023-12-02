export enum Breakpoint {
    mobile = 'mobile',
    tablet = 'tablet',
    laptop = 'laptop',
    desktop = 'desktop',
}

export interface Point {
    min: number;
    max: number | null;
}

export type Intervals = Record<Breakpoint, Point>;
export type BreakpointName = keyof typeof Breakpoint;
