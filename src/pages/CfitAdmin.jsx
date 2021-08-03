import {
  Route, Switch, Redirect, NavLink,
} from 'react-router-dom';
import videoIcon from '@/assets/icons/video.png';
import userIcon from '@/assets/icons/user.png';
import msgIcon from '@/assets/icons/mail.png';
import playlistIcon from '@/assets/icons/playlist.png';
import muscleIcon from '@/assets/icons/muscle.png';
import configIcon from '@/assets/icons/config.png';
import PageHeader from './components/PageHeader';
import CfitAdminAddAula from './components/CfitAdmin/CfitAdminAddAula';
import CfitAdminAjustes from './components/CfitAdmin/CfitAdminAjustes';
import CfitAdminMensagens from './components/CfitAdmin/CfitAdminMensagens';
import CfitAdminPlaylists from './components/CfitAdmin/CfitAdminPlaylists';
import CfitAdminUsuarios from './components/CfitAdmin/CfitAdminUsuarios';
import CfitAdminTreinos from './components/CfitAdmin/CfitAdminTreinos';

const CfitAdmin = () => (
  <div>
    <PageHeader />
    <div className="row container-fluid m-0 p-1" style={{ minHeight: '70vh' }}>
      <div className="col-md-3 my-2 border border-secondary rounded wsi-container-dark wsi-shadow-container p-0">
        <div className="py-2">
          <NavLink
            className="col-12 my-1 wsi-btn-panel"
            to="/cfit_admin/playlists"
          >
            <img src={playlistIcon} alt="Video" className="icon-panel" />
            PLAYLISTS
          </NavLink>
          <NavLink
            className="col-12 my-1 wsi-btn-panel"
            to="/cfit_admin/usuarios"
          >
            <img src={userIcon} alt="Usuários" className="icon-panel" />
            USUARIOS
          </NavLink>
          <NavLink
            className="col-12 my-1 wsi-btn-panel"
            to="/cfit_admin/mensagens"
          >
            <img src={msgIcon} alt="Mensagens" className="icon-panel" />
            MENSAGENS
          </NavLink>
          <NavLink
            className="col-12 my-1 wsi-btn-panel"
            to="/cfit_admin/add_aula"
          >
            <img src={videoIcon} alt="Aula" className="icon-panel" />
            AULAS
          </NavLink>
          <NavLink
            className="col-12 my-1 wsi-btn-panel"
            to="/cfit_admin/treinos"
          >
            <img src={muscleIcon} alt="Treinos" className="icon-panel" />
            TREINOS
          </NavLink>
          <NavLink
            className="col-12 my-1 wsi-btn-panel"
            to="/cfit_admin/ajustes"
          >
            <img src={configIcon} alt="Ajustes" className="icon-panel" />
            AJUSTES
          </NavLink>
        </div>
      </div>
      <div className="my-2 col-md-9  px-md-2 px-0 px-0">
        <div
          className="border rounded wsi-container-dark p-2  wsi-shadow-container border-secondary"
          style={{ minHeight: '70vh' }}
        >
          <Switch>
            <Route path="/cfit_admin/add_aula/:id?">
              <CfitAdminAddAula />
            </Route>
            <Route path="/cfit_admin/ajustes">
              <CfitAdminAjustes />
            </Route>
            <Route path="/cfit_admin/mensagens">
              <CfitAdminMensagens />
            </Route>
            <Route path="/cfit_admin/playlists">
              <CfitAdminPlaylists />
            </Route>
            <Route path="/cfit_admin/treinos">
              <CfitAdminTreinos />
            </Route>
            <Route path="/cfit_admin/usuarios">
              <CfitAdminUsuarios />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </div>
);

export default CfitAdmin;
