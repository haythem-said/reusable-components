import React from "react";

interface CardProps {
  cardTitle: string;
  imageSrc?: string;
  content: string;
  className?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
  width?: string | number; // Allow custom width (e.g., "300px" or "80%")
  maxWidth?: string | number; // Allow overriding max-width
}

const ReusableCard: React.FC<CardProps> = ({
  imageSrc,
  content,
  cardTitle,
  className = "",
  imageAlt = "Card Image",
  footer,
  onClick,
  width = "50%",
  maxWidth = "400px",
}) => {
  return (
    <div
      className={`card-style ${className}`}
      onClick={onClick}
      role="article"
      style={{ width: width, maxWidth: maxWidth }}
    >
      <h1 className="card-title">{cardTitle}</h1>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      )}
      <p className="card-content">{content}</p>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default ReusableCard;
