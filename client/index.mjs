// Custom ALT:V MDT by Studio-v.net

import * as alt from 'alt';
import * as game from 'natives';

let tabletCEF = null;
let hidden = true;

alt.on('connectionComplete', () => {
	if (tabletCEF == null) {
		tabletCEF = new alt.WebView('http://resource/client/index.html');
		return;
	}
});

alt.on('keydown', (key) => {
	if(alt.Player.local.vehicle) {
		if (game.isPedInVehicle(alt.Player.local.scriptID, alt.Player.local.vehicle.scriptID, false) && game.getVehicleClass(alt.Player.local.vehicle.scriptID) == 18) {
				
			if (key === 96) { // Numblock 0
				if (hidden) {
					tabletCEF.emit("CEF:leolaptop:hide", false);
					tabletCEF.focus();
					alt.toggleGameControls(false);
					alt.showCursor(true);
					hidden = false;
				} else if (!hidden) {
					tabletCEF.emit("CEF:leolaptop:hide", true);
					alt.toggleGameControls(true);
					alt.showCursor(false);
					tabletCEF.unfocus();
					hidden = true;
				}
			} else if (key === 27) { // ESC
				if (!hidden) {
					tabletCEF.emit("CEF:leolaptop:hide", true);
					alt.toggleGameControls(true);
					alt.showCursor(false);
					tabletCEF.unfocus();
					hidden = true;
				}
			}
		}
	}
});
