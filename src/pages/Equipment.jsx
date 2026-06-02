import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Equipment.css";

//copied data from phase 1 and with the help of Claude ai converted them to JSX

const equipment = [
    {
        id: "eq1",
        name: "DualSense Edge Controller",
        category: "Controller",
        platform: "PlayStation",
        price: 199.99,
        image: "https://www.glitched.online/wp-content/uploads/2022/08/06d8a7c076df3b090cf777525e61e9a65174f410-scaled-1.webp",
        url: "https://fattalonline.com/products/playstation-cfi-zcp1wy-dualsense-edge-controller",
        rating: 9.0,
        description: "PlayStation's premium wireless controller with remappable buttons, adjustable triggers, and interchangeable stick caps."
    },
    {
        id: "eq2",
        name: "Xbox Elite Controller Series 2",
        category: "Controller",
        platform: "Xbox",
        price: 179.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.XlAIc4d3f6FXu2jYyp4wJwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.xbox.com/en-US/accessories/controllers/elite-wireless-controller-series-2",
        rating: 9.1,
        description: "Pro-level Xbox controller with adjustable tension thumbsticks, wrap-around rubberized grip, and up to 40 hours battery life."
    },
    {
        id: "eq3",
        name: "Switch Pro Controller",
        category: "Controller",
        platform: "Nintendo",
        price: 69.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.YLihWa9RU0JI3YpvuGQ1nAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://gamebroslb.com/products/nintendo-switch-pro-controller-black",
        rating: 8.7,
        description: "Nintendo's full-size wireless controller with HD rumble, motion controls, and built-in amiibo NFC reader."
    },

    {
        id: "eq4",
        name: "Steam Deck OLED 1TB",
        category: "Handheld",
        platform: "Steam",
        price: 649.99,
        image: "https://www.pcworld.com/wp-content/uploads/2023/11/Steam-Deck-OLED-screen.jpg?quality=50&strip=all",
        url: "https://www.gamers-stop.com/products/valve-steam-deck-oled-1tb",
        rating: 9.3,
        description: "Valve's handheld gaming PC with a stunning OLED display, 1TB storage, and up to 12 hours battery life."
    },
    {
        id: "eq5",
        name: "PS5",
        category: "Console",
        platform: "PlayStation",
        price: 600.00,
        image: "https://tse1.mm.bing.net/th/id/OIP.CYWHFF40MObF6Bmbzn6icgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.playstation.com/en-lb/ps5/",
        rating: 9.2,
        description: "Sony's flagship next-gen console with lightning-fast SSD, 4K gaming, ray tracing, and the innovative DualSense controller."
    },
    {
        id: "eq6",
        name: "PS5 Slim",
        category: "Console",
        platform: "PlayStation",
        price: 530.00,
        image: "https://tse2.mm.bing.net/th/id/OIP.ZPyQd4S4ovJK2mmfI8TSTgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.playstation.com/en-lb/ps5/",
        rating: 9.0,
        description: "The redesigned, slimmer PS5 with a detachable disc drive option and a 30% smaller footprint."
    },
    {
        id: "eq7",
        name: "PS5 Pro",
        category: "Console",
        platform: "PlayStation",
        price: 899.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.0UyxlFv9ewDP7l7ybDuD3QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.playstation.com/en-lb/ps5/",
        rating: 9.4,
        description: "Sony's most powerful console yet with PlayStation Spectral Super Resolution (PSSR) upscaling and advanced ray tracing."
    },
    {
        id: "eq8",
        name: "Xbox Series S",
        category: "Console",
        platform: "Xbox",
        price: 299.99,
        image: "https://tse2.mm.bing.net/th/id/OIP.Fyo2qHJ2TwwKFwdp4V3xAwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.xbox.com/en-US/consoles/xbox-series-s",
        rating: 8.5,
        description: "Xbox's compact all-digital next-gen console delivering 1440p gaming, 120fps support, and Game Pass compatibility."
    },
    {
        id: "eq9",
        name: "Xbox Series X",
        category: "Console",
        platform: "Xbox",
        price: 499.00,
        image: "https://tse3.mm.bing.net/th/id/OIP.7fGy7CV_KFDCyXdSOzoiawHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.xbox.com/en-US/consoles/xbox-series-x",
        rating: 9.1,
        description: "Microsoft's most powerful Xbox console with 4K gaming at 60–120fps, Quick Resume, and 1TB custom NVMe SSD."
    },
    {
        id: "eq10",
        name: "Nintendo Switch",
        category: "Console",
        platform: "Nintendo",
        price: 339.99,
        image: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_auto:low/MNS/Content%20Pages%20Assets/Category-List%20Pages/Consoles/Nintendo%20Switch%20Hub/2000x1125_Consoles_Switch_Flagship_BeautyShot",
        url: "https://gamebroslb.com/collections/nintendo-switch-consoles",
        rating: 8.8,
        description: "Nintendo's hybrid home/handheld console with detachable Joy-Con controllers and a vast library of first-party exclusives."
    },
    {
        id: "eq11",
        name: "Nintendo Switch 2",
        category: "Console",
        platform: "Nintendo",
        price: 449.90,
        image: "https://cdn.wccftech.com/wp-content/uploads/2025/04/nintendo-switch-2-art-HD-scaled.jpeg",
        url: "https://gamebroslb.com/collections/nintendo-switch-2-console",
        rating: 9.2,
        description: "Nintendo's next-generation hybrid console with a larger screen, magnetic Joy-Con 2 controllers, and mouse-mode input."
    },

    {
        id: "eq12",
        name: "SteelSeries Arctis Nova Pro Wireless",
        category: "Headset",
        platform: "Multi-Platform",
        price: 264.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.QyQ_tuYMWpJimczybuJ7EgHaEh?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/SteelSeries-Arctis-Wireless-Multi-System-Headset/dp/B0BHKTVDQ4",
        rating: 9.2,
        description: "Dual-DAC premium audio system with active noise cancellation, hot-swappable battery, and multi-system wireless connectivity."
    },
    {
        id: "eq13",
        name: "Razer Blackshark V3 Pro",
        category: "Headset",
        platform: "Multi-Platform",
        price: 149.99,
        image: "https://tse4.mm.bing.net/th/id/OIP.dRG_VMukXon15J-scr0OuQHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Razer-BlackShark-Wireless-Gaming-Headset-Xbox/dp/B0F3QKLDLM",
        rating: 8.8,
        description: "Wireless gaming headset with TriForce Titanium 50mm drivers, HyperClear Super Wideband Mic, and 70-hour battery life."
    },
    {
        id: "eq14",
        name: "HyperX Cloud 3",
        category: "Headset",
        platform: "Multi-Platform",
        price: 149.99,
        image: "https://igeekjo.com/cdn/shop/files/2_604364d2-a9f3-4af1-ba60-0695d0ec561c.jpg?crop=center&height=1500&v=1700311800&width=1500",
        url: "https://www.amazon.com/HyperX-Cloud-III-Ultra-Clear-USB/dp/B0C3BV19Q3",
        rating: 8.9,
        description: "Wired gaming headset with 53mm angled drivers, ultra-clear noise-cancelling microphone, and DTS Headphone:X spatial audio."
    },

    {
        id: "eq15",
        name: "SteelSeries Apex Pro",
        category: "Keyboard",
        platform: "Multi-Platform",
        price: 199.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.6WAGaKd8j4CJNPGX1M6zkgHaGA?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/SteelSeries-Apex-Mechanical-Gaming-Keyboard/dp/B07SVJJCP3",
        rating: 9.1,
        description: "World's first mechanical keyboard with adjustable actuation (0.1–4.0mm per key), OLED Smart Display, and magnetic wrist rest."
    },
    {
        id: "eq16",
        name: "Razer BlackWidow V4 Pro",
        category: "Keyboard",
        platform: "Multi-Platform",
        price: 194.00,
        image: "https://tse2.mm.bing.net/th/id/OIP.pbvpmw6nTM_v5FeC_pr1bgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Razer-BlackWidow-Mechanical-Gaming-Keyboard/dp/B0BT3VC25K",
        rating: 8.9,
        description: "Full-size wireless mechanical keyboard with Razer Yellow optical switches, dedicated media keys, and Chroma RGB lighting."
    },
    {
        id: "eq17",
        name: "Redragon K582 Surara",
        category: "Keyboard",
        platform: "Multi-Platform",
        price: 40.99,
        image: "https://tse4.mm.bing.net/th/id/OIP.78GUh6PrIoGMTEF3-4dweAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Redragon-Mechanical-Keyboard-Keys-Linear-Quiet-Red/dp/B07KCRTN9Q",
        rating: 8.0,
        description: "Budget-friendly TKL mechanical gaming keyboard with red linear switches, RGB backlight, and multimedia controls."
    },

    {
        id: "eq18",
        name: "GPU RTX 4050",
        category: "GPU",
        platform: "PC",
        price: 549.99,
        image: "https://www.custompc.com/wp-content/sites/custompc/2023/08/nvidia-geforce-rtx-4050-release-date-specs-price-rumors.jpg",
        url: "https://www.amazon.com/rtx-4050/s?k=rtx+4050",
        rating: 7.8,
        description: "NVIDIA's entry-level Ada Lovelace GPU with DLSS 3 and ray tracing support, ideal for 1080p gaming."
    },
    {
        id: "eq19",
        name: "GPU RTX 5060",
        category: "GPU",
        platform: "PC",
        price: 549.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.jYKIIqNMOlH1t9XQ0RRzjwHaD8?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/GIGABYTE-GeForce-WINDFORCE-Graphics-GV-N5060WF2OC-8GD/dp/B0F8LDHQ7Y",
        rating: 8.3,
        description: "NVIDIA's Blackwell-generation mid-range GPU with DLSS 4 multi-frame generation and 8GB GDDR7 memory."
    },
    {
        id: "eq20",
        name: "RX 7900 XTX",
        category: "GPU",
        platform: "PC",
        price: 1334.00,
        image: "https://th.bing.com/th/id/R.4987078436495650e6ecd55db8d0a4ae?rik=E1jhs5NqrnUScA&pid=ImgRaw&r=0",
        url: "https://www.amazon.com/amd-radeon%E2%84%A2-rx-7900-xtx/s?k=amd+radeon%E2%84%A2+rx+7900+xtx",
        rating: 9.0,
        description: "AMD's flagship RDNA 3 GPU with 24GB GDDR6 memory, delivering 4K gaming performance with AMD FSR 3 support."
    },
    {
        id: "eq21",
        name: "RX 6950 XT",
        category: "GPU",
        platform: "PC",
        price: 855.00,
        image: "https://tse2.mm.bing.net/th/id/OIP.6n-Zx-V3dIqn2RGtykmt4AHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/AMD-Radeon-GDDR6-PCI-Express-Graphics/dp/B0BKPT56HK",
        rating: 8.7,
        description: "AMD's high-end RDNA 2 GPU with 16GB GDDR6 and boosted clocks for excellent 4K performance."
    },
    {
        id: "eq22",
        name: "RX 7800 XT",
        category: "GPU",
        platform: "PC",
        price: 599.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.fRyleEBtfk3gYd6riLjPrQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/rx-7800-xt/s?k=rx+7800+xt",
        rating: 8.5,
        description: "AMD's RDNA 3 mid-high GPU with 16GB GDDR6, perfect for high-fidelity 1440p gaming at competitive prices."
    },

    {
        id: "eq23",
        name: "Intel Core i7 11th Gen",
        category: "CPU",
        platform: "PC",
        price: 205.88,
        image: "https://tse4.mm.bing.net/th/id/OIP.zA9RmE2RF6aT5rawLowMUgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/i7-11th-gen/s?k=i7+11th+gen",
        rating: 7.9,
        description: "Intel's 11th-gen Rocket Lake Core i7 with up to 8 cores, PCIe 4.0 support, and solid multi-threaded performance."
    },
    {
        id: "eq24",
        name: "Intel Core i9 13th Gen",
        category: "CPU",
        platform: "PC",
        price: 589.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.oW4REz1E4i4dwPDU9lqfSQHaFI?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Intel-i9-13900K-Desktop-Processor-P-cores/dp/B0BCF54SR1",
        rating: 9.2,
        description: "Intel's flagship Raptor Lake CPU with 24 cores (8P+16E), up to 5.8GHz boost, and dominant gaming and workstation performance."
    },
    {
        id: "eq25",
        name: "Intel Core i5 13th Gen",
        category: "CPU",
        platform: "PC",
        price: 221.00,
        image: "https://bermorzone.com.ph/wp-content/uploads/2023/01/intel-core-i5-13400-13400f-13500-ph-btz-768x768.jpg",
        url: "https://www.amazon.com/Intel-i5-13600K-Desktop-Processor-P-cores/dp/B0BCDR9M33",
        rating: 9.0,
        description: "Intel's mainstream powerhouse with 14 cores (6P+8E), excellent gaming performance, and great value for the price."
    },
    {
        id: "eq26",
        name: "AMD Ryzen 7 9800X3D",
        category: "CPU",
        platform: "PC",
        price: 449.99,
        image: "https://elchapuzasinformatico.com/wp-content/uploads/2024/10/AMD-Ryzen-7-9800X3D-1.jpg",
        url: "https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK",
        rating: 9.7,
        description: "AMD's best gaming CPU with 3D V-Cache technology, 8 Zen 5 cores, and unmatched frame rates in CPU-bound games."
    },
    {
        id: "eq27",
        name: "AMD Ryzen 9 9950X",
        category: "CPU",
        platform: "PC",
        price: 519.99,
        image: "https://cdn.wccftech.com/wp-content/uploads/2024/07/AMD-Ryzen-9-9900X-12-Core-Zen-5-Desktop-CPU.jpg",
        url: "https://www.amazon.com/AMD-RyzenTM-9950X-32-Thread-Processor/dp/B0D6NNRBGP",
        rating: 9.3,
        description: "AMD's top-tier Zen 5 workstation CPU with 16 cores, 32 threads, and exceptional multi-threaded throughput."
    },
    {
        id: "eq28",
        name: "AMD Ryzen 5 7600",
        category: "CPU",
        platform: "PC",
        price: 179.98,
        image: "https://www.notebookcheck.net/fileadmin/Notebooks/AMD/Ryzen_5_7600/ryzen_5_7600.png",
        url: "https://www.amazon.com/AMD-7600-12-Thread-Unlocked-Processor/dp/B0BMQJWBDM",
        rating: 8.8,
        description: "AMD's budget Zen 4 CPU offering 6 cores, PCIe 5.0 support, and strong gaming performance for the price."
    },

    {
        id: "eq29",
        name: "Corsair Air 5400",
        category: "Case",
        platform: "PC",
        price: 249.99,
        image: "https://tse4.mm.bing.net/th/id/OIP.I1ahgWWXXO2TOZFKZI-_eAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/CORSAIR-5400-Triple-Chamber-Mid-Tower-Panoramic/dp/B0FJ8SWG15",
        rating: 9.0,
        description: "Premium mid-tower with a triple-chamber design, panoramic glass panels, and exceptional airflow layout."
    },
    {
        id: "eq30",
        name: "Fractal Meshify 3",
        category: "Case",
        platform: "PC",
        price: 144.99,
        image: "https://www.scan.co.uk/images/infopages/fractal_case/meshify3_XL/finish.png",
        url: "https://www.amazon.com/Fractal-Design-Meshify-Black-Solid/dp/B0CS3T22P8",
        rating: 9.1,
        description: "High-airflow mid-tower with angular mesh front panel, Type-C port, and flexible interior layout for E-ATX builds."
    },
    {
        id: "eq31",
        name: "NZXT H7 Flow",
        category: "Case",
        platform: "PC",
        price: 99.99,
        image: "https://tse4.mm.bing.net/th/id/OIP.F1dTe1yXN19rZjZPSuld6gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/NZXT-Flow-2024-Pre-Installed-CM-H72FB-01/dp/B0CV4R1TWS",
        rating: 8.8,
        description: "Clean mid-tower with perforated mesh front and top panels for optimal airflow, USB-C front I/O, and tool-free installation."
    },

    {
        id: "eq32",
        name: "Corsair Vengeance LED",
        category: "RAM",
        platform: "PC",
        price: 154.99,
        image: "https://tse4.mm.bing.net/th/id/OIP.OjaKhLBOxjqCnycz0cKYTAHaF6?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Corsair-VENGEANCE-3200MHz-Compatible-Computer/dp/B081XWLQKS",
        rating: 8.6,
        description: "DDR4 3200MHz RAM with continuous LED lighting strip and XMP 2.0 support for easy overclocking."
    },
    {
        id: "eq33",
        name: "Kingston HyperX Fury",
        category: "RAM",
        platform: "PC",
        price: 44.99,
        image: "https://th.bing.com/th/id/R.177a59613e0ee47d88cf37a22b31c4eb?rik=ZgwVwL9qqFCRsA&pid=ImgRaw&r=0",
        url: "https://www.amazon.com/kingston-hyperx-fury/s?k=kingston+hyperx+fury",
        rating: 8.2,
        description: "Plug-and-play DDR4 RAM with Plug N Play auto-overclocking, low-profile heat spreader, and speeds up to 3200MHz."
    },
    {
        id: "eq34",
        name: "G.Skill Trident Z RGB DC",
        category: "RAM",
        platform: "PC",
        price: 174.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.JgU5eiLs7TmOY2XhY7rkagHaE3?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/G-SKILL-Trident-CL18-22-22-42-Computer-F4-3600C18D-64GTZR/dp/B087T7DWSN",
        rating: 8.8,
        description: "DDR4 3600MHz RAM with dual-sided RGB lighting, high-density 64GB kit, and XMP 2.0 support for performance builds."
    },

    {
        id: "eq35",
        name: "Asrock X670E Taichi",
        category: "Motherboard",
        platform: "PC",
        price: 610.00,
        image: "https://tse2.mm.bing.net/th/id/OIP.4IZqQzQDIIJf2lIStWFnCwHaGL?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/asrock-x670e-taichi/s?k=asrock+x670e+taichi",
        rating: 9.0,
        description: "High-end AM5 motherboard with dual PCIe 5.0 M.2 slots, 20Gbps USB, Wi-Fi 6E, and robust VRM for AMD Ryzen 7000."
    },
    {
        id: "eq36",
        name: "Asus ROG Strix X670E-E Gaming",
        category: "Motherboard",
        platform: "PC",
        price: 599.99,
        image: "https://th.bing.com/th/id/R.cb3b8142819c58fcf760adbeeaff4abe?rik=2RmAOIguZKR0wA&pid=ImgRaw&r=0",
        url: "https://www.amazon.com/ASUS-ROG-Motherboard-Q-Release-Q-Latch/dp/B0BDTHQTJV",
        rating: 9.1,
        description: "Premium AM5 ROG board with PCIe 5.0 support, Q-Release GPU slot, Wi-Fi 6E, and robust 18+2 power stages."
    },
    {
        id: "eq37",
        name: "Gigabyte X670E Aorus Master",
        category: "Motherboard",
        platform: "PC",
        price: 712.44,
        image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2170/innergigabyteimages/smartfan601.png",
        url: "https://www.amazon.com/X670E-AORUS-MASTER-Motherboard-DDR5-128GB/dp/B0BFNVND8B",
        rating: 9.2,
        description: "Flagship AM5 board with DDR5 support, PCIe 5.0 x16, four M.2 slots, and advanced Aorus smart fan cooling control."
    },

    {
        id: "eq38",
        name: "EVGA CLC 120 CL11",
        category: "Cooler",
        platform: "PC",
        price: 67.99,
        image: "https://www.amazon.com/images/I/71doz7eviGL._AC_SL1500_._FMwebp_.jpg",
        url: "https://www.amazon.nl/-/en/EVGA-CL11-Liquid-Water-Cooler/dp/B07LGX9HFX",
        rating: 8.0,
        description: "Compact 120mm AIO liquid cooler with ARGB pump head, magnetic levitation fan, and tool-free installation."
    },
    {
        id: "eq39",
        name: "Thermaltake TH120 ARGB",
        category: "Cooler",
        platform: "PC",
        price: 59.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.XoJbTchXNh7xlE-p47wkuwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Thermaltake-Cooling-500-2000-Waterblock-CL-W360-PL12SW/dp/B0CCXNXVFC",
        rating: 8.2,
        description: "120mm AIO cooler with a stunning ARGB waterblock, 500–2000 RPM fan, and broad Intel/AMD socket compatibility."
    },
    {
        id: "eq40",
        name: "NZXT Kraken X53",
        category: "Cooler",
        platform: "PC",
        price: 123.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.FxQ4QxCq5wlMSLUD4w5EUgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/NZXT-Kraken-X53-240mm-RL-KRX53-01/dp/B082DYR131",
        rating: 8.7,
        description: "240mm AIO with an illuminated infinity-mirror pump head, two Aer P 120mm fans, and CAM software integration."
    },

    {
        id: "eq41",
        name: "EVGA Supernova 1000 P3",
        category: "Power Supply",
        platform: "PC",
        price: 476.13,
        image: "https://th.bing.com/th/id/R.09efbff1f9074ed5ac5cb46a4b335e76?rik=gQ9PkwmsDTIIYQ&pid=ImgRaw&r=0",
        url: "https://www.amazon.com/EVGA-Supernova-Platinum-Crossfire-220-P2-1000-XR/dp/B00EKJQM5E",
        rating: 9.0,
        description: "1000W 80+ Platinum fully modular PSU with 10-year warranty, ECO mode, and top-tier Japanese capacitors."
    },
    {
        id: "eq42",
        name: "Corsair CX-M Series CX650M",
        category: "Power Supply",
        platform: "PC",
        price: 89.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.47e9TKMjmcq4XD2JF90LUAHaGE?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Corsair-CX650M-Modular-Supply-Bronze/dp/B093NTQJSF",
        rating: 8.4,
        description: "650W 80+ Bronze semi-modular PSU, great for mid-range builds with reliable performance and a 5-year warranty."
    },
    {
        id: "eq43",
        name: "SilverStone Technology SX1000 Platinum",
        category: "Power Supply",
        platform: "PC",
        price: 287.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.ZklZ5DhGwUGXw6VOqYJRoQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.sa/-/en/SilverStone-Technology-Platinum-Modular-SX1000-LPT-X/dp/B0919YY7Z6",
        rating: 9.1,
        description: "1000W SFX-L 80+ Platinum fully modular PSU designed for compact ITX and small form factor high-performance builds."
    },

    {
        id: "eq44",
        name: "Razer Blade 16",
        category: "Gaming Laptop",
        platform: "PC",
        price: 1999.00,
        image: "https://assets2.razerzone.com/images/pnx.assets/62fd0244762cde2b9ccabf21add45c99/blade16-2025-1200x-630.webp",
        url: "https://www.amazon.com/Razer-Blade-16-Gaming-Laptop/dp/B0BSRHPND7",
        rating: 9.2,
        description: "Premium 16-inch gaming laptop with RTX 40-series GPU, dual-mode Mini LED display, and ultra-thin CNC aluminum chassis."
    },
    {
        id: "eq45",
        name: "MSI Raider 18 HX AI",
        category: "Gaming Laptop",
        platform: "PC",
        price: 3499.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.EmnVjo24WVmPYl4JSBFq8gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/Raider-18-HX-AI-A2XWJG-445CA/dp/B0DY34S56N",
        rating: 9.3,
        description: "18-inch flagship gaming laptop with Intel Core Ultra HX AI CPU, RTX 50-series GPU, and 4K 120Hz MiniLED display."
    },
    {
        id: "eq46",
        name: "HP OMEN MAX 16",
        category: "Gaming Laptop",
        platform: "PC",
        price: 831.25,
        image: "https://tse2.mm.bing.net/th/id/OIP.Hb34e7AJXyWGrnxP_3BAoQHaD2?rs=1&pid=ImgDetMain&o=7&rm=3",
        url: "https://www.amazon.com/HP-Display-GeForce-Bluetooth-Keyboard/dp/B0FXN4R4LX",
        rating: 8.7,
        description: "16-inch gaming laptop with AI-tuned performance, NVIDIA GeForce GPU, and OMEN Tempest Cooling for sustained fps."
    }


];

