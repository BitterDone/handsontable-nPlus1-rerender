import React, { useState } from 'react';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';

function App() {
    const [testStateCounter, setTestStateCounter] = useState(0);

    const _test = (changes, source) => {
        console.log(testStateCounter)
        // setTestStateCounter(testStateCounter+1)
    }

    Handsontable.hooks.add('afterChange', _test);

    return (<div id="hot-app">
        <HotTable settings={{
            data: [['1']],
            rowHeaders: true,
            colHeaders: ['', 'comments'],
            licenseKey: 'non-commercial-and-evaluation',
            width: 500,
            height: 100,
        }}/>
    </div>);
}

export default App;