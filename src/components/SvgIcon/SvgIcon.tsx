// SvgIcon.tsx
import React from "react";
import { View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

type SvgIconProps = SvgProps & {
  /** The imported SVG component, e.g. <BackIcon /> */
  children: React.ReactElement<SvgProps>;

  /** Optional container styling (margin, alignment, etc.) */
  containerStyle?: ViewStyle;
};

/**
 * SvgIcon — a wrapper for consistent icon rendering.
 *
 * Usage example:
 *   <SvgIcon width={24} height={24} color="blue">
 *     <BackIcon />
 *   </SvgIcon>
 *
 * - You can pass `width`, `height`, `fill`, or `color` props.
 * - The wrapper will inject those into the SVG automatically.
 * - `containerStyle` controls outer layout (not icon size).
 */
const SvgIcon = ({ children, containerStyle, ...props }: SvgIconProps) => {
  // Inject all SVG-related props (like fill, color, width, height) into the child SVG
  const iconWithProps = React.cloneElement(children, {
    ...props,
    fill: props.fill ?? props.color, // ensures both color and fill work
  });

  return <View style={containerStyle}>{iconWithProps}</View>;
};

export default SvgIcon;
