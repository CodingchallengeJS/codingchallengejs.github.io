import { motion } from "motion/react";
import { Mail, Phone, School, MapPin, User } from "lucide-react";
import { QUOTES, SKILLS, SCHOOLS, PRIZES } from "../constants";

const getSchoolInitials = (name: string) =>
  name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export default function Home() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-6">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full max-w-xl space-y-6 md:w-[25rem] md:max-w-none"
        >
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-snow">Azaylibelz</h1>
            <p className="text-gray-400 text-lg italic">
              Phạm Quang Trung
            </p>
          </div>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-snow/60" />
              <span>cscratchhearttuna@gmail.com</span>
            </div>
            {/* <div className="flex items-center gap-3">
              <Phone size={18} className="text-snow/60" />
              <span>+84 (Your Number)</span>
            </div> */}
            <div className="flex items-center gap-3">
              <School size={18} className="text-snow/60" />
              <span>HUS High School for Gifted Students (HSGS)</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-snow/60" />
              <span>Ha Noi, Viet Nam</span>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Just a wandering man exploring unpredictable life.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative h-64 w-64 shrink-0 md:h-72 md:w-72"
        >
          <div className="absolute inset-0 bg-snow/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-2 border-snow/20 shadow-2xl">
            <img
              src="https://res.cloudinary.com/dflrkkdvt/image/upload/v1793269516/best_photo_b0nb64.jpg"
              alt="Big Avatar"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Personality Section */}
      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-snow">
          <User size={24} /> Personality Tone
        </h2>
        <div className="rounded-3xl border border-white/5 bg-deep-blue/40 p-8">
          <p className="text-xl italic leading-relaxed text-gray-300">
            A pluviophile.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-snow">Educational Journey</h2>
        <div className="relative space-y-6 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-[2px] before:bg-snow/10">
          {SCHOOLS.map((school, i) => (
            <motion.div
              key={i}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-snow/30 bg-dark-blue">
                <div className="h-2 w-2 rounded-full bg-snow"></div>
              </div>
              <div className="flex items-start gap-3">
                {school.avatar ? (
                  <img
                    src={school.avatar}
                    alt={`${school.name} avatar`}
                    className="h-11 w-11 shrink-0 rounded-full border border-snow/20 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-snow/20 bg-snow/10 text-xs font-semibold uppercase tracking-[0.2em] text-snow/70">
                    {getSchoolInitials(school.name)}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-snow">{school.name}</h3>
                  <p className="text-sm text-gray-400">{school.classes}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Prizes Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-snow">Achievements & Prizes</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PRIZES.map((prize, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-deep-blue/40 transition-colors hover:border-snow/20"
            >
              <div className={`relative z-10 p-5 ${prize.avatarHref ? "pr-32" : ""}`}>
                <div className="font-bold text-snow">{prize.name}</div>
                <div className="mt-1 text-sm text-gray-400">{prize.contest}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-snow/40">
                  {prize.date}
                </div>
              </div>

              {prize.avatarHref ? (
                <div className="absolute inset-y-0 right-0 w-28">
                  <div className="absolute inset-y-0 left-0 z-10 w-16" />
                  <img
                    src={prize.avatarHref}
                    alt={`${prize.name} achievement`}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-snow">Technical Arsenal</h2>
        <div className="flex flex-wrap gap-4">
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="min-w-[250px] flex-1 rounded-3xl border border-white/5 bg-deep-blue/60 p-6"
            >
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-snow/60">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span
                    key={j}
                    className="rounded-full border border-snow/10 bg-snow/5 px-3 py-1 text-sm text-snow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-snow">Favorite Quotes</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {QUOTES.map((quote, i) => (
            <div
              key={i}
              className="rounded-r-2xl border-l-4 border-snow bg-deep-blue/40 p-6 italic text-gray-300"
            >
              "{quote}"
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
