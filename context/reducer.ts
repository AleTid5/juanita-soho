import { DATA_ACTION_TYPES } from './actionTypes';
import { initialState } from './store';

const updateGuestCount = (state, key, maxLimit) => {
  const count = state.guests[key];
  if (count >= maxLimit) return state;

  if (state.guests.adults === 0) {
    return {
      ...state,
      guests: { ...state.guests, [key]: count + 1, adults: state.guests.adults + 1 },
    };
  }

  return { ...state, guests: { ...state.guests, [key]: count + 1 } };
};

const decreaseGuestCount = (state, key) => {
  const count = state.guests[key];
  if (count === 0) return state;
  return { ...state, guests: { ...state.guests, [key]: count - 1 } };
};

export const dataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case DATA_ACTION_TYPES.SET_LOCATION:
      return { ...state, location: payload };

    case DATA_ACTION_TYPES.SET_CHECK_IN:
      return { ...state, checkIn: payload };

    case DATA_ACTION_TYPES.SET_CHECK_OUT:
      return { ...state, checkOut: payload };

    case DATA_ACTION_TYPES.SET_GUESTS:
      return { ...state, guests: payload };

    case DATA_ACTION_TYPES.RESET_DATES:
      return { ...state, checkOut: null, checkIn: null };

    case DATA_ACTION_TYPES.RESET_GUESTS:
      return { ...state, guests: initialState.guests };

    case DATA_ACTION_TYPES.INCREASE_ADULTS:
      if (state.guests.adults >= 16) return state;
      return { ...state, guests: { ...state.guests, adults: state.guests.adults + 1 } };

    case DATA_ACTION_TYPES.INCREASE_CHILDREN:
      return updateGuestCount(state, 'children', 5);

    case DATA_ACTION_TYPES.INCREASE_INFANTS:
      return updateGuestCount(state, 'infants', 5);

    case DATA_ACTION_TYPES.INCREASE_PETS:
      return updateGuestCount(state, 'pets', 2);

    case DATA_ACTION_TYPES.DECREASE_ADULTS:
      const nonAdults = state.guests.children + state.guests.infants + state.guests.pets;

      if (state.guests.adults === 0 || (state.guests.adults === 1 && nonAdults >= 1))
        return state;

      return { ...state, guests: { ...state.guests, adults: state.guests.adults - 1 } };

    case DATA_ACTION_TYPES.DECREASE_CHILDREN:
      return decreaseGuestCount(state, 'children');

    case DATA_ACTION_TYPES.DECREASE_INFANTS:
      return decreaseGuestCount(state, 'infants');

    case DATA_ACTION_TYPES.DECREASE_PETS:
      return decreaseGuestCount(state, 'pets');

    default:
      return state;
  }
};
