
// DATA MAHASISWA
const studentData = {
    name: "HILWANA SAJIDA",
    className: "SI-3D"
};

// DATA HALAMAN
const pages = {
    home: {
        title: `Selamat Datang, ${studentData.name}`,
        subtitle: `Kelas ${studentData.className}`,
        description: "Kamu memiliki statistik, 3 progres kelas, 4 aktivitas selanjutnya dan 3 lampiran dokumen."
    },

    mahasiswa: {
        title: "HILWANA SAJIDA",
        subtitle: studentData.name,
        description: "Informasi mahasiswa Program Studi Sistem Informasi."
    },

    kelas: {
        title: "SI 3D",
        subtitle: studentData.className,
        description: "Berikut adalah daftar matakuliah yang sedang diikuti."
    },

    aktifitas: {
        title: "Aktifitas Mahasiswa",
        subtitle: "Jadwal Kegiatan",
        description: "Lihat jadwal kegiatan dan perkuliahan selanjutnya."
    },

    statistik: {
        title: "Statistik Mahasiswa",
        subtitle: "Ringkasan Akademik",
        description: "Lihat perkembangan statistik akademik mahasiswa."
    },

    dokumen: {
        title: "Dokumen Mahasiswa",
        subtitle: "Lampiran Dokumen",
        description: "Berikut adalah daftar dokumen dan lampiran tugas mahasiswa."
    },

    settings: {
        title: "Pengaturan",
        subtitle: "Settings Dashboard",
        description: "Pengaturan tampilan dashboard mahasiswa."
    },

    signout: {
        title: "Terima Kasih",
        subtitle: "Sampai Jumpa!",
        description: "Anda telah memilih menu Sign Out."
    }
};

// AMBIL ELEMEN HTML
const navLinks = document.querySelectorAll(".nav-link");

const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeSubtitle = document.getElementById("welcomeSubtitle");
const welcomeDescription = document.getElementById("welcomeDescription");

// FUNGSI PINDAH HALAMAN
function showPage(pageName) {

    const page = pages[pageName] || pages.home;

    welcomeTitle.textContent = page.title;
    welcomeSubtitle.textContent = page.subtitle;
    welcomeDescription.textContent = page.description;

    // Mengubah menu aktif
    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.dataset.page === pageName) {
            link.classList.add("active");
        }

    });
}

// EVENT KLIK NAVIGASI
navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pageName = this.dataset.page;

        showPage(pageName);

        // Ambil semua bagian section dan aside
        const section1 = document.querySelector(".section1");
        const section2 = document.querySelector(".section2");
        const aside = document.querySelector(".aside");

        // Hilangkan warna sebelumnya
        section1.classList.remove("highlight");
        section2.classList.remove("highlight");
        aside.classList.remove("highlight");

        // Jika Statistik diklik
        if (pageName === "statistik") {
            section1.classList.add("highlight");
            section2.classList.add("highlight");
        }

        // Jika Aktifitas diklik
        else if (pageName === "aktifitas") {
            aside.classList.add("highlight");
        }

        history.replaceState(null, "", "#" + pageName);

    });

});

// FITUR PENCARIAN
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const keyword = this.value.toLowerCase();

    const items = document.querySelectorAll(
        ".course, .activity, .document"
    );

    items.forEach(item => {

        const text = item.textContent.toLowerCase();

        if (text.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

});

// MEMBUKA HALAMAN SESUAI LINK
const initialPage = location.hash.replace("#", "");

if (pages[initialPage]) {
    showPage(initialPage);
}


