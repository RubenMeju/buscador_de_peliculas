import { NextRequest, NextResponse } from "next/server";

let locales = ["en-US", "es-ES"];

// Función para obtener el idioma preferido del usuario
function getLocale(request: NextRequest) {
  // Obtener el header Accept-Language de la solicitud
  const acceptLanguage = request.headers.get("Accept-Language");
  console.log("q idioma es: ", acceptLanguage);
  // Ejemplo simple: Extraer el idioma principal de la lista de idiomas aceptados
  // Puedes implementar lógica más avanzada según tus necesidades
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(",")[0].trim();
    // Verificar si el idioma preferido está soportado, de lo contrario, devolver el idioma predeterminado
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }

  // Si no se puede determinar un idioma preferido válido, devolver el idioma predeterminado
  return "en-US"; // o el idioma por defecto que prefieras
}

export function middleware(request: NextRequest) {
  // Verificar si hay algún idioma admitido en el pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redireccionar si no hay un idioma especificado en el pathname
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // Ejemplo: si la solicitud entrante es /products
  // La nueva URL ahora será /en-US/products (o el idioma determinado)

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Omitir todas las rutas internas (_next)
    "/((?!_next).*)",
    // Opcional: solo ejecutar en la URL raíz (/)
    // '/'
  ],
};
