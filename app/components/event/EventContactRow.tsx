//app/components/event/EventContactRow.tsx
"use client";

import { Globe, Facebook, Mail } from "lucide-react";

type Props = {
  website?: string | null;
  facebook?: string | null;
  email?: string | null;
};

export default function EventContactRow({
  website,
  facebook,
  email,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-600 transition"
        >
          <Globe size={16} />
          <span>Website</span>
        </a>
      )}

      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-600 transition"
        >
          <Facebook size={16} />
          <span>Facebook</span>
        </a>
      )}

      {email && (
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 hover:text-purple-600 transition"
        >
          <Mail size={16} />
          <span>Email</span>
        </a>
      )}
    </div>
  );
}