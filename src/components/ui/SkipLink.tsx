export function SkipLink() {
  return (
    <a
      href="#main-content"
      id="skip-to-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:font-medium focus:rounded-md focus:shadow-md focus:outline-none"
    >
      Skip to content
    </a>
  );
}
