'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function NotFound() {
    const router = useRouter();

  return (
    <div className="error-page container">
      <Image src="/404.png" width={600} height={200} alt="Not found image" />
      <h1>Page Not Found</h1>
      <div className="actions">
        <button onClick={()=>router.back()} className="outline">Go back</button>
      </div>
    </div>
  );
}
