/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import PageHeader from './components/PageHeader';

const PageHome = (props) => {
  console.log(props);
  const [playlists, setplaylists] = React.useState(props.playlists);
  console.log(playlists);
  return (
    <div>
      <PageHeader />
      <div>
        <h1 className="text-center">PLAYLISTS</h1>
        <div>
          {
            playlists.map((res) => <h1 key={res}>{res}</h1>)
          }
          <h1 />
        </div>
      </div>
    </div>
  );
};

export default PageHome;
