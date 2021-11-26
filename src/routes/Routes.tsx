import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages';
import { DefaultTemplate } from '@templates';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultTemplate>
                            <MainPage />
                        </DefaultTemplate>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
