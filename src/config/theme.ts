export const theme = {
  colors: {
    background: "#F8F7F4",
    surface: "#FFFFFF",
    surfaceMuted: "#F1F0EC",

    textPrimary: "#292B28",
    textSecondary: "#62655F",
    textMuted: "#858880",

    border: "#E3E2DD",
    borderStrong: "#D3D2CC",

    accent: "#718C78",
    accentHover: "#5F7865",
    accentSoft: "#E8EEE9",

    success: "#5F8068",
    warning: "#B58A4A",
    error: "#A96868",
    info: "#647D91",

    focus: "#718C78",
  },

  typography: {
    fonts: {
      heading: "Iowan Old Style, Baskerville, Times New Roman, serif",
      body: "Inter, ui-sans-serif, system-ui, sans-serif",
      mono: "ui-monospace, SFMono-Regular, Consolas, monospace",
    },

    sizes: {
      display: "clamp(40px, 6vw, 72px)",
      h1: "clamp(34px, 4vw, 52px)",
      h2: "clamp(28px, 3vw, 38px)",
      h3: "28px",
      h4: "22px",
      bodyLarge: "20px",
      body: "16px",
      small: "14px",
      caption: "12px",
    },

    lineHeights: {
      display: "1.05",
      h1: "1.1",
      h2: "1.15",
      h3: "1.2",
      h4: "1.3",
      bodyLarge: "1.6",
      body: "1.6",
      small: "1.5",
      caption: "1.4",
    },

    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },

    letterSpacing: {
      tight: "-0.02em",
      normal: "0",
      wide: "0.06em",
    },
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    base: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "14px",
    xl: "20px",
    full: "9999px",
  },

  layout: {
    readingWidth: "672px",
    contentWidth: "1152px",
    wideWidth: "1344px",
    gutter: "clamp(20px, 4vw, 32px)",
  },

  shadows: {
    sm: "0 1px 2px rgba(41, 43, 40, 0.06)",
    md: "0 4px 12px rgba(41, 43, 40, 0.08)",
    lg: "0 12px 32px rgba(41, 43, 40, 0.10)",
  },

  motion: {
    duration: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
    },

    easing: {
      standard: "ease-out",
    },
  },
} as const;
