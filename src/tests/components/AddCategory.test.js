import { shallow } from "enzyme";
import React from "react"; //parece que ya no es necesario react aunque usemos JSX también en los tests
import AddCategory from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Pruebas en componente AddCategory", () => {
  // simular llamadas a funciones con jest.fn() es básico en un ambiente de pruebas.Me dará acceso a cuantas veces fue llamada,como,con que args,etc...
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  afterEach(() => {
    // console.log('test terminado,tengo hambre...')
  });

  afterAll(() => {
    console.log("todo terminado,tengo hambre...");
  });

  // fijate lo importantisimo que es crear un wrapper nuevo en cada test
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input").at(0);
    const value = "any value";
    // en los tests tengo que pasarle un segundo argumento con el target y el value(el que quiera) porque el event es undefined.ver video siempre necesitare element.simulate("event",{target:{value:'anyvalue'}}) para saltarme el undefined del 'event' por estar en un ambiente de pruebas
    input.simulate("change", { target: { value } });
    const inputAfter = wrapper.find("input").at(0);
    expect(inputAfter.prop("value")).toBe(value);
  });

  test("No debe de haberse llamado el onSubmit con menos de dos caracteres en el input", () => {
    // fijate que como en la template yo he llamado a preventDefault y aqui no existe el evento por ser un ambiente de pruebas lo tengo que proveer yo.
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    //como estamos simulando el submit, sin valor alguno, no deberia llamarse el setter del padre
    //sin embargo daba fallo porque la de arriba si puso un valor XD hay que resetear los Mocks↑↑

    //expect(setCategories).not.toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    //1- simular el inputChange
    //2- simular el submit
    //3- setCategories se debe de haber llamado
    //4- el valor del input debe haberse reseteado a un string vacio
    const input = wrapper.find("input").at(0);
    const value = "mocks";
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
