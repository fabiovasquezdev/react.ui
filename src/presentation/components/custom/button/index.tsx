import { Button } from "antd";
import { ButtonProps } from "antd/es/button/button";

type Props = ButtonProps & {
  children: React.ReactNode;
  className?: string;
  small?: boolean;
};

export const ButtonV = ({ className, children, small, ...props }: Props) => {
  return (
    <Button
      className={`rounded-full w-full h-10  bg-primary text-white font-semibold ${small && "h-6"} ${className ?? "w-full rounded-full "
        }`}
      {...props}
    >
      {children}
    </Button>
  );
};
