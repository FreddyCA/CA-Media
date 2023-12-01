import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction, margin }) => {
  if(!videos?.length) return 'Loading...'
  const channelsOnly = videos.filter((item) => item.id.channelId);
  const videosOnly = videos.filter((item) => item.id.videoId);
  
  return (
    <Stack
      display={"flex"}
      flexDirection={direction ? { xs: "row", lg: "column" } : "row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
    >
      {channelsOnly.map((item, idx) => (
        <Box
          key={`channel-${idx}`}
          sx={{
            margin: { xs: margin || "0 auto" },
          }}
        >
          <ChannelCard channelDetail={item} />
        </Box>
      ))}

      {videosOnly.map((item, idx) => (
        <Box
          key={`video-${idx}`}
          sx={{
            margin: { xs: "0 auto" },
          }}
        >
          <VideoCard video={item} />
        </Box>
      ))}
    </Stack>
  );
};

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
  direction: PropTypes.string,
  margin: PropTypes.string,
};

export default Videos;
