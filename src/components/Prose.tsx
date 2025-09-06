type Props = React.PropsWithChildren<{ className?: string }>;

export default function Prose({ children, className = "" }: Props) {
  return (
    <div
      className={[
        "prose max-w-[70ch]",
        "prose-headings:font-display",
        "prose-a:text-brand-primary",
        "prose-hr:border-border",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
