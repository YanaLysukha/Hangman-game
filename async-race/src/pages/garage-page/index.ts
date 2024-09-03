import ContentPage from '@Src/components/common/content-page';
import CarControlPanel from '@Src/components/ui/car-control-panel';
import VehicleRaceControlPanel from '@Src/components/ui/vehicle-race-control-panel';

export default class GaragePage extends ContentPage {
  constructor() {
    super({ containerTag: 'main', title: 'Garage' });
    this.createContent();
  }

  private createContent = () => {
    this.container.node.append(
      new CarControlPanel().node,
      new VehicleRaceControlPanel('BMW', '#ff5733').node,
    );
  };
}
