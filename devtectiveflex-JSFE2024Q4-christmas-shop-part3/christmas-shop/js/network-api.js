const getData = (onSuccess, onError) => {
  fetch('./js/gifts.json')
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onError('При загрузке данных с сервера произошла ошибка'));
};

export {getData};