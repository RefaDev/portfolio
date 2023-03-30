import react from 'assets/images/react.svg'
import reduxIco from 'assets/images/redux.svg'
import reduxToolkit from 'assets/images/redux.svg'
import mobx from 'assets/images/mobx.svg'
import sass from 'assets/images/sass.svg'
import bem from 'assets/images/bem.svg'
import cssModule from 'assets/images/cssModule.svg'
import mui from 'assets/images/mui.svg'
import bootstrap from 'assets/images/bootstrap.svg'
import firebase from 'assets/images/firebase.svg'
import git from 'assets/images/git.svg'
import figma from 'assets/images/figma.svg'
import photoshop from 'assets/images/photoshop.svg'
import typescript from 'assets/images/typescript.svg'

export interface IIcons {
  id: string
  icon: string
  text: string
}
export const icons: IIcons[] = [
  { id: "1", icon: react, text: 'React' },
  { id: "2", icon: typescript, text: 'TypeScript' },
  { id: "3", icon: reduxToolkit, text: 'Redux Toolkit' },
  { id: "4", icon: mobx, text: 'MobX' },
  { id: "5", icon: sass, text: 'Sass' },
  { id: "6", icon: bem, text: 'BEM' },
  { id: "7", icon: cssModule, text: 'CSS module' },
  { id: "8", icon: mui, text: 'MUI' },
  { id: "9", icon: bootstrap, text: 'Bootstrap' },
  { id: "10", icon: firebase, text: 'Firebase' },
  { id: "11", icon: git, text: 'Git' },
  { id: "12", icon: figma, text: 'Figma' },
  { id: "13", icon: photoshop, text: 'Photoshop' },
  { id: "14", icon: reduxIco, text: 'Redux' },
]
