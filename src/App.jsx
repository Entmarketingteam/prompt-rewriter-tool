import React, { useState, useMemo } from 'react';

// All techniques data
const TECHNIQUES = [
  // CLARITY & BREVITY
  {
    id: "summarize",
    name: "Summarize",
    category: "clarity",
    emoji: "🗜️",
    promptTemplate: "Summarize in 2-3 sentences, focusing on main argument.",
    whenToUse: "When you need a concise version of longer text"
  },
  {
    id: "paraphrase",
    name: "Paraphrase for Clarity",
    category: "clarity",
    emoji: "🕵️",
    promptTemplate: "Paraphrase to make clearer and easier to understand.",
    whenToUse: "When original text is confusing or overly complex"
  },
  {
    id: "simplify",
    name: "Simplify Language",
    category: "clarity",
    emoji: "📝",
    promptTemplate: "Rewrite using simple language suitable for a 6th grader.",
    whenToUse: "When audience is non-technical or younger"
  },
  {
    id: "condense",
    name: "Condense",
    category: "clarity",
    emoji: "✂️",
    promptTemplate: "Condense to half the length while keeping main points.",
    whenToUse: "When you need to shorten text without losing meaning"
  },
  {
    id: "concise",
    name: "Make It Concise",
    category: "clarity",
    emoji: "✨",
    promptTemplate: "Remove unnecessary words and make more concise.",
    whenToUse: "When text is wordy or repetitive"
  },

  // DEPTH & DETAIL
  {
    id: "expand",
    name: "Expand",
    category: "depth",
    emoji: "🔍",
    promptTemplate: "Add more details and examples.",
    whenToUse: "When you want more detail or explanation"
  },
  {
    id: "examples",
    name: "Add Examples",
    category: "depth",
    emoji: "💡",
    promptTemplate: "Add specific, concrete examples to illustrate points.",
    whenToUse: "When you want to illustrate a point"
  },
  {
    id: "data",
    name: "Add Data/Statistics",
    category: "depth",
    emoji: "📈",
    promptTemplate: "Enhance with relevant data or statistics.",
    whenToUse: "When you want to back up claims with numbers"
  },
  {
    id: "descriptive",
    name: "Make It Descriptive",
    category: "depth",
    emoji: "🌻",
    promptTemplate: "Add vivid imagery and sensory details.",
    whenToUse: "When you want vivid imagery or sensory details"
  },
  {
    id: "story",
    name: "Add Story/Anecdote",
    category: "depth",
    emoji: "📖",
    promptTemplate: "Add a short story or anecdote to illustrate the point.",
    whenToUse: "When you want to personalize or humanize content"
  },
  {
    id: "metaphor",
    name: "Add Metaphor/Analogy",
    category: "depth",
    emoji: "🌉",
    promptTemplate: "Add a metaphor or analogy to explain the concept.",
    whenToUse: "When you want to clarify complex ideas"
  },

  // TONE & VOICE
  {
    id: "friendly",
    name: "Friendly Tone",
    category: "tone",
    emoji: "😊",
    promptTemplate: "Rewrite in a friendly, conversational tone.",
    whenToUse: "When text mood doesn't fit your audience"
  },
  {
    id: "formal",
    name: "Make It Formal",
    category: "tone",
    emoji: "👔",
    promptTemplate: "Rewrite in a formal, professional style.",
    whenToUse: "When you need a professional or academic tone"
  },
  {
    id: "informal",
    name: "Make It Informal",
    category: "tone",
    emoji: "🏖️",
    promptTemplate: "Rewrite in a casual, relaxed style.",
    whenToUse: "When you want a relaxed, approachable tone"
  },
  {
    id: "humor",
    name: "Add Humor",
    category: "tone",
    emoji: "😁",
    promptTemplate: "Add a touch of humor to lighten the tone.",
    whenToUse: "When you want to lighten the mood or entertain"
  },
  {
    id: "positive",
    name: "Make It Positive",
    category: "tone",
    emoji: "🧘",
    promptTemplate: "Rewrite to sound more positive and encouraging.",
    whenToUse: "When text feels negative or discouraging"
  },
  {
    id: "neutral",
    name: "Make It Neutral",
    category: "tone",
    emoji: "⚖️",
    promptTemplate: "Rewrite to be more neutral and objective.",
    whenToUse: "When you want to remove bias or strong opinions"
  },
  {
    id: "inspiring",
    name: "Make It Inspiring",
    category: "tone",
    emoji: "🌟",
    promptTemplate: "Rewrite to be more inspiring and motivational.",
    whenToUse: "When you want to uplift or motivate"
  },

  // PERSUASION & ACTION
  {
    id: "persuasive",
    name: "Make It Persuasive",
    category: "persuasion",
    emoji: "💪",
    promptTemplate: "Rewrite to be more persuasive and convincing.",
    whenToUse: "When you want to convince or motivate the reader"
  },
  {
    id: "cta",
    name: "Add Call to Action",
    category: "persuasion",
    emoji: "🎤",
    promptTemplate: "Add a compelling call to action at the end.",
    whenToUse: "When you want the reader to do something"
  },
  {
    id: "actionable",
    name: "Make It Actionable",
    category: "persuasion",
    emoji: "🏃",
    promptTemplate: "Include specific, actionable steps the reader can take.",
    whenToUse: "When you want readers to know what to do next"
  },
  {
    id: "engaging",
    name: "Make It Engaging",
    category: "persuasion",
    emoji: "🎯",
    promptTemplate: "Rewrite to be more engaging and interesting.",
    whenToUse: "When text feels dull or flat"
  },

  // STRUCTURE & FORMAT
  {
    id: "list",
    name: "Format as List",
    category: "structure",
    emoji: "📋",
    promptTemplate: "Reformat as a bulleted or numbered list.",
    whenToUse: "When you want to improve readability"
  },
  {
    id: "table",
    name: "Format as Table",
    category: "structure",
    emoji: "📊",
    promptTemplate: "Present information in a table format.",
    whenToUse: "When you want to compare or organize information"
  },
  {
    id: "headings",
    name: "Add Headings",
    category: "structure",
    emoji: "🏷️",
    promptTemplate: "Add appropriate headings and subheadings.",
    whenToUse: "When you want to organize content for easier navigation"
  },
  {
    id: "pov",
    name: "Change Point of View",
    category: "structure",
    emoji: "🥸",
    promptTemplate: "Rewrite from a different perspective (first/third person).",
    whenToUse: "When you want to shift perspective"
  },

  // BALANCE & POLISH
  {
    id: "counterargument",
    name: "Add Counterargument",
    category: "polish",
    emoji: "⚔️",
    promptTemplate: "Add a counterargument to present a balanced view.",
    whenToUse: "When you want to present a balanced view"
  },
  {
    id: "grammar",
    name: "Fix Grammar/Spelling",
    category: "polish",
    emoji: "🧐",
    promptTemplate: "Check and correct grammar and spelling errors.",
    whenToUse: "When you want to polish the text"
  },

  // SPECIALIZED
  {
    id: "seo",
    name: "Make It SEO-Friendly",
    category: "specialized",
    emoji: "🔎",
    promptTemplate: "Optimize for search engines with natural keyword integration.",
    whenToUse: "When you want to improve search engine visibility"
  },
  {
    id: "translate",
    name: "Translate",
    category: "specialized",
    emoji: "🌍",
    promptTemplate: "Translate to [specify language].",
    whenToUse: "When you need the text in another language"
  },
  {
    id: "audience",
    name: "Personalize for Audience",
    category: "specialized",
    emoji: "🎯",
    promptTemplate: "Tailor for a specific audience: [specify audience].",
    whenToUse: "When you want to tailor content to a group"
  }
];

