'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between container mx-auto p-10">
    <h2 className="text-3xl" onClick={()=>router.push('/')}>Home</h2>
    <div className="space-x-4">
      <Link href="/about">aboutPage</Link>
      <Link href="/test">testPage</Link>
    </div>
  </div>
  );
};
export default Header;
