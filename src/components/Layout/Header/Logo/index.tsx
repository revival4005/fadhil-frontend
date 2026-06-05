import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1f2933] text-xl font-bold text-white dark:bg-white dark:text-[#1f2933]">
                FF
            </span>
            <span className="text-xl font-bold tracking-[0.12em] text-[#1f2933] dark:text-white">
                FADHIL FASHION
            </span>
        </Link>
    );
};

export default Logo;
