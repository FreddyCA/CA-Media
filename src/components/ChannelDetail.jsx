import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Box } from "@mui/system";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight={"100vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(27,31,87,1) 10%, rgba(30,30,129,1) 50%, rgba(27,31,87,1) 90%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetail={channelDetail}
          marginTopChannelDetail="-120px"
        ></ChannelCard>
      </Box>
      <Box display={"flex"} p={2} margin={"50px 0"}>
        <Box sx={{ margin: { sm: "0 75px" } }} >
          <Videos videos={videos}></Videos>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
