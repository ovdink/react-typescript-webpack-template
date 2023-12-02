import { toPadStart } from './toPadStart';

export const millisToDate = (millis: number) => {
    const millisecInDay = 24 * 60 * 60 * 1000;
    const millisecInHour = 3600000;

    const days = Math.floor(millis / millisecInDay);

    const hours = Math.floor((millis % millisecInDay) / millisecInHour);

    const minutes = Math.floor(((millis % millisecInDay) % millisecInHour) / 60000);

    const seconds = Math.floor((millis % 60000) / 1000);

    return {
        days: toPadStart(days),
        hours: toPadStart(hours),
        minutes: toPadStart(minutes),
        seconds: toPadStart(seconds),
    };
};
