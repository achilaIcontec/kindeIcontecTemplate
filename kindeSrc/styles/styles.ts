const kindeVariables = {
  baseFontFamily: '"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  baseTextColor: "#002E5D",
  buttonPrimaryBackgroundColor: "#0085CA",
  buttonPrimaryColor: "#ffffff",
  buttonPrimaryBorderColor: "#0085CA",
  buttonSecondaryColor: "#002E5D",
  buttonBorderRadius: "10px",
} as const;

const brandPalette = {
  processBlue: "#0085CA",
  white: "#FFFFFF",
  blue648: "#002E5D",
  blue2383: "#2774AE",
  blue2925: "#009CDE",
  blue2915: "#62B5E5",
  blue2905: "#8DC8E8",
  gray430: "#7C878E",
  gray428: "#C1C6C8",
  black: "#000104",
  blue287: "#003087",
} as const;

export const getStyles = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-base-text-color: ${kindeVariables.baseTextColor};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-primary-border-color: ${kindeVariables.buttonPrimaryBorderColor};
    --kinde-button-secondary-color: ${kindeVariables.buttonSecondaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-control-border-radius: 10px;
    --kinde-form-spacing-content: 1.25rem;
    --ico-process-blue: ${brandPalette.processBlue};
    --ico-white: ${brandPalette.white};
    --ico-648: ${brandPalette.blue648};
    --ico-2383: ${brandPalette.blue2383};
    --ico-2925: ${brandPalette.blue2925};
    --ico-2915: ${brandPalette.blue2915};
    --ico-2905: ${brandPalette.blue2905};
    --ico-430: ${brandPalette.gray430};
    --ico-428: ${brandPalette.gray428};
    --ico-black: ${brandPalette.black};
    --ico-287: ${brandPalette.blue287};
  }

  body {
    margin: 0;
    color: #002E5D;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background: url("https://raw.githubusercontent.com/achilaIcontec/kindeIcontecTemplate/refs/heads/main/kindeSrc/assets/logoAnimated.gif") center center / cover no-repeat;
    z-index: -2;
  }

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background:
      radial-gradient(1000px 520px at 50% 16%, rgba(0, 48, 135, 0.24), transparent 75%),
      linear-gradient(180deg, rgba(0, 32, 74, 0.36) 0%, rgba(0, 46, 93, 0.20) 100%);
    z-index: -1;
  }

  .ico-shell {
    min-height: 100vh;
    position: relative;
  }

  .ico-header {
    position: absolute;
    inset: 0 0 auto 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
  }

  .ico-brand {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: var(--ico-648);
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .ico-brand-logo {
    display: block;
    width: 50px;
    height: auto;
    opacity: 0.92;
    filter: saturate(1.05);
  }

  .ico-brand-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--ico-process-blue);
    box-shadow: 0 0 0 6px rgba(0, 133, 202, 0.16);
  }

  .ico-switch-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    border: 1px solid rgba(0, 92, 180, 0.75);
    background: linear-gradient(135deg, #0071CE, #0096DF);
    color: #FFFFFF;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    box-shadow: 0 8px 20px rgba(0, 48, 135, 0.30);
    transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
  }

  .ico-switch-link:hover,
  .ico-switch-link:focus-visible {
    color: #FFFFFF;
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(0, 48, 135, 0.35);
    filter: brightness(1.06);
  }

  .ico-switch-link:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 2px;
  }

  .ico-main {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 5rem 1rem 1.2rem;
  }

  .ico-widget-wrap {
    width: 100%;
    max-width: 460px;
    display: flex;
    align-items: stretch;
    justify-content: center;
  }

  .ico-sidepanel {
    display: none;
  }

  .ico-sidepanel-logo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: inherit;
    display: block;
  }

  .ico-form-card {
    width: 100%;
    border-radius: 18px;
    border: 1px solid rgba(193, 198, 200, 0.45);
    background: rgba(255, 255, 255, 0.90);
    backdrop-filter: blur(6px);
    box-shadow: 0 18px 48px rgba(0, 46, 93, 0.14);
    padding: 1.5rem;
    animation: icoLiftIn 420ms ease-out both;
  }

  [data-kinde-form] {
    animation: icoFadeIn 380ms ease-out both;
  }

  [data-kinde-form] [data-kinde-control-text],
  [data-kinde-form] [data-kinde-control-password],
  [data-kinde-form] [data-kinde-control-email] {
    border-radius: 10px;
    border: 1px solid rgba(124, 135, 142, 0.56);
  }

  [data-kinde-form] [data-kinde-control-text]:focus-visible,
  [data-kinde-form] [data-kinde-control-password]:focus-visible,
  [data-kinde-form] [data-kinde-control-email]:focus-visible {
    outline: none;
    border-color: var(--ico-2925);
    box-shadow: 0 0 0 4px rgba(0, 156, 222, 0.20);
  }

  [data-kinde-control-submit] {
    transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
  }

  [data-kinde-control-submit]:hover,
  [data-kinde-control-submit]:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 48, 135, 0.30);
    filter: saturate(1.08);
  }

  .ico-footer {
    display: none;
  }

  @keyframes icoLiftIn {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.99);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes icoFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    .ico-brand-logo {
      width: 92px;
    }

    .ico-widget-wrap {
      max-width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;
