export const sortTable = <T>(a: any, b: any, order: string, orderBy: keyof T) => {
    switch (true) {
        /* ЕСЛИ ПРИШЛА СТРОКА И В НЕЙ ЕСТЬ ПРОЦЕНТЫ, ТО ДЕЛИМ ЕЁ ПО '-', БЕРЁМ 2 ЗНАЧЕНИЕ И ПРИВОДИМ К ЧИСЛУ */
        case typeof a[orderBy] === 'string' && a[orderBy].includes('%'):
            const filtredA = +a[orderBy].replaceAll(' ', '').split('-')[1].replace('%', '');
            const filtredB = +b[orderBy].replaceAll(' ', '').split('-')[1].replace('%', '');

            if (filtredB < filtredA && !!order) {
                return order === 'asc' ? 1 : -1;
            } else if (filtredB > filtredA && !!order) {
                return order === 'asc' ? -1 : 1;
            }

            return 0;

        /* ПРОВЕРЯЕМ ЯВЛЯЕТСЯ ЛИ ЭЛЕМЕНТ ЧИСЛОМ */
        case !isNaN(+a[orderBy]):
            if (+b[orderBy] < +a[orderBy] && !!order) {
                return order === 'asc' ? 1 : -1;
            } else if (+b[orderBy] > +a[orderBy] && !!order) {
                return order === 'asc' ? -1 : 1;
            }

            return 0;

        /* СТАНДАРТАЯ СОРТИРОВКА ПО СТРОКЕ */
        default:
            if (b[orderBy] < a[orderBy] && !!order) {
                return order === 'asc' ? 1 : -1;
            } else if (b[orderBy] > a[orderBy] && !!order) {
                return order === 'asc' ? -1 : 1;
            }

            return 0;
    }
};
