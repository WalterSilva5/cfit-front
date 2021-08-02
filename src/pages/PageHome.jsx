/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import PageHeader from './components/PageHeader';
import PlaylistCard from './components/PageHome/PlaylistCard';
import BannerAssine from './components/PageHome/BannerAssine';
import { serverAddress } from '@/util/Settings';
import axios from 'axios';
import { logoutUser } from "@/util/UserUtil";

const PageHome = () => {
  const token = localStorage.getItem('authToken')
  axios.defaults.headers.common = { Authorization: "Bearer " + token };
  const [playlists, setplaylists] = React.useState([]);
  const [isCarregando, setCarregando] = React.useState(true);
  const [aulaAtual , setAulaAtual] = React.useState("");
  const [assinante , setAssinante] = React.useState(false);
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist/`, { crossDomain: true}).then((response) => {
      setAssinante(true);
      setplaylists(response.data.playlist.map((res) => (
          <PlaylistCard
            key={res.pk}
            titulo={res.titulo}
            descricao={res.descricao}
            id={res.pk}
            imagem={res.imagem}
          />
      )));
      setCarregando(false);
    }).catch((err)=>{
      if(err.response.status === 401){
        logoutUser();
      }else{
        setCarregando(false);
      }
    });
  };

  React.useEffect(() => {
    getPlaylists();
  }, []);
  if (isCarregando) {
    return <div><h1>Carregando...</h1></div>;
  }
  return (
    <div>
      <PageHeader />
      <h1 className="text-center display-1">AULAS</h1>
      <div className="row p-0 d-flex justify-content-center container-fluid">
      { assinante ? playlists : <BannerAssine/>}
      </div>
        
      </div>
  );
};

export default PageHome;
