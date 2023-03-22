import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Splash, Description, Homepage, Karies, Control, Food, Flour, Karang, Plak, Radang, Toothbrush, Quiz, Cavity } from '../pages';

const Routes = () => (
   <Router>
      <Scene key="root" headerMode="none">
         <Scene key="splash" component={Splash} initial={true} />
         <Scene key="description" component={Description} />
         <Scene key="homepage" component={Homepage} />
         <Scene key="karies" component={Karies} />
         <Scene key="control" component={Control} />
         <Scene key="food" component={Food} />
         <Scene key="flour" component={Flour} />
         <Scene key="karang" component={Karang} />
         <Scene key="plak" component={Plak} />
         <Scene key="radang" component={Radang} />
         <Scene key="toothbrush" component={Toothbrush} />
         <Scene key="quiz" component={Quiz} />
         <Scene key="cavity" component={Cavity} />
      </Scene>
   </Router>
)
export default Routes