"use strict";
/*
Item 28:
Prefer Types That Always Represent Valid States
*/
// interface State {
//   pageText: string;
//   isLoading: boolean;
//   error?: string;
// }
let currentPage = '';
function getUrlForPage(p) {
    return '';
}
function renderPage(state) {
    const { currentPage } = state;
    const requestState = state.requests[currentPage];
    switch (requestState.state) {
        case 'pending':
            return `Loading ${currentPage}...`;
        case 'error':
            return `Error! Unable to load ${currentPage}: ${requestState.error}`;
        case 'ok':
            return `<h1>${currentPage}</h1>\n${requestState.pageText}`;
    }
}
async function changePage(state, newPage) {
    state.requests[newPage] = { state: 'pending' };
    state.currentPage = newPage;
    try {
        const response = await fetch(getUrlForPage(newPage));
        if (!response.ok) {
            throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
        }
        const pageText = await response.text();
        state.requests[newPage] = { state: 'ok', pageText };
    }
    catch (e) {
        state.requests[newPage] = { state: 'error', error: '' + e };
    }
}
