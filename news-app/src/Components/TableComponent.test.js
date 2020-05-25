import React from 'react';
import { shallow ,configure } from 'enzyme';
import TableComponent from './TableComponent';
import Adapter from 'enzyme-adapter-react-16';
describe("ComponentName", () => {
  configure({adapter: new Adapter()});
  test("should render table component", () => {
    shallow(<TableComponent tableContent= {[]} 
      handlenews={()=>{}} />);
  });
  test("should table row equal to tabcontent", () => {
   const table = shallow(<TableComponent tableContent= {[{}]} 
      handlenews={()=>{}} />);
        expect(table.find('tr').length).toEqual(3);
  });
});