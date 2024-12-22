import { SUSE } from "next/font/google";

const sans_font = SUSE({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

export { sans_font };
