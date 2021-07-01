import { 
    getReadings,
    getFullReadings 
} from './services';

const dispatch = async (req, res) => {
    const action = req.params[0];
    switch(action) {
        case 'get-full-data':
            await getFullReadings(req, res);
            break;
        case 'get-data':
            await getReadings(req, res);
            break;            
    }
}

export default dispatch;