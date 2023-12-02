const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
};

export const createPagination = (
    pagesCount: number,
    currentPage: number,
    siblingCount: number,
    boundaryCount: number,
) => {
    const startPages = range(1, Math.min(boundaryCount, pagesCount));

    const endPages = range(Math.max(pagesCount - boundaryCount + 1, boundaryCount + 1), pagesCount);

    const siblingsStart = Math.max(
        Math.min(currentPage - siblingCount, pagesCount - boundaryCount - siblingCount * 2 - 1),
        boundaryCount + 2,
    );

    const siblingsEnd = Math.min(
        Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
        endPages.length > 0 ? endPages[0] - 2 : pagesCount - 1,
    );

    const itemList = [
        ...startPages,

        ...(siblingsStart > boundaryCount + 2
            ? ['ellipsis']
            : boundaryCount + 1 < pagesCount - boundaryCount
            ? [boundaryCount + 1]
            : []),

        ...range(siblingsStart, siblingsEnd),

        ...(siblingsEnd < pagesCount - boundaryCount - 1
            ? ['ellipsis']
            : pagesCount - boundaryCount > boundaryCount
            ? [pagesCount - boundaryCount]
            : []),

        ...endPages,
    ];

    const items = itemList.map((item) => {
        return typeof item === 'number'
            ? {
                  page: item,
                  selected: item === currentPage,
              }
            : {
                  type: item,
                  selected: false,
              };
    });

    return items;
};
