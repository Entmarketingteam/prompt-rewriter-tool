# Prompt Rewriter Tool

> An interactive web-based tool that helps users improve their LLM prompts by selecting from 30+ proven rewriting techniques.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4)

---

## 🎯 Features

### Phase 1 (Current - P0)
- ✅ **30+ Rewriting Techniques** organized into 7 categories
- ✅ **Technique Selector** with collapsible category groups
- ✅ **Original Prompt Input** - paste text to improve
- ✅ **Instruction Generator** - compile techniques into a mega-prompt
- ✅ **Copy to Clipboard** - one-click copy with confirmation
- ✅ **Technique Descriptions** - hover/click to see "when to use" guidance
- ✅ **Fully Responsive** - works on desktop and mobile
- ✅ **Zero Setup** - open in browser, start rewriting

### Phase 2 (Coming Soon - P1)
- Claude API integration for direct rewriting
- Preset combinations (save favorite technique groups)
- Quick select buttons for common goals
- Before/after preview

### Phase 3 (Coming Soon - P2)
- History tracking (localStorage)
- Dark mode toggle
- Technique search/filter
- Export functionality

---

## 🚀 Quick Start

### Option A: Live Online (Recommended)

**Live Demo:** [Coming Soon - See Deployment Instructions]

Just open in your browser and start rewriting prompts!

### Option B: Local Development

```bash
# 1. Clone or navigate to the project
cd /home/user/1st-Project

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

The dev server includes hot-reload - changes appear instantly!

### Option C: Production Build (For Deployment)

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Output goes to `dist/` folder (upload to any static host).

---

## 📋 Techniques Reference

All 30+ techniques organized by category:

### 🔍 Clarity & Brevity (5 techniques)
Summarize, Paraphrase, Simplify Language, Condense, Make It Concise

### 📚 Depth & Detail (6 techniques)
Expand, Add Examples, Add Data/Statistics, Make It Descriptive, Add Story/Anecdote, Add Metaphor/Analogy

### 🎭 Tone & Voice (7 techniques)
Friendly Tone, Make It Formal, Make It Informal, Add Humor, Make It Positive, Make It Neutral, Make It Inspiring

### 💪 Persuasion & Action (4 techniques)
Make It Persuasive, Add Call to Action, Make It Actionable, Make It Engaging

### 📋 Structure & Format (4 techniques)
Format as List, Format as Table, Add Headings, Change Point of View

### ✨ Balance & Polish (2 techniques)
Add Counterargument, Fix Grammar/Spelling

### 🎯 Specialized (3 techniques)
Make It SEO-Friendly, Translate, Personalize for Audience

---

## 🛠️ Tech Stack

- **Framework:** React 18.2
- **Build Tool:** Vite 4.5
- **Styling:** Tailwind CSS 3.3
- **State Management:** React Hooks (useState, useMemo)
- **Browser APIs:** Clipboard API, localStorage (P2)

### Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Dev Dependencies

```json
{
  "vite": "^4.4.0",
  "@vitejs/plugin-react": "^4.0.0",
  "tailwindcss": "^3.3.0",
  "postcss": "^8.4.27",
  "autoprefixer": "^10.4.14"
}
```

---

## 📦 Project Structure

```
1st-Project/
├── src/
│   ├── App.jsx              # Main component (all logic + UI)
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind imports
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Build configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── DEPLOYMENT.md            # Deployment instructions
└── README.md                # This file
```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Free, Automatic)
✅ Recommended for quick setup
- Automatic deploys on push to main/master
- Free hosting included with GitHub
- See DEPLOYMENT.md for full instructions

### Option 2: Vercel (Free, Recommended)
✅ Fastest deployment (2 minutes)
- Automatic deployments
- Custom domain support
- Zero configuration needed
- See DEPLOYMENT.md for full instructions

### Option 3: Netlify (Free, Also Great)
✅ Similar to Vercel
- Automatic deployments
- Custom domain support
- See DEPLOYMENT.md for full instructions

**👉 [Full Deployment Guide →](DEPLOYMENT.md)**

---

## 🎓 How to Use

### 1. Select Techniques
- Browse technique categories in the left sidebar
- Check 2-5 techniques that match your goal
- Click on a technique name to learn more

### 2. Paste Your Prompt
- Copy your current LLM prompt
- Paste into "Original Prompt" text area
- Keep it under 500 words for best results

### 3. Generate Instruction
- Click "Generate Instruction" button
- Tool compiles selected techniques into a mega-prompt

### 4. Copy & Use
- Click "Copy" button on generated output
- Paste into ChatGPT, Claude, or any LLM
- Use the generated instructions to rewrite your prompt

### 5. Iterate
- Try different technique combinations
- See what works best for your use case
- You'll discover new techniques for different situations

---

## 💡 Example Workflows

### Goal: Make Your Email More Persuasive
1. Select: Formal, Concise, Add Call to Action
2. Paste your draft email
3. Generate instruction
4. Use with Claude API

### Goal: Create Better Social Media Copy
1. Select: Informal, Engaging, Add Humor, Add Call to Action
2. Paste your post
3. Generate instruction
4. Copy and refine

### Goal: Improve Technical Documentation
1. Select: Formal, Simplify Language, Add Examples, Add Headings
2. Paste your docs
3. Generate instruction
4. Use with Claude to rewrite

---

## 🔑 Key Features Explained

### Technique Selector
- Collapsible categories for quick navigation
- Expand/Collapse All buttons to manage groups
- Descriptions show when to use each technique
- Click technique name to see detailed modal

### Instruction Generator
Combines all selected techniques into a single prompt like this:

```
Rewrite the following prompt by applying these techniques:
- Summarize: Summarize in 2-3 sentences, focusing on main argument.
- Friendly Tone: Rewrite in a friendly, conversational tone.

