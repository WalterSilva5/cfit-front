import PageHeader from "./components/PageHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import { serverAddress } from "@/util/Settings";
import VideoPlayer from "./components/PageReproduzirPlaylist/VideoPlayer";
const PageReproduzirPlaylist = () => {
  const token = localStorage.getItem("authToken");
  axios.defaults.headers.common = { Authorization: "Bearer " + token };

  const params = useParams();
  const [aulas, setAulas] = React.useState([]);
  const [videoUrl, setVideoUrl] = React.useState("");
  const [isCarregando, setCarregando] = React.useState(true);
  const [playlistTitulo, setPlaylistTitulo] = React.useState("");

  const getAulas = () => {
    axios
      .get(
        `${serverAddress}video/videos_por_playlist/?playlist_id=${params.id}`
      )
      .then((response) => {
        if (!response.data || response.data.length === 0) {
          setAulas(
            <tr>
              <td>ESSA PLAYLIST NÃO TEM AULAS</td>
              <td></td>
            </tr>
          );
        } else {
          setAulas(
            response.data.map((video) => (
              <div key={video.pk} className="d-flex border border-danger my-1 p-2 rounded">
                <button className="btn btn-primary"
                  onClick={() => {
                    setVideoUrl(video.url);
                  }}>
                  REPRODUZIR
                </button>
                <h4 className="d-block mx-4">{video.titulo}</h4>
              </div>
            ))
          );
        }
        setCarregando(false);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const getPlaylist = () => {
    axios
      .get(`${serverAddress}playlist/${params.id}`)
      .then((response) => {
        setPlaylistTitulo(response.data.titulo);
      })
    };


  React.useEffect(() => {
    if (params.id) {
      getAulas();
      getPlaylist();
    }
  }, [params]);

  return (
    <div>
      <PageHeader />
      <dir className="col-12 p-1 d-flex justify-content-center">
        <div
          className="col-sm-12 col-md-10 border border-danger rounded m-0 p-md-2"
          style={{ minHeight: "70vh" }}
        >
          <h1 className="wsi-bg-dark text-center my-2">
            {playlistTitulo}
          </h1>
          <div
            className="border border-danger rounded my-2"
            style={{ minHeight: "40vh" }}
          >
            <VideoPlayer videoUrl={videoUrl}/>
          </div>
          <div className="col-12 border border-danger p-2 mt-2 mb-4 rounded">
            {aulas}
          </div>
        </div>
      </dir>
    </div>
  );
};

export default PageReproduzirPlaylist;