import GarageViewComponent from "./garage-view-component";

export const garageView: GarageViewComponent = new GarageViewComponent();

export default async function createGarageView() {
    await garageView.initialize();
    return garageView;
}
