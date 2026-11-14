export default function Footer() {
  return (
    <footer className="bg-plum-950">
      <div className="zari" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-mute">
        <p>
          © {new Date().getFullYear()} Shahul Hameed Ali M. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
