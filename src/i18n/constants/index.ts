export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  sw: {
    iso: "sw-KE",
    name: "Kiswahili",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