const categories = ["All", "Controller", "Console", "Handheld", "Headset", "Keyboard", "GPU", "CPU", "Case", "RAM" ,"Motherboard", "Cooler", "Power Supply", "Gaming Laptop"];

function Equipment(){
    const [search, setSearch]=useState("");
    const [selectedCategory, setSelectedCategory]=useState("All");
    const [sortBy, setSortBy]=useState("default");

    let filtered=equipment.filter(item=>{
        const matchesCategory=selectedCategory==="All"||item.category===selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    })

    if(sortBy==="price-asc") filtered =[...filtered].sort((a,b)=>a.price - b.price);
    if(sortBy==="price-desc") filtered =[...filtered].sort((a,b)=>b.price - a.price);
    if(sortBy==="rating") filtered =[...filtered].sort((a,b)=>b.rating - a.rating);

    return (
        <div>
            <Navbar/>
            <div className="hero equipmentHero">
                <h1>🎧 Equipment Store</h1>
                <p>Top-rated gameing gear!!</p>
            </div>

            <div className="filtersBar">
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search equipment..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    />
                <select
                    className="sort-select"
                    value={sortBy}
                    onChange={e=>setSortBy(e.target.value)}
                    >
                        <option value="default">Sort: Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low </option>
                        <option value="rating">Top Rated</option>
                    </select>
            </div>

            <div className="filterGroup" >
                {categories.map(cat=>(

                    <button
                        key={cat}
                        className={`filter-btn ${selectedCategory===cat ? "active":""}`}
                        onClick={()=>setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="pageContent">
                {filtered.length===0?(
                    <div className="noResults">
                        <p>No equipment found for "{search}"</p>
                        <button onClick={()=>{setSearch("");setSelectedCategory("All");}}>
                            Clear filters
                        </button>
                    </div>
                ):(
                    <div className="equipmentGrid">
                        {filtered.map(item=>(
                            <div key={item.id} className="equipCard">
                                <div className="equipCardImage">
                                    <img 
                                        src={item.image}
                                        alt={item.name}
                                        onError={e=>{
                                            e.target.src=`https://via.placeholder.com/400x240/1c2541/ffffff?text=${encodeURIComponent(item.name)}`;
                                        }}
                                    />
                                    <span className="categoryBadge">{item.category}</span>
                                    <span className="ratingBadge">⭐ {item.rating}</span>
                                </div>
                                <div className="equipCardInfo">
                                    <div className="equipCardName">{item.name}</div>
                                    <div className="equipCardDesc">{item.description}</div>
                                    <div className="equipCardFooter">
                                        <span className="equipCardPrice">${item.price.toFixed(2)}</span>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="equipViewBtn"
                                            >
                                                View Store 
                                        </a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Equipment;