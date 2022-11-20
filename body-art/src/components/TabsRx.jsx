import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import { color } from "../assets/colors";

export const Tabs = ({ pageDefault, children, width, height }) => {
  const [index, setIndex] = useState(pageDefault);
  const [itemQtd, setItemQtd] = useState(
    document.querySelectorAll(".class-tabs-item").length
  );

  useEffect(() => {
    setItemQtd(document.querySelectorAll(".class-tabs-item").length);

    document.querySelectorAll(".class-tabs-item").forEach((element, indice) => {
      if (element.id != index) {
        element.style.borderBottom = `0.5px solid ${color.blackOpacityTwenty}`;
        element.style.color = "#949494";
      }

      element.onclick = function () {
        setIndex(element.id);
      };
    });

    document
      .querySelectorAll(".class-tabs-content")
      .forEach((element, indice) => {
        // console.log(element.id);
        // console.log("pageDef", pageDefault);
        if (element.id != index) {
          element.style.display = "none";
        }
      });
  }, [index, itemQtd, document.querySelectorAll(".class-tabs-content")]);

  const StyledTabs = styled.div`
    display: flex;
    flex-direction: column;
    width: ${width ? width : null};
    height: ${height ? height : null};
  `;

  return <StyledTabs>{children}</StyledTabs>;
};

export const TabsList = ({ gap, children }) => {
  const StyledTabsList = styled.div`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: flex;
    justify-content: space-around;
    gap: ${gap ? gap : null};
    flex-shrink: 0px;
    background-color: white;
    border-bottom: 0.5px solid ${color.blackOpacityFifty};
  `;
  return <StyledTabsList>{children}</StyledTabsList>;
};

export const TabsItem = ({ children, page }) => {
  const StyledTabsItem = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-shrink: 0px;
    padding: 10px 25px;
    border-bottom: 2.5px solid ${color.bluePrimary};
    color: ${color.bluePrimary};
    margin-bottom: -1px;
    user-select: none;
    font-weight: 500;
    font-size: 0.9rem;
  `;
  return (
    <StyledTabsItem id={page} className="class-tabs-item">
      {children}
    </StyledTabsItem>
  );
};

export const TabsContent = ({ children, page }) => {
  const StyledTabsContent = styled.div`
    padding: 20px;
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    outline: none;
  `;
  return (
    <StyledTabsContent id={page} className="class-tabs-content">
      {children}
    </StyledTabsContent>
  );
};
