import clsx from "clsx";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={(clsx(className), "max-w-4xl prose prose-w-full")} {...props} />
  );
}
