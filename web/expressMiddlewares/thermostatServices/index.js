import { getReadings } from './services';

const dispatch = async (req, res) => {
    const action = req.params[0];
    switch(action) {
        case 'get-data':
            await getReadings(req, res);
            break;
    }
}

export default dispatch;