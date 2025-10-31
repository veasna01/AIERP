
// layout.tsx

import "./globals.css";
// ត្រូវកែតម្រូវ path នេះតាម folder structure របស់អ្នក
import Header from "./components/headerweb"; 
import React from 'react'; // ត្រូវ import React ឬប្រើប្រភេទដែលបានកំណត់រួច

// កំណត់ប្រភេទរបស់ children ទៅជា React.ReactNode
export default function RootLayout({ 
    children 
}: { 
    children: React.ReactNode 
}) {
  return (
    <html lang="km">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}