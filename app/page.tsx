import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen p-4 gap-10 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1>Project Started Succesfully</h1>
      <h1>Click to Navigate</h1>
      <div>
        <button className="border border-red-800">
          <Link href="/dashboard/super-admin">
            <h2>Admin Dashboard</h2>
          </Link>
        </button>
        <button className="border border-red-800">
          <Link href="/dashboard/employee">
            <h2>Employee Dashboard</h2>
          </Link>
        </button>
      </div>
    </div>
  );
}
