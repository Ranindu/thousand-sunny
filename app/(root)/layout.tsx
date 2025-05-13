export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className='flexh h-screen flex-col'>
            <main className='flex-1 wrapper'>
                {children}
            </main>
        </div>
    );
  }