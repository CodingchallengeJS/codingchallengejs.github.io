
import { useState } from "react";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { BLOGS } from "../constants";

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState(BLOGS[0]);

  const scrollToBlog = (blog: typeof BLOGS[0]) => {
    setActiveBlog(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 space-y-6">
        <h2 className="text-snow/40 text-xs font-bold uppercase tracking-widest px-4">Daily Posts</h2>
        <div className="space-y-2">
          {BLOGS.map((blog) => (
            <button
              key={blog.id}
              onClick={() => scrollToBlog(blog)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                activeBlog.id === blog.id 
                ? 'bg-snow/10 text-snow border border-snow/20' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              <div className="font-medium truncate">{blog.title}</div>
              <div className="text-[10px] opacity-50 mt-1">{blog.date}</div>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <motion.article
          key={activeBlog.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-deep-blue/40 border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl"
        >
          <div className="text-snow/40 text-sm mb-4">{activeBlog.date}</div>
          <h1 className="text-4xl font-bold text-snow mb-8">{activeBlog.title}</h1>
          
          <div className="prose prose-invert max-w-none prose-snow">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm, remarkMath]} 
              rehypePlugins={[rehypeKatex]}
            >
              {activeBlog.content}
            </ReactMarkdown>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
