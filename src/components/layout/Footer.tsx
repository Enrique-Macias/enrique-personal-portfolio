import { profile } from "@/data/profile";
import { useLanguage } from "@/i18n";

export function Footer() {
  const { dictionary } = useLanguage();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">{dictionary.footer.builtWith}</p>
      </div>
    </footer>
  );
}
