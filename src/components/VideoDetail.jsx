import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box
      minHeight={"80vh"}
      display={"flex"}
      flexDirection={{ xs: "column", lg: "row" }}
      width={"100%"}
      justifyContent={"center"}
    >
      <Stack direction={{ xs: "column", md: "column" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              height="100%"
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color={"#fff"} variant="h5" fontWeight={"bold"} p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              padding={"0 16px"}
              boxSizing={"border-box"}
              sx={{
                color: "#fff",
              }}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography color={"#fff"} variant="subtitle1">
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      ml: "5px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box
        p={2}
        py={{ md: 1, xs: 5 }}
        display={"flex"}
        alignItems={"center"}
      >
        {videos && (
          <Videos videos={videos} direction={"column"} margin={"0"}></Videos>
        )}
      </Box>
    </Box>
  );
};

export default VideoDetail;
