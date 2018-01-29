export default (wallHeights) => {
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    
    let formData = new FormData();
    formData.append('wallHeights', wallHeights);

    return fetch('/process', {
        method: 'POST',
        headers,
        body: formData
    });
}