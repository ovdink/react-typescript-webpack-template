import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import { observer } from 'mobx-react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { Footer } from 'components/core';

import * as PAGES from 'pages';

// import { useRootStore } from 'stores/initStore';
import * as C from './const';
import * as S from './units';

export const NavigationRouter = observer(() => {
    // const { commonStore } = useRootStore();

    // const currentTheme = commonStore.isLight ? light : dark;

    // useInterval(() => commonStore.getAssetsRates(), 60 * 1000);

    // useMountEffect(() => {
    //     commonStore.getAssetsRates();
    // });

    // useEffect(() => {
    //     document.body.style.color = commonStore.isLight ? '#092636' : '#ffffff';

    //     document.body.style.backgroundColor = commonStore.isLight ? '#ffffff' : '#1E2934';
    // }, [commonStore.isLight]);

    return (
        // <ThemeProvider theme={currentTheme}>
        <Router>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <S.MainWrapper>
                    {/* <Header /> */}

                    {/* <MobileMenu /> */}

                    <Routes>
                        <Route path={C.MAIN_PAGE} element={<PAGES.MainPage />} />

                        <Route path="*" element={<div>No found page</div>} />
                    </Routes>

                    <Footer />
                </S.MainWrapper>
            </QueryParamProvider>
        </Router>

        // <S.ToastContainerStyled
        //     position="top-right"
        //     autoClose={15000}
        //     hideProgressBar
        //     newestOnTop
        //     closeOnClick
        //     draggable
        //     rtl={false}
        //     closeButton={<S.CrossStyled />}
        //     pauseOnHover={false}
        //     pauseOnFocusLoss={false}
        //     isLight={commonStore.isLight}
        // />
        // </ThemeProvider>
    );
});
