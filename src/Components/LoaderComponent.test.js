import React from 'react';
import { shallow ,configure } from 'enzyme';
import LoaderComponent from './LoaderComponent';
import Adapter from 'enzyme-adapter-react-16';
describe("ComponentName", () => {
  configure({adapter: new Adapter()});
  test("should render table component", () => {
    shallow(<LoaderComponent isLoader={true} />);
  });
  test("should render loader", () => {
   const table = shallow(<LoaderComponent isLoader={true} />);
        expect(table.find('div').length).toEqual(3);
  });
  test("should not render loader", () => {
    const table = shallow(<LoaderComponent isLoader={false} />);
         expect(table.find('div').length).toEqual(0);
   });
});