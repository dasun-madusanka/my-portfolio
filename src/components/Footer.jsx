export default function Footer({ name }) {
  return (
    <footer className="py-8 px-6 border-t border-border text-center text-textMuted text-sm font-mono">
      © {new Date().getFullYear()} {name}. Built with React & Sanity.
    </footer>
  );
}