export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-6xl font-bold mb-4">{'>'} QUERY SAGE</h1>
          <p className="text-xl text-green-600">
            A minimalist terminal interface for natural language database orchestration
          </p>
        </header>

        <section className="mb-8">
          <div className="border border-green-800 rounded-lg p-6 bg-gray-900">
            <div className="flex items-center mb-4">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-white">Initialize your session</span>
            </div>
            <p className="text-green-600 mb-4">
              Speak to your data in plain English. Query Sage translates natural language to SQL.
            </p>
            <a
              href="/auth/login"
              className="inline-block bg-green-700 hover:bg-green-600 text-black font-bold py-3 px-6 rounded"
            >
              INITIALIZE SESSION
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 text-green-300">Features</h2>
            <ul className="space-y-2 text-green-600">
              <li>• Natural language SQL generation</li>
              <li>• AI-powered database interaction</li>
              <li>• Terminal-based interface</li>
              <li>• Multi-database support</li>
              <li>• Real-time SQL feedback</li>
            </ul>
          </div>

          <div className="border border-green-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 text-green-300">Tech Stack</h2>
            <ul className="space-y-2 text-green-600">
              <li>• Next.js 14</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Firebase</li>
              <li>• Gemini AI</li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 text-center text-green-700">
          <p>Built with Firebase Studio • Deployed on Vercel</p>
        </footer>
      </div>
    </main>
  );
}
