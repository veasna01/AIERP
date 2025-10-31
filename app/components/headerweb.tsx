// app/components/headerweb.tsx

'use client'; 
import React from "react";
import Link from "next/link"; 
import { useRouter } from "next/navigation"; 

// ត្រូវប្តូរឈ្មោះ Header ទៅជា Headerweb ដើម្បីជៀសវាងភាពច្របូកច្របល់
export default function Headerweb() { 
    const router = useRouter();
    
    const handleButtonClick = () => {
        router.push("/login"); 
    }     
    
    return (
        <header className="bg-indigo-950 text-white p-3 flex justify-between items-center shadow-lg">
            
            {/* ផ្នែកខាងឆ្វេង: Logo/Title */}
            <div className="text-xl font-bold">
                <Link href="/">My Logo</Link> 
            </div>

            {/* 🚀 ផ្នែកកណ្តាល និងស្តាំ */}
            <nav className="flex items-center space-x-4">
                
                {/* នេះជា Links ដែលត្រូវលាក់នៅលើ Mobile (អេក្រង់តូច) */}
                <div className="hidden md:flex space-x-4"> {/* ⬅️ កែសម្រួលនៅទីនេះ */}
                    
                    <Link href="/about" className="hover:text-gray-200">
                        អំពី
                    </Link>
                    
                    <Link href="/Service" className="hover:text-gray-200">
                        សេវាកម្ម
                    </Link>
                    
                </div> {/* ⬅️ បិទ div ដែលលាក់ Links */}
                
                {/* ប៊ូតុងចូលគណនី (បង្ហាញគ្រប់ Screen Size) */}
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