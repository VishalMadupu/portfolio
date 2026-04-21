type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) => {
  const aligned = align === "center";

  return (
    <div className={aligned ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default SectionIntro;
