const products = [
  {
    "id": 0,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-00.webp"
  },
  {
    "id": 1,
    "brand": "Carolina Herrera",
    "name": "Good Girl EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-01.webp"
  },
  {
    "id": 2,
    "brand": "Chanel",
    "name": "Coco Mademoiselle EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-02.webp"
  },
  {
    "id": 3,
    "brand": "Creed",
    "name": "Aventus",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-03.webp"
  },
  {
    "id": 4,
    "brand": "Dior",
    "name": "Miss Dior Absolutely Blooming EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-04.webp"
  },
  {
    "id": 5,
    "brand": "Gucci",
    "name": "Bloom EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-05.webp"
  },
  {
    "id": 6,
    "brand": "Gucci",
    "name": "Flora Gorgeous Gardenia EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-06.webp"
  },
  {
    "id": 7,
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Le Parfum EDP Intense",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-07.webp"
  },
  {
    "id": 8,
    "brand": "Jean Paul Gaultier",
    "name": "So Scandal! EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-08.webp"
  },
  {
    "id": 9,
    "brand": "Kilian",
    "name": "Black Phantom Memento Mori",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-09.webp"
  },
  {
    "id": 10,
    "brand": "Lancôme",
    "name": "La Vie Est Belle EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-10.webp"
  },
  {
    "id": 11,
    "brand": "Le Labo",
    "name": "Another 13",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-11.webp"
  },
  {
    "id": 12,
    "brand": "Le Labo",
    "name": "Rose 31",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-12.webp"
  },
  {
    "id": 13,
    "brand": "Le Labo",
    "name": "Santal 33 EDP",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-13.webp"
  },
  {
    "id": 14,
    "brand": "Maison Francis Kurkdjian",
    "name": "Baccarat Rouge 540 Extrait de Parfum",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-14.webp"
  },
  {
    "id": 15,
    "brand": "Montblanc",
    "name": "Explorer EDP",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-15.webp"
  },
  {
    "id": 16,
    "brand": "Narciso Rodriguez",
    "name": "Pure Musc For Her EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-16.webp"
  },
  {
    "id": 17,
    "brand": "Kilian",
    "name": "Good Girl Gone Bad",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-17.webp"
  },
  {
    "id": 18,
    "brand": "Dior",
    "name": "Sauvage",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-18.webp"
  },
  {
    "id": 19,
    "brand": "Dolce & Gabbana",
    "name": "Light Blue Eau Intense Pour Femme EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-19.webp"
  },
  {
    "id": 20,
    "brand": "Jean Paul Gaultier",
    "name": "Scandal À Paris EDT",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-20.webp"
  },
  {
    "id": 21,
    "brand": "Lancôme",
    "name": "Trésor Midnight Rose EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-21.webp"
  },
  {
    "id": 22,
    "brand": "Marc Jacobs",
    "name": "Daisy Dream EDT",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-22.webp"
  },
  {
    "id": 23,
    "brand": "Montblanc",
    "name": "Signature EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-23.webp"
  },
  {
    "id": 24,
    "brand": "Narciso Rodriguez",
    "name": "Ambrée EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-24.webp"
  },
  {
    "id": 25,
    "brand": "Narciso Rodriguez",
    "name": "For Her EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-25.webp"
  },
  {
    "id": 26,
    "brand": "Paco Rabanne",
    "name": "Pure XS For Her EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-26.webp"
  },
  {
    "id": 27,
    "brand": "Parfums de Marly",
    "name": "Delina",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-27.webp"
  },
  {
    "id": 28,
    "brand": "Versace",
    "name": "Bright Crystal EDT",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-28.webp"
  },
  {
    "id": 29,
    "brand": "Parfums de Marly",
    "name": "Valaya EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-29.webp"
  },
  {
    "id": 30,
    "brand": "Yves Saint Laurent",
    "name": "Libre EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-30.webp"
  },
  {
    "id": 31,
    "brand": "Yves Saint Laurent",
    "name": "Y EDP",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-31.webp"
  }
];
const money = n => n.toLocaleString('vi-VN') + '₫';
const $ = s => document.querySelector(s);
const gender = { female: 'Nữ', male: 'Nam', unisex: 'Unisex' };
let filter = 'all', limit = 8, selectedProduct = null;

