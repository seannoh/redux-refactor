import { ADD_CAR, START_CAR, STOP_CAR } from '../utils/actions';

const randomNum = () => Math.floor(Math.random() * 20000);

const initialState = {
  cars: [
    {
      id: randomNum(),
      make: 'Honda',
      model: 'Civic',
      year: '2008',
      isRunning: false,
    },
    {
      id: randomNum(),
      make: 'Tesla',
      model: 'Y',
      year: '2021',
      isRunning: false,
    },
  ]
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR: {
      const newCarId = state.cars[state.cars.length - 1].id + 1;
      const newCar = { ...action.payload, id: newCarId };

      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    }
    case START_CAR: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: true };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    case STOP_CAR: {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: false };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    default: {
      return state;
    }
  }
}
