import { useSelector } from 'react-redux';
import Home from '../../components/Home/Home';

const MainView = () => {

  const user = useSelector((state) => state.user);

  return (
    <>
      {user && <Home />}
    </>
  )
}

export default MainView