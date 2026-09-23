export function StatCallout({ value, label }: { value: string; label: string }) {
  return (
    <div className="mx-auto max-w-2xl rounded-4xl bg-secondary/60 px-8 py-10 text-center">
      <p className="font-display text-6xl font-bold text-accent sm:text-7xl">{value}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}
