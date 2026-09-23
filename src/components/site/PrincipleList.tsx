import { principleGroups } from "@/data/principles";

export function PrincipleList() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {principleGroups.map((group) => (
        <div key={group.heading}>
          <h2 className="text-3xl text-teal-deep">{group.heading}</h2>
          <ul className="mt-6 space-y-6">
            {group.principles.map((principle) => (
              <li key={principle.number} className="flex gap-5 rounded-3xl bg-card p-6 shadow-card">
                <span className="font-display text-2xl font-bold text-accent">
                  {principle.number}
                </span>
                <p className="text-base leading-relaxed text-muted-foreground">{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
