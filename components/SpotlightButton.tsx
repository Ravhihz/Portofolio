"use client";

import { useRef, useState, type ReactNode } from "react";

interface SpotlightButtonProps {
    href: string;
    children: ReactNode;
    download?: boolean;
    target?: string;
    rel?: string;
}

export default function SpotlightButton({
    href,
    children,
    download,
    target,
    rel,
}: SpotlightButtonProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (

        <a ref={ref}
            href={href}
            download={download}
            target={target}
            rel={rel}
            onMouseMove={handleMove}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]"
        >
            <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(160px circle at ${pos.x}px ${pos.y}px, rgba(242,184,75,0.18), transparent 70%)`,
                }}
            />
            <span className="relative flex items-center gap-2.5">{children}</span>
        </a>
    );
}