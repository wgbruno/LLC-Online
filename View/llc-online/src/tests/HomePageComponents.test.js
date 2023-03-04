import {expect, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import Gallery from "../components/Gallery"

test("Header", function (){
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
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
    const navbar = renderer.create(<NavBar />).toJSON();
    expect(navbar).toMatchSnapshot();
});

test("Gallery", function (){
    const gallery = renderer.create(<Gallery />).toJSON();
    expect(gallery).toMatchSnapshot();
});