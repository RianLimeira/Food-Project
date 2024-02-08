import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

type BuuttonTextProps = {
  children: ReactNode;
};

type BuuttonIconProps = {
  children: ReactNode;
};

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className="bg-lime-400 rounded-md items-center justify-center flex-row"
      activeOpacity={0.6}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtonText({ children, ...rest }: ButtonProps) {
  return (
    <Text className="text-black font-heading text-base mx-2">{children}</Text>
  );
}

function ButtonIcon({ children, ...rest }: ButtonProps) {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
