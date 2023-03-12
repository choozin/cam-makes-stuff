import React, { useState } from 'react';

const MenuContext = React.createContext();

function MenuProvider(props) {
  /*const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('John');
  const [age, setAge] = React.useState(30);*/
 
  const [selectedExampleMenu, setSelectedExampleMenu] = useState('calc');

  const value = {
    selectedExampleMenu,
    setSelectedExampleMenu,
  };

  return (
    <MenuContext.Provider value={value}>
      {props.children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
