import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

type Contact = {
  label: string;
  href: string;
  icon?: IconType;
  iconClassName?: string;
  imageSrc?: string;
  badge?: string;
  badgeClassName?: string;
};

export default function Footer() {
  const contacts: Contact[] = [
    {
      label: "Spotify",
      href: "https://open.spotify.com/user/3164ywju2gbwyop7mkoobpx55umm",
      icon: FaSpotify,
      iconClassName: "text-[#1ed760]",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/pham.quang.trung.494375/",
      icon: FaFacebook,
      iconClassName: "text-[#1877f2]",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/qthsgs.azay/",
      icon: FaInstagram,
      iconClassName: "text-[#f77737]",
    },
    {
      label: "Threads",
      href: "https://www.threads.com/@qthsgs.azay",
      icon: FaThreads,
      iconClassName: "text-white",
    },
    {
      label: "Locket",
      href: "https://locket.cam/azaylibelz_trung",
      imageSrc: "https://play-lh.googleusercontent.com/eRZLg00mAQGayCrFjDBklPIpW3qFHcmUs8PUQA4z7hVe-cDKMcRqecVHONAIexJGJZM",
      badge: "LK",
      badgeClassName: "bg-[#facc15] text-black",
    },
    {
      label: "NGL",
      href: "https://ngl.link/azay_tr",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrYmZcDznZ7kcsKV01d_OxRFgrkBLEE8t5g&s",
      badge: "NGL",
      badgeClassName: "bg-linear-to-br from-[#ff8a00] to-[#ff2d55] text-white",
    },
    {
      label: "Github",
      href: "https://github.com/CodingchallengeJS",
      icon: FaGithub,
      iconClassName: "text-white",
    },
    {
      label: "Discord",
      href: "https://discord.com/users/855783911841071115",
      icon: FaDiscord,
      iconClassName: "text-[#5865f2]",
    },
  ];

  return (
    <footer className="mx-auto w-full max-w-4xl px-4 pb-12">
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-[3rem] border border-white/10 bg-deep-blue/50 p-4 shadow-xl">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          const badgeWidthClass =
            contact.badge && contact.badge.length > 2 ? "px-2.5" : "w-8";

          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111a2d] transition-all hover:-translate-y-0.5 hover:border-snow/25 hover:bg-[#16233c]"
              title={contact.label}
              aria-label={contact.label}
            >
              {contact.imageSrc ? (
                <img
                  src={contact.imageSrc}
                  alt={`${contact.label} logo`}
                  className="h-8 w-8 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : Icon ? (
                <Icon
                  className={`h-8 w-8 transition-transform group-hover:scale-110 ${contact.iconClassName ?? "text-gray-300"}`}
                />
              ) : (
                <span
                  className={`flex h-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold uppercase tracking-[0.14em] ${badgeWidthClass} ${contact.badgeClassName}`}
                >
                  {contact.badge}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
