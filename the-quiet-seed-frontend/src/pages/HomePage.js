import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white py-4 text-center shadow">
        <h1 className="text-3xl font-bold handwritten">The Quiet Seed</h1>
      </header>

      {/* メインコンテンツ */}
      <main className="min-h-screen flex bg-purple-100 justify-center items-center">
        <video
          src="/videos/lavender.mp4"
          autoPlay
          loop
          muted
          className="rounded-lg shadow-lg w-full max-w-5xl"
        />
      </main>
    </div>
  );
}

export default HomePage;
