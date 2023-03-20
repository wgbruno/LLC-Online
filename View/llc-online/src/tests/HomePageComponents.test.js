import {expect, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"
import Header_Nav from '../components/HeaderNav';
import Services from "../components/Services"
import Register from '../components/Register';

test("Header", function (){
    const header_nav = renderer.create(<Header_Nav />).toJSON();
    expect(header_nav).toMatchSnapshot();
});

test("Footer", function (){
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
});

test("Hero", function (){
    const hero = renderer.create(<Hero />).toJSON();
    expect(hero).toMatchSnapshot();
});

test("NavBar", function (){
    const services = renderer.create(<Services />).toJSON();
    expect(services).toMatchSnapshot();
});

test("Gallery", function (){
    const gallery = renderer.create(<Gallery />).toJSON();
    expect(gallery).toMatchSnapshot();
});

test("Register", function (){
    const register = renderer.create(<Register />).toJSON();
    expect(register).toMatchSnapshot();
});