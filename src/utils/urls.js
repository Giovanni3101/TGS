import { ENV } from '../config/env'

// const getOpportunitiesUrl = () => {
//     const protocol = ENV.isDev ? "http" : "https";
//     const port = ENV.isDev ? `:${ENV.port}` : "";
//     return `${protocol}://opportunities.${ENV.rootDomain}${port}`;
// };

const getTgsAcademyUrl = () => {
    const protocol = ENV.isDev ? "http" : "https";
    const port = ENV.isDev ? `:${ENV.port}` : "";
    return `${protocol}://academy.${ENV.rootDomain}${port}`;
};

const getTgsUrl = () => {
    const protocol = ENV.isDev ? "http" : "https";
    const port = ENV.isDev ? `:${ENV.port}` : "";
    return `${protocol}://${ENV.rootDomain}${port}`;
};

// const opportunitiesUrl = getOpportunitiesUrl()
const tgsAcademyUrl = getTgsAcademyUrl()
const tgsUrl = getTgsUrl()

export const URLS = {
    // opportunitiesUrl,
    tgsAcademyUrl,
    tgsUrl
}
