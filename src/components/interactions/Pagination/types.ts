export interface IPagination {
    position?: 'start' | 'center' | 'end';
    pagesCount: number;
    currentPage: number;
    siblingCount?: number;
    boundaryCount?: number;
    onChange: (value: number) => void;
}
