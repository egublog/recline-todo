import { useColorModeValue } from "@chakra-ui/react";

export const useStyles = () => {
  const buttonScheme = useColorModeValue("teal", "purple");
  const headerBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const dividerColor = useColorModeValue(`${buttonScheme}.100`, `${buttonScheme}.700`);

  const baseHeader = {
    mb: 4,
    p: 4,
    borderRadius: "lg",
    bg: headerBg,
    boxShadow: "sm",
    sx: {
      position: "relative",
      overflow: "hidden",
      _before: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
      }
    }
  };

  return {
    sectionHeader: {
      ...baseHeader,
      sx: {
        ...baseHeader.sx,
        _before: {
          ...baseHeader.sx._before,
          bgGradient: `linear(to-r, ${buttonScheme}.400, ${buttonScheme}.600)`
        }
      }
    },

    completedSectionHeader: {
      ...baseHeader,
      sx: {
        ...baseHeader.sx,
        _before: {
          ...baseHeader.sx._before,
          bgGradient: `linear(to-r, green.400, ${buttonScheme}.400)`
        }
      }
    },

    sectionTitle: {
      fontSize: "lg",
      fontWeight: "bold",
      bgGradient: `linear(to-r, ${buttonScheme}.500, ${buttonScheme}.700)`,
      bgClip: "text"
    },

    completedSectionTitle: {
      fontSize: "lg",
      fontWeight: "bold",
      bgGradient: `linear(to-r, green.500, ${buttonScheme}.500)`,
      bgClip: "text"
    },

    countText: {
      fontSize: "sm",
      color: textColor
    },

    divider: {
      borderColor: dividerColor
    },

    emptyState: {
      p: 8,
      textAlign: "center",
      color: textColor,
      bg: headerBg,
      borderRadius: "lg",
      boxShadow: "sm"
    }
  };
};