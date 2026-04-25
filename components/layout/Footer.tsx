export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t border-[#e5e5e5] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#666666]">
          © 2025 syake-ichiro. All rights reserved.
        </p>
        <a
          href="https://github.com/syake-ichiro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#666666] hover:text-[#2563eb] transition-colors duration-200 font-inter"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
