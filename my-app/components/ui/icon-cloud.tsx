/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export type DynamicCloudProps = {
  iconSlugs?: string[]; // Made iconSlugs optional
  imageArray?: string[];
};

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "280px",
      paddingTop: 0,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (
  icon: SimpleIcon,
  theme: string = "dark",
  imageArray?: string[],
) => {
  // Force all icons to be mid-gray for both themes
  const customColor = "#a3a3a3";
  return renderSimpleIcon({
    icon,
    bgHex: customColor,
    fallbackHex: customColor,
    minContrastRatio: 1,
    size: 60,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({
    iconSlugs = [],
    imageArray,
  }: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null);
    const { theme } = useTheme();
  
    useEffect(() => {
      if (iconSlugs.length > 0) {
        fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
      }
    }, [iconSlugs]);
  
    const renderedIcons = useMemo(() => {
      if (!data) return null;
  
      return Object.values(data.simpleIcons).map((icon) =>
        renderCustomIcon(icon, theme || "light"),
      );
    }, [data, theme]);
  
    if (!data) {
      return <div className="text-white">Loading tech stack...</div>; // Render fallback while fetching icons
    }
  
    return (
      <Cloud {...cloudProps}>
        {renderedIcons}
        {imageArray?.map((image, index) => (
          <a key={`img-${index}`} href="#" onClick={(e) => e.preventDefault()}>
            <img height="42" width="42" alt="Tech Icon" src={image} />
          </a>
        ))}
      </Cloud>
    );
  }
  