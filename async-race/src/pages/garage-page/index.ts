import BaseComponent from '@Src/components/common/base-component';
import ContentPage from '@Src/components/common/content-page';
import CarControlPanel from '@Src/components/ui/car-control-panel';
import VehicleRaceControlPanel from '@Src/components/ui/vehicle-race-control-panel';
import { ICar } from '@Src/types/interfaces';
import Api from '@Src/api/cars';
import classes from './style.module.scss';

export default class GaragePage extends ContentPage {
  carsInGarage!: ICar[];

  carsContainer!: BaseComponent<HTMLDivElement>;

  constructor() {
    super({ containerTag: 'main', title: 'Garage' });
    this.createContent();
  }

  private createContent = () => {
    this.carsContainer = new BaseComponent<HTMLDivElement>({
      tag: 'div',
      class: classes.carsContainer,
    });
    this.container.node.append(new CarControlPanel().node, this.carsContainer.node);
    this.createCars();
  };

  private createCars = async () => {
    this.carsInGarage = await Api.getCars();
    this.carsInGarage.forEach((carData) => {
      const newCar = new VehicleRaceControlPanel(carData);
      this.carsContainer.node.append(newCar.node);
    });
  };
}
