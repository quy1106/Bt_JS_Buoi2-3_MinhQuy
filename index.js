/** BÀI 1: Tính tiền lương nhân viên, lương 1 ngày là 100000 cho người dùng nhập vào số ngày làm, tính tổng lương
    Input:
        số ngày làm: number
    Output:
        tổng lương: number
    Progress:
        Khai báo lương một ngày là 100000
        Khai báo biến chứa số ngày làm
        Gán tổng lương = lương một ngày * số ngày làm
        In tổng lương ra màn hình
 */
document.getElementById('btnTinhTienLuong').onclick =function(){
// input:
var soNgayLam =document.getElementById('soNgayLam').value;
// output:
var tongLuong = 0;
// progress:
var luong1Ngay = 100000;
tongLuong = luong1Ngay * soNgayLam;
document.getElementById('ketQuaLuong').innerHTML =  new Intl.NumberFormat('vn-VN').format(tongLuong) + ' VNĐ';
}
/*Bài 2: Tính giá trị trung bình. Viết chương trình nhập vào 5 số thực, tính giá trị trung bình của 5 số này và xuất ra màn hình
Input:
    soThu1: number
    soThu2: number
    soThu3: number
    soThu4: number
    soThu5: number 
Output:
    ketQuaTrungBinh: number
Progress:
    Khai soThu1
    Khai soThu2
    Khai soThu3
    Khai soThu4
    Khai soThu5
    Gán ketQuaTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
    In kết quả trung bình ra màn hình
*/
document.getElementById('btnTinhTrungBinh').onclick =function(){
    // input:
    var soThu1 =+document.getElementById('soThu1').value;
    var soThu2 =+document.getElementById('soThu2').value;
    var soThu3 =+document.getElementById('soThu3').value;
    var soThu4 =+document.getElementById('soThu4').value;
    var soThu5 =+document.getElementById('soThu5').value;
    // output:
    var trungBinh = 0;
    // progress:
    trungBinh= (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
    document.getElementById('ketQuaTrungBinh').innerHTML=trungBinh;
}
/**Bài 3: Quy đổi tiền, Cho người dùng nhập vào số tiền USD, tính và xuất ra số tiền quy đổi sang VND 
 input: 
    tiền usd: number
output:
    tiền vnd: number
progress:
    khai báo tienUsd
    Gán tienVnd = tienUsd * 23.500
    In ra tiền Vnd ra màn hình
*/
document.getElementById('btnQuyDoiTien').onclick=function(){
// input:
var tienUsd = document.getElementById('tienUsd').value;
// output:
var tienVnd = 0;
// progress
tienVnd = tienUsd * 23500;
document.getElementById('ketQuaQuyDoiTien').innerHTML=new Intl.NumberFormat('vn-VN').format(tienVnd) +' VNĐ';
}
/*Bài 4: Tính chu vi, diện tích hình chữ nhật. Cho người dùng nhập vào giá trị chiều dài và chiều rộng của hình chữ nhật. Tính và xuất ra kết quả chu vi và diện tích hình chữ nhật đó
input: 
    chiều dài: number
    chiều rộng: number
output:
    chu vi: number
    diện tích: number
progress:
    khai báo chieuDai
    khai báo chieuRong
    Gán chuVi= (chieuDai + chieuRong)*2
        dienTich=chieuDai * chieuRong
    In ra màn hình chiều dài và chiều rộng
 */

document.getElementById('btnTinhKetQua').onclick=function(){
// input:
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
// output:
    var chuVi = 0;
    var dienTich = 0;
// Progress
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    document.getElementById('ketQua').innerHTML= 'Chu vi là: '+chuVi+' Diện tích là: ' + dienTich;
}
/* Bài 5: TÍnh tổng hai ký số. Viết chương trình nhập vào một số có hai chũ số, tính tổng hai ký số vừa nhập
iput:
    số có hai chữ số: number
output:
    tổng hai ký số: number
Progress:
    khai báo soN
    khai báo hangChuc = Math.floor(soN / 10)
    khai báo hangDonVi = soN % 10
    gán tong = hangChuc + hangDonVi
    In ra màn hình tổng hai ký số */
document.getElementById('btnTinhTong').onclick=function(){
// input:
    var soN=document.getElementById('soN').value;
// output:
    var tong = 0;
// progress:
    var hangChuc= Math.floor(soN / 10);
    var hangDonVi= soN % 10;
    tong = hangChuc + hangDonVi;
    document.getElementById('tongHaiKySo').innerHTML= tong;
}

