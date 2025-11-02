'use client';

import { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Suggestion {
  icon: string;
  title: string;
  prompt: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions: Suggestion[] = [
    {
      icon: '📋',
      title: 'Project Overview',
      prompt: 'Help me draft a comprehensive project overview for the AI-Enabled Imaging Biobank proposal'
    },
    {
      icon: '🎯',
      title: 'Objectives & Outcomes',
      prompt: 'Guide me in formulating clear objectives and expected outcomes for the hub-and-spoke model'
    },
    {
      icon: '🔬',
      title: 'Methodology',
      prompt: 'Assist me in developing a detailed methodology section for establishing the biobank network'
    },
    {
      icon: '💰',
      title: 'Budget Planning',
      prompt: 'Help me create a realistic budget breakdown for the national imaging biobank project'
    },
    {
      icon: '📊',
      title: 'Impact Assessment',
      prompt: 'Guide me in articulating the societal and scientific impact of this project for India'
    },
    {
      icon: '🤝',
      title: 'Collaboration Plan',
      prompt: 'Help me design a strategic collaboration framework for hub-and-spoke network partners'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent, customPrompt?: string) => {
    e.preventDefault();
    const prompt = customPrompt || input;

    if (!prompt.trim()) return;

    const userMessage: Message = { role: 'user', content: prompt };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'I apologize, but I encountered an error. Please try again.'
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered a connection error. Please try again.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
    handleSubmit(syntheticEvent, prompt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            DBT Proposal Research Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Expert guidance for: <span className="font-semibold">Establishment of a National Network for AI-Enabled Imaging Biobank</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Onco-pathology & Infectious Diseases • Hub-and-Spoke Model • India-Specific Diagnostic Tools
          </p>
        </header>

        {/* Chat Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Messages Area */}
          <div className="h-[60vh] overflow-y-auto p-6 space-y-6">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔬</div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Welcome, Researcher!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  I'm your expert research associate specializing in biomedical imaging, AI diagnostics, and large-scale research infrastructure.
                  I'll help you craft a compelling, original, and scientifically rigorous DBT proposal with a human, professional tone.
                </p>

                {/* Suggestions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.prompt)}
                      className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 text-left group hover:shadow-lg"
                    >
                      <div className="text-3xl mb-2">{suggestion.icon}</div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {suggestion.title}
                      </h3>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-6 py-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <div
                        className="prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: marked(message.content) }}
                      />
                    ) : (
                      <p>{message.content}</p>
                    )}
                  </div>
                </div>
              ))
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-6 py-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your DBT proposal..."
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 text-sm text-gray-500 dark:text-gray-500">
          <p>💡 All content is generated to be plagiarism-free with a professional, humanized tone</p>
        </footer>
      </div>
    </div>
  );
}
