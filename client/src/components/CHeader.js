import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Header, Logo, HeaderWrapper, Line } from './CHeader.style';
import logo from '../assets/logoWhite.svg';
import info from '../assets/info.svg';
import { CMenu } from './CMenu';
import { LANDING_URL, INFO_URL } from '../constants';

class CHeader extends Component {
  state = {

  };

  render() {
const { menu } = this.props;
    return (
      <Header>
        <HeaderWrapper>
          <Link to={LANDING_URL}>
            <Logo src={logo} alt="Launchpad logo" />
          </Link>
          {menu ? (
            <CMenu />
          ) : (
            <Link to={INFO_URL}>
              <Logo src={info} alt="Launchpad logo" primary />
            </Link>
          )}
        </HeaderWrapper>
        <Line />
      </Header>
    );}

};
export default CHeader;