function render() {
    let list = products.filter(p => (filter === 'all' || p.gender === filter) &&
        (p.brand + ' ' + p.name).toLocaleLowerCase('vi').includes($('#search').value.trim().toLocaleLowerCase('vi')));
    if ($('#sort').value !== 'default') list.sort((a, b) => $('#sort').value === 'asc' ? a.price - b.price : b.price - a.price);
    $('#result-count').textContent = list.length + ' mùi hương';
    $('#products').innerHTML = list.slice(0, limit).map(p => `<article class="product">
        <button class="product-image" data-detail="${p.id}" aria-label="Xem ${p.brand} ${p.name}"><span class="tag">${gender[p.gender]}</span><img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy" decoding="async" width="960" height="960"></button>
        <div class="product-brand">${p.brand}</div><h3>${p.name}</h3><div class="product-meta">${gender[p.gender]} · ${p.volume}</div>
        <div class="prices"><strong>${money(p.price)}</strong><span class="bundle-hint">2 chai 289k · 3 chai 399k</span></div>
        <button class="buy" data-buy="${p.id}">Mua ngay <span>↗</span></button></article>`).join('') || '<p class="empty">Chưa tìm thấy mùi hương phù hợp. Thử tên khác nhé.</p>';
    $('#more').hidden = list.length <= limit;
}

