import { 
    getLocalWeather,
} from './services';

const dispatch = async (req, res) => {
    const action = req.params[0];
    switch(action) {
        case 'get-local-weather':
            await getLocalWeather(req, res);
            break;
    }
}

export default dispatch;