const hostname = window.location.hostname

export const getSubdomain = () => {
    if (hostname.includes(".")) {
        return hostname.split('.')[0]
    }
    return null;
};