function validQuantity(value) {
    const quantity = Number(value);
    return Number.isInteger(quantity) && quantity >= 1 && quantity <= 3;
}
function quote(quantity) {
    if (!validQuantity(quantity)) throw new RangeError('Số lượng phải từ 1 đến 3.');
    const subtotal = {1: 150000, 2: 289000, 3: 399000}[quantity];
    const shipping = Number(quantity) === 1 ? 22000 : 0;
    return {subtotal, shipping, total: subtotal + shipping};
}
function updateTotal() {
    const input = $('#quantity');
    const valid = validQuantity(input.value);
    input.setCustomValidity(valid ? '' : 'Vui lòng nhập số lượng nguyên từ 1 đến 3.');
    input.setAttribute('aria-invalid', String(!valid));
    $('#quantity-error').hidden = valid;
    const price = valid && selectedProduct ? quote(Number(input.value)) : null;
    $('#purchase-subtotal').textContent = price ? money(price.subtotal) : '—';
    $('#purchase-shipping').textContent = price ? (price.shipping ? money(price.shipping) : 'Miễn phí') : '—';
    $('#purchase-total').textContent = price ? money(price.total) : '—';
    document.querySelectorAll('[data-bundle]').forEach(button => {
        const active = valid && Number(button.dataset.bundle) === Number(input.value);
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
    $('#quantity-minus').disabled = valid && Number(input.value) <= 1;
    $('#quantity-plus').disabled = valid && Number(input.value) >= 3;
}
function openPurchase(id) {
    const product = products[id];
    if (!product) return;
    if ($('#detail').open) $('#detail').close();
    selectedProduct = product;
    $('#purchase-form').reset();
    $('#purchase-status').textContent = '';
    $('#purchase-image').src = product.image;
    $('#purchase-image').alt = product.brand + ' ' + product.name;
    $('#purchase-brand').textContent = product.brand;
    $('#purchase-name').textContent = product.name + ' · ' + product.volume;
    $('#purchase-price').textContent = money(product.price);
    updateTotal();
    $('#purchase').showModal();
    $('#purchase').scrollTop = 0;
    $('#buyer-name').focus();
}
function stepQuantity(delta) {
    const input = $('#quantity');
    input.value = validQuantity(input.value) ? Math.min(3, Math.max(1, Number(input.value) + delta)) : 1;
    updateTotal();
}
function orderText(product, quantity, buyer) {
    return ['kinguyenperfume — PHIẾU MUA HÀNG THAM KHẢO', 'Phiếu chưa được gửi tới cửa hàng.', '',
        'Sản phẩm: ' + product.brand + ' ' + product.name, 'Dung tích: ' + product.volume, 'Bảng giá đồng giá áp dụng cho tất cả mẫu',
        'Số lượng: ' + quantity, 'Tiền hàng: ' + money(quote(quantity).subtotal), 'Phí vận chuyển: ' + (quote(quantity).shipping ? money(quote(quantity).shipping) : 'Miễn phí'), 'Tổng thanh toán: ' + money(quote(quantity).total), '',
        'Họ và tên: ' + buyer.name, 'Số điện thoại: ' + buyer.phone, 'Địa chỉ: ' + buyer.address,
        'Ghi chú: ' + (buyer.note || 'Không có')].join('\n');
}
$('#purchase-form').addEventListener('submit', e => {
    e.preventDefault();
    updateTotal();
    const buyer = { name: $('#buyer-name').value.trim(), phone: $('#buyer-phone').value.trim(), address: $('#buyer-address').value.trim(), note: $('#buyer-note').value.trim() };
    for (const [key, selector] of [['name', '#buyer-name'], ['address', '#buyer-address']]) {
        $(selector).setCustomValidity(buyer[key] ? '' : 'Vui lòng nhập thông tin.');
    }
    const phoneDigits = buyer.phone.replace(/\D/g, '');
    $('#buyer-phone').setCustomValidity(phoneDigits.length >= 9 && phoneDigits.length <= 15 ? '' : 'Vui lòng nhập số điện thoại hợp lệ (9–15 chữ số).');
    if (!selectedProduct || !$('#purchase-form').reportValidity()) return;
    const text = orderText(selectedProduct, Number($('#quantity').value), buyer);
    const url = URL.createObjectURL(new Blob(['\ufeff' + text], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url; a.download = 'kinguyenperfume-phieu-mua-hang.txt';
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('#purchase-status').textContent = 'Đã tạo phiếu mua hàng để tải về máy. Phiếu chưa được gửi tới cửa hàng.';
});
for (const selector of ['#buyer-name', '#buyer-phone', '#buyer-address']) {
    $(selector).addEventListener('input', () => $(selector).setCustomValidity(''));
}
document.querySelectorAll('[data-bundle]').forEach(button => button.addEventListener('click', () => {
    $('#quantity').value = button.dataset.bundle;
    updateTotal();
}));
$('#quantity').addEventListener('input', updateTotal);
$('#quantity-minus').onclick = () => stepQuantity(-1);
$('#quantity-plus').onclick = () => stepQuantity(1);

document.addEventListener('click', e => {
    const buy = e.target.closest('[data-buy]');
    if (buy) openPurchase(Number(buy.dataset.buy));
    const detail = e.target.closest('[data-detail]');
    if (detail) {
        const p = products[detail.dataset.detail];
        $('#detail-content').innerHTML = `<img class="detail-img" src="${p.image}" alt="${p.name}"><div class="detail-body"><div class="eyebrow">${p.brand}</div><h2>${p.name}</h2><p>${gender[p.gender]} · ${p.volume}</p><div class="prices"><strong>${money(p.price)}</strong><span class="bundle-hint">2 chai 289k · 3 chai 399k</span></div><p class="demo-note">Đồng giá tất cả mẫu: 1 chai 150.000đ + 22.000đ ship; 2 chai 289.000đ hoặc 3 chai 399.000đ, miễn phí ship.</p><button class="button" data-buy="${p.id}">Mua ngay ↗</button></div>`;
        $('#detail').showModal();
    }
    const close = e.target.closest('.close');
    if (close) close.closest('dialog').close();
    const guide = e.target.closest('[data-guide]');
    if (guide) { setFilter(guide.dataset.guide); $('#collection').scrollIntoView({ behavior: 'smooth' }); }
});
function setFilter(f) {
    filter = f; limit = 8;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
    render();
}
document.querySelectorAll('[data-filter]').forEach(b => b.onclick = () => setFilter(b.dataset.filter));
$('#search').oninput = () => { limit = 8; render(); };
$('#sort').onchange = render;
$('#more').onclick = () => { limit += 8; render(); };
document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => {
    if (e.target === d) {
        const r = d.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();
    }
}));
render();
