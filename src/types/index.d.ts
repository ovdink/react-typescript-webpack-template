export {};

declare global {
    interface Window {
        _environment: TEnvironment;
    }
}

type TEnvironment = {
    API_URL: string;
};
