import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <main className={styles.viewport}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <section className={styles.card} aria-label="Login corporativo ICONTEC">
        <header className={styles.header}>
          <p className={styles.badge}>ICONTEC</p>
          <h1 className={styles.title}>Bienvenido</h1>
          <p className={styles.subtitle}>
            Inicia sesion para acceder de forma segura a tu entorno corporativo.
          </p>
        </header>

        <form className={styles.form}>
          <label className={styles.label} htmlFor="email">
            Correo corporativo
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@empresa.com"
            required
          />

          <label className={styles.label} htmlFor="password">
            Contrasena
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Ingresa tu contrasena"
            required
          />

          <div className={styles.actions}>
            <a href="#" className={styles.forgotLink}>
              Olvide mi contrasena
            </a>
            <button type="submit" className={styles.buttonPrimary}>
              Iniciar sesion
            </button>
          </div>
        </form>

        <footer className={styles.footer}>
          <p>Acceso protegido por Kinde.</p>
        </footer>
      </section>
    </main>
  );
}
