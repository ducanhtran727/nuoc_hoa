const names=[['Narciso Rodriguez','For Her EDP',3230000,1000000,'female'],['Narciso Rodriguez','Ambrée EDP',2000000,900000,'female'],['Emporio Armani','Stronger With You Absolutely',3300000,1000000,'male'],['Burberry','Her EDP',3360000,900000,'female'],['Lancôme','La Vie Est Belle Sparkling Edition',3300000,1000000,'female'],['Lancôme','Idôle Le Grand Parfum',3000000,1000000,'female'],['Bvlgari','Aqva Pour Homme',2450000,1000000,'male'],['Initio','Musk Therapy',6500000,1200000,'unisex'],['Prada','Paradoxe EDP',3500000,1000000,'female'],['Dior','Miss Dior Eau de Parfum',3300000,1000000,'female'],['Montblanc','Explorer',1480000,800000,'male'],['Montblanc','Signature',1900000,900000,'female'],['Giorgio Armani','Sì Passione',3300000,900000,'female'],['Gucci','Guilty Eau de Toilette',3500000,900000,'male'],['Ex Nihilo','Blue Talisman',10500000,2000000,'unisex'],['Mancera','Red Tobacco',2800000,1000000,'unisex'],['Les Liquides Imaginaires','Blanche Bête',6500000,1500000,'unisex'],['Dolce & Gabbana','The One EDP',2400000,1000000,'male'],['Dolce & Gabbana','Light Blue Pour Homme',2500000,1000000,'male'],['Dolce & Gabbana',"L’Impératrice 3 EDT",1600000,900000,'female'],['Le Labo','Another 13',4650000,1100000,'unisex'],['Musk','Kashmir',2450000,1000000,'unisex'],['Jean Paul Gaultier','So Scandal',3200000,1100000,'female'],['Jean Paul Gaultier','Scandal',4650000,1100000,'female']];
const products = names.map((p, id) => ({ id, brand: p[0], name: p[1], old: p[2], price: p[3], gender: p[4] }));
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
        <button class="product-image" data-detail="${p.id}" aria-label="Xem ${p.brand} ${p.name}"><span class="tag">${gender[p.gender]}</span><img src="assets/product-${p.id}.jpg" alt="${p.brand} ${p.name}" loading="lazy" width="500" height="500"></button>
        <div class="product-brand">${p.brand}</div><h3>${p.name}</h3><div class="product-meta">${gender[p.gender]} · Nước hoa</div>
        <div class="prices"><strong>${money(p.price)}</strong><del>${money(p.old)}</del></div>
        <button class="buy" data-buy="${p.id}">Mua ngay <span>↗</span></button></article>`).join('') || '<p class="empty">Chưa tìm thấy mùi hương phù hợp. Thử tên khác nhé.</p>';
    $('#more').hidden = list.length <= limit;
}

function validQuantity(value) {
    const quantity = Number(value);
    return Number.isInteger(quantity) && quantity >= 1 && quantity <= 999;
}
function updateTotal() {
    const input = $('#quantity');
    const valid = validQuantity(input.value);
    input.setCustomValidity(valid ? '' : 'Vui lòng nhập số lượng nguyên từ 1 đến 999.');
    input.setAttribute('aria-invalid', String(!valid));
    $('#quantity-error').hidden = valid;
    $('#purchase-total').textContent = valid && selectedProduct ? money(selectedProduct.price * Number(input.value)) : '—';
    $('#quantity-minus').disabled = valid && Number(input.value) <= 1;
    $('#quantity-plus').disabled = valid && Number(input.value) >= 999;
}
function openPurchase(id) {
    const product = products[id];
    if (!product) return;
    if ($('#detail').open) $('#detail').close();
    selectedProduct = product;
    $('#purchase-form').reset();
    $('#purchase-status').textContent = '';
    $('#purchase-image').src = `assets/product-${id}.jpg`;
    $('#purchase-image').alt = product.brand + ' ' + product.name;
    $('#purchase-brand').textContent = product.brand;
    $('#purchase-name').textContent = product.name;
    $('#purchase-price').textContent = money(product.price);
    updateTotal();
    $('#purchase').showModal();
    $('#purchase').scrollTop = 0;
    $('#buyer-name').focus();
}
function stepQuantity(delta) {
    const input = $('#quantity');
    input.value = validQuantity(input.value) ? Math.min(999, Math.max(1, Number(input.value) + delta)) : 1;
    updateTotal();
}
function orderText(product, quantity, buyer) {
    return ['kinguyenperfume — PHIẾU MUA HÀNG THAM KHẢO', 'Phiếu chưa được gửi tới cửa hàng.', '',
        'Sản phẩm: ' + product.brand + ' ' + product.name, 'Đơn giá: ' + money(product.price),
        'Số lượng: ' + quantity, 'Thành tiền: ' + money(product.price * quantity), '',
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
$('#quantity').addEventListener('input', updateTotal);
$('#quantity-minus').onclick = () => stepQuantity(-1);
$('#quantity-plus').onclick = () => stepQuantity(1);

document.addEventListener('click', e => {
    const buy = e.target.closest('[data-buy]');
    if (buy) openPurchase(Number(buy.dataset.buy));
    const detail = e.target.closest('[data-detail]');
    if (detail) {
        const p = products[detail.dataset.detail];
        $('#detail-content').innerHTML = `<img class="detail-img" src="assets/product-${p.id}.jpg" alt="${p.name}"><div class="detail-body"><div class="eyebrow">${p.brand}</div><h2>${p.name}</h2><p>${gender[p.gender]} · ${p.brand}</p><div class="prices"><strong>${money(p.price)}</strong><del>${money(p.old)}</del></div><p class="demo-note">Ảnh và giá tham khảo từ trang mẫu. Cần xác nhận dung tích, giá và tồn kho với cửa hàng trước khi mua.</p><button class="button" data-buy="${p.id}">Mua ngay ↗</button></div>`;
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
