// app/components/headerweb.tsx
'use client'; 
import React from "react";
import Link from "next/link"; 
import { useRouter } from "next/navigation"; 
export default function Header() {
    const router = useRouter();
    const handleButtonClick = () => {

        router.push("/login"); 
    }     
    return (
<header className="bg-indigo-950 text-white p-3 flex justify-between items-center shadow-lg">
            {}
            <div className="text-xl font-bold">
                {}
                <Link href="/">My Logo</Link> 
            </div>

            {}
            <nav className="flex space-x-4 items-center">
                {}
                <Link href="/about" className="hover:text-gray-200">អំពី</Link>
                {}
                <Link href="/Service" className="hover:text-gray-200">សេវាកម្ម</Link>
                
                {}
                <button 
                    onClick={handleButtonClick}
                    className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition duration-150"
                >
                    ចូលគណនី
                </button>
            </nav>
        </header>
    );
}
