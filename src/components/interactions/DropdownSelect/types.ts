export interface IDropdownSelect {
    /* нужно any, потому что items могут быть любые, главное чтобы у них был id и title. */
    items: any[];
    activeItem?: any;
    title?: string;
    size?: 'normal' | 'large';

    setSlectedItem: (id: number | string) => void;
}
