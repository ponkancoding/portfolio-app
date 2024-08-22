import layoutStyles from '../styles/layout.module.css';
import '../index.css';

function Layout({ children }) {
  return <div className={layoutStyles.layout}>{children}</div>;
}

export default Layout;
