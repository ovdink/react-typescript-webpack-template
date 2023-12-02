import { MONTHS } from 'const';

export interface IFormatedDate {
    year: string;
    month: string;
    day: string;
    hours: string;
    minutes: string;
}

export const getFormatedDate = (
    time: number,
    isMonthString = true,
    isYearShort = true,
): IFormatedDate => {
    const date = new Date(time);

    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();

    return {
        year: isYearShort ? `'${year.slice(-2)}` : year,
        month: isMonthString ? MONTHS[+month - 1] : month.length === 1 ? `0${month}` : month,
        day: day.length === 1 ? `0${day}` : day,
        hours: hours.length === 1 ? `0${hours}` : hours,
        minutes: minutes.length === 1 ? `0${minutes}` : minutes,
    };
};
