import React from 'react';
import {expect, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Home from "../screens/Home"
import LoginPage from '../screens/loginpage';
import ArabicResource from '../screens/ArabicResource';
import ChineseResource from '../screens/ChineseResource';
import FrenchResource from '../screens/FrenchResource';
import GermanResource from '../screens/GermanResource'
import ItalianResource from '../screens/ItalianResource';
import SpanishResource from '../screens/SpanishResource';
import Calendar from '../screens/Calendar';
import ContactSheet from '../screens/ContactSheet';


test("HomePage", function (){
    const homepage = renderer.create(<Home />).toJSON();
    expect(homepage).toMatchSnapshot();
});

test("Login", function (){
    const login = renderer.create(<LoginPage />).toJSON();
    expect(login).toMatchSnapshot();
});

test("Arabic Resource Page", function (){
    const login = renderer.create(<ArabicResource />).toJSON();
    expect(login).toMatchSnapshot();
});

test("Chinese Resource Page", function (){
    const login = renderer.create(<ChineseResource />).toJSON();
    expect(login).toMatchSnapshot();
});

test("French Resource Page", function (){
    const login = renderer.create(<FrenchResource />).toJSON();
    expect(login).toMatchSnapshot();
});

test("German Resource Page", function (){
    const login = renderer.create(<GermanResource />).toJSON();
    expect(login).toMatchSnapshot();
});

test("Italian Resource Page", function (){
    const login = renderer.create(<ItalianResource />).toJSON();
    expect(login).toMatchSnapshot();
});

test("Spanish Resource Page", function (){
    const login = renderer.create(<SpanishResource />).toJSON();
    expect(login).toMatchSnapshot();
});

test("Calendar", function (){
    const login = renderer.create(<Calendar />).toJSON();
    expect(login).toMatchSnapshot();
});

test("Contact", function (){
    const login = renderer.create(<ContactSheet />).toJSON();
    expect(login).toMatchSnapshot();
});