const CATEGORIES = [
  { id: "clarity", name: "Clarity & Brevity", emoji: "🔍" },
  { id: "depth", name: "Depth & Detail", emoji: "📚" },
  { id: "tone", name: "Tone & Voice", emoji: "🎭" },
  { id: "persuasion", name: "Persuasion & Action", emoji: "💪" },
  { id: "structure", name: "Structure & Format", emoji: "📋" },
  { id: "polish", name: "Balance & Polish", emoji: "✨" },
  { id: "specialized", name: "Specialized", emoji: "🎯" }
];

// Instruction generator function
function generateInstruction(selectedTechniques, originalPrompt) {
  const techniqueInstructions = selectedTechniques
    .map(id => TECHNIQUES.find(t => t.id === id))
    .map(t => `- ${t.name}: ${t.promptTemplate}`)
    .join("\n");

  return `Rewrite the following prompt by applying these techniques:

${techniqueInstructions}

Original prompt to improve:
"""
${originalPrompt}
"""

Provide the rewritten prompt only, no explanations.`;
}

export default function PromptRewriterApp() {
  const [originalPrompt, setOriginalPrompt] = useState("");
  const [selectedTechniques, setSelectedTechniques] = useState([]);
  const [generatedInstruction, setGeneratedInstruction] = useState("");
  const [expandedCategories, setExpandedCategories] = useState(
    CATEGORIES.map(c => c.id)
  );
  const [showTechniqueDetail, setShowTechniqueDetail] = useState(null);
  const [copied, setCopied] = useState(false);

  // Get selected technique objects
  const selectedTechniqueObjects = useMemo(() => {
    return selectedTechniques
      .map(id => TECHNIQUES.find(t => t.id === id))
      .filter(Boolean);
  }, [selectedTechniques]);

  // Toggle technique selection
  const toggleTechnique = (id) => {
    setSelectedTechniques(prev =>
      prev.includes(id)
        ? prev.filter(t => t.id !== id)
        : [...prev, id]
    );
  };

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Generate instruction
  const handleGenerate = () => {
    if (selectedTechniques.length === 0 || !originalPrompt.trim()) {
      return;
    }
    const instruction = generateInstruction(selectedTechniques, originalPrompt);
    setGeneratedInstruction(instruction);
  };

  // Copy to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get techniques by category
  const techniquesByCategory = useMemo(() => {
    const grouped = {};
    CATEGORIES.forEach(cat => {
      grouped[cat.id] = TECHNIQUES.filter(t => t.category === cat.id);
    });
    return grouped;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Prompt Rewriter Tool
          </h1>
          <p className="text-slate-600 mt-2">
            Improve your LLM prompts with 30+ proven rewriting techniques
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Technique Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Techniques
              </h2>

              {/* Expand/Collapse All */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() =>
                    setExpandedCategories(CATEGORIES.map(c => c.id))
                  }
                  className="flex-1 text-sm px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                >
                  Expand All
                </button>
                <button
                  onClick={() => setExpandedCategories([])}
                  className="flex-1 text-sm px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                >
                  Collapse All
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-3">
                {CATEGORIES.map(category => (
                  <div key={category.id} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium text-slate-900">
                        {category.emoji} {category.name}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {expandedCategories.includes(category.id)
                          ? "▼"
                          : "▶"}
                      </span>
                    </button>

                    {expandedCategories.includes(category.id) && (
                      <div className="px-4 py-3 space-y-2 bg-white">
                        {techniquesByCategory[category.id].map(technique => (
                          <label
                            key={technique.id}
                            className="flex items-start gap-3 p-2 rounded hover:bg-slate-50 cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              checked={selectedTechniques.includes(
                                technique.id
                              )}
                              onChange={() =>
                                toggleTechnique(technique.id)
                              }
                              className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex-1 min-w-0">
                              <div
                                className="text-sm font-medium text-slate-900 cursor-help hover:text-blue-600"
                                onClick={() =>
                                  setShowTechniqueDetail(technique.id)
                                }
                                title={technique.whenToUse}
                              >
                                {technique.emoji} {technique.name}
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                {technique.whenToUse}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Selected Count */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  Selected: <span className="font-bold text-blue-600">
                    {selectedTechniques.length}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Input and Output */}
          <div className="lg:col-span-2 space-y-6">
            {/* Original Prompt Input */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Original Prompt
              </label>
              <textarea
                value={originalPrompt}
                onChange={(e) => setOriginalPrompt(e.target.value)}
                placeholder="Paste the prompt you want to improve..."
                className="w-full h-40 p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <p className="text-xs text-slate-500 mt-2">
                Tip: Select techniques first, then paste your prompt here
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={
                  selectedTechniques.length === 0 ||
                  !originalPrompt.trim()
                }
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors"
              >
                Generate Instruction
              </button>
            </div>

            {/* Selected Techniques Pills */}
            {selectedTechniques.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium text-slate-900 mb-3">
                  Selected Techniques:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedTechniqueObjects.map(technique => (
                    <button
                      key={technique.id}
                      onClick={() => toggleTechnique(technique.id)}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition-colors"
                    >
                      {technique.emoji} {technique.name}
                      <span className="text-xs">✕</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Output Area */}
            {generatedInstruction && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Generated Instruction
                </label>
                <div className="relative">
                  <pre className="w-full p-4 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 overflow-auto max-h-64 whitespace-pre-wrap break-words">
                    {generatedInstruction}
                  </pre>
                  <button
                    onClick={() => handleCopy(generatedInstruction)}
                    className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded transition-colors ${
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                    }`}
                  >
                    {copied ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!generatedInstruction && (
              <div className="bg-slate-50 rounded-lg p-12 text-center border-2 border-dashed border-slate-300">
                <p className="text-slate-500">
                  Select techniques and paste your prompt to see the generated instruction
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Technique Detail Modal */}
      {showTechniqueDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            {(() => {
              const technique = TECHNIQUES.find(
                t => t.id === showTechniqueDetail
              );
              return (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {technique.emoji} {technique.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {technique.description ||
                      technique.promptTemplate}
                  </p>

                  <div className="bg-slate-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-slate-900 mb-2">
                      When to use:
                    </p>
                    <p className="text-sm text-slate-600">
                      {technique.whenToUse}
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-slate-900 mb-2">
                      Prompt template:
                    </p>
                    <p className="text-sm text-slate-600">
                      {technique.promptTemplate}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        toggleTechnique(technique.id)
                      }
                      className={`flex-1 px-4 py-2 rounded font-medium transition-colors ${
                        selectedTechniques.includes(
                          technique.id
                        )
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                      }`}
                    >
                      {selectedTechniques.includes(
                        technique.id
                      )
                        ? "Remove"
                        : "Select"}
                    </button>
                    <button
                      onClick={() =>
                        setShowTechniqueDetail(null)
                      }
                      className="flex-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
