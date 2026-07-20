import type { ReactElement } from 'react';
import { useToken } from '@unpunnyfuns/swatchbook-addon/hooks';

export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps): ReactElement {
  const bg = useToken('color.accent.bg');
  const fg = useToken('color.accent.fg');
  const radius = useToken('dimension.radius.sm');
  return (
    <button
      type="button"
      data-testid="example-button"
      data-bg-var={bg.cssVar}
      style={{
        background: bg.cssVar,
        color: fg.cssVar,
        borderRadius: radius.cssVar,
        // Typography is a composite token, so it has no single CSS variable.
        // Reference its per-property variables directly.
        fontFamily: 'var(--sb-typography-body-font-family)',
        fontSize: 'var(--sb-typography-body-font-size)',
        fontWeight: 'var(--sb-typography-body-font-weight)',
        border: 'none',
        padding: '8px 16px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}
