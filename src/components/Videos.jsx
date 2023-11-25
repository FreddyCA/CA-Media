import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  console.log(videos);
  const channelsOnly = videos.filter((item) => item.id.channelId);
  console.log(channelsOnly);
  const videosOnly = videos.filter((item) => item.id.videoId);
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {channelsOnly.map((item, idx) => (
        <Box
          key={`channel-${idx}`}
          sx={{
            margin: { xs: "0 auto" },
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
};

export default Videos;
