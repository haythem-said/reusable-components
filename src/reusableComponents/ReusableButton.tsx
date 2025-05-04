import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
}

const ReusableButton: React.FC<ButtonProps> = ({
  text,
  variant = "secondary",
  disabled = false,
  icon,
  size = "large",
  onClick,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "btn btn-primary";
      case "secondary":
        return "btn btn-secondary";
      default:
        return "btn";
    }
  };

  // Définition des styles de taille
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "btn-small";
      case "medium":
        return "btn-medium";
      case "large":
        return "btn-large";
      default:
        return "btn-medium";
    }
  };

  // Construction de la classe finale
  const buttonClasses = `
    ${getVariantStyles()}
    ${getSizeStyles()}
  `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span>
        {icon && <span>{icon}</span>}
        {text}
      </span>
    </button>
  );
};

export default ReusableButton;
