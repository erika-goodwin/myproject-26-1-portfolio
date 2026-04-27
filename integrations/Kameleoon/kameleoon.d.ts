declare global {
    interface Window {
        kameleoonQueue?: unknown[];
        kameleoonStartLoadTime?: number;
        Kameleoon?: unknown;
        kameleoonDisplayPage?: (fromEngine?: boolean) => void;
        kameleoonTimeout?: boolean;
        kameleoonDisplayPageTimeOut?: Timeout;
    }
}

export {};