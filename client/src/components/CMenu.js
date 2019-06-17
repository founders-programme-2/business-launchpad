import React from 'react';
// import { Link } from 'react-router-dom';
import {
  MenuContainer,
  MenuLine,
  MenuBarText,
  // Close,
  // CloseText,
  // MenuWrapper,
  // MenuElement,
  // MenuText,
  // CloseContainer,
} from './CMenu.style';
import { Line, Logo } from './CHeader.style';
import logo from '../assets/logoWhite.svg';

export const CMenu = props => (
  <MenuContainer
    onClick={() => {
      console.log('hi');
    }}
  >
    <MenuLine />
    <MenuLine />
    <MenuLine />
    <MenuBarText>menu</MenuBarText>
  </MenuContainer>
);
//  export class MenuList extends Component {
//   render() {
//     return (
//       <Fragment>
//         <MenuWrapper >
//           <CloseContainer>
//     <Close/>
//     <CloseText>close</CloseText>
//     </MenuWrapper >
//           <Line/>
//         <MenuElement>
//           <MenuText>DASHBOARD</MenuText>
//           </MenuElement>
//           <MenuElement>
//             <MenuText>GOALS</MenuText>
//             </MenuElement>
//             <MenuElement>
//               <MenuText>RESOURCES</MenuText>
//               </MenuElement>
//               <MenuElement>
//                 <MenuText>CONTACT</MenuText>
//                 </MenuElement>
//                 <MenuElement>
//                   <MenuText>LOG OUT</MenuText>
//                   </MenuElement>
//                   <Logo src={logo} alt="Launchpad logo" />
//             </MenuContainer>
//       </Fragment>
//     );
//   }
// }
