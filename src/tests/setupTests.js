//This file is allow us configure the enviroment we running in
//The two modules we gonna use:
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});