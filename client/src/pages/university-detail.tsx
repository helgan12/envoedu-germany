import { getLanguage, translateText, translateNode } from "@/lib/i18n";
import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { MapPin, Star, Globe, Calendar, BookOpen, Users, Award, Clock } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import { universities as basicUniversities } from "./universities";

const detailedUniversities = [
  {
    id: 57,
    name: "Technical University of Munich",
    city: "München",
    description: "Almanya'nın en iyi teknik üniversitelerinden biri",
    programs: ["Mühendislik", "Fen Bilimleri", "Bilgisayar Bilimleri"],
    ranking: 5,
    worldRanking: 26,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1868,
    students: 45000,
    internationalStudents: 12000,
    coordinates: "48.1496,11.5678",
    address: "Arcisstraße 21, 80333 München, Germany",
    faculties: ["Mühendislik", "Doğa Bilimleri", "Matematik", "Bilgisayar Bilimleri", "Mimarlık"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "İngilizce programlar için IELTS 6.5 veya TOEFL 90",
      "YÖS sınavı veya SAT",
      "Motivasyon mektubu"
    ],
    campusFacilities: [
      "Modern laboratuvarlar",
      "Büyük kütüphane kompleksi", 
      "Spor merkezleri",
      "Öğrenci yurtları",
      "Araştırma merkezleri",
      "Kafeterya ve restoranlar"
    ],
    scholarships: [
      "DAAD bursları",
      "Erasmus+ programı",
      "Üniversite içi başarı bursları",
      "Araştırma asistanlığı bursları"
    ]
  },
  {
    id: 39,
    name: "Heidelberg Üniversitesi",
    city: "Heidelberg", 
    description: "Almanya'nın en eski ve prestijli üniversitesi",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 5,
    worldRanking: 47,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1386,
    students: 30000,
    internationalStudents: 8000,
    coordinates: "49.4093,8.7073",
    address: "Grabengasse 1, 69117 Heidelberg, Germany",
    faculties: ["Tıp", "Hukuk", "Felsefe", "Biyoloji", "Matematik", "Fizik"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "Tıp için Numerus Clausus sınavı",
      "Hukuk için özel giriş sınavı",
      "Motivasyon mektubu ve CV"
    ],
    campusFacilities: [
      "Tarihi binalar",
      "Dünya çapında kütüphane",
      "Tıp fakültesi hastanesi",
      "Öğrenci yaşam merkezleri",
      "Botanik bahçesi",
      "Müze ve galerier"
    ],
    scholarships: [
      "Deutschland Stipendium",
      "DAAD bursları",
      "Baden-Württemberg bursları",
      "Doktora araştırma bursları"
    ]
  },
  {
    id: 6,
    name: "Humboldt Üniversitesi",
    city: "Berlin",
    description: "Berlin'in kalbi Unter den Linden'da",
    programs: ["İşletme", "Sosyoloji", "Tarih"],
    ranking: 4,
    worldRanking: 84,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1810,
    students: 35000,
    internationalStudents: 10000,
    coordinates: "52.5200,13.4050",
    address: "Unter den Linden 6, 10117 Berlin, Germany",
    faculties: ["İşletme", "Sosyal Bilimler", "Tarih", "Edebiyat", "Ekonomi", "Psikoloji"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (B2-C1 seviye)",
      "İşletme için GMAT veya GRE",
      "Akademik referans mektupları",
      "Kişisel beyan"
    ],
    campusFacilities: [
      "Merkezi kampüs",
      "Jacob-und-Wilhelm-Grimm-Zentrum kütüphanesi",
      "Öğrenci merkezleri",
      "Sanat galerisi",
      "Konferans salonları",
      "Cafe ve öğrenci alanları"
    ],
    scholarships: [
      "Humboldt bursları",
      "DAAD programları",
      "Berlin eyalet bursları",
      "Sosyal bilimler araştırma bursları"
    ]
  },
  {
    id: 1,
    name: "RWTH Aachen",
    city: "Aachen",
    description: "Almanya'nın en büyük teknik üniversitesi",
    programs: ["Mühendislik", "Makine", "Elektrik"],
    ranking: 5,
    worldRanking: 92,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1870,
    students: 47000,
    internationalStudents: 15000,
    coordinates: "50.7753,6.0839",
    address: "Templergraben 55, 52062 Aachen, Germany",
    faculties: ["Makine Mühendisliği", "Elektrik Mühendisliği", "Bilgisayar Mühendisliği", "İnşaat Mühendisliği", "Kimya Mühendisliği"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "Matematik ve Fen bilimleri ağırlıklı not ortalaması",
      "Mühendislik ön bilgi sınavı",
      "Motivasyon mektubu"
    ],
    campusFacilities: [
      "Endüstri ile entegre laboratuvarlar",
      "Teknik kütüphane",
      "Öğrenci proje merkezleri",
      "Startup incubator",
      "Spor kompleksleri",
      "Modern yurtlar"
    ],
    scholarships: [
      "RWTH mükemmellik bursları",
      "Mühendislik özel bursları",
      "Endüstri sponsorlu bursları",
      "DAAD teknik programları"
    ]
  },
  {
    id: 4,
    name: "Freie Universität Berlin",
    city: "Berlin",
    description: "Berlin'in liberal ve uluslararası üniversitesi",
    programs: ["Siyaset Bilimi", "Edebiyat", "Psikoloji"],
    ranking: 4,
    worldRanking: 301,
    tuition: "Devlet Üniversitesi - Ücretsiz", 
    language: ["Almanca", "İngilizce"],
    founded: 1948,
    students: 38000,
    internationalStudents: 11000,
    coordinates: "52.4537,13.2900",
    address: "Kaiserswerther Str. 16-18, 14195 Berlin, Germany",
    faculties: ["Siyaset Bilimi", "Edebiyat", "Psikoloji", "Sosyoloji", "Tarih", "Felsefe"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (B2-C1 seviye)",
      "Siyaset bilimi için özel sınav",
      "Psikoloji için Numerus Clausus",
      "Portfolyo (edebiyat için)"
    ],
    campusFacilities: [
      "Modern kampüs Dahlem'de",
      "Kapsamlı kütüphane sistemi",
      "Öğrenci yaşam merkezleri",
      "Sanat ve kültür merkezleri",
      "Uluslararası ofis",
      "Sosyal alanlar ve kafeler"
    ],
    scholarships: [
      "FU Berlin bursları",
      "Sosyal bilimler bursları",
      "Uluslararası öğrenci desteği",
      "Berlin akademik bursları"
    ]
  },
  {
    id: 23,
    name: "University of Erfurt",
    city: "Erfurt",
    description: "Liberal sanatlar ve sosyal bilimler odaklı reform üniversitesi",
    programs: ["Sosyal Bilimler", "Eğitim", "Hukuk", "Felsefe"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1379,
    students: 6000,
    internationalStudents: 500,
    coordinates: "50.9877,11.0065",
    address: "Nordhäuser Straße 63, 99089 Erfurt, Germany",
    faculties: ["Felsefe", "Eğitim Bilimleri", "Ekonomi/Hukuk/Sosyal Bilimler", "Katolik İlahiyat", "Max Weber Merkezi"],
    admissionRequirements: [
      "Lise diploması veya Abitur eşdeğeri",
      "Almanca dil yeterlik belgesi (DSH-2 veya TestDaF 4x4)",
      "İngilizce programlar için IELTS 6.0+ veya TOEFL",
      "Bazı programlar için özel yetenek sınavı",
      "Motivasyon mektubu ve CV",
      "Akademik referans mektupları"
    ],
    campusFacilities: [
      "Modern kampüs kompleksi",
      "Erfurt Üniversite Kütüphanesi",
      "Audimax ana konferans salonu",
      "Spor salonu ve beach volley sahası",
      "Öğrenci yaşam merkezleri",
      "Kampüs eğitim bahçesi",
      "Villa Martin (İlahiyat binası)",
      "Gotha Araştırma Merkezi",
      "Kafeler ve sosyal alanlar"
    ],
    scholarships: [
      "DAAD bursları",
      "Deutschland Stipendium",
      "PROMOS programı",
      "Thüringen eyalet bursları",
      "Erasmus+ değişim programları",
      "Araştırma asistanlığı bursları",
      "Uluslararası öğrenci destekleri"
    ]
  },
  {
    id: 8,
    name: "University of the Arts Berlin (UdK)",
    city: "Berlin",
    description: "Avrupa'nın en büyük ve en eski sanat üniversitelerinden biri",
    programs: ["Güzel Sanatlar", "Müzik", "Tasarım", "Sahne Sanatları"],
    ranking: 1,
    worldRanking: 51,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    founded: 1696,
    students: 4000,
    internationalStudents: 1400,
    coordinates: "52.5057,13.3233",
    address: "Einsteinufer 43, 10587 Berlin, Germany",
    faculties: ["Güzel Sanatlar", "Mimarlık/Medya/Tasarım", "Müzik", "Sahne Sanatları"],
    admissionRequirements: [
      "Sanatsal kabul sınavı (not ortalaması önemsiz)",
      "Portfolio veya işitme kasetleri",
      "Almanca dil yeterlik belgesi (DSH/TestDaF)",
      "Alana özel yetenekler",
      "Yaratıcı portföy sunumu"
    ],
    campusFacilities: [
      "Charlottenburg'da ana kampüs",
      "En son teknoloji stüdyoları",
      "Konser salonları ve sergi alanları",
      "UNI.T tiyatrosu",
      "Ses-görüntü laboratuvarları",
      "600+ yıllık etkinlik merkezi",
      "Volkswagen-Bibliothek kütüphanesi"
    ],
    scholarships: [
      "Carolo-Wilhelmina bursları",
      "Deutschlandstipendium",
      "DAAD sanat bursları",
      "Berlin eyalet sanat destekleri",
      "Uluslararası öğrenci bursları"
    ]
  },
  {
    id: 9,
    name: "Bielefeld University",
    city: "Bielefeld",
    description: "Disiplinlerarası araştırma ve yenilikçi eğitim metodları ile tanınan reform üniversitesi",
    programs: ["Sosyal Bilimler", "Eğitim", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 301,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1969,
    students: 25000,
    internationalStudents: 1969,
    coordinates: "52.0378,8.4930",
    address: "Universitätsstraße 25, 33615 Bielefeld, Germany",
    faculties: ["Dilbilim/Edebiyat", "Tarih/Felsefe/İlahiyat", "Sosyoloji", "Psikoloji/Spor", "Eğitim", "Hukuk", "İşletme/Ekonomi", "Matematik", "Fizik", "Kimya", "Biyoloji", "Teknoloji", "Halk Sağlığı"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "Bazı programlar için Numerus Clausus",
      "İngilizce programlar için IELTS/TOEFL",
      "Motivasyon mektubu"
    ],
    campusFacilities: [
      "Tek bina kampüs konsepti (Avrupa'nın en büyük yapılarından)",
      "2.2 milyon ciltlik kütüphane",
      "Moderne laboratuvarlar",
      "Cognitive Interaction Technology Merkezi",
      "Laborschule deneysel okulu",
      "Kafeterya ve öğrenci hizmetleri"
    ],
    scholarships: [
      "Deutschlandstipendium",
      "DAAD bursları",
      "NRW eyalet bursları",
      "Araştırma bursları",
      "İlk nesil üniversite öğrencisi bursları"
    ]
  },
  {
    id: 10,
    name: "Ruhr University Bochum",
    city: "Bochum",
    description: "Almanya'nın ilk yeni tip üniversitelerinden, güçlü araştırma geleneği",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1962,
    students: 42718,
    internationalStudents: 6512,
    coordinates: "51.4451,7.2617",
    address: "Universitätsstraße 150, 44801 Bochum, Germany",
    faculties: ["Matematik", "Fizik/Astronomi", "Kimya/Biyokimya", "Biyoloji/Biotekno", "Jeowissenschaften", "Makine", "Elektrik", "İnşaat", "Informatik", "Tıp", "Sportwiss", "Psikoloji", "Felsefe", "Tarih", "Arkeoloji", "Edebiyat", "Dilbilim", "Sosyal Bilim", "Hukuk", "İşletme", "Sosyoloji"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "İngilizce programlar için IELTS 6.5+",
      "Tıp için Numerus Clausus",
      "Program bazlı özel şartlar"
    ],
    campusFacilities: [
      "Merkezileştirilmiş kampüs tasarımı",
      "14 identik gökdelen binası",
      "Dünya standartlarında araştırma laboratuvarları",
      "Merkezi kütüphane",
      "50+ spor tesisi",
      "WORLDFACTORY start-up merkezi",
      "Üniversite hastanesi"
    ],
    scholarships: [
      "Deutschlandstipendium (€300/ay)",
      "RUB mükemmellik bursları",
      "DAAD araştırma bursları",
      "NRW eyalet bursları",
      "Endüstri sponsorlu bursları"
    ]
  },
  {
    id: 11,
    name: "University of Bonn",
    city: "Bonn",
    description: "1818'de kurulan, Nobel ödüllü mezunlarıyla ünlü excellence üniversitesi",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Hukuk", "Matematik"],
    ranking: 1,
    worldRanking: 89,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1818,
    students: 35000,
    internationalStudents: 4000,
    coordinates: "50.7374,7.1003",
    address: "Regina-Pacis-Weg 3, 53113 Bonn, Germany",
    faculties: ["Protestan İlahiyat", "Katolik İlahiyat", "Hukuk/Ekonomi", "Tıp", "Felsefe", "Matematik/Doğa Bilimleri", "Tarım, Beslenme ve Mühendislik Bilimleri"],
    admissionRequirements: [
      "Lise diploması veya Abitur eşdeğeri",
      "Almanca dil yeterlik belgesi (DSH-2/C1)",
      "İngilizce programlar için TOEFL 72+ veya IELTS 5.5+",
      "Bazı programlar için Numerus Clausus",
      "18 yaş minimum",
      "Program bazlı özel şartlar"
    ],
    campusFacilities: [
      "Barok saray ana binası",
      "Poppelsdorf Sarayı (1715-1753)",
      "250+ bina şehir genelinde",
      "Venusberg kampüsünde üniversite hastanesi",
      "6 Mükemmellik Kümesi",
      "Innovation Campus Bonn",
      "Kapsamlı kütüphane sistemi"
    ],
    scholarships: [
      "Deutschland Stipendium",
      "DAAD bursları",
      "Excellence üniversite bursları",
      "NRW araştırma bursları",
      "Bonn üniversite bursları",
      "Uluslararası doktora bursları"
    ]
  },
  {
    id: 12,
    name: "Brandenburg University of Technology Cottbus-Senftenberg",
    city: "Cottbus",
    description: "Teknoloji ve çevre odaklı genç teknik üniversite",
    programs: ["Mühendislik", "Çevre Teknolojisi", "Bilgisayar", "Mimarlık"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1991,
    students: 7300,
    internationalStudents: 2350,
    coordinates: "51.7606,14.3347",
    address: "Platz der Deutschen Einheit 1, 03046 Cottbus, Germany",
    faculties: ["Matematik/Bilgisayar/Fizik/Elektrik", "Çevre/Doğa Bilimleri", "Makine Mühendisliği", "Mimarlık/İnşaat/Kentplanlama", "İşletme/Hukuk/Sosyal", "Sağlık"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (B2-C1)",
      "17+ İngilizce programlar mevcut",
      "Açık kabul (Numerus Clausus yok)",
      "Uluslararası öğrencilere garanti yurtluk"
    ],
    campusFacilities: [
      "Dual kampüs (Cottbus + Senftenberg)",
      "Modern çevre teknolojisi laboratuvarları",
      "Enerji araştırma merkezleri",
      "Yenilenebilir enerji tesisleri",
      "Öğrenci yaşam alanları",
      "Berlin'e 90 dakika mesafe"
    ],
    scholarships: [
      "DAAD bursları",
      "Brandenburg eyalet bursları",
      "Çevre teknolojisi araştırma bursları",
      "Deutschlandstipendium",
      "Lusatia dönüşüm bursları"
    ]
  },
  {
    id: 14,
    name: "University of Bremen",
    city: "Bremen",
    description: "Yenilikçi ve uluslararası odaklı araştırma üniversitesi",
    programs: ["Mühendislik", "Sosyal Bilimler", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1971,
    students: 20000,
    internationalStudents: 3000,
    coordinates: "53.1067,8.8517",
    address: "Bibliothekstraße 1, 28359 Bremen, Germany",
    faculties: ["Fizik/Elektrik", "Biyoloji/Kimya", "Matematik/Bilgisayar", "Üretim Müh", "Jeoloji", "Hukuk", "İşletme/Ekonomi", "Sosyal Bilimler", "Kültürel Çalışmalar", "Dilbilim/Edebiyat", "İnsan/Sağlık", "Eğitim"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "İngilizce programlar için C1 seviyesi",
      "Kabul oranı %17 (seçici)",
      "Psikoloji için yetenek sınavı",
      "MBA için 1 yıl iş deneyimi"
    ],
    campusFacilities: [
      "Yeşil teknoloji parkı kampüsü",
      "State and University Library Bremen",
      "5 yüksek profilli araştırma alanı",
      "Max Planck işbirliği",
      "Alfred Wegener Enstitüsü",
      "600+ partner üniversite",
      "Excellence Initiative üyesi"
    ],
    scholarships: [
      "Deutschland Stipendium",
      "DAAD Excellence bursları",
      "Bremen araştırma bursları",
      "Marin bilimler bursları",
      "Doktora araştırma bursları"
    ]
  },
  {
    id: 13,
    name: "Braunschweig University of Technology",
    city: "Braunschweig",
    description: "1745'te kurulan, Almanya'nın en eski teknik üniversitesi",
    programs: ["Mühendislik", "Teknoloji", "Doğa Bilimleri", "Mimarlık"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1745,
    students: 20000,
    internationalStudents: 3200,
    coordinates: "52.2742,10.5249",
    address: "Universitätsplatz 2, 38106 Braunschweig, Germany",
    faculties: ["Carl Friedrich (Matematik/Bilgisayar/İşletme)", "Yaşam Bilimleri", "Makine Mühendisliği", "Mimarlık/İnşaat/Çevre", "Beşeri/Eğitim", "Elektrik/Bilişim/Fizik"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "Kabul oranı %51",
      "75+ derece programı",
      "TU9 üyesi prestij",
      "15 Haziran başvuru tarihi"
    ],
    campusFacilities: [
      "Şehir merkezinde 200+ bina",
      "4 kampüs alanı",
      "TU9 birliği üyesi",
      "DLR, Helmholtz ortaklığı",
      "Fraunhofer enstitüleri",
      "Ücretsiz ulaşım",
      "90+ öğrenci derneği"
    ],
    scholarships: [
      "Carolo-Wilhelmina Scholarships",
      "Deutschlandstipendium (€300/ay)",
      "İlk nesil üniversite bursları",
      "DAAD araştırma bursları",
      "Fulbright programları"
    ]
  },
  {
    id: 15,
    name: "Chemnitz University of Technology",
    city: "Chemnitz",
    description: "1836'da kurulan, güçlü endüstri bağlantıları olan teknik üniversite",
    programs: ["Mühendislik", "Bilgisayar", "İşletme", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1836,
    students: 11400,
    internationalStudents: 3000,
    coordinates: "50.8136,12.9251",
    address: "Straße der Nationen 62, 09111 Chemnitz, Germany",
    faculties: ["Matematik", "Bilgisayar", "Makine Mühendisliği", "Elektrik/Bilişim", "Ekonomi/İşletme", "Doğa Bilimleri", "Beşeri Bilimler", "Davranış/Sosyal Bilimler"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "Kabul oranı %71",
      "15 uzaktan eğitim programı",
      "Kış/Yaz dönem başvuruları",
      "110+ partner şirket"
    ],
    campusFacilities: [
      "Çoklu kampüs yapısı",
      "MERGE Excellence Cluster",
      "MAIN Nanomembran Merkezi",
      "Smart Systems Campus",
      "TUClab Start-up ağı",
      "200+ spin-off şirketi",
      "SAXEED girişimci ağı"
    ],
    scholarships: [
      "Deutschlandstipendium",
      "DAAD teknoloji bursları",
      "Saksonya eyalet bursları",
      "COOL SILICON bursları",
      "Endüstri işbirliği bursları"
    ]
  },
  {
    id: 16,
    name: "Clausthal University of Technology",
    city: "Clausthal-Zellerfeld",
    description: "1775'te kurulan, dünyanın en eski madencilik bilim üniversitesi",
    programs: ["Maden Mühendisliği", "Metalurji", "Malzeme Bilimi", "Kimya Mühendisliği"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1775,
    students: 3500,
    internationalStudents: 1050,
    coordinates: "51.8067,10.3333",
    address: "Adolph-Roemer-Straße 2A, 38678 Clausthal-Zellerfeld, Germany",
    faculties: ["Enerji/Ham Maddeler", "Doğa Bilimleri/Malzeme", "Ekonomi/Matematik/Bilgisayar/Makine"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Kabul oranı %50 (açık kabul)",
      "Almanca programlar için DSH-2/TestDaF",
      "İngilizce programlar için IELTS/TOEFL",
      "Minimum not şartı yok",
      "75€ başvuru ücreti"
    ],
    campusFacilities: [
      "Kompakt kampüs tasarımı",
      "Harz Dağları'nda doğal manzara",
      "Energy Research Center Goslar",
      "Drilling Simulator Celle",
      "60+ spor aktivitesi merkezi",
      "Modern laboratuvarlar",
      "Merkezi kütüphane"
    ],
    scholarships: [
      "Almanya bursu programı (%8 öğrenci)",
      "DAAD uluslararası bursları",
      "Tarihi vakıf bursları",
      "İş-çalışma fırsatları",
      "Çin öğrenci özel programları"
    ]
  },
  {
    id: 16,
    name: "University of Cologne",
    city: "Köln",
    description: "1388'de kurulan, Almanya'nın en eski üniversitelerinden biri",
    programs: ["Hukuk", "İşletme", "Sosyal Bilimler", "Tıp"],
    ranking: 1,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1388,
    students: 52204,
    internationalStudents: 5074,
    coordinates: "50.9289,6.9283",
    address: "Albertus-Magnus-Platz, 50923 Köln, Germany",
    faculties: ["İşletme/Ekonomi/Sosyal", "Tıp", "Hukuk", "Beşeri Bilimler", "Matematik/Doğa", "İnsan Bilimleri"],
    admissionRequirements: [
      "Üniversite giriş yeterliliği belgesi",
      "Almanca dil yeterlik belgesi (DSH-2)",
      "Kabul oranı %20 (çok seçici)",
      "İngilizce programlar için IELTS 5.5-7.0",
      "Uni-Assist değerlendirme süreci",
      "Başvuru ücreti yok"
    ],
    campusFacilities: [
      "Köln şehir merkezinde kampüs",
      "5.4 milyon ciltlik kütüphane sistemi",
      "5 Mükemmellik Kümesi",
      "Excellence Initiative üyesi",
      "300+ üniversite ortaklığı",
      "100+ öğrenci organizasyonu",
      "Üniversite hastanesi"
    ],
    scholarships: [
      "€300/ay üniversite bursları",
      "DAAD bursları",
      "Cologne Üniversite Vakfı",
      "Performans odaklı ödüller",
      "Engellilik destekleri"
    ]
  },
  {
    id: 17,
    name: "Technical University of Darmstadt",
    city: "Darmstadt",
    description: "1877'de kurulan, Avrupa'nın ilk otonom üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "Fizik", "Mimarlık"],
    ranking: 3,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1877,
    students: 25000,
    internationalStudents: 4500,
    coordinates: "49.8728,8.6512",
    address: "Karolinenplatz 5, 64289 Darmstadt, Germany",
    faculties: ["Mimarlık", "Biyoloji", "Kimya", "İnşaat/Çevre", "Bilgisayar", "Elektrik", "Tarih/Sosyal", "İnsan Bilimleri", "Hukuk/Ekonomi", "Malzeme/Yer", "Matematik", "Makine", "Fizik"],
    admissionRequirements: [
      "Almanca Abitur veya dengi",
      "Kabul oranı %29 (orta seçici)",
      "İngilizce programlar için IELTS 7.0+",
      "Online TUCaN sistemi başvurusu",
      "APS sertifikası (bazı ülkeler)",
      "Studienkolleg hazırlık kursları"
    ],
    campusFacilities: [
      "5 kampüs lokasyonu",
      "164 bina 600 acre alanda",
      "August-Euler Airfield",
      "Dünyanın ilk elektrik mühendisliği fakültesi",
      "UNITE! Avrupa Üniversitesi ağı",
      "Excellence Cluster",
      "Modern araştırma merkezleri"
    ],
    scholarships: [
      "DAAD bursları",
      "Hükümet destekli programlar",
      "Özel vakıf bursları",
      "Kayıt ücreti €220/dönem",
      "Yaşam maliyeti €9,000-13,000/yıl"
    ]
  },
  {
    id: 19,
    name: "TU Dortmund University",
    city: "Dortmund",
    description: "1968'de kurulan genç ve dinamik teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Sosyal Bilimler", "Öğretmenlik"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1968,
    students: 34600,
    internationalStudents: 3806,
    coordinates: "51.4928,7.4125",
    address: "August-Schmidt-Straße 4, 44227 Dortmund, Germany",
    faculties: ["Matematik", "Fizik", "Informatik", "Elektrik", "Makine", "İnşaat", "Biyomedikal", "Kimya", "Eğitim", "Rehabilitasyon", "Sosyal", "Kültürel", "Spor", "Psikoloji", "Felsefe/Teoloji", "Sanat/Spor"],
    admissionRequirements: [
      "My Assist online portal başvurusu",
      "Kabul oranı %59",
      "GRE önerilir (zorunlu değil)",
      "Numerus Clausus rekabetçi programlarda",
      "Almanca dil yeterlik belgesi",
      "Sosyal katkı ücreti ~€350/dönem"
    ],
    campusFacilities: [
      "Kuzey ve Güney kampüsü",
      "H-Bahn otomatik monoray sistemi",
      "735 koltuklu ana auditorium",
      "Merkezi kütüphane",
      "Teknoloji transfer merkezi",
      "Çok sayıda kafeterya",
      "Öğrenci yurdu imkanları"
    ],
    scholarships: [
      "DAAD bursları",
      "Deutschlandstipendium",
      "Erasmus+ programları",
      "NRW eyalet bursları",
      "Araştırma asistanlığı bursları"
    ]
  },
  {
    id: 20,
    name: "TU Dresden",
    city: "Dresden",
    description: "1828'de kurulan Excellence University",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Sosyal Bilimler"],
    ranking: 1,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1828,
    students: 32000,
    internationalStudents: 6400,
    coordinates: "51.0269,13.7275",
    address: "01069 Dresden, Germany",
    faculties: ["Matematik", "Fizik", "Kimya", "Biyoloji", "Psikoloji", "Hukuk", "Ekonomi", "Eğitim", "Makine", "Elektrik", "Bilgisayar", "İnşaat", "Çevre", "Ulaştırma", "Mimarlık", "Tıp", "Orman"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "Kabul oranı %46",
      "Almanca programlar için TestDaF/DSH",
      "İngilizce programlar için TOEFL 80+/IELTS 6.0+",
      "Başvuru ücreti €75",
      "Uni-assist değerlendirme"
    ],
    campusFacilities: [
      "5 okul altında 17 fakülte",
      "SLUB - 90+ milyon kaynaklı kütüphane",
      "Clusters of Excellence",
      "TU9 üyesi",
      "5 botanik bahçesi",
      "Üniversite hastanesi",
      "4,000 sanat eseri koleksiyonu"
    ],
    scholarships: [
      "DAAD bursları (€934/ay)",
      "Deutschlandstipendium (€300/ay)",
      "Heinrich Böll Scholarship",
      "Erasmus+ hareketlilik hibesi",
      "STIBET programı",
      "Motivasyon bursları"
    ]
  },
  {
    id: 21,
    name: "University of Duisburg-Essen",
    city: "Duisburg/Essen",
    description: "2003'te birleşen, Almanya'nın en genç büyük üniversitelerinden",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 301,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 2003,
    students: 43000,
    internationalStudents: 8600,
    coordinates: "51.4269,6.8000",
    address: "Universitätsstraße 2, 45141 Essen, Germany",
    faculties: ["Mühendislik", "Doğa Bilimleri", "Fizik", "Kimya", "Bilgisayar", "İşletme", "Ekonomi", "Beşeri Bilimler", "Tıp", "Sosyal Bilimler", "Eğitim", "Sanat/Kültür"],
    admissionRequirements: [
      "Alemanca Abitur dengi belge",
      "Lisans için 2.5 GPA, Yüksek lisans için 80-90%",
      "Almanca programlar için dil yeterliliği",
      "İngilizce programlar için TOEFL 100+/IELTS 7.5+",
      "Uluslararası öğrenciler için Mayıs 1/Kasım 1",
      "Dönem katkısı €312.40"
    ],
    campusFacilities: [
      "İki kampüs arasında servis otobüsü",
      "Fizik Almanya'da 1. sırada",
      "Nanosicence araştırma tesisleri",
      "Üniversite hastanesi",
      "Çoklu kütüphane sistemi",
      "100+ uluslararası ortaklık",
      "Botanik bahçesi"
    ],
    scholarships: [
      "Deutschlandstipendium",
      "UDE-Stipendium (€300/ay)",
      "Uluslararası öğrenci bursları",
      "DAAD bursları",
      "Campus konutu €250-450/ay"
    ]
  },
  {
    id: 22,
    name: "Heinrich Heine University Düsseldorf",
    city: "Düsseldorf",
    description: "1965'te kurulan, şairin adını taşıyan modern üniversite",
    programs: ["Tıp", "Hukuk", "İşletme", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1965,
    students: 36000,
    internationalStudents: 4680,
    coordinates: "51.1914,6.7944",
    address: "Universitätsstraße 1, 40225 Düsseldorf, Germany",
    faculties: ["Tıp", "Beşeri Bilimler", "Matematik/Doğa Bilimleri", "İşletme/Ekonomi", "Hukuk"],
    admissionRequirements: [
      "Kabul oranı %45",
      "IELTS/TOEFL kabul edilir",
      "Ocak 15 yaz/Temmuz 15 kış dönem",
      "Tavsiye mektupları gerekli",
      "85+ farklı kurs seçeneği",
      "Dönem hizmet ücreti €230"
    ],
    campusFacilities: [
      "Bilk bölgesinde üçgen kampüs",
      "Üniversite hastanesi ile birleşik",
      "130 hektar toplam alan",
      "6,000+ türde botanik bahçesi",
      "Student Service Center",
      "100+ spor çeşidi",
      "Üniversite orkestrası"
    ],
    scholarships: [
      "Üniversite ve dış kuruluş bursları",
      "DAAD bursları",
      "Leadership for Africa",
      "Fulbright programı",
      "Almanya'da top 5 burs sağlayıcı",
      "Aylık yaşam maliyeti €800-1,100"
    ]
  },
  {
    id: 22,
    name: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
    city: "Erlangen/Nürnberg",
    description: "1743'te kurulan, Bavyera'nın ikinci en büyük üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri", "İşletme"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1743,
    students: 41000,
    internationalStudents: 8200,
    coordinates: "49.5967,11.0047",
    address: "Freyeslebenstrasse 1, 91058 Erlangen, Germany",
    faculties: ["Beşeri/Sosyal/İlahiyat", "İşletme/Ekonomi/Hukuk", "Tıp", "Doğa Bilimleri", "Mühendislik"],
    admissionRequirements: [
      "280 derece programı",
      "39+ İngilizce yüksek lisans",
      "50+ uluslararası öğrenci programı",
      "Minimal €150/dönem ücret",
      "Excellence Initiative statüsü",
      "200+ partner üniversite"
    ],
    campusFacilities: [
      "3 şehir kampüsü (Erlangen/Nürnberg/Fürth)",
      "5.4 milyon ciltlik kütüphane",
      "25 klinikle üniversite hastanesi",
      "Engineering Advanced Materials kümeleri",
      "Zollhof teknoloji inkübatörü",
      "Max Planck ortaklıkları",
      "€210+ milyon araştırma finansmanı"
    ],
    scholarships: [
      "DAAD Excellence bursları",
      "Deutschlandstipendium",
      "Bavyera eyalet bursları",
      "Endüstri işbirliği bursları",
      "Uluslararası değişim programları"
    ]
  },
  {
    id: 23,
    name: "Europa-Universität Flensburg",
    city: "Flensburg",
    description: "1946'da kurulan, Danimarka sınırındaki Avrupa odaklı üniversite",
    programs: ["Eğitim", "Avrupa Çalışmaları", "Çevre Bilimi", "Mühendislik"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1946,
    students: 5000,
    internationalStudents: 403,
    coordinates: "54.7850,9.4306",
    address: "Auf dem Campus 1, 24943 Flensburg, Germany",
    faculties: ["Sanat", "Eğitim", "Mühendislik"],
    admissionRequirements: [
      "Online başvuru portalı",
      "İngilizce yeterlik belgesi",
      "Öğretmen eğitimi odaklı",
      "Avrupa çalışmaları uzmanlığı",
      "80+ partner üniversite",
      "Yönetim ücreti €276.90 + €60 kayıt"
    ],
    campusFacilities: [
      "Flensburg Fjord manzaralı kampüs",
      "Audimax konferans salonu",
      "Merkezi kütüphane",
      "Spor ve fitness merkezi",
      "Öğrenci yurdu",
      "Kampüs kreşi",
      "Yüzme havuzu ve şapel"
    ],
    scholarships: [
      "DAAD bursları",
      "Avrupa değişim programları",
      "Erasmus+ finansmanı",
      "Uluslararası öğrenci destekleri",
      "Aylık minimum €850 bütçe"
    ]
  },
  {
    id: 24,
    name: "Goethe University Frankfurt",
    city: "Frankfurt am Main",
    description: "1914'te kurulan, Almanya'nın ilk 'vatandaş üniversitesi'",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1914,
    students: 48000,
    internationalStudents: 7600,
    coordinates: "50.1278,8.6631",
    address: "Theodor-W.-Adorno-Platz 1, 60323 Frankfurt am Main, Germany",
    faculties: ["Hukuk", "Ekonomi/İşletme", "Sosyal Bilimler", "Modern Diller", "Dilbilim/Kültür/Sanat", "Tıp", "Doğa Bilimleri", "Biyokimya/Kimya/Eczacılık", "Protestan İlahiyat", "Katolik İlahiyat", "Felsefe/Tarih", "Eğitim", "Psikoloji", "Jeobilimler/Coğrafya", "Bilgisayar/Matematik"],
    admissionRequirements: [
      "Kabul oranı ~%77",
      "Başvuru ücreti €75/€30",
      "Online üniversite portalı",
      "Program bazında özel şartlar",
      "136 ülkeden uluslararası öğrenci",
      "Dönem katkısı €300-€900"
    ],
    campusFacilities: [
      "4 ana kampüs (Westend ana merkez)",
      "Tarihi IG Farben Binası",
      "Riedberg doğa bilimleri kampüsü",
      "Niederrad tıp kampüsü",
      "Senckenberg merkezi kütüphanesi",
      "Frankfurt School mirası",
      "Avrupa Merkez Bankası yakınlığı"
    ],
    scholarships: [
      "DAAD bursları",
      "Aylık burslar uluslararası öğrencilere",
      "Doktora başlangıç bursları (€1,550/ay)",
      "Erasmus+ finansmanı",
      "Leadership for Africa",
      "Fulbright programları"
    ]
  },
  {
    id: 27,
    name: "European University Viadrina Frankfurt (Oder)",
    city: "Frankfurt (Oder)",
    description: "1991'de yeniden kurulan, Alman-Polonya sınırındaki Avrupa üniversitesi",
    programs: ["Hukuk", "İşletme", "Kültürel Çalışmalar", "Avrupa Çalışmaları"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1991,
    students: 6000,
    internationalStudents: 2100,
    coordinates: "52.3471,14.5506",
    address: "Große Scharrnstraße 59, 15230 Frankfurt (Oder), Germany",
    faculties: ["Hukuk", "Ekonomi/İşletme Yönetimi", "Kültürel Çalışmalar"],
    admissionRequirements: [
      "Almanya'nın en küçük üniversitelerinden",
      "Uluslararası öğrenci oranı %25-40",
      "90+ ülkeden öğrenci",
      "Sınır ötesi işbirliği",
      "10 dakika yürüyüşle Almanya-Polonya",
      "250+ partner üniversite"
    ],
    campusFacilities: [
      "Ana bina Große Scharrnstraße",
      "Collegium Polonicum (Slubice/Polonya)",
      "Sınır ötesi kampüs konsepti",
      "Avrupa entegrasyonu odaklı",
      "Adam Mickiewicz Üniversitesi ortaklığı",
      "Frankfurt Institut of Transformational Studies"
    ],
    scholarships: [
      "DAAD Avrupa çalışmaları bursları",
      "Sınır araştırmaları bursları",
      "Transformasyon ekonomisi destekleri",
      "Erasmus+ değişim programları",
      "Avrupa çalışmaları özel bursları"
    ]
  },
  {
    id: 28,
    name: "TU Bergakademie Freiberg",
    city: "Freiberg",
    description: "1765'te kurulan, dünyanın en eski maden bilim üniversitesi",
    programs: ["Maden Mühendisliği", "Metalurji", "Jeoloji", "Malzeme Bilimi"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1765,
    students: 3471,
    internationalStudents: 1423,
    coordinates: "50.9167,13.3333",
    address: "Prüferstraße 4, 09599 Freiberg, Germany",
    faculties: ["Jeobilimler/Jeomühendislik", "Matematik/Bilgisayar/Doğa", "Malzeme Bilimi/Teknoloji", "Mühendislik", "Ekonomi", "Profesörlük (6. Fakülte)"],
    admissionRequirements: [
      "67 derece programı",
      "STEM programlarında %85 kayıt",
      "Çift diploma anlaşmaları",
      "Çin, Fransa, Gana, İtalya, Polonya",
      "Doktora derecelerinin %30'u yabancı",
      "Bilimsel dalış sertifikası imkanı"
    ],
    campusFacilities: [
      "Ore Dağları'nda kampüs",
      "Schlossplatzquartier merkezi",
      "Tarihi mimari + modern tesisler",
      "İndium ve Germanyum keşif yeri",
      "Alexander von Humboldt eski öğrenci",
      "1702'den beri burs geçmişi"
    ],
    scholarships: [
      "BAföG devlet desteği",
      "Burs vakfı programları",
      "Çalışarak okuma imkanları",
      "Tarihi vakıf bursları",
      "Uluslararası öğrenci destekleri"
    ]
  },
  {
    id: 35,
    name: "University of Hamburg",
    city: "Hamburg",
    description: "1919'da kurulan, Hamburg'un en büyük araştırma üniversitesi",
    programs: ["Hukuk", "İşletme", "Tıp", "Beşeri Bilimler"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1919,
    students: 44000,
    internationalStudents: 4400,
    coordinates: "53.5683,9.9755",
    address: "Edmund-Siemers-Allee 1, 20146 Hamburg, Germany",
    faculties: ["Hukuk", "İşletme/Ekonomi/Sosyal", "Tıp", "Eğitim", "Beşeri Bilimler", "Matematik/Doğa", "Psikoloji/İnsan Hareketi", "Hamburg İş Okulu"],
    admissionRequirements: [
      "10,000 yeni öğrenci/yıl",
      "Numerus clausus programlar için GPA seçici",
      "149 farklı ana alan",
      "180+ derece programı",
      "Almanca dil yeterliliği",
      "Bazı İngilizce yüksek lisans programları"
    ],
    campusFacilities: [
      "Von-Melle-Park ana kampüsü",
      "Botanik bahçesi (Klein Flottbek)",
      "Hamburg Gözlemevi",
      "7 işbirliği araştırma merkezi",
      "4 Mükemmellik Kümesi (2019'dan beri)",
      "Zooloji ve Mineraloji müzeleri",
      "DESY tesisleri ortaklığı"
    ],
    scholarships: [
      "Uluslararası öğrenci bursları",
      "DAAD bursları",
      "Research assistantship programs",
      "Excellence University status benefits",
      "Çok sayıda external funding opportunities"
    ]
  },
  {
    id: 71,
    name: "University of Stuttgart",
    city: "Stuttgart",
    description: "1829'da kurulan, TU9 üyesi teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Mimarlık", "İnsan Bilimleri"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1829,
    students: 20898,
    internationalStudents: 5580,
    coordinates: "48.7425,9.1062",
    address: "Pfaffenwaldring 5c, 70569 Stuttgart, Germany",
    faculties: ["Mimarlık/Kent Planlama", "İnşaat/Çevre", "Kimya", "Enerji/Süreç/Bio", "Bilgisayar/Elektrik", "Havacılık/Jeodezi", "Mühendislik Tasarım", "Matematik/Fizik", "Beşeri Bilimler", "Yönetim/Ekonomi/Sosyal"],
    admissionRequirements: [
      "Minimum 2.8 GPA (4.0 üzerinden)",
      "Kabul oranı ~%53",
      "8-10% uluslararası lisans kabul",
      "IELTS skorları gerekli",
      "C@MPUS başvuru sistemi",
      "167 toplam program"
    ],
    campusFacilities: [
      "İki ana kampüs (Stadtmitte/Vaihingen)",
      "Merkezi kütüphane + 117 enstitü kütüphanesi",
      "Combined Heating and Power plant",
      "5 öğrenci yurdu (~3,000 daire)",
      "Modern spor tesisleri",
      "S-Bahn bağlantısı (Universität durağı)"
    ],
    scholarships: [
      "DAAD (ana burs sağlayıcı)",
      "Home country scholarships",
      "€213.50-€300/hafta yurt ücretleri",
      "International Office destekleri",
      "Endüstri işbirlikleri"
    ]
  },
  {
    id: 45,
    name: "Karlsruhe Institute of Technology (KIT)",
    city: "Karlsruhe",
    description: "2009'da kurulan (1825 köklü), Excellence University",
    programs: ["Mühendislik", "Doğa Bilimleri", "Bilgisayar", "Ekonomi"],
    ranking: 1,
    worldRanking: 124,
    tuition: "EU dışından €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 2009,
    students: 25100,
    internationalStudents: 6000,
    coordinates: "49.0097,8.4044",
    address: "P.O. Box 3640, 76021 Karlsruhe, Germany",
    faculties: ["Mimarlık", "İnşaat/Jeoloji/Ekoloji", "Kimya/Süreç", "Kimya/Biyoloji", "Bilgisayar", "Ekonomi", "Elektrik/IT", "Beşeri/Sosyal", "Matematik", "Makine", "Fizik"],
    admissionRequirements: [
      "Kabul oranı %26 (çok seçici)",
      "Lisans 3 hafta, Yüksek lisans 4-5 hafta süre",
      "Kış dönemi: 15 Temmuz",
      "Yaz dönemi: 15 Ocak",
      "İngilizce programlar mevcut",
      "Excellence University statüsü"
    ],
    campusFacilities: [
      "Kampüs Kuzey + Kampüs Güney",
      "Ana Alman nükleer araştırma merkezi",
      "KATRIN nötrino deneyi",
      "€900 milyon yıllık bütçe",
      "120+ uzman araştırma enstitüsü",
      "10 tam donanımlı bilgisayar odası"
    ],
    scholarships: [
      "DAAD bursları",
      "Excellence Initiative finansmanı",
      "Carl Benz School programları",
      "HECTOR School business programları",
      "Uluslararası değişim bursları"
    ]
  },
  {
    id: 30,
    name: "University of Göttingen",
    city: "Göttingen",
    description: "1737'de kurulan, 47 Nobel ödüllü ile ilişkili",
    programs: ["Doğa Bilimleri", "Tıp", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 111,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1737,
    students: 28000,
    internationalStudents: 3080,
    coordinates: "51.5339,9.9386",
    address: "Wilhelmsplatz 1, 37073 Göttingen, Germany",
    faculties: ["Doğa Bilimleri (Kimya/Biyoloji/Fizik/Matematik)", "Tıp", "Beşeri/Sosyal", "Hukuk", "Ekonomi", "Tarım/Beslenme/Çevre", "Orman/Ekoloji", "Jeobilim/Coğrafya", "İlahiyat"],
    admissionRequirements: [
      "210+ derece programı",
      "%11 uluslararası öğrenci",
      "535 profesör",
      "U15 araştırma üniversiteleri üyesi",
      "Göttingen Campus ittifakı",
      "7 araştırma merkezi ortaklığı"
    ],
    campusFacilities: [
      "Merkezi kampüs şehir merkezi yakını",
      "Güney matematik/bilgisayar fakültesi",
      "Kuzey doğa bilimleri merkezi",
      "Botanik bahçeleri",
      "Max Planck enstitüleri yakınlığı",
      "Merkezi kütüphane",
      "UNESCO Dünya Mirası şehir"
    ],
    scholarships: [
      "DAAD bursları",
      "U15 araştırma bursları",
      "Max Planck ortaklık bursları",
      "Göttingen Campus fonları",
      "Uluslararası değişim programları"
    ]
  },
  {
    id: 78,
    name: "University of Würzburg",
    city: "Würzburg",
    description: "1402'de kurulan, Röntgen'in X-ışını keşfettiği yer",
    programs: ["Tıp", "Doğa Bilimleri", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 167,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1402,
    students: 26787,
    internationalStudents: 1000,
    coordinates: "49.7832,9.9726",
    address: "Sanderring 2, 97070 Würzburg, Germany",
    faculties: ["Protestan İlahiyat", "Katolik İlahiyat", "Hukuk", "Ekonomi/İşletme", "Tıp", "Felsefe/Tarih", "Sosyal/Davranış", "Modern Diller", "Kültür", "Matematik/Fizik", "Kimya/Eczacılık", "Biyoloji", "Jeobilimler", "Psikoloji/Bilgisayar"],
    admissionRequirements: [
      "280 derece programı",
      "483 profesör",
      "U15 araştırma üniversiteleri",
      "14 Nobel ödüllü ilişkisi",
      "Coimbra Group üyesi",
      "€162.1 milyon dış fon"
    ],
    campusFacilities: [
      "Hubland Kampüsü (111 hektar)",
      "Eski Şehir tarihi binalar",
      "Tıp Kampüsü (Grombühl)",
      "Botanik Bahçesi (17. yy)",
      "29 ERC hibesi",
      "11 Leibniz Ödülü",
      "2 Mükemmellik Kümesi"
    ],
    scholarships: [
      "Uluslararası öğrenci burs programları",
      "4 Lisansüstü Okul",
      "Almanca dil kursları",
      "DAAD bursları",
      "Research excellence funding"
    ]
  },
  {
    id: 55,
    name: "University of Mannheim",
    city: "Mannheim",
    description: "1967'de kurulan, Almanya'da İşletme #1",
    programs: ["İşletme", "Ekonomi", "Sosyal Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 134,
    tuition: "Uluslararası €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 1967,
    students: 11640,
    internationalStudents: 1700,
    coordinates: "49.4836,8.4630",
    address: "L 1, 1 (Entrance B), 68161 Mannheim, Germany",
    faculties: ["İşletme Yönetimi", "Ekonomi", "Sosyal Bilimler", "Hukuk", "Beşeri Bilimler"],
    admissionRequirements: [
      "Kabul oranı %20-35 (seçici)",
      "Ücretsiz başvuru",
      "Yaz ve Kış dönem kabulü",
      "80+ lisans programı",
      "62+ toplam kurs",
      "APS sertifikası (Hindistan)"
    ],
    campusFacilities: [
      "Mannheim Sarayı'nda (1720-1760)",
      "6 hektar kampüs, 440m cephe",
      "Mannheim Business School (MBS)",
      "GESS Lisansüstü Okulu",
      "50+ öğrenci organizasyonu",
      "82 spor branşı",
      "Kampüs merkezinde konum"
    ],
    scholarships: [
      "Deutschland Scholarship",
      "DAAD Scholarship (€1,000)",
      "Konrad-Adenauer-Stiftung",
      "ASEM-DUO Exchange Grant",
      "Baden-Württemberg Scholarship",
      "~200 öğrenci/yıl burs alır"
    ]
  },
  {
    id: 49,
    name: "University of Konstanz",
    city: "Konstanz",
    description: "1966'da kurulan, 'Constance Gölü'nde Küçük Harvard'",
    programs: ["Doğa Bilimleri", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 167,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1966,
    students: 11500,
    internationalStudents: 1150,
    coordinates: "47.6900,9.1880",
    address: "Universitätsstraße 10, D-78464 Konstanz, Germany",
    faculties: ["Doğa Bilimleri", "Beşeri Bilimler", "Hukuk/Ekonomi/Siyaset"],
    admissionRequirements: [
      "100+ kurs programı",
      "100 ülkeden öğrenci",
      "Excellence University statüsü",
      "Times Under 50 List #7 (2016)",
      "İsviçre sınırından 4 km",
      "Constance Gölü kıyısında"
    ],
    campusFacilities: [
      "90,000 m² Gießberg kampüsü",
      "Mainauwald ormanı içinde",
      "24 saat açık kütüphane",
      "Botanik bahçesi",
      "2 yaya/bisiklet köprüsü",
      "Almanya'nın en güneyindeki üniversite",
      "Gölö manzaralı kampüs"
    ],
    scholarships: [
      "Excellence University fonları",
      "DAAD bursları",
      "220+ Avrupa ortaklığı",
      "Harvard/Yale işbirlikleri",
      "Uluslararası değişim programları",
      "Balsillie School ortaklığı"
    ]
  },
  {
    id: 34,
    name: "University of Tübingen",
    city: "Tübingen",
    description: "1477'de kurulan, Excellence University",
    programs: ["Tıp", "Hukuk", "İlahiyat", "Beşeri Bilimler"],
    ranking: 1,
    worldRanking: 150,
    tuition: "Uluslararası €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 1477,
    students: 27665,
    internationalStudents: 4100,
    coordinates: "48.5200,9.0592",
    address: "Geschwister-Scholl-Platz, 72074 Tübingen, Germany",
    faculties: ["Protestan İlahiyat", "Katolik İlahiyat", "Hukuk", "Ekonomi/İşletme", "Tıp", "Felsefe/Tarih", "Sosyal/Davranış", "Modern Diller", "Kültür", "Matematik/Fizik", "Kimya/Eczacılık", "Biyoloji", "Jeobilimler", "Psikoloji/Bilgisayar"],
    admissionRequirements: [
      "200 çalışma programı",
      "450+ profesör, 2,000 asistan",
      "11 Nobel ödüllü ilişkisi",
      "4+ dönem Almanca gerekli",
      "Excellence University statüsü",
      "€199.80/dönem ek ücret"
    ],
    campusFacilities: [
      "Tarihi merkez (Beşeri bilimler)",
      "Morgenstelle Kampüsü (Doğa bilimleri)",
      "Klinikum (Tıp hastanesi)",
      "Cyber Valley (AI konsorsiyumu)",
      "Waldhäuser Ost yurdu (1,700 oda)",
      "Französisches Viertel yurdu (500 oda)",
      "UNESCO Dünya Mirası şehir"
    ],
    scholarships: [
      "DAAD bursları",
      "Excellence University funding",
      "Cyber Valley AI bursları",
      "Uluslararası değişim programları",
      "Hochschulsport facilities",
      "Research excellence grants"
    ]
  },
  {
    id: 66,
    name: "University of Regensburg",
    city: "Regensburg",
    description: "1962'de kurulan, Papa Benedict XVI'nın eski üniversitesi",
    programs: ["İlahiyat", "Hukuk", "Tıp", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1962,
    students: 21000,
    internationalStudents: 1800,
    coordinates: "48.9922,12.0903",
    address: "Universitätsstraße 31, 93053 Regensburg, Germany",
    faculties: ["Katolik İlahiyat", "Hukuk", "İşletme/Ekonomi/YBS", "Tıp", "Felsefe/Sanat/Tarih", "Psikoloji/Eğitim/Spor", "Dil/Edebiyat/Kültür", "Matematik", "Fizik", "Biyoloji/Preklinik", "Kimya/Eczacılık"],
    admissionRequirements: [
      "158 disiplin programa",
      "90 ülkeden öğrenci",
      "%8 uluslararası öğrenci",
      "312 profesör",
      "13:1 öğrenci-öğretim üyesi oranı",
      "%60 kadın öğrenci"
    ],
    campusFacilities: [
      "Merkezi kampüs (150 hektar)",
      "Tuna Nehri'nin güneyinde",
      "Eski Şehir'e 15 dk otobüs",
      "Büyük merkezi Mensa",
      "3.15 milyon kitap kütüphane",
      "360 partner üniversite",
      "UNESCO Dünya Mirası şehir"
    ],
    scholarships: [
      "DAAD bursları",
      "Almanca yeterlik kursları",
      "360 partner üniversite değişim",
      "Papa Benedict XVI mirası",
      "Uluslararası ofis destekleri",
      "Bavyera eyalet bursları"
    ]
  },
  {
    id: 36,
    name: "Technical University of Berlin (TU Berlin)",
    city: "Berlin",
    description: "1879'da kurulan, TU9 üyesi teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Bilgisayar", "İnsan Bilimleri"],
    ranking: 2,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1879,
    students: 43000,
    internationalStudents: 10000,
    coordinates: "52.5119,13.3269",
    address: "Straße des 17. Juni 135, 10623 Berlin, Germany",
    faculties: ["Beşeri/Eğitim", "Matematik/Doğa", "Süreç Bilimleri", "Elektrik/Bilgisayar", "Makine/Ulaştırma", "Planlama/İnşaat/Çevre", "Ekonomi/Yönetim"],
    admissionRequirements: [
      "150+ derece programı",
      "20 İngilizce program",
      "110+ Almanca program",
      "%27 uluslararası öğrenci",
      "Minimum 2.7 GPA (değişim)",
      "A2 Almanca önerilir"
    ],
    campusFacilities: [
      "Ernst-Reuter-Platz merkez",
      "604,000 m² kampüs alanı",
      "Rosa Röhre (pembe boru) landmark",
      "Wedding/Dahlem ek lokasyonlar",
      "Berlin University Alliance",
      "Mükemmel ulaşım bağlantıları",
      "Brandenburg Kapısı yakınlığı"
    ],
    scholarships: [
      "DAAD bursları",
      "TU9 alliance benefits",
      "Berlin University Alliance",
      "Excellence University fonları",
      "Endüstri işbirliği bursları",
      "10 Nobel ödüllü mezun"
    ]
  },
  {
    id: 37,
    name: "University of Freiburg",
    city: "Freiburg im Breisgau",
    description: "1457'de kurulan, Almanya'nın 5. en eski üniversitesi",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri", "Beşeri Bilimler"],
    ranking: 2,
    worldRanking: 125,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1457,
    students: 24500,
    internationalStudents: 4459,
    coordinates: "47.9978,7.8426",
    address: "Friedrichstr. 39, 79098 Freiburg, Germany",
    faculties: ["İlahiyat", "Hukuk", "Tıp", "Felsefe", "Modern Diller", "Matematik/Doğa", "Beşeri Bilimler", "Uygulamalı Bilimler", "Çevre/Doğa Kaynakları", "Teknik", "Ekonomi/Davranış"],
    admissionRequirements: [
      "240 derece programı",
      "Kabul oranı ~%33",
      "120+ ülkeden öğrenci",
      "23 Nobel ödüllü ilişkisi",
      "440 profesör, 32 junior profesör",
      "2019-2023: 16 ERC hibesi"
    ],
    campusFacilities: [
      "3 büyük kampüs",
      "Üniversite Merkezi (tarihi merkez)",
      "Enstitüler Bölgesi (bilim fakülteleri)",
      "Mühendislik Kampüsü",
      "Üniversite Tıp Merkezi (1,600 yatak)",
      "Sürdürülebilirlik odağı (50+ profesörlük)",
      "EPICUR üniversite ittifakı"
    ],
    scholarships: [
      "Sürdürülebilirlik Sertifikası",
      "DAAD bursları",
      "219 milyon € 3. taraf fonlama (2023)",
      "EPICUR ortaklık bursları",
      "Uluslararası değişim programları",
      "Excellence funding opportunities"
    ]
  },
  {
    id: 31,
    name: "Justus Liebig University Giessen",
    city: "Giessen",
    description: "1607'de kurulan, modern tarım kimyasının beşiği",
    programs: ["Tarım", "Veteriner", "Tıp", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1607,
    students: 25000,
    internationalStudents: 1700,
    coordinates: "50.5833,8.6667",
    address: "Ludwigstrasse 23, 35390 Giessen, Germany",
    faculties: ["Hukuk", "Ekonomi/İşletme", "Sosyal/Kültür", "Tarih/Kültür", "Dil/Edebiyat/Kültür", "Psikoloji/Spor", "Matematik/Bilgisayar/Fizik/Coğrafya", "Biyoloji/Kimya", "Tarım/Beslenme/Çevre", "Veteriner Hekimliği", "Tıp"],
    admissionRequirements: [
      "100+ derece programı",
      "5,853 çalışan",
      "Excellence Initiative fonlaması (2006'dan beri)",
      "Justus von Liebig mirası",
      "Wilhelm Conrad Röntgen mezunu",
      "Çok disiplinli araştırma odağı"
    ],
    campusFacilities: [
      "Geleneksel kampüs yok - şehir içinde dağınık",
      "Üniversite Merkezi (Ludwigstrasse)",
      "Seltersberg Kampüsü (şehir dışı)",
      "Philosophikum II (şehir çeperi)",
      "Modern laboratuvarlar",
      "Biyomedikal Araştırma Merkezi",
      "Digital Campus sanal öğrenme"
    ],
    scholarships: [
      "DAAD bursları",
      "Excellence Strategy funding",
      "Uluslararası geliştirme araştırma bursları",
      "Doğu Avrupa çalışmaları fonları",
      "100+ derece programı seçeneği"
    ]
  },
  {
    id: 32,
    name: "University of Greifswald",
    city: "Greifswald",
    description: "1456'da kurulan, günümüz Almanya'nın 4. en eski üniversitesi",
    programs: ["İlahiyat", "Tıp", "Hukuk", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1456,
    students: 10300,
    internationalStudents: 1030,
    coordinates: "54.0979,13.3881",
    address: "Domstraße 11, 17489 Greifswald, Germany",
    faculties: ["İlahiyat", "Hukuk/Ekonomi", "Üniversite Tıbbı", "Sanat/Beşeri Bilimler", "Matematik/Doğa Bilimleri"],
    admissionRequirements: [
      "131 derece programı",
      "90+ ülkeden öğrenci",
      "13 sürekli eğitim kursu",
      "3 araştırma alanı odağı",
      "Baltık Denizi bölgesi araştırması",
      "One Health yaklaşımı"
    ],
    campusFacilities: [
      "Tarihi şehir merkezi kampüsü",
      "Berthold-Beitz-Platz Kampüsü",
      "Loefflerstraße Kampüsü",
      "Yeni doğu kampüsü (inşaat)",
      "€417 milyon kampüs yenileme (1991-2007)",
      "4 uluslararası araştırma enstitüsü",
      "Bisiklet dostu şehir (15 dk erişim)"
    ],
    scholarships: [
      "DAAD bursları",
      "Baltık araştırma bursları",
      "One Health program destekleri",
      "Uluslararası değişim programları",
      "90+ ülke ortaklık ağı"
    ]
  },
  {
    id: 40,
    name: "FernUniversität Hagen",
    city: "Hagen",
    description: "1974'te kurulan, Almanya'nın tek uzaktan eğitim üniversitesi",
    programs: ["İşletme", "Bilgisayar", "Psikoloji", "Hukuk"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1974,
    students: 76647,
    internationalStudents: 7665,
    coordinates: "51.3780,7.4945",
    address: "Universitätsstraße 11, 58097 Hagen, Germany",
    faculties: ["Beşeri/Sosyal Bilimler", "Psikoloji", "Matematik/Bilgisayar", "Ekonomi/İşletme", "Hukuk"],
    admissionRequirements: [
      "Açık kabul politikası",
      "Almanya'nın 2. en büyük üniversitesi",
      "Ortalama yaş 32",
      "%80 çalışan öğrenci",
      "%19 önceden derece sahibi",
      "50+ çalışma/araştırma merkezi"
    ],
    campusFacilities: [
      "A45/A46 karayolu yakınında kampüs",
      "13 Almanya kampüsü",
      "180+ partner üniversite",
      "Berlin, Münih, Leipzig merkezleri",
      "Moodle öğrenme platformu",
      "50+ Avrupa ve Doğu Avrupa merkezi",
      "Esnek hibrit öğrenme modeli"
    ],
    scholarships: [
      "BAföG uzaktan eğitim desteği",
      "Çalışan öğrenci bursları",
      "Uluslararası online programlar",
      "Avrupa/Doğu Avrupa merkez fonları",
      "Mesleki deneyim tabanlı kabul"
    ]
  },
  {
    id: 34,
    name: "Martin Luther University Halle-Wittenberg",
    city: "Halle",
    description: "1817'de birleşen, Luther'in adını taşıyan 500+ yaşında kökleri",
    programs: ["İlahiyat", "Doğa Bilimleri", "Beşeri Bilimler", "Tıp"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1817,
    students: 21000,
    internationalStudents: 2100,
    coordinates: "51.4858,11.9686",
    address: "Universitätsplatz 10, 06108 Halle (Saale), Germany",
    faculties: ["İlahiyat", "Hukuk/Ekonomi/İşletme", "Tıp", "Felsefe I", "Doğa Bilimleri II", "Doğa Bilimleri III", "Eğitim", "Mühendislik"],
    admissionRequirements: [
      "190+ program kursu",
      "110+ ülkeden öğrenci",
      "İlk 'modern' üniversite",
      "4 Nobel ödüllü öğretim üyesi",
      "Excellence Strategy kazananı",
      "200+ partner üniversite"
    ],
    campusFacilities: [
      "Universitätsplatz (Avrupa'nın en güzel)",
      "Weinberg Kampüsü (doğa bilimleri)",
      "Steintor Kampüsü (beşeri bilimler)",
      "Francke Vakfı (eğitim/ilahiyat)",
      "Leucorea Vakfı (Wittenberg)",
      "Akademik Orkestra (1779)",
      "Üniversite Korosu (1950)"
    ],
    scholarships: [
      "Center for Chiral Electronics (€64.5M)",
      "DAAD bursları",
      "Excellence Strategy fonları",
      "500+ yıl akademik gelenek bursları",
      "190-330€/ay yurt konaklama"
    ]
  },
  {
    id: 36,
    name: "HafenCity University Hamburg",
    city: "Hamburg",
    description: "2006'da kurulan, mimarlık ve kent gelişimine odaklanan tek üniversite",
    programs: ["Mimarlık", "İnşaat", "Kent Planlama", "Jeomatik"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 2006,
    students: 2500,
    internationalStudents: 250,
    coordinates: "53.5420,9.9967",
    address: "Henning-Voscherau-Platz 1, 20457 Hamburg, Germany",
    faculties: ["Mimarlık", "İnşaat Mühendisliği", "Jeodezi/Jeoinformatik", "Kent Planlama", "Kent Tasarım/Metropol Kültürü"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "100+ ülkeden öğrenci",
      "11 çifte diploma programı",
      "Almanya'nın tek 'yapılı çevre' üniversitesi",
      "MIT Media Lab ortaklığı",
      "REAP İngilizce yüksek lisans"
    ],
    campusFacilities: [
      "HafenCity bölgesi (en yeni kent gelişimi)",
      "Speicherstadt (UNESCO) yakınında",
      "Elbphilharmonie konsol salonu yakını",
      "Code Unique Architekten tasarım",
      "Modern rıhtım kampüsü",
      "Avrupa'nın en büyük şehir içi inşaat",
      "CityScienceLab araştırma merkezi"
    ],
    scholarships: [
      "DAAD bursları",
      "Franco-German University üyeliği",
      "SUNRISE Avrupa ittifakı",
      "MIT Media Lab işbirliği bursları",
      "Endüstri ortaklık programları"
    ]
  },
  {
    id: 37,
    name: "Hamburg University of Technology (TUHH)",
    city: "Hamburg",
    description: "1978'de kurulan, 'İnsanlık için Teknoloji' misyonu",
    programs: ["Mühendislik", "Doğa Bilimleri", "Teknoloji", "Lojistik"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1978,
    students: 7500,
    internationalStudents: 1500,
    coordinates: "53.4606,9.9695",
    address: "Am Schwarzenberg-Campus 1, 21073 Hamburg, Germany",
    faculties: ["İleri Malzemeler/Bio-Süreçler", "Havacılık/Denizcilik", "Siber Fiziksel/Tıp Sistemleri", "Çevre/Enerji", "Lojistik/Mobilite/Altyapı"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "Kabul oranı %44",
      "100+ profesör",
      "1,500 uluslararası çalışan",
      "İngilizce yüksek lisans programları",
      "Tutkusuz ücretsiz programlar"
    ],
    campusFacilities: [
      "Harburg tek kampüs",
      "15 bina park manzarası",
      "von Gerkan, Marg und Partner tasarım",
      "Tarihi Schwarzenberg kışla",
      "TuTech teknoloji transfer (1992)",
      "Graduate Academy (2013)",
      "Northern Institute of Technology"
    ],
    scholarships: [
      "DAAD bursları",
      "TuTech startup ekosistemi",
      "Almanya'nın en başarılı genç üniversitesi",
      "Endüstri bağlantı bursları",
      "Times Young University #92"
    ]
  },
  {
    id: 38,
    name: "Leibniz University Hannover",
    city: "Hannover",
    description: "1831'de kurulan, TU9 üyesi teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1831,
    students: 27200,
    internationalStudents: 4000,
    coordinates: "52.3819,9.7186",
    address: "Welfengarten 1, 30060 Hannover, Germany",
    faculties: ["Matematik/Fizik", "Doğa Bilimleri", "Hukuk", "Beşeri Bilimler", "Ekonomi/Yönetim", "Elektrik/Bilgisayar", "İnşaat/Çevre", "Makine", "Mimarlık"],
    admissionRequirements: [
      "190+ derece programı",
      "Kabul oranı %51",
      "357 profesör",
      "3,400+ akademik personel",
      "TU9 üyesi",
      "€700-900 aylık yaşam maliyeti"
    ],
    campusFacilities: [
      "Welfen Sarayı (ana bina)",
      "160 bina 322,700 m²",
      "4 mini-kampüs kümesi",
      "TIB - dünyanın en büyük bilim kütüphanesi",
      "100+ spor türü CAMPUSFit",
      "KletterCAMPUS tırmanış salonu",
      "City Railway erişimi"
    ],
    scholarships: [
      "DAAD bursları",
      "TU9 alliance benefits",
      "THE Impact #34 Clean Water",
      "Almanya ekonomisi top manager #7",
      "Quantum physics araştırma bursları"
    ]
  },
  {
    id: 45,
    name: "Ruprecht-Karls University Heidelberg",
    city: "Heidelberg",
    description: "1386'da kurulan, Almanya'nın en eski üniversitesi",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri", "Beşeri Bilimler"],
    ranking: 1,
    worldRanking: 87,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1386,
    students: 30000,
    internationalStudents: 5400,
    coordinates: "49.4103,8.7064",
    address: "Grabengasse 1, 69117 Heidelberg, Germany",
    faculties: ["İlahiyat", "Hukuk", "Felsefe", "Modern Diller", "Ekonomi/Sosyal", "Davranış/Kültür", "Matematik/Bilgisayar", "Kimya/Yer Bilimleri", "Fizik/Astronomi", "Biyobilimler", "Tıp (2 fakülte)"],
    admissionRequirements: [
      "160+ alan, 100+ disiplin",
      "Excellence University statüsü",
      "U15 araştırma üniversiteleri",
      "League of European Research Universities",
      "6.2 milyon basılı cilt kütüphane",
      "Frankfurt Havalimanı 40 dk"
    ],
    campusFacilities: [
      "Eski Şehir Kampüsü (tarihi merkez)",
      "Neuenheimer Feld (doğa bilimleri/tıp)",
      "Bergheim Kampüsü (sosyal bilimler)",
      "Heidelberg Kalesi yakınlığı",
      "Üniversite Müzesi",
      "Bunsen yanıcı keşif yeri",
      "Alman Romantizm beşiği"
    ],
    scholarships: [
      "Excellence University fonları",
      "DAAD bursları",
      "Almanya'nın en eski üniversite bursları",
      "Global branch office destekleri",
      "Coimbra Group bursları",
      "ruprecht gazetesi fonu"
    ]
  },
  {
    id: 40,
    name: "University of Hildesheim",
    city: "Hildesheim",
    description: "1946'da kurulan, 2003'ten beri Vakıf Üniversitesi",
    programs: ["Eğitim", "Kültür Çalışmaları", "Dilbilim", "Bilgisayar"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1946,
    students: 8600,
    internationalStudents: 860,
    coordinates: "52.1500,9.9500",
    address: "Universitätsplatz 1, 31141 Hildesheim, Germany",
    faculties: ["Eğitim/Sosyal Bilimler", "Kültür Çalışmaları/Estetik İletişim", "Dilbilim/Bilgi Bilimleri", "Matematik/Doğa/Ekonomi/Bilgisayar"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "Kabul oranı %41-46",
      "18 öğretmenlik alanı",
      "Almanca/İngilizce programlar",
      "Fransa/Güney Kore çifte diploma",
      "Data Analytics İngilizce program"
    ],
    campusFacilities: [
      "4 ana kampüs",
      "Bühler Kampüsü (eğitim bilimleri)",
      "Marienburger Höhe (dilbilim)",
      "Domäne Marienburg (kültür çalışmaları)",
      "1,500-2,000 öğrenci konaklama",
      "180+ partner üniversite",
      "14:1 öğrenci-öğretim üyesi oranı"
    ],
    scholarships: [
      "College of Minerva bursları",
      "Lore-Auerbach Scholarships",
      "European Quality Label (2007/2011)",
      "400+ yıllık değişim yeri",
      "250+ partner okul öğretmenlik",
      "50 ülke partnership ağı"
    ]
  },
  {
    id: 41,
    name: "University of Hohenheim",
    city: "Stuttgart",
    description: "1818'de kurulan, Stuttgart'ın en eski üniversitesi",
    programs: ["Tarım", "Doğa Bilimleri", "İşletme", "Ekonomi"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1818,
    students: 9000,
    internationalStudents: 1500,
    coordinates: "48.7094,9.2072",
    address: "Schloss Hohenheim 1, 70599 Stuttgart, Germany",
    faculties: ["Tarım Bilimleri, Beslenme ve Çevre Yönetimi", "Doğa Bilimleri", "İşletme/Ekonomi/Sosyal Bilimler"],
    admissionRequirements: [
      "35 lisans/yüksek lisans programı",
      "Kabul oranı %42",
      "100+ profesör",
      "%15 uluslararası öğrenci",
      "€3,000 lisansüstü program ücreti",
      "Almanca/İngilizce orientasyon testi"
    ],
    campusFacilities: [
      "Hohenheim Sarayı kampüsü",
      "160,021 m² kampüs alanı",
      "400+ bitki türü botanik bahçe",
      "Almanya'nın 7. en güzel kampüsü",
      "Alman Tarım Müzesi",
      "Zooloji/Veteriner Müzesi",
      "Tarih Müzesi"
    ],
    scholarships: [
      "ELLS (Euroleague for Life Sciences)",
      "HERMES network bursları",
      "257-270€/ay kampüs konaklama",
      "18 önde gelen Avrupa üniversitesi",
      "DAAD bursları",
      "Sürdürülebilir tarım araştırma fonları"
    ]
  },
  {
    id: 42,
    name: "TU Ilmenau",
    city: "Ilmenau",
    description: "1894'te kurulan, Thüringen'in tek teknik üniversitesi",
    programs: ["Elektrik/Enformatik", "Bilgisayar", "Makine", "Ekonomi"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1894,
    students: 4900,
    internationalStudents: 1700,
    coordinates: "50.6757,10.9367",
    address: "Ehrenbergstraße 29, 98693 Ilmenau, Germany",
    faculties: ["Elektrik/Enformatik", "Bilgisayar/Otomasyon", "Makine Mühendisliği", "Matematik/Doğa Bilimleri", "Ekonomi/Medya"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "11 çifte diploma programı",
      "100+ ülkeden öğrenci",
      "Kabul oranı %44",
      "MP3 inventor Prof. Brandenburg",
      "SUNRISE Avrupa ittifakı"
    ],
    campusFacilities: [
      "Thüringen Ormanı'nda (500m yükseklik)",
      "1894 tarihi + futuristik mimari",
      "Almanya'nın en güzel kampüslerinden",
      "Thüringen'in en büyük teknik kütüphanesi",
      "Kompakt yürüme mesafesi",
      "Ücretsiz bölgesel tren seyahati",
      "33km Erfurt güneyinde"
    ],
    scholarships: [
      "Franco-German University üyeliği",
      "SUNRISE Avrupa ittifakı",
      "MP3 teknoloji mirası bursları",
      "DAAD bursları",
      "Nano-mühendislik araştırma fonları",
      "Endüstri ortaklık spin-off destekleri"
    ]
  },
  {
    id: 49,
    name: "Friedrich-Schiller-Universität Jena",
    city: "Jena",
    description: "1558'de kurulan, Almanya'nın en eski üniversitelerinden biri",
    programs: ["Tıp", "Doğa Bilimleri", "Beşeri Bilimler", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1558,
    students: 17000,
    internationalStudents: 2550,
    coordinates: "50.9284,11.5837",
    address: "Fürstengraben 1, 07743 Jena, Germany",
    faculties: ["Teoloji", "Hukuk/Ekonomi", "Felsefe", "Sosyal/Davranış Bilimleri", "Matematik/Bilgisayar", "Fizik/Astronomi", "Kimya/Jeobilimler", "Biyoloji/Eczacılık", "Tıp", "Diller/Edebiyat/Kültür"],
    admissionRequirements: [
      "Lise diploması veya Abitur eşdeğeri",
      "Almanca dil yeterlik belgesi (DSH-2 veya TestDaF)",
      "İngilizce programlar için IELTS/TOEFL",
      "Bazı programlar için Numerus Clausus",
      "Motivasyon mektubu ve CV",
      "Online başvuru sistemi"
    ],
    campusFacilities: [
      "Merkezi kampüs şehir merkezi",
      "Modern araştırma laboratuvarları",
      "Thüringer Üniversite Kütüphanesi",
      "Botanik bahçesi (1794'ten beri)",
      "Optik Müzesi",
      "Öğrenci yaşam merkezleri",
      "Max Planck Enstitüleri yakınlığı"
    ],
    scholarships: [
      "DAAD bursları",
      "Thüringen eyalet bursları",
      "Deutschland Stipendium",
      "Araştırma asistanlığı bursları",
      "Optik ve fotonik araştırma fonları",
      "Doktora programı destekleri"
    ]
  },
  {
    id: 50,
    name: "RPTU Kaiserslautern-Landau",
    city: "Kaiserslautern",
    description: "1970'de kurulan, teknik odaklı araştırma üniversitesi",
    programs: ["Mühendislik", "Doğa Bilimleri", "Bilgisayar", "Matematik"],
    ranking: 3,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1970,
    students: 17000,
    internationalStudents: 3400,
    coordinates: "49.4217,7.7561",
    address: "Gottlieb-Daimler-Straße 47, 67663 Kaiserslautern, Germany",
    faculties: ["Mimarlık", "Biyoloji", "Kimya", "Elektrik/Bilgisayar", "Matematik", "Makine/Süreç", "Fizik", "Sosyal Bilimler", "Eğitim", "Beşeri Bilimler", "Doğa/Çevre", "Bilgisayar", "İşletme/Ekonomi", "Sosyal Çalışma", "Psikoloji", "Kültür/Medya"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "İngilizce programlar için TOEFL/IELTS",
      "Mühendislik için matematik ağırlıklı not",
      "Motivasyon mektubu",
      "Online başvuru portali"
    ],
    campusFacilities: [
      "İki kampüs (Kaiserslautern/Landau)",
      "Teknoloji transfer merkezi",
      "Fraunhofer enstitüleri ortaklığı",
      "Modern laboratuvarlar",
      "Merkezi kütüphane",
      "Startuplarımcılık merkezi",
      "Spor kompleksleri"
    ],
    scholarships: [
      "DAAD teknoloji bursları",
      "Deutschland Stipendium",
      "Rheinland-Pfalz eyalet bursları",
      "Endüstri işbirliği bursları",
      "Araştırma projesi destekleri",
      "Mühendislik özel fonları"
    ]
  },
  {
    id: 45,
    name: "Karlsruhe Institute of Technology (KIT)",
    city: "Karlsruhe",
    description: "1825/2009'da kurulan Excellence University, araştırma odaklı",
    programs: ["Mühendislik", "Doğa Bilimleri", "Teknoloji", "Ekonomi"],
    ranking: 1,
    worldRanking: 124,
    tuition: "EU dışından €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 1825,
    students: 25000,
    internationalStudents: 6000,
    coordinates: "49.0097,8.4044",
    address: "Kaiserstraße 12, 76131 Karlsruhe, Germany",
    faculties: ["Mimarlık", "İnşaat/Jeoloji/Çevre", "Kimya/Süreç Mühendisliği", "Kimya/Biyobilimler", "Bilgisayar", "Ekonomi/Yönetim", "Elektrik/Bilişim", "Beşeri/Sosyal Bilimler", "Matematik", "Makine Mühendisliği", "Fizik"],
    admissionRequirements: [
      "Kabul oranı %26 (çok seçici)",
      "Almanca dil yeterlik belgesi (C1)",
      "İngilizce programlar için TOEFL/IELTS",
      "Excellence University statüsü",
      "Güçlü akademik geçmiş",
      "Araştırma deneyimi tercih"
    ],
    campusFacilities: [
      "Campus Nord ve Campus Süd",
      "Karlsruhe Araştırma Merkezi",
      "KATRIN nötrino deneyi",
      "ANKA Synchrotron",
      "€900 milyon yıllık bütçe",
      "120+ araştırma enstitüsü",
      "Endüstri ile güçlü bağlar"
    ],
    scholarships: [
      "DAAD Excellence bursları",
      "Carl Benz School programları",
      "HECTOR School executive eğitim",
      "Excellence Initiative fonları",
      "Helmholtz Association destekleri",
      "Uluslararası araştırma bursları"
    ]
  },
  {
    id: 46,
    name: "University of Kassel",
    city: "Kassel",
    description: "1971'de kurulan, sosyal sorumluluk odaklı reform üniversitesi",
    programs: ["Mühendislik", "Sosyal Bilimler", "Sanat", "Eğitim"],
    ranking: 3,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1971,
    students: 25000,
    internationalStudents: 3500,
    coordinates: "51.3127,9.4797",
    address: "Mönchebergstraße 19, 34125 Kassel, Germany",
    faculties: ["Humanwissenschaften", "Geistes-/Kulturwissenschaften", "Gesellschaftswissenschaften", "Mathematik/Informatik", "Bauingenieur-/Umweltingenieurwesen", "Maschinenbau", "Elektrotechnik/Informatik"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "Sanat programları için portfolio",
      "Sosyal çalışma için staj deneyimi",
      "Motivasyon mektubu",
      "Bazı programlar için yetenek sınavı"
    ],
    campusFacilities: [
      "Holländischer Platz ana kampüs",
      "Wilhelmshöher Allee (mühendislik)",
      "AVZ (Genel Öğrenci Merkezi)",
      "Bergpark Wilhelmshöhe yakınlığı",
      "Heinrich Plett Spor Merkezi",
      "Moderne sanat atölyeleri",
      "Sosyal öğrenme alanları"
    ],
    scholarships: [
      "DAAD bursları",
      "Deutschland Stipendium",
      "Hessen eyalet bursları",
      "Sosyal çalışma özel fonları",
      "Sanat ve tasarım bursları",
      "Sürdürülebilirlik araştırma destekleri"
    ]
  },
  {
    id: 48,
    name: "University of Koblenz",
    city: "Koblenz",
    description: "2023'te kurulan, modern teknoloji odaklı genç üniversite",
    programs: ["Bilgisayar", "Eğitim Bilimleri", "Kültürel Çalışmalar", "Matematik"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 2023,
    students: 9000,
    internationalStudents: 1350,
    coordinates: "50.3569,7.5781",
    address: "Universitätsstraße 1, 56070 Koblenz, Germany",
    faculties: ["Bildungswissenschaften", "Philologie/Kulturwissenschaften", "Mathematik/Naturwissenschaften", "Informatik"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "İngilizce programlar için B2-C1",
      "Bilgisayar için matematik ağırlık",
      "uni-assist üzerinden başvuru",
      "Uluslararası öğrencilere garanti yurt"
    ],
    campusFacilities: [
      "Koblenz-Metternich kampüsü",
      "Moderne öğretim teknolojileri",
      "Bilgisayar ve bulut hizmetleri",
      "Merkezi kütüphane",
      "Rhine Nehri manzaralı konum",
      "4 yakın havalimanı erişimi",
      "Tarihî şehir merkezi yakınlığı"
    ],
    scholarships: [
      "DAAD yeni nesil bursları",
      "Rheinland-Pfalz eyalet destekleri",
      "Bilgisayar teknolojileri fonları",
      "Eğitim araştırmaları bursları",
      "Dijital dönüşüm projeleri",
      "Uluslararası öğrenci destekleri"
    ]
  },
  {
    id: 54,
    name: "Christian-Albrechts-Universität zu Kiel",
    city: "Kiel",
    description: "1665'te kurulan, Schleswig-Holstein'ın en büyük üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "Denizcilik", "Beşeri Bilimler"],
    ranking: 2,
    worldRanking: 618,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1665,
    students: 27000,
    internationalStudents: 2700,
    coordinates: "54.3367,10.1202",
    address: "Christian-Albrechts-Platz 4, 24118 Kiel, Germany",
    faculties: ["Teoloji", "Hukuk", "İşletme/Ekonomi/Sosyal", "Tıp", "Felsefe/Tarih", "Matematik/Doğa Bilimleri", "Tarım/Beslenme", "Mühendislik"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "Tıp için Numerus Clausus",
      "190+ derece programı",
      "Holstein Çalışma Ödülü fırsatı",
      "12 Nobel ödüllü mezun geleneği"
    ],
    campusFacilities: [
      "Westring ana kampüsü",
      "Ostufer mühendislik kampüsü",
      "Botanic Garden (1669'dan beri)",
      "GEOMAR Okyanus Araştırma Merkezi",
      "University Library Leibniz Caddesi",
      "Future Ocean Excellence Cluster",
      "Baltık Denizi kıyısında"
    ],
    scholarships: [
      "Holstein Çalışma Ödülü (€1000)",
      "DAAD bursları",
      "Future Ocean araştırma fonları",
      "Deniz bilimleri özel destekleri",
      "Excellence Initiative bursları",
      "Schleswig-Holstein eyalet bursları"
    ]
  },
  {
    id: 49,
    name: "University of Konstanz",
    city: "Konstanz",
    description: "1966'da kurulan Excellence University, 'Küçük Harvard'",
    programs: ["Doğa Bilimleri", "Beşeri Bilimler", "Hukuk", "Ekonomi"],
    ranking: 1,
    worldRanking: 167,
    tuition: "Uluslararası €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 1966,
    students: 11500,
    internationalStudents: 1725,
    coordinates: "47.6900,9.1880",
    address: "Universitätsstraße 10, 78464 Konstanz, Germany",
    faculties: ["Naturwissenschaften", "Geisteswissenschaften", "Politik/Recht/Wirtschaft"],
    admissionRequirements: [
      "Kabul oranı %25 (seçici)",
      "100+ derece programı",
      "100 ülkeden öğrenci kabul",
      "Excellence University statüsü",
      "Times Under 50 #7 (2016)",
      "İsviçre sınırından 4 km"
    ],
    campusFacilities: [
      "Constance Gölü kıyısında kampüs",
      "90,000 m² Gießberg alanı",
      "24 saat açık kütüphane",
      "Kinderhaus çocuk bakım merkezi",
      "Mainauwald ormanı içinde",
      "Almanya'nın en güneyindeki üniversite",
      "2 yaya köprüsü kampüs bağlantısı"
    ],
    scholarships: [
      "Excellence University fonları",
      "Harvard/Yale/Berkeley ortaklık bursları",
      "220+ Avrupa üniversite ortaklığı",
      "DAAD özel programları",
      "Balsillie School işbirliği",
      "250+ uluslararası değişim programı"
    ]
  },
  {
    id: 56,
    name: "Leipzig University",
    city: "Leipzig",
    description: "1409'da kurulan, Almanya'nın ikinci en eski üniversitesi",
    programs: ["Hukuk", "Tıp", "Beşeri Bilimler", "Doğa Bilimleri"],
    ranking: 2,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1409,
    students: 30000,
    internationalStudents: 3600,
    coordinates: "51.3397,12.3731",
    address: "Augustusplatz 10, 04109 Leipzig, Germany",
    faculties: ["Teoloji", "Hukuk", "Tarih/Sanat/Şarkiyat", "Filoloji", "Eğitim", "Sosyal/Felsefe", "Ekonomi/Yönetim", "Spor", "Tıp", "Matematik/Bilgisayar", "Biyobilimler/Eczacılık/Psikoloji", "Fizik/Jeobilimler", "Kimya/Mineraloji", "Veteriner Hekimliği"],
    admissionRequirements: [
      "Kabul oranı %10 (çok seçici)",
      "158+ derece programı",
      "Almanca C1-C2 seviyesi gerekli",
      "Tıp için Numerus Clausus",
      "€75 başvuru ücreti",
      "1-2 ay önce başvuru önerisi"
    ],
    campusFacilities: [
      "Augusteum ana binası (Hollandalı mimar)",
      "38 lokasyonda şehir geneli dağılım",
      "University Library (1543'ten beri)",
      "3 müze (Müzik, Antik Mısır)",
      "Botanik Bahçesi (Avrupa'nın 2.si)",
      "20+ DFG araştırma programı",
      "Paulinum Kilisesi"
    ],
    scholarships: [
      "DAAD bursları",
      "10+ Nobel ödüllü mezun geleneği",
      "DFG araştırma fonları",
      "Saksonya eyalet bursları",
      "Uluslararası doktora programları",
      "€650-850 aylık yaşam maliyeti"
    ]
  },
  {
    id: 51,
    name: "University of Lübeck",
    city: "Lübeck",
    description: "1964'te kurulan, tıp ve yaşam bilimleri odaklı üniversite",
    programs: ["Tıp", "Yaşam Bilimleri", "Bilgisayar", "Mühendislik"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1964,
    students: 4945,
    internationalStudents: 742,
    coordinates: "53.8414,10.6972",
    address: "Ratzeburger Allee 160, 23562 Lübeck, Germany",
    faculties: ["Medizin", "Technische/Naturwissenschaften"],
    admissionRequirements: [
      "Kabul oranı %40",
      "Almanca DSH-2/TestDaF gerekli",
      "İngilizce programlar için TOEFL/IELTS",
      "Tıp fakültesi #1 CHE sıralaması",
      "Minimum not şartı yok",
      "€75 başvuru ücreti"
    ],
    campusFacilities: [
      "UNESCO Dünya Mirası şehrinde",
      "Merkezi kompakt kampüs",
      "Schleswig-Holstein Üniversite Hastanesi",
      "Center for Brain, Behavior & Metabolism",
      "Graduate School Computing/Medicine",
      "Modern laboratuvarlar",
      "Harz Dağları yakınlığı"
    ],
    scholarships: [
      "DAAD tıp bilimleri bursları",
      "Schleswig-Holstein eyalet destekleri",
      "Yaşam bilimleri araştırma fonları",
      "Moleküler yaşam bilimleri bursları",
      "Enfeksiyon biyolojisi programları",
      "Biyomedikal mühendislik destekleri"
    ]
  },
  {
    id: 52,
    name: "Leuphana University Lüneburg",
    city: "Lüneburg",
    description: "1946'da kurulan, sürdürülebilirlik odaklı liberal arts üniversite",
    programs: ["Eğitim", "Sürdürülebilirlik", "İşletme", "Kültürel Çalışmalar"],
    ranking: 3,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1946,
    students: 9600,
    internationalStudents: 1440,
    coordinates: "53.2240,10.4007",
    address: "Universitätsallee 1, 21335 Lüneburg, Germany",
    faculties: ["Bildung", "Kulturwissenschaften", "Nachhaltigkeit", "Wirtschaftswissenschaften"],
    admissionRequirements: [
      "Liberal arts Studium Individuale",
      "Disiplinlerarası çalışma modeli",
      "College/Graduate School/Professional School",
      "İklim-nötr kampüs (2014'ten beri)",
      "Daniel Libeskind tasarımı merkezi bina",
      "Sürdürülebilirlik araştırma odağı"
    ],
    campusFacilities: [
      "Merkezi/Rotes Feld/Volgershall kampüsleri",
      "İklim-nötr sürdürülebilir kampüs",
      "Daniel Libeskind merkezi binası (2017)",
      "Üniversite shuttle otobüsü",
      "Bike-friendly ulaşım",
      "İnovatif öğretim metodları",
      "Humaniora-uygulama-sürdürülebilirlik"
    ],
    scholarships: [
      "DAAD sürdürülebilirlik bursları",
      "Niedersachsen eyalet destekleri",
      "Eğitim araştırmaları fonları",
      "Yönetim ve girişimcilik bursları",
      "Kültür ve toplum araştırma destekleri",
      "Public affairs program bursları"
    ]
  },
  {
    id: 59,
    name: "Otto von Guericke University Magdeburg",
    city: "Magdeburg",
    description: "1993'te kurulan, mühendislik ve tıp odaklı teknoloji üniversitesi",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1993,
    students: 13000,
    internationalStudents: 2600,
    coordinates: "52.1400,11.6430",
    address: "Universitätsplatz 2, 39106 Magdeburg, Germany",
    faculties: ["Maschinenbau", "Verfahrens-/Systemtechnik", "Elektrotechnik/Informationstechnik", "Informatik", "Mathematik", "Naturwissenschaften", "Medizin", "Humanwissenschaften", "Wirtschaftswissenschaft"],
    admissionRequirements: [
      "Kabul oranı %35",
      "17 İngilizce Master/Bachelor program",
      "90+ ülkeden öğrenci",
      "3 kampüs (Universitätsplatz/Klinikum/Zschokke)",
      "EU Green network üyesi",
      "13:1 öğrenci-öğretim üyesi oranı"
    ],
    campusFacilities: [
      "3 kampüs lokasyonu",
      "10+ öğrenci yurdu",
      "Elbe Nehri üzerinde Magdeburg",
      "Medieval şehir merkezi",
      "High-performance computing merkezi",
      "Modern laboratuvarlar",
      "Professional spor takımları yakınlığı"
    ],
    scholarships: [
      "DAAD mühendislik bursları",
      "EU Green network destekleri",
      "Sachsen-Anhalt eyalet bursları",
      "Süreç mühendisliği araştırma fonları",
      "Nörobilimler programları",
      "Otomotiv araştırma bursları"
    ]
  },
  {
    id: 54,
    name: "Johannes Gutenberg University Mainz",
    city: "Mainz",
    description: "1477/1946'da kurulan, güçlü araştırma geleneği olan U15 üyesi",
    programs: ["Doğa Bilimleri", "Tıp", "Beşeri Bilimler", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1477,
    students: 32000,
    internationalStudents: 4800,
    coordinates: "49.9930,8.2425",
    address: "Saarstraße 21, 55122 Mainz, Germany",
    faculties: ["Katolik/Protestan Teoloji", "Sosyal/Medya/Spor", "Hukuk", "Yönetim/Ekonomi", "Tıp", "Felsefe/Filoloji", "Çeviri/Dilbilim/Kültür", "Tarih/Kültür", "Fizik/Matematik/Bilgisayar", "Kimya/Eczacılık/Jeobilimler", "Biyoloji"],
    admissionRequirements: [
      "260+ derece kursu",
      "75 alan 100+ program",
      "U15 araştırma üniversiteleri",
      "Kabul oranı ~%35",
      "120+ ülkeden öğrenci",
      "PRISMA+ Cluster of Excellence"
    ],
    campusFacilities: [
      "Tek entegre kampüs (Almanya'da nadir)",
      "Max Planck Enstitüleri kampüste",
      "Helmholtz Institute Mainz",
      "Institute of Molecular Biology",
      "Merkezi kütüphane",
      "University Medical Center",
      "Müzik ve Güzel Sanatlar entegrasyonu"
    ],
    scholarships: [
      "DAAD araştırma bursları",
      "Max Planck ortaklık fonları",
      "U15 alliance destekleri",
      "PRISMA+ fizik araştırmaları",
      "Nobel ödüllü Paul Crutzen mirası",
      "Rheinland-Pfalz eyalet bursları"
    ]
  },
  {
    id: 55,
    name: "University of Mannheim",
    city: "Mannheim",
    description: "1967'de kurulan, işletme ve ekonomide Almanya'nın #1'i",
    programs: ["İşletme", "Ekonomi", "Sosyal Bilimler", "Hukuk"],
    ranking: 1,
    worldRanking: 134,
    tuition: "Uluslararası €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 1967,
    students: 11933,
    internationalStudents: 1790,
    coordinates: "49.4836,8.4630",
    address: "Schloss, 68161 Mannheim, Germany",
    faculties: ["Betriebswirtschaftslehre", "Volkswirtschaftslehre", "Sozialwissenschaften", "Rechtswissenschaft", "Geisteswissenschaften"],
    admissionRequirements: [
      "Kabul oranı %36",
      "İşletme #1 Almanya sıralaması",
      "Triple Crown akreditasyon",
      "100+ ülkeden öğrenci",
      "€25,000 yıllık yaşam maliyeti",
      "93% mezun istihdam oranı"
    ],
    campusFacilities: [
      "Mannheim Sarayı'nda (Barok saray)",
      "6 hektar kampüs, 440m cephe",
      "Ana tren istasyonuna 10 dk",
      "50+ öğrenci organizasyonu",
      "Schlossfest yıllık festivali",
      "Schneckenhof partileri",
      "Studierendenwerk konaklama"
    ],
    scholarships: [
      "Deutschland Scholarship",
      "Triple Crown business school avantajı",
      "DAAD bursları €1,000",
      "ASEM-DUO Exchange Grant",
      "Baden-Württemberg Scholarship",
      "~200 öğrenci/yıl burs alma"
    ]
  },
  {
    id: 56,
    name: "Philipps University Marburg",
    city: "Marburg",
    description: "1527'de kurulan, dünyanın en eski Protestan üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "Beşeri Bilimler", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1527,
    students: 25000,
    internationalStudents: 3500,
    coordinates: "50.8065,8.7708",
    address: "Biegenstraße 10, 35037 Marburg, Germany",
    faculties: ["Tıp", "Hukuk", "İşletme/Ekonomi", "Psikoloji", "Protestan Teoloji", "Tarih/Kültür", "Matematik/Bilgisayar", "Fizik", "Kimya", "Biyoloji", "Coğrafya", "Sosyal Bilimler", "Felsefe", "Dilbilim", "Eğitim", "Yaşam Bilimleri"],
    admissionRequirements: [
      "Hessen'de en yüksek uluslararası öğrenci %14",
      "7,500 çalışan",
      "400+ profesör",
      "Dünyanın ilk kimya profesörlüğü (1609)",
      "Gender studies Almanya'da ilk",
      "Interactive Chemicum müzesi"
    ],
    campusFacilities: [
      "Campus Lahnberge (doğa/tıp bilimleri)",
      "Campus Firmanei (yakın merkez)",
      "120+ bina 14 farklı lokasyon",
      "Frankfurt'a 45 mil kuzey",
      "Medieval üniversite şehri",
      "26,500+ öğrenci şehir nüfusunda",
      "Çoklu kampüs dağılımı"
    ],
    scholarships: [
      "DAAD Protestan araştırma bursları",
      "Hessen eyalet destekleri",
      "Biyomedikal bilimler fonları",
      "Sentetik mikrobiyoloji araştırmaları",
      "Malzeme bilimleri programları",
      "Yakın/Orta Doğu çalışmaları bursları"
    ]
  },
  {
    id: 63,
    name: "Ludwig-Maximilians-Universität München",
    city: "München",
    description: "1472'de kurulan, Almanya'nın en büyük ikinci üniversitesi",
    programs: ["Tıp", "Hukuk", "Beşeri Bilimler", "Doğa Bilimleri"],
    ranking: 1,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1472,
    students: 52972,
    internationalStudents: 14832,
    coordinates: "48.1506,11.5804",
    address: "Geschwister-Scholl-Platz 1, 80539 München, Germany",
    faculties: ["Katolik Teoloji", "Protestan Teoloji", "Hukuk", "İşletme/Ekonomi", "Tıp", "Veteriner Hekimliği", "Tarih/Sanat", "Felsefe/Bilim/Din", "Psikoloji/Eğitim", "Kültür", "Diller/Edebiyat", "Sosyal Bilimler", "Matematik/Bilgisayar/İstatistik", "Fizik", "Kimya/Eczacılık", "Biyoloji", "Jeoloji/Çevre", "Tıp Fakültesi"],
    admissionRequirements: [
      "150 konu 700+ profesör",
      "Almanya'nın 6. en eski üniversitesi",
      "Excellence University statüsü (2006)",
      "3 düzineden fazla Nobel ödüllü",
      "QS World Rankings #58 (2026)",
      "€797.4 milyon yıllık bütçe"
    ],
    campusFacilities: [
      "Geschwister-Scholl-Platz ana kampüs",
      "Großhadern (Üniversite Hastanesi)",
      "Martinsried (kimya/biyoteknoloji)",
      "HighTechCampus yaşam bilimleri",
      "Friedrich von Gärtner ana binası (1840)",
      "Audimax 800+ kişilik amfi",
      "5 milyon+ kitap kütüphane"
    ],
    scholarships: [
      "Excellence University prestij fonları",
      "White Rose direniş hareketi mirası",
      "DAAD en prestijli program bursları",
      "Bavyera eyalet araştırma destekleri",
      "Nobel ödüllü mezun ağı bursları",
      "Münih şehir avantajları"
    ]
  },
  {
    id: 64,
    name: "Jacobs University Bremen",
    city: "Bremen",
    description: "2001'de kurulan özel, İngilizce eğitim veren uluslararası üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Sosyal Bilimler", "İşletme"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Özel Üniversite - €20,000/yıl",
    language: ["İngilizce"],
    founded: 2001,
    students: 1500,
    internationalStudents: 1400,
    coordinates: "53.1677,8.6515",
    address: "Campus Ring 1, 28759 Bremen, Germany",
    faculties: ["Mühendislik", "Doğa Bilimleri", "Sosyal Bilimler ve Beşeri Bilimler"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "İngilizce dil yeterlilik belgesi (TOEFL/IELTS)",
      "Motivasyon mektubu",
      "Referans mektupları",
      "SAT/ACT puanları (opsiyonel)"
    ],
    campusFacilities: [
      "Yerleşik kampüs (residential campus)",
      "Modern laboratuvarlar ve araştırma merkezleri",
      "Kampüs içi öğrenci yurtları",
      "Uluslararası topluluk",
      "Spor tesisleri",
      "Kütüphane ve çalışma alanları"
    ],
    scholarships: [
      "Need-based burslar (ihtiyaç bazlı)",
      "Merit-based burslar (başarı bazlı)",
      "DAAD bursları",
      "Jacobs Foundation bursları",
      "Tam burs imkanları"
    ]
  },
  {
    id: 65,
    name: "Bard College Berlin",
    city: "Berlin",
    description: "Liberal arts odaklı özel Amerikan üniversitesi, beşeri bilimler ve sanat programları",
    programs: ["Beşeri Bilimler", "Sanat", "Sosyal Bilimler", "Felsefe"],
    ranking: 4,
    worldRanking: 251,
    tuition: "Özel Üniversite - €28,700/yıl",
    language: ["İngilizce", "Almanca"],
    founded: 1999,
    students: 350,
    internationalStudents: 300,
    coordinates: "52.5050,13.4370",
    address: "Platanenstraße 24, 13156 Berlin, Germany",
    faculties: ["Beşeri Bilimler, Sanat ve Sosyal Düşünce", "Ekonomi, Politika ve Sosyal Düşünce"],
    admissionRequirements: [
      "Lise diploması",
      "İngilizce dil yeterlilik belgesi (TOEFL 100+ / IELTS 7.0+)",
      "Extended essay veya akademik yazı örneği",
      "Referans mektupları",
      "Kişisel görüşme"
    ],
    campusFacilities: [
      "Berlin Pankow'da tarihi bina",
      "Küçük sınıf boyutları (12-15 öğrenci)",
      "Merkezi kütüphane",
      "Sanat stüdyoları",
      "Öğrenci lounge alanları",
      "Berlin'in kültürel olanaklarına kolay erişim"
    ],
    scholarships: [
      "Need-based finansal destek",
      "Merit scholarships",
      "DAAD bursları",
      "Fulbright programı",
      "Bard College global network bursları"
    ]
  },
  {
    id: 66,
    name: "WHU – Otto Beisheim School of Management",
    city: "Vallendar",
    description: "Almanya'nın en prestijli özel işletme okullarından biri, Vallendar ve Düsseldorf kampüsleri",
    programs: ["İşletme", "Yönetim", "MBA", "Finans"],
    ranking: 1,
    worldRanking: 251,
    tuition: "Özel Üniversite - €15,900-39,500/yıl (program göre)",
    language: ["İngilizce", "Almanca"],
    founded: 1984,
    students: 1600,
    internationalStudents: 800,
    coordinates: "50.4027,7.6137",
    address: "Burgplatz 2, 56179 Vallendar, Germany",
    faculties: ["İşletme Yönetimi"],
    admissionRequirements: [
      "Lise diploması (Bachelor için) / Lisans diploması (Master için)",
      "GMAT/GRE puanları (Master/MBA için)",
      "İngilizce dil yeterlilik belgesi",
      "Motivasyon mektubu",
      "Referans mektupları",
      "Mülakat"
    ],
    campusFacilities: [
      "Modern kampüs Ren nehri kıyısında",
      "Bloomberg terminalleri",
      "Simülasyon odaları",
      "Executive education merkezi",
      "Campus Düsseldorf",
      "Uluslararası değişim programları"
    ],
    scholarships: [
      "WHU Academic Excellence bursları",
      "Need-based burslar",
      "Deutschland Stipendium",
      "Externe Stiftungen bursları",
      "İşletme sponsorluğu bursları"
    ]
  },
  {
    id: 67,
    name: "EBS Universität für Wirtschaft und Recht",
    city: "Wiesbaden",
    description: "İşletme ve hukuk odaklı özel üniversite, güçlü şirket bağlantıları",
    programs: ["İşletme", "Hukuk", "Gayrimenkul", "MBA"],
    ranking: 2,
    worldRanking: 401,
    tuition: "Özel Üniversite - €6,990-42,000/yıl (program göre)",
    language: ["İngilizce", "Almanca"],
    founded: 1971,
    students: 2100,
    internationalStudents: 600,
    coordinates: "50.0782,8.2397",
    address: "Gustav-Stresemann-Ring 3, 65189 Wiesbaden, Germany",
    faculties: ["İşletme Fakültesi", "Hukuk Fakültesi"],
    admissionRequirements: [
      "Lise diploması / Lisans diploması",
      "GMAT/GRE (MBA/Master programları için)",
      "İngilizce/Almanca dil yeterlilik belgesi",
      "Assessment Center",
      "Kişisel görüşme",
      "Motivasyon mektubu"
    ],
    campusFacilities: [
      "Wiesbaden kampüs (işletme)",
      "Oestrich-Winkel kampüs (tarihi kale)",
      "Berlin ofisi",
      "Modern sınıflar ve seminer odaları",
      "Kariyer merkezi",
      "Networking etkinlikleri"
    ],
    scholarships: [
      "EBS Excellence bursları",
      "Deutschland Stipendium",
      "İşletme sponsorluğu programları",
      "Need-based finansal destek",
      "Alumni bursları"
    ]
  },
  {
    id: 68,
    name: "Constructor University",
    city: "Bremen",
    description: "Önceden Jacobs University, 2023'te Constructor University olarak yenilendi, İngilizce eğitim",
    programs: ["Bilgisayar Bilimleri", "Veri Bilimi", "Robotik", "İşletme"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Özel Üniversite - €20,000/yıl",
    language: ["İngilizce"],
    founded: 2001,
    students: 1500,
    internationalStudents: 1400,
    coordinates: "53.1677,8.6515",
    address: "Campus Ring 1, 28759 Bremen, Germany",
    faculties: ["Bilgisayar Bilimleri ve Yapay Zeka", "İnovasyon Mühendisliği", "Yaşam Bilimleri"],
    admissionRequirements: [
      "Lise diploması",
      "İngilizce dil yeterlilik belgesi (TOEFL 90+ / IELTS 6.5+)",
      "Motivasyon mektubu",
      "Referans mektupları",
      "Online mülakat"
    ],
    campusFacilities: [
      "Yerleşik kampüs modeli",
      "AI ve Data Science laboratuvarları",
      "Robotik atölyeleri",
      "Modern öğrenci yurtları",
      "Uluslararası topluluk",
      "Spor ve sosyal tesisler"
    ],
    scholarships: [
      "Constructor bursları",
      "Merit-based scholarships",
      "Need-based finansal destek",
      "DAAD bursları",
      "Tam burs fırsatları"
    ]
  },
  {
    id: 70,
    name: "German University of Administrative Sciences Speyer",
    city: "Speyer",
    description: "1947'de kurulan, kamu yönetimi ve idare hukuku konusunda uzmanlaşmış lisansüstü üniversite",
    programs: ["Kamu Yönetimi", "İdare Hukuku", "Avrupa Yönetimi", "Dijital Yönetim"],
    ranking: 3,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz (sadece yüksek lisans)",
    language: ["Almanca"],
    founded: 1947,
    students: 600,
    internationalStudents: 120,
    coordinates: "49.3167,8.4311",
    address: "Freiherr-vom-Stein-Straße 2, 67346 Speyer, Germany",
    faculties: ["Kamu Hukuku ve İdare Bilimleri", "Yönetim Bilimleri", "Avrupa ve Uluslararası İdare"],
    admissionRequirements: [
      "Lisans diploması (sadece yüksek lisans programları)",
      "Kamu yönetimi veya hukuk arka planı tercih edilir",
      "Almanca dil yeterlilik belgesi",
      "Motivasyon mektubu",
      "Akademik referanslar",
      "Mesleki deneyim (bazı programlar için)"
    ],
    campusFacilities: [
      "Tarihi şehir merkezinde kampüs",
      "Uzman kütüphane (idare hukuku)",
      "Araştırma enstitüleri",
      "Seminer odaları",
      "Ulusal ve uluslararası işbirlikleri",
      "Speyer Katedrali yakınlığı (UNESCO)"
    ],
    scholarships: [
      "DAAD bursları",
      "Kamu sektörü sponsorlukları",
      "Eyalet bursları (Rheinland-Pfalz)",
      "Araştırma asistanlıkları",
      "Stipendien für Beamte"
    ]
  },
  {
    id: 72,
    name: "University of Trier",
    city: "Trier",
    description: "1473'te kurulan tarihi üniversite, Karl Marx'ın doğduğu şehir",
    programs: ["Sosyal Bilimler", "Hukuk", "İşletme", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1473,
    students: 13000,
    internationalStudents: 2000,
    coordinates: "49.7488,6.6831",
    address: "Universitätsring 15, 54296 Trier, Germany",
    faculties: ["İlahiyat", "Hukuk", "Ekonomi/İşletme", "Beşeri Bilimler", "Sosyal Bilimler", "Çevre Bilimleri"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "Almanca dil yeterlilik belgesi (TestDaF/DSH)",
      "Bazı programlar için NC (Numerus Clausus)",
      "130+ derece programı",
      "Erasmus+ ortaklıkları",
      "Uluslararası öğrencilere açık"
    ],
    campusFacilities: [
      "Modern kampüs Tarforst bölgesinde",
      "Merkezi kütüphane",
      "Bilgisayar havuzları",
      "Spor tesisleri",
      "Öğrenci yurtları",
      "Roma döneminden kalma tarihi şehir",
      "Porta Nigra yakınlığı (UNESCO)"
    ],
    scholarships: [
      "DAAD bursları",
      "Erasmus+ değişim programları",
      "Deutschland Stipendium",
      "Rheinland-Pfalz eyalet bursları",
      "Araştırma asistanlıkları"
    ]
  },
  {
    id: 74,
    name: "University of Ulm",
    city: "Ulm",
    description: "1967'de kurulan, tıp ve doğa bilimleri odaklı araştırma üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "Mühendislik", "Matematik"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1967,
    students: 10000,
    internationalStudents: 1500,
    coordinates: "48.4223,9.9552",
    address: "Helmholtzstraße 16, 89081 Ulm, Germany",
    faculties: ["Tıp", "Doğa Bilimleri", "Matematik ve Ekonomi", "Mühendislik Bilimleri ve Bilgisayar"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "Tıp için yüksek NC puanı gerekli",
      "Almanca/İngilizce dil yeterlilik belgesi",
      "STEM alanlarında güçlü programlar",
      "60+ derece programı",
      "Albert Einstein'ın doğduğu şehir"
    ],
    campusFacilities: [
      "Modern Oberer Eselsberg kampüsü",
      "Üniversite Hastanesi (tıp eğitimi)",
      "Bilim parkı ve araştırma merkezleri",
      "Kütüphane ve öğrenme merkezi",
      "Spor tesisleri ve yurtlar",
      "Tuna nehri kıyısında şehir",
      "Ulm Katedrali (dünyanın en yüksek kilisesi)"
    ],
    scholarships: [
      "DAAD bursları",
      "Baden-Württemberg Scholarship",
      "Deutschland Stipendium",
      "Araştırma bursları",
      "Tıp öğrencileri için özel fonlar"
    ]
  },
  {
    id: 75,
    name: "University of Vechta",
    city: "Vechta",
    description: "1830'da öğretmen okulu olarak kurulan, eğitim bilimleri ve sürdürülebilirlik odaklı küçük üniversite",
    programs: ["Eğitim", "Sürdürülebilirlik", "Sosyal Bilimler", "Çevre Bilimleri"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    founded: 1830,
    students: 5000,
    internationalStudents: 300,
    coordinates: "52.7167,8.2833",
    address: "Driverstraße 22, 49377 Vechta, Germany",
    faculties: ["Eğitim ve Sosyal Bilimler", "Doğa Bilimleri ve Teknik", "Kültür ve Geowissenschaften"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "Almanca dil yeterlilik belgesi",
      "Eğitim programları için pedagojik ilgi",
      "30+ derece programı",
      "Küçük kampüs topluluk avantajı",
      "Öğretmen yetiştirmede güçlü"
    ],
    campusFacilities: [
      "Kompakt şehir merkezi kampüsü",
      "Modern eğitim tesisleri",
      "Kütüphane ve çalışma alanları",
      "Spor tesisleri",
      "Öğrenci yurtları",
      "Sürdürülebilirlik araştırma merkezi",
      "Kırsal Aşağı Saksonya ortamı"
    ],
    scholarships: [
      "DAAD bursları",
      "Niedersachsen eyalet bursları",
      "Deutschland Stipendium",
      "Eğitim bursları",
      "Öğretmen adayları için destekler"
    ]
  },
  {
    id: 76,
    name: "Bauhaus University Weimar",
    city: "Weimar",
    description: "1860'ta kurulan, Bauhaus sanat akımının doğduğu üniversite, mimarlık ve tasarım odaklı",
    programs: ["Mimarlık", "Sanat", "Tasarım", "Medya", "İnşaat Mühendisliği"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1860,
    students: 4500,
    internationalStudents: 1000,
    coordinates: "50.9803,11.3236",
    address: "Geschwister-Scholl-Straße 8, 99423 Weimar, Germany",
    faculties: ["Mimarlık ve Şehircilik", "İnşaat Mühendisliği", "Sanat ve Tasarım", "Medya"],
    admissionRequirements: [
      "Lise diploması",
      "Portfölyo (sanat/tasarım/mimarlık programları)",
      "Yetenek sınavı veya giriş projesi",
      "Almanca/İngilizce dil yeterlilik belgesi",
      "40+ derece programı",
      "Yaratıcı ve tasarım odaklı seçim"
    ],
    campusFacilities: [
      "Tarihi Bauhaus binaları",
      "Modern tasarım stüdyoları",
      "Sanat atölyeleri ve galeriler",
      "Mimarlık modelleme laboratuvarları",
      "Anna Amalia Kütüphanesi yakınlığı",
      "Bauhaus Müzesi",
      "Goethe ve Schiller'in şehri (UNESCO)"
    ],
    scholarships: [
      "DAAD bursları",
      "Bauhaus özel fonları",
      "Thüringen eyalet bursları",
      "Deutschland Stipendium",
      "Sanat ve tasarım bursları",
      "Uluslararası değişim programları"
    ]
  },
  {
    id: 74,
    name: "University of Wuppertal",
    city: "Wuppertal",
    description: "1972'de kurulan, mühendislik ve tasarım alanında güçlü üniversite",
    programs: ["Mühendislik", "Tasarım", "İşletme", "Eğitim", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1972,
    students: 22000,
    internationalStudents: 3000,
    coordinates: "51.2456,7.1489",
    address: "Gaußstraße 20, 42119 Wuppertal, Germany",
    faculties: ["Beşeri ve Kültürel Bilimler", "İşletme ve Ekonomi", "Matematik ve Doğa Bilimleri", "Mimarlık ve İnşaat", "Elektrik ve Bilgisayar", "Makine Mühendisliği", "Tasarım ve Sanat", "Eğitim Bilimleri"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "Almanca dil yeterlilik belgesi",
      "Bazı programlar için portfölyo",
      "100+ derece programı",
      "Endüstriyel tasarım konusunda tanınmış",
      "Güvenlik mühendisliği (özel program)"
    ],
    campusFacilities: [
      "Grifflenberg ana kampüsü (tepe üzerinde)",
      "Haspel kampüsü (tasarım/sanat)",
      "Freudenberg kampüsü (makine/güvenlik)",
      "Modern mühendislik laboratuvarları",
      "Tasarım stüdyoları",
      "Schwebebahn (askılı tren) ulaşımı",
      "Kütüphane ve spor tesisleri"
    ],
    scholarships: [
      "DAAD bursları",
      "NRW eyalet bursları",
      "Deutschland Stipendium",
      "Endüstri işbirlikleri bursları",
      "Mühendislik öğrencileri için özel fonlar"
    ]
  },
  {
    id: 75,
    name: "University of Kiel",
    city: "Kiel",
    description: "1665'te kurulan (Christian-Albrechts-Universität), deniz bilimleri ve tıp alanında güçlü üniversite",
    programs: ["Tıp", "Deniz Bilimleri", "Hukuk", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 2,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1665,
    students: 27000,
    internationalStudents: 3500,
    coordinates: "54.3406,10.1228",
    address: "Christian-Albrechts-Platz 4, 24118 Kiel, Germany",
    faculties: ["İlahiyat", "Hukuk", "İşletme/Ekonomi/Sosyal", "Tıp", "Felsefe", "Matematik/Doğa", "Tarım/Beslenme", "Mühendislik"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "Almanca/İngilizce dil yeterlilik belgesi",
      "Tıp için NC gerekli",
      "190+ derece programı",
      "Deniz bilimleri araştırmalarında lider",
      "GEOMAR araştırma enstitüsü ortaklığı"
    ],
    campusFacilities: [
      "Merkezi kampüs şehir içinde",
      "GEOMAR Deniz Araştırmaları Merkezi",
      "Üniversite Hastanesi (UKSH)",
      "Botanik bahçesi",
      "Deniz biyolojisi laboratuvarları",
      "Kütüphane ve öğrenme merkezleri",
      "Baltık Denizi kıyısında şehir"
    ],
    scholarships: [
      "DAAD bursları",
      "Schleswig-Holstein eyalet bursları",
      "Deutschland Stipendium",
      "Deniz bilimleri araştırma bursları",
      "GEOMAR doktora programları",
      "Excellence Initiative fonları"
    ]
  }
];

export default function UniversityDetail() {
  const params = useParams();
  const universityId = parseInt(params.id || "0");
  
  // Try to find in detailed list first, then fall back to basic list
  let university: any = detailedUniversities.find(uni => uni.id === universityId);
  const isDetailed = !!university;
  
  if (!university) {
    university = basicUniversities.find(uni => uni.id === universityId);
  }

  // Sayfa açıldığında en üste scroll et
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [universityId]);

  if (!university) {
    return (
      <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
        <Navbar />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">{translateText("Üniversite Bulunamadı")}</h1>
          <p className="text-muted-foreground">{translateText("Aranan üniversite bulunamadı.")}</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Default values for universities without detailed information
  const defaultFaculties = university.programs || ["Bilgi yakında eklenecek"];
  const defaultAdmissionRequirements = [
    "Lise diploması veya dengi belge",
    "Almanca dil yeterlik belgesi (program diline göre)",
    "Başvuru detayları için üniversite web sitesini ziyaret edin"
  ];
  const defaultCampusFacilities = [
    "Modern kampüs",
    "Kütüphane",
    "Öğrenci merkezleri",
    "Detaylı bilgi için danışmanlarımızla iletişime geçin"
  ];
  const defaultScholarships = [
    "DAAD bursları",
    "Deutschland Stipendium",
    "Burs imkanları için danışmanlarımızla iletişime geçin"
  ];
  
  const faculties = (university as any).faculties || defaultFaculties;
  const admissionRequirements = (university as any).admissionRequirements || defaultAdmissionRequirements;
  const campusFacilities = (university as any).campusFacilities || defaultCampusFacilities;
  const scholarships = (university as any).scholarships || defaultScholarships;
  const founded = (university as any).founded || 1900;
  const students = (university as any).students || 10000;
  const internationalStudents = (university as any).internationalStudents || 1000;
  const coordinates = (university as any).coordinates || "51.1657,10.4515"; // Germany center

  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-xl border-2 border-accent/30 text-lg font-bold shadow-md">{translateText(" Dünya Sıralaması #")}{translateNode(university.worldRanking)}
                </div>
              </div>
              
              <h1 className="text-5xl font-bold text-foreground mb-4" data-testid="university-detail-title">
                {translateNode(university.name)}
              </h1>
              
              <div className="flex items-center text-muted-foreground text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{translateNode(university.city)}{translateText(", Almanya")}</span>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {translateNode(university.description)}
              </p>
              
              {/* University Map */}
              <div className="mt-6 border border-border rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps?q=${coordinates}&output=embed&hl=${getLanguage()}`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={translateText(`${university.name} lokasyonu`)}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{translateNode(founded)}</div>
              <div className="text-sm text-muted-foreground">{translateText("Kuruluş Yılı")}</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{translateNode(students.toLocaleString(getLanguage() === "en" ? "en-US" : "tr-TR"))}</div>
              <div className="text-sm text-muted-foreground">{translateText("Toplam Öğrenci")}</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{translateNode(internationalStudents.toLocaleString(getLanguage() === "en" ? "en-US" : "tr-TR"))}</div>
              <div className="text-sm text-muted-foreground">{translateText("Uluslararası Öğrenci")}</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{translateNode(faculties.length)}</div>
              <div className="text-sm text-muted-foreground">{translateText("Fakülte Sayısı")}</div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Faculties */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary" />{translateText(" Fakülteler / Programlar ")}</h2>
                <div className="grid grid-cols-1 gap-3">
                  {translateNode(faculties.map((faculty: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{translateNode(faculty)}</span>
                    </div>
                  )))}
                </div>
              </div>

              {/* Admission Requirements */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-accent" />{translateText(" Başvuru Şartları ")}</h2>
                <div className="space-y-3">
                  {translateNode(admissionRequirements.map((requirement: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{translateNode(requirement)}</span>
                    </div>
                  )))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Campus Facilities */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-secondary" />{translateText(" Kampüs Olanakları ")}</h2>
                <div className="space-y-3">
                  {translateNode(campusFacilities.map((facility: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{translateNode(facility)}</span>
                    </div>
                  )))}
                </div>
              </div>

              {/* Scholarships */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary" />{translateText(" Burs İmkanları ")}</h2>
                <div className="space-y-3">
                  {translateNode(scholarships.map((scholarship: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{translateNode(scholarship)}</span>
                    </div>
                  )))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">{translateText("Hızlı Bilgiler")}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{translateText("Eğitim Dili:")}</span>
                    <span className="text-foreground font-medium">{translateNode(university.language.join(", "))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{translateText("Öğrenci Sayısı:")}</span>
                    <span className="text-foreground font-medium">{translateNode(students.toLocaleString())}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-border">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {translateNode(university.name)}{translateText(" hakkında daha fazla bilgi almak ister misiniz? ")}</h3>
              <p className="text-muted-foreground mb-6">{translateText(" Uzman danışmanlarımızla ücretsiz görüşme ayarlayın ")}</p>
              <Link href="/contact">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">{translateText(" İletişime Geçin ")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}