// import Api from '../../../api';
// import Component from '../../base-component';
// // import ButtonComponent from '../button/button';
// // import GarageViewComponent from '../main-garage/garage-view-component';
// import ColorCreationComponent from './color-creation';
// import NameCreationComponent from './name-creation';
// import classes from './style.module.scss';

// export default class CreateFormComponent extends Component {
//   constructor() {
//     // const createBtn = new ButtonComponent('create-btn', 'create');
//     const createCarInput = new NameCreationComponent();
//     createCarInput.setAttribute('type', 'text');
//     createCarInput.setAttribute('placeholder', 'Enter the car name');
//     const colorSelection = new ColorCreationComponent();
//     colorSelection.setAttribute('type', 'color');

//     super(
//       {
//         tagName: 'section',
//         className: classes.createToolsSection,
//       },
//       createCarInput,
//       colorSelection,
//       // createBtn,
//     );

//     // CreateFormComponent.addListenerToCreateBtn(
//     //   createBtn,
//     //   createCarInput,
//     //   colorSelection,
//     //   garageView,
//     // );
//   }

//   static addListenerToCreateBtn(
//     createBtn: Component,
//     createCarInput: Component<HTMLInputElement>,
//     colorSelection: Component<HTMLInputElement>,
//     // garageView: GarageViewComponent,
//   ) {
//     createBtn.node.addEventListener('click', async () => {
//       const textInputValue = createCarInput.node.value;
//       const colorInputValue = colorSelection.node.value;
//       const carData = await Api.createCar(textInputValue, colorInputValue);
//       garageView.addToGarage(carData);
//     });
//   }
// }
