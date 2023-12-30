function copyStk() {
    // Lấy nội dung STK
    var stkText = document.getElementById('stkContent').textContent;

    // Tạo một phần tử input tạm thời để sao chép nội dung
    var tempInput = document.createElement('input');
    tempInput.value = stkText;
    document.body.appendChild(tempInput);

    // Lựa chọn toàn bộ nội dung trong input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    // Sao chép nội dung vào clipboard
    document.execCommand('copy');

    // Xoá phần tử input tạm thời
    document.body.removeChild(tempInput);

    // Thông báo hoặc thực hiện hành động khác sau khi sao chép thành công
    alert('Sao chép STK thành công: ' + stkText);
}
