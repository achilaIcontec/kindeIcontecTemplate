# kindeIcontecTemplate

Template personalizado de Kinde para una pagina de inicio de sesion corporativa de ICONTEC.

## Estructura implementada

```txt
kindeIcontecTemplate/
	kindeSrc/
		components/
			footer.tsx
			header.tsx
			widget.tsx
		layouts/
			default.tsx
		styles/
			styles.ts
		root.tsx
		environment/
			pages/
				(kinde)/
					(default)/
						page.tsx
					(login)/
						page.tsx
					(register)/
						page.tsx
	package.json
	kinde.json
```

Las rutas `(kinde)/(login)`, `(kinde)/(register)` y `(kinde)/(default)` usan el widget oficial de Kinde y la misma capa visual corporativa.

## Paleta aplicada (ICONTEC)

- Primario: `#0085CA`
- Azul corporativo oscuro: `#002E5D`
- Azules de apoyo: `#2774AE`, `#009CDE`, `#62B5E5`, `#8DC8E8`
- Neutros: `#7C878E`, `#C1C6C8`

## Caracteristicas de UI

- Diseno minimalista corporativo.
- Fondo con gradientes suaves.
- Microinteracciones y keyframes suaves.
- Layout server-rendered alineado al starter oficial para compatibilidad con Kinde Auth.
- Adaptacion movil y soporte `prefers-reduced-motion`.

## Como conectarlo en Kinde

1. En Kinde, ir a **Design > Custom code**.
2. Seleccionar **Connect repo**.
3. En **Settings > Git Repo**, conectar GitHub y elegir este repositorio y rama.
4. Sincronizar cambios.
5. Revisar **Code status alerts** en el dashboard para validar que no haya errores.

## Recomendacion de despliegue

- Si tu plan permite preview, habilita previsualizacion antes de publicar.
- Si no, prueba primero en un entorno no productivo.
