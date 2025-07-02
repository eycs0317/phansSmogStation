// styles
import '@/ui/molecules/navigation/navigation.css';

type NavigationProps = {
  display?: string | null;
  type?: string | null;
  align?: string | null;
  children?: React.ReactNode;
};

export default function Navigation({
  display = null,
  type = null,
  align = null,
  children,
}: NavigationProps) {
  const classNames = ['nav'];
  if (display) classNames.push(display);
  if (type) classNames.push(type);
  if (align) classNames.push(align);

  return <nav className={classNames.join(' ')}>{children}</nav>;
}
