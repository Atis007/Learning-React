'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function error() {
    const router = useRouter();
  return (
    <div className="container error-page">
        <Image src={'/error.png'} alt='Error Image' widt={400} height={150}/>
        <h2>something went wrong!</h2>
        <div className="actions">
            <button className='outline' onClick={() => router.back()}>Go Back</button>
            <button onClick={() => router.back()}>Try Again</button>
        </div>
    </div>
  )
}
