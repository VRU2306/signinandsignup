import posed from 'react-pose';
import { transition } from './StyledOverlay';

export default posed.div({
  signup: {
    transition,
    x: props => (props.signup ? '0%' : '150%')
  },
  login: {
    transition,
    x: props => (props.signup ? ' -150%' : '0%')
  }
})
