/**
 * Abhijit Enterprises - Internationalization (i18n) Engine
 * Supports: English (en) and Marathi (mr)
 * Smooth client-side switching with localStorage persistence
 */

const translations = {
  en: {
    // Header & Navigation
    "nav_home": "Home",
    "nav_about": "About Us",
    "nav_services": "Services",
    "nav_gallery": "Gallery",
    "nav_contact": "Contact",
    "btn_call_now": "Call Now",
    "btn_whatsapp_enquiry": "WhatsApp Enquiry",
    "btn_view_services": "Explore Services",
    "btn_get_quote": "Get Quick Quote",
    "btn_send_message": "Send Enquiry via WhatsApp",
    "top_address": "Sadubhau Market, Near SMV School, Akluj",
    "quick_contact": "Quick Enquiry",

    // Homepage Hero
    "hero_badge": "Printing, Digital Services & Travel Solutions in Akluj",
    "hero_title": "Your Local Partner for Printing, Digital Services & Travel",
    "hero_subtitle": "From professional digital printing and wedding invitations to document scanning, PAN services and travel bookings — Abhijit Enterprises makes everyday business and personal requirements easier.",
    "hero_trust_local": "Trusted in Akluj & Solapur",
    "hero_trust_speed": "Fast Turnaround & Quality",
    "hero_trust_multi": "One-Stop Solution",

    // Why Choose Us
    "why_badge": "Why Abhijit Enterprises",
    "why_title": "Why Customers in Akluj Choose Us",
    "why_subtitle": "We combine modern printing technology, attentive local customer service, and multi-service convenience under one roof.",
    "why_1_title": "All Services in One Place",
    "why_1_desc": "Save time and effort by accessing high-end printing, government online paperwork, document scanning, and travel assistance in a single visit.",
    "why_2_title": "Modern Digital Facilities",
    "why_2_desc": "Equipped with advanced digital printing and precision finishing machinery for sharp colors and crisp cuts.",
    "why_3_title": "Personal & Commercial Support",
    "why_3_desc": "Whether you need a single PAN card or 10,000 corporate flyers and wedding invitation cards, we cater to every scale.",
    "why_4_title": "Fast Phone & WhatsApp Help",
    "why_4_desc": "No complicated booking processes — simply call or message our friendly team on WhatsApp for instant assistance and quotes.",

    // Services Section
    "services_badge": "Comprehensive Solutions",
    "services_title": "Our Core Services",
    "services_subtitle": "Carefully tailored services for individuals, professionals, students, and businesses across Akluj and surrounding regions.",
    
    // Service 1: Printing
    "srv_print_title": "Digital & Commercial Printing",
    "srv_print_badge": "Popular",
    "srv_print_desc": "High-resolution colour and monochrome printing on premium paper stocks for all marketing, business, and event requirements.",
    "srv_print_f1": "Vibrant colour & sharp mono digital printing",
    "srv_print_f2": "Brochures, leaflets, flyers & pamphlets",
    "srv_print_f3": "Business cards & official office stationery",
    "srv_print_f4": "Custom wedding invitation cards & envelopes",
    "srv_print_f5": "Product labels, die-cut stickers & customized prints",

    // Service 2: Finishing & Cutting
    "srv_finish_title": "Digital Finishing & Cutting",
    "srv_finish_badge": "Precision",
    "srv_finish_desc": "Give your printed materials the edge with custom shapes, digital die-cutting, folding, and premium finishing.",
    "srv_finish_f1": "Digital die-cutting for unique shapes & contours",
    "srv_finish_f2": "Custom stickers, product decals & novelty cut-outs",
    "srv_finish_f3": "Short-run and customized print finishing",
    "srv_finish_f4": "Creasing, perforating & high-accuracy trimming",

    // Service 3: Govt & Online Services
    "srv_govt_title": "Government & Online Services",
    "srv_govt_badge": "Essential",
    "srv_govt_desc": "Hassle-free document preparation, online application assistance, and digital identity solutions guided by local expertise.",
    "srv_govt_f1": "New PAN card application & correction services",
    "srv_govt_f2": "Digital Signature Certificate (DSC) issuance",
    "srv_govt_f3": "Online application & citizen document assistance",
    "srv_govt_f4": "Assistance verified as per official guidelines",

    // Service 4: Scanning & Document Digitisation
    "srv_scan_title": "High-Speed Document Scanning",
    "srv_scan_badge": "Digitisation",
    "srv_scan_desc": "Rapid, high-resolution scanning and archiving for legal offices, institutions, schools, and business records.",
    "srv_scan_f1": "High-speed document feeder scanning",
    "srv_scan_f2": "A3 & A4 large format scanning",
    "srv_scan_f3": "Full-colour and black-and-white digital archiving",
    "srv_scan_f4": "Bulk records digitisation and searchable PDF conversion",

    // Service 5: Travel Services
    "srv_travel_title": "Travel & Cruise Bookings",
    "srv_travel_badge": "Leisure & Business",
    "srv_travel_desc": "Enquiry-based travel planning, ticketing, holiday packages, and luxury cruise assistance for individuals and families.",
    "srv_travel_f1": "Customized domestic & international holiday assistance",
    "srv_travel_f2": "Cruise booking assistance (including Cordelia Cruises)",
    "srv_travel_f3": "Itinerary planning & family vacation enquiry",
    "srv_travel_f4": "Transparent guidance & friendly local support",

    // Service 6: Office & Computer Supplies
    "srv_supplies_title": "Office & Computer Supplies",
    "srv_supplies_badge": "Supplies",
    "srv_supplies_desc": "Quality office stationery essentials, computer peripherals, and replacement accessories to keep your workplace running.",
    "srv_supplies_f1": "Standard & premium office stationery items",
    "srv_supplies_f2": "Computer accessories, cables & replacement spares",
    "srv_supplies_f3": "School & commercial desk supplies",
    "srv_supplies_f4": "Quick order & convenient local pickup in Akluj",

    // Capabilities Section
    "cap_badge": "Technology & Speed",
    "cap_title": "Equipped for High-Volume & Precision Printing",
    "cap_desc": "We continually invest in capable digital printing and high-throughput scanning hardware to deliver crisp output with fast local turnaround.",
    "cap_spec1_val": "Modern Press",
    "cap_spec1_lbl": "Digital Colour & Mono Print Units",
    "cap_spec2_val": "Bulk Scanning",
    "cap_spec2_lbl": "A3 / A4 High-Throughput Document Feed",
    "cap_spec3_val": "Digital Cutting",
    "cap_spec3_lbl": "Custom Shapes & Short-Run Finishing",
    "cap_spec4_val": "Fast Enquiries",
    "cap_spec4_lbl": "Instant WhatsApp & Direct Phone Support",

    // CTA Banner
    "cta_banner_title": "Have a Print or Digital Project in Mind?",
    "cta_banner_text": "Connect with our team in Akluj for quick pricing, turnaround time, or service enquiries.",

    // Gallery Page
    "gallery_badge": "Portfolio & Facility",
    "gallery_title": "Our Work & Capabilities",
    "gallery_subtitle": "Take a look at our print samples, invitation designs, finishing capabilities, and service facilities in Akluj.",
    "gallery_filter_all": "All Work",
    "gallery_filter_print": "Printing",
    "gallery_filter_cards": "Wedding Cards",
    "gallery_filter_finishing": "Die-Cutting",
    "gallery_filter_scanning": "Scanning",
    "gallery_filter_travel": "Travel & Cruise",

    // About Us Page
    "about_badge": "Who We Are",
    "about_title": "Serving Akluj with Quality, Speed & Integrity",
    "about_lead": "Abhijit Enterprises is a trusted local service provider in Akluj, Maharashtra, dedicated to delivering superior digital printing, document digitisation, e-governance assistance, and travel booking services.",
    "about_p1": "Established to fulfill the growing demand for modern printing and digital document solutions in Akluj and the surrounding Solapur district, we pride ourselves on friendly local service, reliable turnarounds, and personal attention to every client.",
    "about_p2": "From families planning momentous wedding celebrations with elegant invitation cards, to businesses seeking crisp promotional brochures, to citizens needing PAN card and document digitisation, we stand ready to assist.",
    "about_values_title": "Our Guiding Values",
    "val_1_title": "Customer-First Approach",
    "val_1_desc": "Every project, large or small, receives thoughtful attention to quality, finish, and timely completion.",
    "val_2_title": "Modern Technology",
    "val_2_desc": "We embrace digital printing, die-cutting, and scanning systems that produce clear, vibrant results.",
    "val_3_title": "Honest & Clear Advice",
    "val_3_desc": "Transparent quotes, truthful timelines, and verified guidance for all government and travel services.",

    // Contact Page & Form
    "contact_badge": "Get in Touch",
    "contact_title": "Contact Abhijit Enterprises",
    "contact_subtitle": "Visit our office in Sadubhau Market, call us directly, or send an enquiry instantly via WhatsApp.",
    "contact_phone_title": "Phone & Call Support",
    "contact_phone_val": "+91 82083 61003",
    "contact_wa_title": "WhatsApp Enquiry",
    "contact_wa_val": "Chat on WhatsApp (+91 82083 61003)",
    "contact_address_title": "Shop Address",
    "contact_address_val": "91, Sadubhau Market, Near SMV Primary School, Akluj, Dist. Solapur, Maharashtra — 413101",
    "contact_hours_title": "Business Hours",
    "contact_hours_val": "Mon – Sat: 9:30 AM – 8:30 PM (Sunday: Open by appointment / on schedule)",
    
    // Form fields
    "form_title": "Send an Instant Enquiry",
    "form_desc": "Fill in your details below. You can send it directly to our team via WhatsApp for immediate response.",
    "form_name_label": "Your Full Name",
    "form_name_ph": "e.g., Ramesh Kulkarni",
    "form_phone_label": "Phone Number",
    "form_phone_ph": "e.g., 98220 12345",
    "form_service_label": "Service Interested In",
    "form_service_select": "Select a Service...",
    "form_service_opt1": "Digital Printing (Brochures / Cards / Leaflets)",
    "form_service_opt2": "Wedding Cards & Event Invitations",
    "form_service_opt3": "Digital Die-Cutting & Finishing",
    "form_service_opt4": "High-Speed Document Scanning (Bulk / A3)",
    "form_service_opt5": "Government Online / PAN Card / DSC",
    "form_service_opt6": "Travel Booking / Cordelia Cruise Assistance",
    "form_service_opt7": "Office Stationery & Computer Spares",
    "form_service_opt8": "Other Enquiry",
    "form_message_label": "Your Message / Specifications",
    "form_message_ph": "Describe what you need (e.g. quantity, size, timeline)...",
    "form_btn_submit": "Send via WhatsApp",
    "form_btn_direct": "Submit Enquiry Online",
    "form_success_msg": "Thank you! Your enquiry has been received. Opening WhatsApp for direct confirmation...",
    "form_err_name": "Please enter your full name.",
    "form_err_phone": "Please enter a valid 10-digit mobile number.",
    "form_err_service": "Please select the service you are interested in.",
    "form_err_msg": "Please write a short note about your enquiry.",

    // Footer
    "footer_about_text": "Abhijit Enterprises is your premier multi-service hub in Akluj for digital printing, custom finishing, document digitisation, online government solutions, and travel planning.",
    "footer_col_links": "Quick Links",
    "footer_col_services": "Our Services",
    "footer_col_contact": "Visit / Contact",
    "footer_rights": "All Rights Reserved.",
    "footer_disclaimer": "Note: Government and travel services are subject to applicable official rules and availability. Specifications and prices are subject to confirmation.",
    "footer_privacy": "Privacy Policy",

    // Privacy Policy Page
    "privacy_title": "Privacy Policy",
    "privacy_updated": "Last updated: November 2026",
    "privacy_lead": "At Abhijit Enterprises, we value your trust. This Privacy Policy details how we handle the basic enquiry information you provide to us.",
    "privacy_p1": "We collect information such as your name, mobile phone number, and enquiry details solely to respond to your request, provide quotes, and fulfill your printing or service orders.",
    "privacy_p2": "We do not sell, rent, or trade your contact information to third parties. Any government-related documents (such as PAN applications) are processed with strict confidentiality as mandated by official rules.",

    // 404 Page
    "404_title": "Page Not Found",
    "404_desc": "The page you are looking for might have been moved, renamed, or is temporarily unavailable.",
    "404_btn": "Back to Home"
  },

  mr: {
    // Header & Navigation
    "nav_home": "मुख्यपृष्ठ",
    "nav_about": "आमच्याबद्दल",
    "nav_services": "सेवा",
    "nav_gallery": "गॅलरी",
    "nav_contact": "संपर्क",
    "btn_call_now": "फोन करा",
    "btn_whatsapp_enquiry": "WhatsApp वर चौकशी करा",
    "btn_view_services": "आमच्या सेवा पाहा",
    "btn_get_quote": "दरपत्रक मिळवा",
    "btn_send_message": "WhatsApp द्वारे चौकशी पाठवा",
    "top_address": "साडूभाऊ मार्केट, SMV शाळेजवळ, अकलूज",
    "quick_contact": "त्वरित चौकशी",

    // Homepage Hero
    "hero_badge": "प्रिंटिंग, डिजिटल सेवा आणि प्रवास उपाय — सर्व एकाच ठिकाणी",
    "hero_title": "प्रिंटिंग, डिजिटल सेवा आणि प्रवासासाठी — आपले विश्वासार्ह केंद्र",
    "hero_subtitle": "आकर्षक डिजिटल प्रिंटिंग, लग्नपत्रिका, डॉक्युमेंट स्कॅनिंग, पॅन कार्ड सेवा आणि प्रवास बुकिंग अशा विविध सेवांसाठी अभिजित एंटरप्रायझेसशी संपर्क साधा.",
    "hero_trust_local": "अकलूज व सोलापूर जिल्ह्यातील विश्वास",
    "hero_trust_speed": "जलद सेवा व दर्जेदार काम",
    "hero_trust_multi": "सर्वसमावेशक सुविधा",

    // Why Choose Us
    "why_badge": "अभिजित एंटरप्रायझेस का निवडाल?",
    "why_title": "अकलूजमधील ग्राहक आम्हाला का पसंती देतात?",
    "why_subtitle": "आधुनिक प्रिंटिंग तंत्रज्ञान, तत्पर स्थानिक ग्राहकसेवा आणि एकाच छताखाली विविध सेवांची विश्वासार्ह सुविधा.",
    "why_1_title": "एकाच ठिकाणी विविध सेवा",
    "why_1_desc": "हाय-एंड डिजिटल प्रिंटिंग, शासकीय ऑनलाइन अर्ज, डॉक्युमेंट स्कॅनिंग आणि ट्रॅव्हल बुकिंगसाठी एकाच ठिकाणी संपूर्ण सोय.",
    "why_2_title": "आधुनिक डिजिटल सुविधा",
    "why_2_desc": "आकर्षक रंगसंगती आणि अचूक फिनिशिंगसाठी अत्याधुनिक डिजिटल प्रिंटिंग व कटिंग मशनरी उपलब्ध.",
    "why_3_title": "वैयक्तिक व व्यावसायिक सेवा",
    "why_3_desc": "पॅन कार्ड असो किंवा १०,००० व्यावसायिक ब्रोशर्स व लग्नपत्रिका — आम्ही प्रत्येक कामाला योग्य न्याय देतो.",
    "why_4_title": "फोन आणि WhatsApp द्वारे सहज संपर्क",
    "why_4_desc": "कोणतीही क्लिष्ट प्रक्रिया नाही — थेट फोन करा किंवा WhatsApp वर मेसेज करून त्वरित माहिती व दरपत्रक मिळवा.",

    // Services Section
    "services_badge": "आमच्या प्रमुख सेवा",
    "services_title": "सर्वसमावेशक सेवांची यादी",
    "services_subtitle": "नागरिक, व्यावसायिक, विद्यार्थी आणि संस्थांसाठी अकलूज व परिसरातील सर्वोत्तम सेवा.",

    // Service 1: Printing
    "srv_print_title": "डिजिटल व कमर्शियल प्रिंटिंग",
    "srv_print_badge": "लोकप्रिय",
    "srv_print_desc": "उत्कृष्ट दर्जाच्या कागदावर हाय-रिझोल्यूशन कलर आणि ब्लॅक अँड व्हाईट डिजिटल प्रिंटिंग.",
    "srv_print_f1": "आकर्षक कलर आणि स्पष्ट ब्लॅक अँड व्हाईट डिजिटल प्रिंटिंग",
    "srv_print_f2": "माहितीपत्रके (ब्रोशर्स), पत्रके (फ्लाईअर्स) व लिफलेट्स",
    "srv_print_f3": "व्हिजिटिंग कार्ड्स आणि ऑफिस स्टेशनरी",
    "srv_print_f4": "मनपसंत लग्नपत्रिका व आमंत्रण पत्रिका",
    "srv_print_f5": "प्रॉडक्ट लेबल्स, स्टिकर्स आणि कस्टमाईज्ड प्रिंट कामे",

    // Service 2: Finishing & Cutting
    "srv_finish_title": "डिजिटल फिनिशिंग व डाय-कटिंग",
    "srv_finish_badge": "अचूक फिनिशिंग",
    "srv_finish_desc": "तुमच्या प्रिंट कामांना आकर्षक आकार, डिजिटल डाय-कटिंग आणि दर्जेदार फिनिशिंगची जोड.",
    "srv_finish_f1": "मनपसंत आकारांसाठी अचूक डिजिटल डाय-कटिंग",
    "srv_finish_f2": "कस्टम स्टिकर्स, डेकल्स व विविध कट-आउट्स",
    "srv_finish_f3": "कमी प्रतींची (Short-run) व खास फिनिशिंग कामे",
    "srv_finish_f4": "क्रीझिंग, पर्फोरेशन्स व हाय-ॲक्युरसी ट्रिमिंग",

    // Service 3: Govt & Online Services
    "srv_govt_title": "शासकीय व ऑनलाइन सेवा",
    "srv_govt_badge": "महत्त्वपूर्ण",
    "srv_govt_desc": "कागदपत्रे तयार करणे, ऑनलाइन अर्ज भरणे आणि डिजिटल ओळख सेवांसाठी तज्ज्ञ मार्गदर्शन.",
    "srv_govt_f1": "नवीन पॅन कार्ड अर्ज व दुरुस्ती सेवा",
    "srv_govt_f2": "डिजिटल सिग्नेचर सर्टिफिकेट (DSC) सुविधा",
    "srv_govt_f3": "शासकीय ऑनलाइन अर्ज व कागदपत्र साहाय्य",
    "srv_govt_f4": "अधिकृत नियमांनुसार अचूक व सुरक्षित प्रक्रिया",

    // Service 4: Scanning & Document Digitisation
    "srv_scan_title": "हाय-स्पीड डॉक्युमेंट स्कॅनिंग",
    "srv_scan_badge": "डिजिटायझेशन",
    "srv_scan_desc": "कार्यालये, कायदेशीर दस्तऐवज, शाळा-महाविद्यालये व संस्थांसाठी जलद व स्पष्ट स्कॅनिंग.",
    "srv_scan_f1": "हाय-स्पीड ऑटो डॉक्युमेंट फीडर स्कॅनिंग",
    "srv_scan_f2": "A3 आणि A4 मोठ्या आकाराचे स्कॅनिंग",
    "srv_scan_f3": "रंगीत व कृष्णधवल (B&W) डिजिटल संग्रहण",
    "srv_scan_f4": "मोठ्या प्रमाणातील दस्तऐवज डिजिटायझेशन व सर्च करण्यायोग्य PDF",

    // Service 5: Travel Services
    "srv_travel_title": "प्रवास व क्रूझ बुकिंग साहाय्य",
    "srv_travel_badge": "पर्यटन व प्रवास",
    "srv_travel_desc": "पर्यटन नियोजन, तिकीट बुकिंग, कौटुंबिक सहली आणि लक्झरी क्रूझ प्रवासासाठी साहाय्य.",
    "srv_travel_f1": "देशांतर्गत व आंतरराष्ट्रीय पर्यटन साहाय्य",
    "srv_travel_f2": "क्रूझ बुकिंग साहाय्य (कॉर्डेलिया क्रूझसह)",
    "srv_travel_f3": "प्रवास नियोजन व कुटुंबासाठी हॉलिडे पॅकेज चौकशी",
    "srv_travel_f4": "स्थानिक पातळीवर पारदर्शक व विश्वासार्ह मार्गदर्शन",

    // Service 6: Office & Computer Supplies
    "srv_supplies_title": "ऑफिस व कॉम्प्युटर साहित्य",
    "srv_supplies_badge": "साहित्य",
    "srv_supplies_desc": "कार्यालयीन स्टेशनरी, संगणक सुटे भाग आणि दैनंदिन कार्यालयीन आवश्यक साहित्य.",
    "srv_supplies_f1": "दर्जेदार कार्यालयीन स्टेशनरी साहित्य",
    "srv_supplies_f2": "कॉम्प्युटर ॲक्सेसरीज, केबल्स व सुटे भाग",
    "srv_supplies_f3": "शालेय व कार्यालयीन डेस्क स्टेशनरी",
    "srv_supplies_f4": "अकलूजमध्ये त्वरित मिळण्याची खात्रीशीर सोय",

    // Capabilities Section
    "cap_badge": "तंत्रज्ञान आणि गती",
    "cap_title": "मोठ्या प्रमाणातील प्रिंटिंग व स्कॅनिंगसाठी सज्ज",
    "cap_desc": "अकलूजमध्ये दर्जेदार प्रिंटिंग आणि जलद सेवा देण्यासाठी आम्ही आधुनिक यंत्रसामग्रीचा वापर करतो.",
    "cap_spec1_val": "आधुनिक प्रेस",
    "cap_spec1_lbl": "डिजिटल कलर व मोनो प्रिंट युनिट्स",
    "cap_spec2_val": "मोठे स्कॅनिंग",
    "cap_spec2_lbl": "A3 / A4 हाय-स्पीड दस्तऐवज डिजिटायझेशन",
    "cap_spec3_val": "डिजिटल कटिंग",
    "cap_spec3_lbl": "कस्टम शेप्स व अचूक फिनिशिंग",
    "cap_spec4_val": "त्वरित प्रतिसाद",
    "cap_spec4_lbl": "थेट फोन व WhatsApp वर त्वरित मदत",

    // CTA Banner
    "cta_banner_title": "तुमच्याकडे प्रिंटिंग किंवा डिजिटल कामाची आवश्यकता आहे का?",
    "cta_banner_text": "त्वरित दरपत्रक आणि अधिक माहितीसाठी अकलूज येथील आमच्या कार्यालयाशी संपर्क साधा.",

    // Gallery Page
    "gallery_badge": "आमचे काम व सुविधा",
    "gallery_title": "गॅलरी आणि कामाचे नमुने",
    "gallery_subtitle": "आमच्या प्रिंटिंग मशिन्स, लग्नपत्रिका, डाय-कट उत्पादने आणि सुविधांची छायाचित्रे पाहा.",
    "gallery_filter_all": "सर्व कामे",
    "gallery_filter_print": "प्रिंटिंग",
    "gallery_filter_cards": "लग्नपत्रिका",
    "gallery_filter_finishing": "डाय-कटिंग",
    "gallery_filter_scanning": "स्कॅनिंग",
    "gallery_filter_travel": "प्रवास व क्रूझ",

    // About Us Page
    "about_badge": "आमच्याबद्दल",
    "about_title": "गुणवत्ता, गती आणि विश्वासासह अकलूजची सेवा",
    "about_lead": "अभिजित एंटरप्रायझेस हे अकलूज (सोलापूर) येथील एक अग्रगण्य केंद्र असून डिजिटल प्रिंटिंग, दस्तऐवज स्कॅनिंग, ई-सेवा आणि ट्रॅव्हल बुकिंगमध्ये कार्यरत आहे.",
    "about_p1": "अकलूज आणि परिसरातील नागरिकांची व व्यावसायिकांची गरज ओळखून आधुनिक तंत्रज्ञान आणि तत्पर ग्राहकसेवेच्या माध्यमातून आम्ही विश्वास संपादन केला आहे.",
    "about_p2": "घरगुती लग्नपत्रिका असोत, दुकाने व कंपन्यांचे प्रचार साहित्य असो किंवा शासकीय ऑनलाईन अर्ज — आम्ही प्रत्येक ग्राहकाला समाधानकारक सेवा देण्यास कटिबद्ध आहोत.",
    "about_values_title": "आमची मूल्ये",
    "val_1_title": "ग्राहकांचे समाधान प्रथम",
    "val_1_desc": "प्रत्येक लहान-मोठ्या कामात उच्च दर्जा, उत्तम फिनिशिंग आणि वेळेवर पूर्तता.",
    "val_2_title": "आधुनिक तंत्रज्ञान",
    "val_2_desc": "स्पष्ट आणि उठावदार प्रिंटसाठी आधुनिक डिजिटल मशनरीचा वापर.",
    "val_3_title": "पारदर्शक व्यवहार",
    "val_3_desc": "वाजवी दर, वेळेचे अचूक नियोजन आणि शासकीय कामांसाठी अधिकृत नियमांचे पालन.",

    // Contact Page & Form
    "contact_badge": "संपर्क साधा",
    "contact_title": "अभिजित एंटरप्रायझेसशी संपर्क साधा",
    "contact_subtitle": "साडूभाऊ मार्केटमधील आमच्या केंद्राला भेट द्या, थेट फोन करा किंवा त्वरित WhatsApp मेसेज पाठवा.",
    "contact_phone_title": "फोन नंबर",
    "contact_phone_val": "+91 82083 61003",
    "contact_wa_title": "WhatsApp चौकशी",
    "contact_wa_val": "WhatsApp वर चॅट करा (+91 82083 61003)",
    "contact_address_title": "पत्ता",
    "contact_address_val": "९१, साडूभाऊ मार्केट, SMV प्रायमरी शाळेजवळ, अकलूज, जि. सोलापूर, महाराष्ट्र — ४१३१०१",
    "contact_hours_title": "कामकाजाची वेळ",
    "contact_hours_val": "सोम – शनि: स. ९:३० ते रात्री ८:३० (रविवार: पूर्वसूचनेनुसार/नियोजनानुसार)",

    // Form fields
    "form_title": "त्वरित चौकशी पाठवा",
    "form_desc": "खालील माहिती भरा. तुम्ही थेट WhatsApp द्वारे देखील ही चौकशी त्वरित पाठवू शकता.",
    "form_name_label": "आपले पूर्ण नाव",
    "form_name_ph": "उदा. रमेश कुलकर्णी",
    "form_phone_label": "मोबाईल नंबर",
    "form_phone_ph": "उदा. ९८२२० १२३४५",
    "form_service_label": "हवी असणारी सेवा",
    "form_service_select": "सेवा निवडा...",
    "form_service_opt1": "डिजिटल प्रिंटिंग (ब्रोशर्स / कार्ड्स / पत्रके)",
    "form_service_opt2": "लग्नपत्रिका व निमंत्रण पत्रिका",
    "form_service_opt3": "डिजिटल डाय-कटिंग व फिनिशिंग",
    "form_service_opt4": "हाय-स्पीड डॉक्युमेंट स्कॅनिंग (A3/बल्क)",
    "form_service_opt5": "शासकीय ऑनलाईन सेवा / पॅन कार्ड / DSC",
    "form_service_opt6": "ट्रॅव्हल बुकिंग / क्रूझ बुकिंग साहाय्य",
    "form_service_opt7": "ऑफिस स्टेशनरी व कॉम्प्युटर साहित्य",
    "form_service_opt8": "इतर चौकशी",
    "form_message_label": "कामाचा तपशील / संदेश",
    "form_message_ph": "आपल्या गरजेचा तपशील लिहा (उदा. साईज, प्रमाण, तारीख)...",
    "form_btn_submit": "WhatsApp द्वारे पाठवा",
    "form_btn_direct": "ऑनलाइन चौकशी नोंदवा",
    "form_success_msg": "धन्यवाद! आपली चौकशी नोंदवली गेली आहे. त्वरित संभाषणासाठी WhatsApp उघडले जात आहे...",
    "form_err_name": "कृपया आपले पूर्ण नाव लिहा.",
    "form_err_phone": "कृपया वैध १० अंकी मोबाईल नंबर टाका.",
    "form_err_service": "कृपया हवी असलेली सेवा निवडा.",
    "form_err_msg": "कृपया आपल्या चौकशीबद्दल थोडी माहिती लिहा.",

    // Footer
    "footer_about_text": "अभिजित एंटरप्रायझेस हे अकलूजमधील डिजिटल प्रिंटिंग, डॉक्युमेंट स्कॅनिंग, शासकीय ऑनलाइन सेवा आणि पर्यटन साहाय्यासाठीचे विश्वासार्ह केंद्र आहे.",
    "footer_col_links": "महत्त्वाचे दुवे",
    "footer_col_services": "आमच्या सेवा",
    "footer_col_contact": "पत्ता व संपर्क",
    "footer_rights": "सर्व हक्क राखीव.",
    "footer_disclaimer": "सूचना: शासकीय आणि पर्यटन सेवा या संबंधित अधिकृत नियमांवर व उपलब्धतेवर अवलंबून असतात. दर आणि तांत्रिक तपशील अंतिम पडताळणीनुसार ग्राह्य धरले जातील.",
    "footer_privacy": "गोपनीयता धोरण",

    // Privacy Policy Page
    "privacy_title": "गोपनीयता धोरण (Privacy Policy)",
    "privacy_updated": "अंतिम सुधारणा: नोव्हेंबर २०२६",
    "privacy_lead": "अभिजित एंटरप्रायझेसमध्ये आम्ही ग्राहकांच्या गोपनीयतेचा आदर करतो. आम्ही घेतलेल्या चौकशी माहितीचा वापर कसा करतो याचे हे स्पष्टीकरण आहे.",
    "privacy_p1": "आम्ही आपले नाव, फोन नंबर आणि कामाचा तपशील केवळ आपल्या चौकशीला उत्तर देण्यासाठी आणि ऑर्डर पूर्ण करण्यासाठी गोळा करतो.",
    "privacy_p2": "आम्ही आपली वैयक्तिक माहिती कोणत्याही त्रयस्थ पक्षाला विकत किंवा देत नाही. शासकीय अर्ज आणि कागदपत्रे अधिकृत नियमांनुसार अत्यंत सुरक्षित ठेवली जातात.",

    // 404 Page
    "404_title": "पृष्ठ सापडले नाही (404)",
    "404_desc": "आपण शोधत असलेले पृष्ठ उपलब्ध नाही किंवा बदलण्यात आले आहे.",
    "404_btn": "मुख्यपृष्ठावर जा"
  }
};

/**
 * Switch language and update UI
 */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  
  // Persist preference
  localStorage.setItem('ae_preferred_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  // Update active state in buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dispatch custom event for other scripts if needed
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Initialize language on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('ae_preferred_lang') || 'en';
  setLanguage(savedLang);

  // Attach click listeners to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });
});

