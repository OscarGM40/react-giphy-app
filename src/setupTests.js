

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { createSerializer } from 'enzyme-to-json';
// recuerda que los archivos de test siempre son name.test.js
Enzyme.configure({adapter: new Adapter()});

expect.addSnapshotSerializer(createSerializer({mode:'deep'}))
