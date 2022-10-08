import React from "react";

type BorderColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet"
  | "black";

type BorderVariant =
  | "solid"
  | "dotted"
  | "dashed"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "none"
  | "hidden";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicProps<C, Props> & { ref?: PolymorphicRef<C> };

type BorderProps<C extends React.ElementType> = PolymorphicPropsWithRef<
  C,
  { color?: BorderColor; variant?: BorderVariant; width?: number }
>;

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type BorderComponent = <C extends React.ElementType = "div">(
  props: BorderProps<C>
) => React.ReactElement | null;

export const Border: BorderComponent = React.forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      children,
      width = 1,
      color = "black",
      variant = "solid",
      ...restProps
    }: PolymorphicProps<C, BorderProps<C>>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";

    const borderStyle = `${width}px ${variant} ${color}`;

    return (
      <Component {...restProps} ref={ref} style={{ border: borderStyle }}>
        {children}
      </Component>
    );
  }
);
