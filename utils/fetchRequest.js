
import fetchIntercept from 'fetch-intercept';

/**
 * 
 * @param {*} endpoint 
 * @param {*} method GET/POST/PUT/DELETE
 * @param {*} data 
 */
const fetchRequest = async function (endpoint, method = 'GET', data = null, formData = false, props = null) {
    // if (props) {
    //     props.dispatch({ type: 'SHOW_LOADER', payload: true })
    // }

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    // const user = (typeof window != 'undefined') && JSON.parse(window.localStorage.getItem('qno_user'));
    // if (user) {
    //     headers['Authorization'] = 'Bearer ' + user.api_token;
    // }

    const url = endpoint;
    const requestOptions = {
        method: method,
        headers: headers
    };

    // if (formData) {
    //     // delete requestOptions.headers['Content-Type'];
    //     requestOptions['body'] = data;
    // } else if (method != 'GET') {
    requestOptions['body'] = JSON.stringify(data);
    // }


    const unregister = fetchIntercept.register({
        request: function (url, config) {
            // Modify the url or config here
            return [url, config];
        },

        requestError: function (error) {
            // Called when an error occured during another 'request' interceptor call
            return Promise.reject(error);
        },

        response: function (response) {
            // Modify the reponse object
            return response;
        },

        responseError: function (error) {
            // Handle an fetch error
            return Promise.reject(error);
        }

    });

    // Call fetch to see your interceptors in action.


    const response = await fetch(url, requestOptions);

    // Unregister your interceptor
    unregister();

    // if (props) {
    //     props.dispatch({ type: 'SHOW_LOADER', payload: false })
    // }
    if (response.ok) {
        return await response.json();
    } else {
        const data = await response.json()
        return {
            status: response.status,
            data: data.data,
            errors: data.errors,
            success: data.success || false,
            message: data.message || 'Some rror has been occred',
        }
    }

    // return await fetch(url, requestOptions)
    //     .then(response => response.json())
    //     .then(result => {

    //     });;
}
export default fetchRequest;