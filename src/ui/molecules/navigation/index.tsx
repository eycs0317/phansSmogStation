// styles
import '@/ui/molecules/navigation/styles.css';

// type
type NavigationProps = {
  display?: 'horizontal' | null;
  type?: 'full' | 'flyout' | null;
  align?: 'right' | null;
  children?: React.ReactNode;
  id?: string;
};

export default function Navigation({
  display = null,
  type = null,
  align = null,
  children,
  id,
}: NavigationProps) {
  const classes = ['nav'];
  if (display) classes.push(display);
  if (type) classes.push(type);
  if (align) classes.push(align);

  return <nav className={classes.join(' ')} id={id}>{children}</nav>;
}
