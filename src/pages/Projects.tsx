
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-snow">My projects:</h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-deep-blue/40 border border-white/5 rounded-3xl overflow-hidden hover:border-snow/30 transition-all shadow-xl"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.avatar} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-snow">{project.name}</h3>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-snow transition-colors" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
