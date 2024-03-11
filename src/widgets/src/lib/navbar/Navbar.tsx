import { Layout, Menu } from 'antd';
import { LangSwitcher } from '../widgets';
import { Link } from 'react-router-dom';
import { AppRoutes } from '@utils/types';
import { useTranslation } from 'react-i18next';


const { Header } = Layout;
/* eslint-disable-next-line */
export interface NavbarProps {}


export const Navbar=(props: NavbarProps)=> {
  const {t} = useTranslation();
  const items = Object.values(AppRoutes).map((path) => ({
    key: path,
    label: <Link to={`/${path}`}>{t(path)}</Link>,
  }));

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
    <div className="demo-logo"/>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
    <LangSwitcher/>
  </Header>
  );
}

