import { createRoot } from 'react-dom/client'
import AppRouter from "./Routes/appRouter.js";
import { Provider } from 'react-redux';
import { store } from './Libs/Redux/store.js';

createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
        <AppRouter>

        </AppRouter>
    </Provider>
)
