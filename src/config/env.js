const hostname = window.location.hostname;

const isDev =
    hostname.includes("lvh.me") ||
    hostname === "localhost" ||
    import.meta.env.MODE === "development";

export const ENV = {
    isDev,
    rootDomain: isDev
        ? import.meta.env.VITE_DEV_DOMAIN
        : import.meta.env.VITE_ROOT_DOMAIN,
    port: isDev ? import.meta.env.VITE_DEV_PORT : null,
};
