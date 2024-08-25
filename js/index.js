//

DSNV = [];

function themNv() {
  //   alert("us");
  // lay thong tin sinh vien tu form
  var tk = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCb = Number(document.getElementById("luongCB").value);
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = Number(document.getElementById("gioLam").value);

  // tao object
  var nv = {
    tk: tk,
    name: name,
    email: email,
    matKhau: matKhau,
    ngayLam: ngayLam,
    luongCb: luongCb,
    chucVu: chucVu,
    gioLam: gioLam,
    // tongLuong()
  };
  DSNV.push(nv);
  // console.log("🚀 ~ themNv ~ DSNV:", DSNV);
  // reder DSNV
  renderDSNV(DSNV);
}