Original prompt to improve:
"""
[Your original prompt here]
"""

Provide the rewritten prompt only, no explanations.
```

This mega-prompt can be used with any LLM!

### Selected Techniques Pills
Shows all selected techniques at a glance:
- Click the pill to quickly remove a technique
- Quick visual summary of your current selection

---

## ⚡ Performance

- **Bundle Size:** 156 KB (49.89 KB gzipped)
- **Load Time:** < 1 second
- **No external dependencies** (React/Vite only)
- **Fully responsive:** Desktop, tablet, mobile
- **Keyboard accessible:** Tab navigation throughout

---

## 🤝 Contributing

### To Add a New Technique

Edit `src/App.jsx` and add to the `TECHNIQUES` array:

```javascript
{
  id: "your-technique-id",
  name: "Your Technique Name",
  category: "clarity",  // or tone, depth, etc.
  emoji: "🎯",
  promptTemplate: "What instruction to give Claude",
  whenToUse: "When should users select this technique"
}
```

### To Modify a Category

Edit the `CATEGORIES` array in `src/App.jsx`:

```javascript
{
  id: "category-id",
  name: "Category Name",
  emoji: "🎯"
}
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Run `npm install` then `npm run build` |
| Dev server not starting | Kill any process on port 5173, try again |
| Changes not appearing | Clear browser cache, hard refresh (Ctrl+Shift+R) |
| Clipboard not working | Check browser permissions, some older browsers not supported |

---

## 📝 Production Checklist

- ✅ All P0 features working
- ✅ Production build optimized (49.89 KB gzip)
- ✅ Mobile responsive
- ✅ Zero external dependencies (safe)
- ✅ No console errors
- ✅ Copy-to-clipboard functional
- ✅ All 30+ techniques included
- ✅ Ready for deployment

---

## 🚀 Next Steps

1. **Deploy:** Choose Vercel, GitHub Pages, or Netlify (see DEPLOYMENT.md)
2. **Share:** Give the URL to Emily and other power users
3. **Iterate:** Collect feedback on P2 features
4. **Phase 2:** Add Claude API integration for direct rewriting
5. **Phase 3:** Add history, dark mode, search

---

## 📄 License

MIT

---

## 🎉 Built With

- 💜 React & Vite for speed
- 🎨 Tailwind CSS for beautiful UI
- 🧠 Proven prompt engineering techniques
- ⚡ Zero setup, pure browser-based

**Start rewriting prompts today!** 🚀
