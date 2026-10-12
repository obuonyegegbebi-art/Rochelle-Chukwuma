import Image from "next/image";

type Props = {
  src?: string;
  poster: string;
  alt?: string;
  priority?: boolean;
};

/**
 * Full-bleed background media. Plays a muted, looping video when `src`
 * is set; otherwise shows the poster with a slow cinematic zoom.
 */
export default function Media({ src, poster, alt = "", priority }: Props) {
  return (
    <div className="media" aria-hidden={alt ? undefined : true}>
      {src ? (
        <video autoPlay muted loop playsInline preload="metadata" poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          className="kenburns"
          src={poster}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
        />
      )}
    </div>
  );
}
