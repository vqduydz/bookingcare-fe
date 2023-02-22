import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { DefaultLayout } from './layouts';
import { PrivateRoutes, PublicRoutes } from './routes';

function App() {
    const { currentUser } = useAuth();
    return (
        <Router>
            <div className="App">
                <Routes>
                    {(!currentUser || currentUser.role === 'Customer') &&
                        PublicRoutes.map((route, index) => {
                            const Page = route.comp;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    exact
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}

                    {currentUser?.role !== 'Customer' &&
                        PrivateRoutes.map((route, index) => {
                            const Page = route.comp;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    exact
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
