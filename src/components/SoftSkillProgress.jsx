import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import Slider, { sliderClasses } from "@mui/material/Slider";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

export default function SoftSkillProgess({ value, isVisible, icon, title }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isVisible) {
      let start = 0;
      const interval = setInterval(() => {
        if (start >= value) {
          clearInterval(interval);
        } else {
          start += 1;
          setProgress(start);
        }
      }, 20); // Adjust speed of the progress increase
    } else {
      setProgress(0); // Reset progress to 0 when not visible
    }
  }, [value, isVisible]);

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        padding: 2,
        maxWidth: "100%",
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
        "& > *:nth-child(1)": {
          marginRight: 2,
        },
        "& > *:nth-child(2)": {
          flex: "auto",
        },
      }}
    >
      <Avatar sx={{backgroundColor: "#4338ca"}}>
        {icon}
      </Avatar>
      <Box>
        <Box
          component="h3"
          sx={{ fontSize: 16, marginBottom: 0, textAlign: "left" }}
        >
          {title}
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Slider
            defaultValue={30}
            value={progress}
            sx={{
              height: 4,
              [`& .${sliderClasses.rail}`]: {
                borderRadius: "10px",
                height: 4,
                backgroundColor: "rgb(202,211,216)",
              },
              [`& .${sliderClasses.track}`]: {
                borderRadius: "10px",
                height: 4,
                backgroundColor: "#6d28d9",
                border: "none",
              },
              [`& .${sliderClasses.thumb}`]: {
                display: "none",
              },
            }}
          />
          <Box
            component="span"
            sx={{
              marginLeft: 1,
              fontSize: 14,
              color: "grey.500",
            }}
          >
            {progress}%
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
