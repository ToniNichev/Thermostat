import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';
/* Components */
const Header = Loadable({
  loader: () => import ('../../../components/Header'),
  loading: Loading
});
const Home = Loadable({
  loader: () => import ('../../../components/Home'),
  loading: Loading
});
const About = Loadable({
  loader: () => import ('../../../components/About'),
  loading: Loading
});
const Setup = Loadable({
  loader: () => import ('../../../components/Setup'),
  loading: Loading
});
export default {
  Home,
  About,
  Setup,
  Header,
}
