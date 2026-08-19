const translations = {
    sv: {
        title: "Matlådebyggare 6.0",
        tab_build: "Byggaren",
        tab_batch: "Storkok",
        tab_freezer: "Frys",
        tab_pantry: "Skafferi",
        tab_schedule: "Matsedel",
        tab_settings: "Inställningar",
        
        btn_save: "💾 Spara",
        btn_reset: "🔄 Återställ",
        btn_freeze: "🔮 Skicka till Frys",
        btn_copy: "📋 Kopiera inköpslistan till mobilen",
        btn_print: "🖨️ Etikett",
        btn_add: "➕ Lägg till",
        btn_load: "📂 Ladda",
        btn_delete: "🗑️ Radera",
        btn_add_system: "💾 Lägg till i systemet",
        btn_save_edits: "💾 Spara alla ändringar",
        btn_save_template: "💾 Spara mall",
        btn_send_batch: "🔮 Skicka storkok till frysen",
        btn_eat_plate: "🍽️ Ät tallrik!",
        btn_add_box: "+ Lägg till låda",
        btn_used_other: "Använts till annat",

        tip_intro: "Välj om du vill bygga med 2 ingredienser (protein + bas) eller 1 enkel ingrediens!",
        shopping_title: "🛒 Sammanställd Inköpslista (Anpassad efter ditt skafferilager!)",
        kitchen_title: "🍳 Kökets exakta tillagningsmått:",
        total_price: "Uppskattat totalpris i kassan:",
        
        lbl_layout: "Form- & batch-storlek:",
        lbl_mode: "Recepttyp per låda:",
        lbl_template: "Ladda sparad mall:",
        lbl_recipe_name: "Receptets namn",
        lbl_yield: "Antal färdiga portioner/lådor",
        lbl_batch_ing: "Ingredienser för hela satsen:",
        lbl_batch_calc: "Beräknat per färdig portion/låda:",
        lbl_freezer_header: "❄️ Mitt Permanenta Fryslager",
        lbl_freezer_sub: "Visar infrysningsdatum, storlek (ml) och utgångsdatum (3 månaders hållbarhet).",
        lbl_freezer_empty: "Frysen är tom.",
        lbl_pantry_header: "📦 Mitt Skafferilager",
        lbl_pantry_sub: "Här ser du vad som finns kvar i skafferiet efter kub-beräkningen.",
        lbl_pantry_empty: "Skafferiet är tomt.",
        lbl_schedule_header: "📅 Veckomatsedel & Tallriksvy",
        lbl_schedule_sub: "Bygg ihop din tallrik med flera komponenter direkt från frysen.",
        lbl_lang_header: "🌐 Språk / Language",
        lbl_lang_sub: "Välj språk för hela applikationen:",
        lbl_add_ing_header: "➕ Lägg till ny råvara",
        lbl_edit_header: "✏️ Redigera Priser & Butiksvaror",
        
        mode_2: "2 Ingredienser (Protein + Bas)",
        mode_1: "1 Ingrediens (Enkelråvara / Soppa)",
        
        layout_4: "4 st lådor (max 250 ml)",
        layout_2: "2 st stora lådor (max 500 ml)",
        layout_6: "6 st små lådor (max 125 ml)",
        layout_10: "10 st små såskuber (max 30 ml)",
        
        compartment: "Fack #",
        style_layered: "Skiktad",
        style_allinone: "Allt i ett",
        prot_label: "Protein:",
        carb_label: "Bas:",
        vol_label: "Volym:",
        prot_pct: "Protein %:",
        
        th_name: "Namn (Butik)",
        th_size: "Storlek",
        th_price: "Pris (kr)",
        th_action: "Åtgärd",
        
        p_header: "Protein & Chark:",
        c_header: "Kolhydrater & Mejeribas:"
    },
    en: {
        title: "Meal Prep Builder 6.0",
        tab_build: "Builder",
        tab_batch: "Batch",
        tab_freezer: "Freezer",
        tab_pantry: "Pantry",
        tab_schedule: "Schedule",
        tab_settings: "Settings",
        
        btn_save: "💾 Save",
        btn_reset: "🔄 Reset",
        btn_freeze: "🔮 Send to Freezer",
        btn_copy: "📋 Copy shopping list to mobile",
        btn_print: "🖨️ Label",
        btn_add: "➕ Add",
        btn_load: "📂 Load",
        btn_delete: "🗑️ Delete",
        btn_add_system: "💾 Add to system",
        btn_save_edits: "💾 Save all changes",
        btn_save_template: "💾 Save template",
        btn_send_batch: "🔮 Send batch to freezer",
        btn_eat_plate: "🍽️ Eat plate!",
        btn_add_box: "+ Add box",
        btn_used_other: "Used for other purposes",

        tip_intro: "Choose whether to build with 2 ingredients (protein + base) or 1 single ingredient!",
        shopping_title: "🛒 Consolidated Shopping List (Adapted to your pantry stock!)",
        kitchen_title: "🍳 Kitchen exact cooking measures:",
        total_price: "Estimated total price at checkout:",
        
        lbl_layout: "Form & batch size:",
        lbl_mode: "Recipe type per box:",
        lbl_template: "Load saved template:",
        lbl_recipe_name: "Recipe name",
        lbl_yield: "Number of finished portions/boxes",
        lbl_batch_ing: "Ingredients for the whole batch:",
        lbl_batch_calc: "Estimated per finished portion/box:",
        lbl_freezer_header: "❄️ My Permanent Freezer Stock",
        lbl_freezer_sub: "Shows freezing date, size (ml), and expiration date (3 months shelf life).",
        lbl_freezer_empty: "The freezer is empty.",
        lbl_pantry_header: "📦 My Pantry Stock",
        lbl_pantry_sub: "Here you can see what is left in the pantry after cube calculation.",
        lbl_pantry_empty: "The pantry is empty.",
        lbl_schedule_header: "📅 Weekly Schedule & Plate View",
        lbl_schedule_sub: "Build your plate with multiple components directly from the freezer.",
        lbl_lang_header: "🌐 Language / Språk",
        lbl_lang_sub: "Select language for the application:",
        lbl_add_ing_header: "➕ Add new ingredient",
        lbl_edit_header: "✏️ Edit Prices & Store Items",
        
        mode_2: "2 Ingredients (Protein + Base)",
        mode_1: "1 Ingredient (Single ingredient / Soup)",
        
        layout_4: "4 boxes (max 250 ml)",
        layout_2: "2 large boxes (max 500 ml)",
        layout_6: "6 small boxes (max 125 ml)",
        layout_10: "10 small sauce cubes (max 30 ml)",
        
        compartment: "Compartment #",
        style_layered: "Layered",
        style_allinone: "All in one",
        prot_label: "Protein:",
        carb_label: "Base:",
        vol_label: "Volume:",
        prot_pct: "Protein %:",
        
        th_name: "Name (Store)",
        th_size: "Size",
        th_price: "Price (SEK)",
        th_action: "Action",
        
        p_header: "Protein & Cold Cuts:",
        c_header: "Carbs & Dairy Base:"
    }
};

let currentLang = localStorage.getItem('lang60') || 'sv';

function t(key) {
    return translations[currentLang][key] || key;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang60', lang);
    updateStaticTexts();
    if(typeof initBuilder === 'function') initBuilder();
    if(typeof calc === 'function') calc();
    if(typeof updateFreezerDisplay === 'function') updateFreezerDisplay();
    if(typeof updatePantryDisplay === 'function') updatePantryDisplay();
    if(typeof initScheduleView === 'function') initScheduleView();
    if(typeof renderSettings === 'function') renderSettings();
}