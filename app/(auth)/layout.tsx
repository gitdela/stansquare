export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='relative min-h-screen bg-[url("/assets/shape.png")] bg-center  bg-repeat w-full flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8fcceb] '></div>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-[#8fcceb] '></div>
      {children}
    </main>
  );
}
