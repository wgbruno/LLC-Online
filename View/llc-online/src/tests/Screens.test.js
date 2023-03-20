import {expect, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Home from "../screens/Home"
import LoginPage from '../screens/loginpage';

test("HomePage", function (){
    const homepage = renderer.create(<Home />).toJSON();
    expect(homepage).toMatchSnapshot();
});

test("Login", function (){
    const login = renderer.create(<LoginPage />).toJSON();
    expect(login).toMatchSnapshot();
});

