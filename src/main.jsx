import React,{useState} from 'react'
import {createRoot} from 'react-dom/client'
import './styles.css'
export function App(){
 const [done,setDone]=useState(false)
 return <main className="app"><header><span className="dot"/> TRẠNG THÁI: ĐANG XỬ LÝ KHỦNG HOẢNG</header><section className="hero"><p className="eyebrow">Thông cáo chính thức</p><h1>KATINAT ghi nhận phản ánh về vệ sinh sản phẩm và đang tiến hành xác minh</h1><p>Chúng tôi đã kích hoạt quy trình xác minh nội bộ và cam kết cập nhật thông tin minh bạch tại trang này.</p></section><section className="skills"><h2>Kỹ năng cần bổ sung</h2><div><span>Frontend Testing</span><span>React UI</span></div></section><section><h2>Nhật ký cập nhật</h2>{['Đội giám sát hoàn tất kiểm tra ban đầu','Tạm ngưng khu vực pha chế liên quan','Ghi nhận phản ánh, kích hoạt Crisis Management Team'].map(x=><article key={x}><b>{x}</b><p>Thông tin đang được đối chiếu với quy trình SOP tiêu chuẩn.</p></article>)}</section><section><h2>Câu hỏi thường gặp</h2><details open><summary>Sự việc này ảnh hưởng đến những chi nhánh nào?</summary><p>Hiện phản ánh chỉ liên quan đến một chi nhánh đang được xác minh.</p></details></section><button onClick={()=>setDone(true)}>{done?'ĐÃ SẴN SÀNG':'TẢI PRESS KIT'}</button></main>
}
const root=document.getElementById('root'); if(root) createRoot(root).render(<App/>)
