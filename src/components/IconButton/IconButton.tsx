import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconButtonProps {
  icon: IconDefinition;
  text: string;
  classNames?: string;
  onClick: () => void;
  iconsSize?: SizeProp
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text, classNames = '', onClick, iconsSize='sm' }) => {
  return (
    <button
      className={classNames}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FontAwesomeIcon icon={icon} size={iconsSize} />
      <span>{text}</span>
    </button>
  );
};

export default IconButton;
