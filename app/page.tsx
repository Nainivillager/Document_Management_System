import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Project Started Succesfully</h1>
      <Link href="/dashboard/super-admin">  
      <h2>click here to Navigate to the dashboard to start working</h2>
  </Link>    <div>
      </div>
    </div>
  );
}
