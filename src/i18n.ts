import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validar que el parámetro `locale` entrante es válido
  if (!locales.includes(locale as any)) notFound();

  // Importar los mensajes basados en el `locale`
  const messages = (await import(`./app/[locale]/messages/${locale}.json`))
    .default;

  return {
    // No es necesario devolver el `locale`
    messages,
  };
});
