import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import transportImg from "images/transport.jpg"

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Transport
        </Typography>
        <Typography color={medium}>View</Typography>
      </FlexBetween>
      <img
        width="60%"
        height="200"
        alt="advert"
        src={transportImg}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      {/* <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween> */}
      <Typography color={medium} m="0.5rem 0">
      Need a lift? Check out our brand new transportation feature.it's here to make your life a whole lot easier!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
