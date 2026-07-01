export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200/70 dark:border-gray-800/70 bg-white/60 dark:bg-gray-950/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Shahul Hameed Ali M. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}