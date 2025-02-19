import React from "react";
import {
    Copy,
    Github,
    Terminal,
    Zap,
    Cloud,
    Database,
    Award,
    Star,
} from "lucide-react";

const App = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-6xl font-bold mb-4">lol.js</h1>
                <p className="text-2xl text-gray-600 mb-8">
                    The only API you'll ever need. Just returns 😂. That's it.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="https://www.npmjs.com/package/@sagar_shetty/lol.js">
                        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
                            Get Started
                        </button>
                    </a>
                    <a href="https://github.com/Sagar-Shetty21/lol.js">
                        <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition flex items-center gap-2">
                            <Github size={20} />
                            Star on GitHub
                        </button>
                    </a>
                </div>
            </header>

            {/* Problem Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        🚀 The Problem
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-purple-50 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">
                                Before lol.js
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <Database className="text-red-500" />
                                    Complex database queries
                                </li>
                                <li className="flex items-center gap-2">
                                    <Cloud className="text-red-500" />
                                    Complicated error handling
                                </li>
                                <li className="flex items-center gap-2">
                                    <Terminal className="text-red-500" />
                                    Endless debugging sessions
                                </li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">
                                After lol.js
                            </h3>
                            <div className="text-center">
                                <span className="text-8xl">😂</span>
                                <p className="mt-4 text-lg">
                                    Just one emoji solves everything!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        🔥 Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Zap size={24} />,
                                title: "Lightning Fast",
                                desc: "Because it's just one emoji",
                            },
                            {
                                icon: <Award size={24} />,
                                title: "Enterprise Ready",
                                desc: "If your enterprise is completely unserious",
                            },
                            {
                                icon: <Star size={24} />,
                                title: "Zero Config",
                                desc: "Because there is nothing to configure",
                            },
                            {
                                icon: <Cloud size={24} />,
                                title: "Cloud Native",
                                desc: "Buzzwords are free!",
                            },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-6 border rounded-xl hover:shadow-lg transition"
                            >
                                <div className="text-purple-600 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Example Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        📌 How It Works
                    </h2>
                    <div className="max-w-2xl mx-auto space-y-8">
                        <div className="bg-gray-800 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-400">Install</span>
                                <button
                                    onClick={() =>
                                        copyToClipboard(
                                            "npm i @sagar_shetty/lol.js"
                                        )
                                    }
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Copy size={16} />
                                </button>
                            </div>
                            <code className="text-green-400">
                                npm i @sagar_shetty/lol.js
                            </code>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-400">Usage</span>
                                <button
                                    onClick={() =>
                                        copyToClipboard(
                                            "const lol = require('@sagar_shetty/lol.js');\nconsole.log(lol());"
                                        )
                                    }
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Copy size={16} />
                                </button>
                            </div>
                            <pre className="text-purple-400">
                                const lol = require('@sagar_shetty/lol.js');
                                <br />
                                console.log(lol()); // Output: 😂
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-purple-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        💡 Testimonials
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Before lol-api, I was stressed. Now, I just return 😂 and my users love it.",
                                author: "A Senior DevOps Engineer",
                            },
                            {
                                quote: "This API helped me scale my business from zero to still zero, but now with more laughter.",
                                author: "A Startup Founder",
                            },
                            {
                                quote: "We replaced all our 500 errors with 😂. Best decision ever.",
                                author: "A Backend Engineer",
                            },
                        ].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl shadow-sm"
                            >
                                <p className="text-gray-600 mb-4">
                                    "{testimonial.quote}"
                                </p>
                                <p className="font-semibold">
                                    - {testimonial.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">🤝 Pricing</h2>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">
                                FREE FOREVER
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Because charging for this would be criminal.
                            </p>
                            <a href="https://www.npmjs.com/package/@sagar_shetty/lol.js">
                                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
                                    Start Using Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        Built with 😂 by developers who stopped taking
                        themselves too seriously
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
