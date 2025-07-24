import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://soumyabanerjee.tech/",
            lastModified: new Date(),
        }
    ]
}