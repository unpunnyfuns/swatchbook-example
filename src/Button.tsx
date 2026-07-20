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
        border: 'none',
        padding: '8px 16px',
        font: 'inherit',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}
