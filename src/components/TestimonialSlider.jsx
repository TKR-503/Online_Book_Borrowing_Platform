"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const items = [
  { name: "Rahim Uddin", role: "Student", text: "BookVerse transformed how I study. I can access thousands of books in seconds. Absolutely love it!", avatar: "R", bg: "#4f46e5" },
  { name: "Priya Sharma", role: "Teacher", text: "A fantastic platform for educators. The search and category filter save me so much time every day.", avatar: "P", bg: "#7c3aed" },
  { name: "Karim Hassan", role: "Engineer", text: "The Tech category alone is worth it. Deep Work and Clean Code changed how I think about productivity.", avatar: "K", bg: "#2563eb" },
];

export default function TestimonialsSlider() {
  return (
    <Swiper modules={[Autoplay, Pagination]} spaceBetween={20} slidesPerView={1}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }} className="pb-10">
      {items.map(t => (
        <SwiperSlide key={t.name}>
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8ecf0", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                {t.avatar}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>{t.role}</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>&ldquo;{t.text}&rdquo;</p>
            <div style={{ display: "flex", gap: 3, marginTop: 12 }}>
              {[1,2,3,4,5].map(i => <svg key={i} width="14" height="14" fill="#f59e0b" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
