import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#2A2C30] shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-16 py-3">
        <div className="w-40 md:w-48 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Impact Academy Logo"
            width={200}
            height={80}
            priority
            unoptimized
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Placeholder for additional icons or buttons */}
          <Image
            fill
            src="/images/logo.png"
            alt="Impact Logo"
            unoptimized
            priority
            className="h-6 w-auto hidden"
          />
        </div>
      </div>
    </header>
  );
}
