import { css } from "styled-components";

export const sizes = {
  giant2: 1440,
  giant1: 1366,

  desktop3: 1240,
  desktop2: 1170,
  desktop1: 1024,

  tablet4: 992,
  tablet3: 801,
  tablet2: 768,
  tablet1: 480,

  phone1: 320,
} as any;

export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(literals, ...placeholders)}
    }
  `;
  return acc;
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>);
