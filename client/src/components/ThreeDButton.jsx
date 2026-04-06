import React from "react";
import styled from "styled-components";

const ThreeDButton = ({
  children,
  href,
  target,
  rel,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  size = "md",
  fullWidth = false,
  active = false,
}) => {
  const isLink = Boolean(href);
  const Tag = isLink ? "a" : "button";

  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Wrapper
      as={Tag}
      href={href}
      target={target}
      rel={rel}
      type={isLink ? undefined : type}
      onClick={handleClick}
      disabled={isLink ? undefined : disabled}
      aria-disabled={disabled}
      className={`${size} ${fullWidth ? "full-width" : ""} ${active ? "active" : ""} ${className}`.trim()}
    >
      <span className="button-top">{children}</span>
      <span className="button-bottom" />
      <span className="button-base" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;
  border-width: 0;
  padding: 0 8px 8px;
  min-width: 7.25rem;
  box-sizing: border-box;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;

  &.sm {
    min-width: 6.25rem;
  }

  &.xs {
    min-width: 4.5rem;
  }

  &.full-width {
    width: 100%;
    min-width: 100%;
  }

  &.pair {
    flex: 1 1 0%;
    width: auto;
    min-width: 0;
  }

  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.75;
  }

  .button-top {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 0.6rem 0.9rem;
    transform: translateY(0);
    text-align: center;
    color: #ede9fe;
    text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    font-size: 0.76rem;
    border-radius: 8px;
    user-select: none;
    transition: transform 0.18s ease;
  }

  &.sm .button-top {
    padding: 0.52rem 0.75rem;
    font-size: 0.68rem;
  }

  &.xs .button-top {
    padding: 0.48rem 0.62rem;
    font-size: 0.64rem;
    font-weight: 600;
  }

  .button-top::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: 8px;
    background-image: radial-gradient(#7c3aed, #4c1d95);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12), 0 1px 2px 1px rgba(0, 0, 0, 0.18);
    transition: transform 0.18s ease, border-radius 0.18s ease, filter 0.18s ease;
  }

  .button-bottom {
    position: absolute;
    z-index: 0;
    bottom: 3px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border-radius: 10px;
    background-color: #3b0764;
    background-image: radial-gradient(12px at 0 0, rgba(255, 255, 255, 0.08), transparent), radial-gradient(12px at 100% 0, rgba(255, 255, 255, 0.08), transparent);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.48), inset 0 -1px 2px rgba(0, 0, 0, 0.42);
    transition: transform 0.18s ease;
  }

  .button-base {
    position: absolute;
    z-index: -1;
    top: 3px;
    left: 0;
    width: 100%;
    height: calc(100% - 3px);
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.28);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.14), inset 0 2px 2px rgba(0, 0, 0, 0.36);
  }

  &:hover .button-top::after {
    filter: brightness(0.94);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 8px rgba(88, 28, 135, 0.22), 0 0 16px rgba(49, 13, 82, 0.18);
  }

  &:active .button-top,
  &.active .button-top {
    transform: translateY(4px);
  }

  &:active .button-bottom,
  &.active .button-bottom {
    transform: translateY(-2px);
  }

  &[aria-disabled="true"]:hover .button-top::after,
  &[aria-disabled="true"]:active .button-top {
    filter: none;
    transform: translateY(0);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12), 0 1px 2px 1px rgba(0, 0, 0, 0.18);
  }
`;

export default ThreeDButton;
