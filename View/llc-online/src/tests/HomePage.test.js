import {expect, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Home from "../screens/Home"

test("HomePage", function (){
    const homepage = renderer.create(<Home />).toJSON();
    expect(homepage).toMatchSnapshot();
});