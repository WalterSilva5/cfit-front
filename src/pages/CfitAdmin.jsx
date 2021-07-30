import PageHeader from './components/PageHeader';
import { Route, Switch, Redirect, NavLink} from 'react-router-dom';
import CfitAdminAddAula from './components/CfitAdmin/CfitAdminAddAula';
import CfitAdminAjustes from './components/CfitAdmin/CfitAdminAjustes';
import CfitAdminMensagens from './components/CfitAdmin/CfitAdminMensagens';
import CfitAdminPlaylists from './components/CfitAdmin/CfitAdminPlaylists';
import CfitAdminUsuarios from './components/CfitAdmin/CfitAdminUsuarios';


const CfitAdmin = () => (
  <div>
    <PageHeader />
    <div className="row container-fluid" style={{minHeight: '70vh' }}>
        <div className="col-md-3 my-2 border border-danger rounded wsi-container-dark">
        <div className="py-2">
            <NavLink className="btn col-12 my-1 wsi-btn-admin" to="/cfit_admin/playlists">PLAYLISTS</NavLink>
            <NavLink className="btn col-12 my-1 wsi-btn-admin" to="/cfit_admin/usuarios">USUARIOS</NavLink>
            <NavLink className="btn col-12 my-1 wsi-btn-admin" to="/cfit_admin/mensagens">MENSAGENS</NavLink>
            <NavLink className="btn col-12 my-1 wsi-btn-admin" to="/cfit_admin/add_aula">ADD AULA</NavLink>
            <NavLink className="btn col-12 my-1 wsi-btn-admin" to="/cfit_admin/ajustes">AJUSTES</NavLink>
        </div>
        </div>
        <div className="my-2 col-md-9  px-md-2 px-0">
            <div className="border border-danger rounded wsi-container-dark p-2"  style={{ minHeight: '70vh' }}>
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
