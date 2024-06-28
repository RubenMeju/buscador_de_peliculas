import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./app/[lang]/lib/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`./app/[lang]/messages/${locale}.json`)).default,
  };
});
