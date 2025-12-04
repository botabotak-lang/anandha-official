import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 pb-32 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-light tracking-wider">Anandah</span>
          <span className="text-xs opacity-80">耳つぼダイエットサロン</span>
        </div>
        
        <div className="text-xs opacity-70 text-center md:text-right">
          <p>&copy; {currentYear} Ear Diet Salon Anandha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
