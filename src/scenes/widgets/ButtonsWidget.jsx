import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import Icon1 from "images/campus feed.png";
import Icon2 from "images/study groups.png";
import Icon3 from "images/mental health.png";
import Icon4 from "images/news.png";

import { Link } from 'react-router-dom';

const ButtonsWidget = () => {
  const { palette } = useTheme();
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <div style={{ marginRight: "0.5rem" }}>
            <Link to="/home">
          <img
            src={Icon1}
            alt="Campus feed"
            style={{ width: "100%", height: 100, borderRadius: "0.75rem", marginBottom: "0.75rem" }}
          />
          </Link>
          <Typography color={medium}>Campus feed</Typography>
        </div>
        <div style={{ marginRight: "0.5rem" }}>
            <Link to="/home">
          <img
            src={Icon2}
            alt="Study Groups"
            style={{ width: "100%", height: 100, borderRadius: "0.75rem", marginBottom: "0.75rem" }}
          />
          </Link>
          <Typography color={medium}>Study Groups</Typography>
        </div>
      </FlexBetween>

      <FlexBetween>
        <div style={{ marginRight: "0.5rem" }}>
            <Link to="/home">
          <img
            src={Icon3}
            alt="Mental Health"
            style={{ width: "100%", height: 100, borderRadius: "0.75rem", marginBottom: "0.75rem" }}
          />
          </Link>
          <Typography color={medium}>Mental Health</Typography>
        </div>
        <div>
            <Link to="/home">
          <img
            src={Icon4}
            alt="News"
            style={{ width: "100%", height: 100, borderRadius: "0.75rem", marginBottom: "0.75rem" }}
          />
          </Link>
          <Typography color={medium}>News</Typography>
        </div>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default ButtonsWidget;
