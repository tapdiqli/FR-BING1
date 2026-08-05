"use client";

import { useState } from "react";

const subjects = [
  "Une question générale",
  "Signaler une information inexacte",
  "Proposer une plateforme à analyser",
  "Demande presse ou partenariat",
  "Autre sujet",
];

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-mist-200 bg-mist-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-700/40 focus:border-plum-400 focus:bg-white focus:ring-2 focus:ring-plum-200";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-plum-200 bg-plum-50 p-8 text-center">
        <h2 className="font-display text-lg font-bold text-ink-900">
          Message bien enregistré
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-700/75">
          Merci pour votre envoi. Nous revenons généralement vers vous sous deux
          à trois jours ouvrés.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-bold text-plum-600 underline underline-offset-4 hover:text-plum-800"
        >
          Rédiger un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="rounded-2xl border border-mist-200 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700/70"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700/70"
          >
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.fr"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="subject"
          className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700/70"
        >
          Objet
        </label>
        <select id="subject" name="subject" className={fieldClass}>
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700/70"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Décrivez votre demande le plus précisément possible."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-ink-700/70">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-mist-200 accent-[var(--color-plum-600)]"
        />
        <span>
          Je confirme avoir 18 ans ou plus et accepter que mes informations
          servent uniquement au traitement de cette demande.
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-10"
      >
        Envoyer le message
      </button>
    </form>
  );
}
