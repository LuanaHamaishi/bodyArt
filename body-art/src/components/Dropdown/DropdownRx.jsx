import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./styles.css";

const DropdownRx = ({
  icon,
  children,
  backgroundColor,
  borderRadius,
  gap,
  display,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          {icon ? icon : null}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          style={{
            backgroundColor: `${backgroundColor}`,
            borderRadius: `${borderRadius}`,
            gap: `${gap}`,
            display: `${display}`,
          }}
          className="DropdownMenuContent"
          sideOffset={5}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownRx;
