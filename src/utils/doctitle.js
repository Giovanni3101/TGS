import { getSubdomain } from "./subdomain";

export const getAppTitle = () => {
    const subdomain = getSubdomain();
    const titles = {
        opportunities: "Connect | The Growth Sphere",
        academy: "Academy | The Growth Sphere",
    };

    document.title = titles[subdomain] || "TGS | The Growth Sphere";
}