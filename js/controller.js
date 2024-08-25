// viet function nhan vao array va render ra table

function renderDSNV(dsnv) {
  var contentHTML = "";
  // tao bien chua danh sach the tr
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    var trString = `
    <tr>
    <td> ${nv.tk} </td>
    <td> ${nv.name} </td>
    <td> ${nv.email} </td>
    <td> ${nv.ngayLam} </td>
    <td> ${nv.chucVu} </td>
    <td> 
    <button onclick=xoaSv("${nv}") class="btn btn-success">
    Xóa
    </button>
    <button onclick=suaSv("${nv}") class="btn btn-success">
    Sửa
    </button>
    </td>
    </tr>
    `;
    contentHTML += trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
