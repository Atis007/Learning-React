'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function error({reset}) {
    const router = useRouter();
  return (
    <div className="container error-page">
        <Image src={'/error.png'} alt='Error Image' widt={400} height={150}/>
        <h2>something went wrong!</h2>
        <div className="actions">
            <button onClick={() => router.back()} className='outline'>Go Back</button>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    </div>
  )
}
