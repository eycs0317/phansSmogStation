type BaseAttributes = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export function baseAttributes<
  P extends BaseAttributes = BaseAttributes
>(
  Component: React.ElementType
) {
  return function WrappedComponent(props: P) {
    const {id, className, children, ...rest} = props;
    return (
      <Component id={id} className={className} {...rest}>
        {children}
      </Component>
    );
  };
}
