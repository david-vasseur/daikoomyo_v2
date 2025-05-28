import Link from 'next/link';
import React from 'react'

function Page() {
  return (
    <div className="py-20 bg-pink-200 h-full">
        <h1>Back-Office</h1>
        <Link href="/back-office/post">Creer un Post</Link>
    </div>
  )
}

export default Page;