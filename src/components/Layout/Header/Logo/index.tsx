import Link from 'next/link';

const Logo: React.FC<{ forceLight?: boolean }> = ({ forceLight = false }) => {

    return (
        <Link href="/" className="flex items-center gap-3">
            <span className={`flex h-11 w-11 items-center justify-center rounded-lg text-xl font-bold ${
                forceLight
                    ? "bg-[#1f2933] text-white"
                    : "bg-[#1f2933] text-white dark:bg-white dark:text-[#1f2933]"
            }`}>
                FK
            </span>
            <span className={`text-xl font-bold tracking-[0.12em] ${
                forceLight ? "text-[#1f2933]" : "text-[#1f2933] dark:text-white"
            }`}>
                FK COLLECTION
            </span>
        </Link>
    );
};

export default Logo;
