import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {rotateDevice} from './utils/rotate-device';

import {initModals} from './modules/init-modals';
import {hideLoader} from './modules/hide-loader';
import {changeContent} from './modules/change-content';

// Utils
// ---------------------------------

ieFix();
iosVhFix();
rotateDevice();

// Modules
// ---------------------------------

initModals();
hideLoader();
changeContent();
