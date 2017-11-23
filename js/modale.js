var close_btn = document.querySelector('.btn_close'),
    write_us_form = document.querySelector('.write_us_wrapper'),
    write_us_btn = document.querySelector('.info_contacts a'),
    close_btn_map = document.querySelector('.btn_close_map'),
    map_wrapper = document.querySelector('.map_wrapper'),
    map_btn = document.querySelector('.info_contacts img');





close_btn.addEventListener('click', function () {
    write_us_form.classList.remove('js_write_us_visible');
});

write_us_btn.addEventListener('click', function (e) {
    e.preventDefault();
    write_us_form.classList.add('js_write_us_visible');
});

close_btn_map.addEventListener('click', function () {
        map_wrapper.classList.remove('js_map_visible');
});

map_btn.addEventListener('click', function (e) {
    e.preventDefault();
    map_wrapper.classList.add('js_map_visible');
});
