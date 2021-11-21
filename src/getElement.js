export function getElement(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomfox.ca/floof/');
  xhr.send();

  xhr.onload = () => {
    if (xhr.status != 200) {
      console.log('error');
    } else {
      callback(JSON.parse(xhr.response).image);
    }
  };
  xhr.onerror = (err) => {
    console.log(err.type);
  };
}
