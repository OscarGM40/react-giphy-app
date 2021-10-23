import React from "react";
import "@testing-library/jest-dom"; //para la sintaxis
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

// Recuerda que hacer test en React implica crear un setupTest.js además de un folder test y el script(que ya viene por defecto con react-scripts)
describe("Pruebas en GifGridItem", () => {
  const props = {
    title: "Un titulo",
    url: "http://www.w3.org/1999/",
  };

  const wrapper = shallow(<GifGridItem {...props} />);

  test("Debe de hacer match con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("La prop title debe ir para el párrafo", () => {
    const texto = wrapper.find("p").text().trim();
    const { title } = props;
    expect(texto).toBe(title);
  });

  //   fijate como accedo a un atributo de una tag HTML(en este caso al atributo src de la <img>) con el método prop("nombre del atributo")
  test("debe de tener imagen igual al url y al de los props", () => {
    const img = wrapper.find("img");
    //  puedo ver el HTMLElement con el método html()
    //  console.log(img.html(),'metodo html')

    // fijate que puedo usar props().attr | prop("attr") <- cualquiera de las dos me vale
    // console.log(img.props().src,'metodo props.atributo')
    //console.log(img.prop('alt'),'metodo prop(atributo)')

    expect(img.prop("src")).toBe(props.url);
    expect(img.prop("alt")).toBe(props.title);
  });

  test("probando con props().attr  en vez de prop(attr)", () => {
    const img = wrapper.find("img");
    console.log("memoriza que find puede buscar por id o clase Css,necesitará lo mismo que querySelector.Puede buscar el segundo con at(2),etc...")
    expect(img.props().src).toBe(props.url);
  });

  test("debe de tener cierta clase CSS(animate__bounce", () => {
     const div = wrapper.find("div")
     // fijate que puedo acumular las clases en un [] spliteando por el espacio.  
     const classes = div.props().className.split(" ");
   
     // puedo ser realmente concreto o usar includes
    expect(classes[2]).toBe("animate__bounce");
    expect(div.prop("className").includes("animate__bounce")).not.toBe(false);
   //  jest me proporciona el método hasClass también
    expect(div.hasClass("animate__bounce")).toBeTruthy();
  });
});
