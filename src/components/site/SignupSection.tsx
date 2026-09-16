import { useState } from "react";

export function SignupSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="signup" className="px-5 py-16">
      <div className="mx-auto max-w-4xl rounded-4xl border border-border bg-card px-8 py-12 shadow-card sm:px-14">
        <div className="text-center">
          <p className="eyebrow">Stay in-the-know</p>
          <h2 className="mt-3 text-3xl text-teal-deep sm:text-4xl">
            Want to stay up-to-date on the latest 340B news?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Join the list. We&apos;ll send the reporting and action alerts that matter.
          </p>
        </div>

        <form
          className="mt-10 grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <Field label="First Name" name="firstName" required />
          <Field label="Last Name" name="lastName" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Zip Code" name="zip" />
          <div className="sm:col-span-2 sm:justify-self-center">
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-accent px-10 py-3.5 font-display text-sm font-bold tracking-[0.14em] text-accent-foreground uppercase transition-transform hover:scale-[1.03] sm:w-auto"
            >
              {submitted ? "Thank you!" : "Sign Me Up"}
            </button>
          </div>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-sm text-primary">
            You&apos;re on the list — watch your inbox for 340B updates.
          </p>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-sm font-semibold text-secondary-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
      />
    </label>
  );
}
