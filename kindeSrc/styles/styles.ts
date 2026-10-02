const kindeVariables = {
  baseFontFamily: '"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  baseTextColor: "#002E5D",
  buttonPrimaryBackgroundColor: "#0085CA",
  buttonPrimaryColor: "#ffffff",
  buttonPrimaryBorderColor: "#0085CA",
  buttonSecondaryColor: "#002E5D",
  buttonBorderRadius: "10px",
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
  }

  body {
    margin: 0;
    color: #002E5D;
    background:
      radial-gradient(1200px 500px at 85% -10%, rgba(98, 181, 229, 0.22), transparent 62%),
      radial-gradient(900px 350px at -5% 100%, rgba(0, 133, 202, 0.16), transparent 60%),
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
    gap: 0.6rem;
    text-decoration: none;
    color: #002E5D;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .ico-brand-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #0085CA;
    box-shadow: 0 0 0 6px rgba(0, 133, 202, 0.12);
  }

  .ico-switch-link {
    color: #2774AE;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
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
    border-radius: 18px;
    border: 1px solid rgba(0, 46, 93, 0.12);
    background: linear-gradient(165deg, rgba(0, 133, 202, 0.08), rgba(255, 255, 255, 0.72));
    box-shadow: 0 16px 42px rgba(0, 46, 93, 0.1);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: icoFadeIn 450ms ease-out both;
  }

  .ico-sidepanel h2 {
    margin: 0;
    font-size: clamp(1.45rem, 2.4vw, 2rem);
    line-height: 1.15;
  }

  .ico-sidepanel p {
    margin: 0.75rem 0 0;
    color: #3e6386;
    line-height: 1.5;
  }

  .ico-form-card {
    border-radius: 18px;
    border: 1px solid rgba(0, 46, 93, 0.12);
    background: rgba(255, 255, 255, 0.9);
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
    border: 1px solid rgba(124, 135, 142, 0.42);
  }

  [data-kinde-form] [data-kinde-control-text]:focus-visible,
  [data-kinde-form] [data-kinde-control-password]:focus-visible,
  [data-kinde-form] [data-kinde-control-email]:focus-visible {
    outline: none;
    border-color: #0085CA;
    box-shadow: 0 0 0 4px rgba(0, 133, 202, 0.18);
  }

  [data-kinde-control-submit] {
    transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
  }

  [data-kinde-control-submit]:hover,
  [data-kinde-control-submit]:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 133, 202, 0.28);
    filter: saturate(1.08);
  }

  .ico-footer {
    text-align: center;
    color: #7C878E;
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
