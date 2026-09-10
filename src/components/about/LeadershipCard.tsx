import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface Member {
  name: string;
  role: string;
}

interface Photo {
  src: string;
}

function LeadershipCard({
  member,
  photo,
  index,
}: {
  member: Member;
  photo: Photo;
  index: number;
}) {
  return (
    <article className="group relative mx-auto w-full max-w-[330px] pb-9">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-lg bg-accent/5 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />
      <div className="relative">
        <div className="relative h-[400px] overflow-hidden rounded-lg border border-accent/15 bg-surface-soft transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_35px_90px_-30px_rgba(13,159,138,0.5)] sm:h-[400px]">
          <Image
            src={photo.src}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(min-width: 768px) 350px, 90vw"
            className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/25 opacity-70" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent opacity-60" />

          <div className="absolute left-5 top-5">
            <div className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/25 bg-ink/15 px-3 text-[10px] font-bold tracking-[0.18em] text-white backdrop-blur-md transition-all duration-500 group-hover:border-accent-bright/50 group-hover:bg-accent/20">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="absolute right-5 top-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-ink shadow-[0_10px_30px_rgba(7,17,31,0.5)] backdrop-blur-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <FiArrowUpRight className="h-[18px] w-[18px] transition-transform duration-500 group-hover:rotate-6" />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 h-28 w-3/4 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        <div className="absolute -bottom-5 left-5 right-5 z-20">
          <div className="relative overflow-hidden rounded-lg border border-white/80 bg-white/90 px-5 py-5 shadow-[0_20px_50px_-25px_rgba(7,17,31,0.4)] backdrop-blur-xl transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 group-hover:shadow-[0_28px_65px_-25px_rgba(7,17,31,0.42)] sm:px-6 sm:py-5">

            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg font-bold leading-tight tracking-[-0.035em] text-ink sm:text-lg">
                  {member.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-lg bg-accent shadow-[0_0_10px_var(--glow)]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-accent sm:text-[11px]">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/15 bg-accent/5 text-[9px] font-bold tracking-[0.12em] text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent-deep via-accent to-accent-bright transition-transform duration-700 ease-out group-hover:scale-x-100" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default LeadershipCard;