import Module from '../../class/Module';

class GiveawaysHiddenGamesEnterButtonDisabler extends Module {
info = ({
    description: `
      <ul>
        <li>Disables the enter button of any giveaway if you have hidden the game on SteamGifts so that you do not accidentaly enter it.</li>
      </ul>
    `,
    id: `hgebd`,
    load: this.hgebd,
    name: `Hidden Game's Enter Button Disabler`,
    sg: true,
    sync: `Hidden Games`,
    type: `giveaways`
  });

  hgebd() {
    if (!this.esgst.giveawayPath || document.getElementsByClassName(`table--summary`)[0]) return;
    let hideButton;
    hideButton = document.getElementsByClassName(`featured__giveaway__hide`)[0];
    if (this.esgst.enterGiveawayButton && !hideButton) {
      let parent = this.esgst.enterGiveawayButton.parentElement;
      if (this.esgst.enterGiveawayButton) {
        this.esgst.enterGiveawayButton.remove();
      }
      this.esgst.modules.common.createElements(parent, `afterBegin`, [{
        attributes: {
          class: `sidebar__error is-disabled`
        },
        type: `div`,
        children: [{
          attributes: {
            class: `fa fa-exclamation-circle`
          },
          type: `i`
        }, {
          text: ` Hidden Game`,
          type: `node`
        }]
      }]);
    }
  }
}

export default GiveawaysHiddenGamesEnterButtonDisabler;