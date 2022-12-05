const initialContacts = {
  contacts: [{name: 'sai', phone: '8885987564', email: 'sai@gmail.com'}],
  contact: {},
};

export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'GET_ALL_CONTACTS':
      return {...state};
    default:
      return state;
  }
};
