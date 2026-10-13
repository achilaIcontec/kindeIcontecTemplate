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
    background:
      radial-gradient(1200px 500px at 85% -10%, rgba(98, 181, 229, 0.26), transparent 62%),
      radial-gradient(900px 350px at -5% 100%, rgba(0, 156, 222, 0.20), transparent 60%),
      linear-gradient(160deg, #f4f9fc 0%, #edf6fc 36%, #ffffff 100%);
    min-height: 100vh;
  }

  .ico-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .ico-header {
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
    opacity: 0.78;
    filter: saturate(0.9);
  }

  .ico-brand-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--ico-process-blue);
    box-shadow: 0 0 0 6px rgba(0, 133, 202, 0.16);
  }

  .ico-switch-link {
    color: var(--ico-2383);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .ico-switch-link:hover,
  .ico-switch-link:focus-visible {
    color: var(--ico-287);
  }

  .ico-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .ico-widget-wrap {
    width: 100%;
    max-width: 980px;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 1rem;
    align-items: stretch;
  }

  .ico-sidepanel {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid rgba(0, 46, 93, 0.14);
    background: linear-gradient(165deg, rgba(0, 133, 202, 0.12), rgba(141, 200, 232, 0.20));
    box-shadow: 0 16px 42px rgba(0, 46, 93, 0.1);
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: icoFadeIn 450ms ease-out both;
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
    border-radius: 18px;
    border: 1px solid rgba(193, 198, 200, 0.68);
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(4px);
    box-shadow: 0 18px 48px rgba(0, 46, 93, 0.14);
    padding: 1.4rem;
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
    text-align: center;
    color: var(--ico-430);
    font-size: 0.8rem;
    padding: 0.75rem 1rem 1.25rem;
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
      grid-template-columns: 1fr;
    }

    .ico-sidepanel {
      padding: 1.4rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;
