import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { glossaryTerms } from './data/glossaryTerms';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);

  useEffect(() => {
    const filtered = glossaryTerms.filter((item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTerms(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#4d0c26', color: '#f3cda2' }}>
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">Cybersecurity Glossary</h1>
        <p className="text-lg">Decode the Cyber Lingo</p>
        <div className="flex justify-center mt-4">
          <div className="relative w-full max-w-md">
            <Input
              className="pl-10 rounded-xl bg-[#3a0a1f] text-[#f3cda2] border-none"
              placeholder="Search a term..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#f3cda2]" />
          </div>
        </div>
      </header>

      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTerms.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-[#3a0a1f] border border-[#f3cda2] rounded-2xl shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.term}</h2>
                <p className="text-sm mb-2">{item.shortDefinition}</p>
                <details className="text-sm">
                  <summary className="cursor-pointer">See more</summary>
                  <p className="mt-2">{item.fullDefinition}</p>
                  <p className="mt-1 italic">Example: {item.example}</p>
                  <p className="mt-1">Tags: {item.tags.join(', ')}</p>
                  <p className="mt-1 text-[#ff9eb5]">Fun Fact: {item.funFact}</p>
                </details>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </main>

      <footer className="mt-12 text-center text-sm pt-6 border-t border-[#f3cda2]">
        <p>This is a property of Quasar CyberTech. All rights reserved.</p>
        <p>#1, State Bank Colony, Indira Nagar, Nashik, Maharashtra – 422009</p>
      </footer>
    </div>
  );
};

export default App;
