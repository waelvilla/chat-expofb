import Main from './components/Main'
import Chat from './components/Chat'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const navigator = createStackNavigator({
  Main: {screen: Main},
  Chat: {screen: Chat}
})
const appContainer= createAppContainer(navigator)

export default appContainer