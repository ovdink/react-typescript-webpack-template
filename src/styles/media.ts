import { Breakpoint, BreakpointName, Intervals } from './types';

export const breakpointsList = Object.values(Breakpoint);

export const mediaIntervals: Intervals = {
    mobile: { min: 320, max: 767 },
    tablet: { min: 768, max: 1023 },
    laptop: { min: 1024, max: 1439 },
    desktop: { min: 1440, max: null },
};

export const from = (key: BreakpointName) => {
    const { min } = mediaIntervals[key];

    if (min === null) {
        throw new Error(`Interval ${key} not contains "min". Maybe you should use "toEnd"?`);
    }

    return `@media screen and (min-width: ${min}px)`;
};

export const to = (key: BreakpointName) => {
    const { min } = mediaIntervals[key];

    return `@media screen and (max-width: ${min - 1}px)`;
};

export const toEnd = (key: BreakpointName) => {
    const { max } = mediaIntervals[key];

    if (max === null) {
        throw new Error(`Interval ${key} not contains "max". Maybe you should use "from"?`);
    }

    return `@media screen and (max-width: ${max}px)`;
};

export const additionalBreakpoint = (value: number) => {
    return `@media screen and (max-width: ${value}px)`;
};

export const within = (key: BreakpointName) => {
    const { min, max } = mediaIntervals[key];

    if (min === null) {
        throw new Error(`Interval ${key} not contains "min". Try to use larger interval.`);
    }

    if (max === null) {
        throw new Error(`Interval ${key} not contains "max". Try to use smaller interval.`);
    }

    return `@media screen and (min-width: ${min}px) and (max-width: ${max}px)`;
};

export const getActiveInterval = () => {
    const width = window.innerWidth;

    const matched = breakpointsList.find((point) => {
        const interval = mediaIntervals[point];

        const start = interval.min ?? 0;
        const end = interval.max ?? Infinity;

        return width >= start && width <= end;
    });

    if (!matched) {
        throw new Error(`Interval not found. Width is incorrect.`);
    }

    return matched as BreakpointName;
};

export const isFrom = (breakpoint: BreakpointName) => {
    const active = getActiveInterval();
    const current = breakpointsList.findIndex((point) => point === active);
    const compare = breakpointsList.findIndex((point) => point === breakpoint);

    return current >= compare;
};

export const isTo = (breakpoint: BreakpointName) => {
    const active = getActiveInterval();
    const current = breakpointsList.findIndex((point) => point === active);
    const compare = breakpointsList.findIndex((point) => point === breakpoint);

    return current < compare;
};
