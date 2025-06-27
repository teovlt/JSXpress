import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            ©{currentYear} {t("footer.rights")}
          </p>
          <Link
            to="https://github.com/teovlt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 text-gray-500 dark:text-white hover:text-black dark:hover:text-neutral-300 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
