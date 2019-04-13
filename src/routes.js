import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import authentication from './pages/main';

const Routes = createAppContainer(
    createSwitchNavigator({
        authentication
    })
);

export default Routes;