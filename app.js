const defaultIng = {
    p: {
        nf5: { name: "Ren Mager Nötfärs (5%)", kcal: 130, p: 21, c: 0, f: 5, spice: "🥩 Tips: Stek med salt och svartpeppar.", parts: { nf5: 1.0 } },
        nf12: { name: "Nötfärs (12%)", kcal: 180, p: 19, c: 0, f: 12, spice: "🥩 Tips: Perfekt för saftiga biffar.", parts: { nf12: 1.0 } },
        kyckling: { name: "Kycklingfilé (stekt/ugn)", kcal: 110, p: 23, c: 0, f: 2, spice: "🍗 Tips: Krydda med paprika och curry.", parts: { kycklingfile: 1.25 } },
        kebab_not: { name: "Kebabkött (Nöt)", kcal: 220, p: 16, c: 2, f: 16, spice: "🥙 Tips: Servera med vitlökssås.", parts: { fardig_kebab: 1.0 } },
        kebab_kyck: { name: "Kycklingkebab", kcal: 160, p: 20, c: 2, f: 8, spice: "🥙 Tips: Utmärkt med ris.", parts: { fardig_kyckling_kebab: 1.0 } },
        lax: { name: "Laxfilé", kcal: 170, p: 20, c: 0, f: 10, spice: "🐟 Tips: Pressa över färsk citron.", parts: { laxfile: 1.2 } },
        halloumi: { name: "Lätt-Halloumi", kcal: 240, p: 22, c: 2, f: 16, spice: "🧀 Tips: Stek gyllenbrun.", parts: { lighthalloumi: 1.0 } },
        tonfisk: { name: "Tonfisk i vatten", kcal: 105, p: 24, c: 0, f: 1, spice: "🐟 Tips: Blanda med lite citron.", parts: { tonfisk_burk: 1.0 } }
    },
    c: {
        ris: { name: "Vitt Ris (kokt)", kcal: 130, p: 3, c: 28, f: 0.3, parts: { ris_torrt: 0.3 } },
        pasta: { name: "Pasta / Makaroner (kokta)", kcal: 110, p: 3, c: 22, f: 0.5, parts: { pasta_torr: 0.33 } },
        mos: { name: "Rent Potatismos", kcal: 85, p: 2, c: 17, f: 1, parts: { potatis: 1.0 } },
        bulgur: { name: "Bulgur (kokt)", kcal: 115, p: 3, c: 22, f: 1, parts: { bulgur_torrt: 0.3 } },
        quinoa: { name: "Quinoa (kokt)", kcal: 120, p: 4, c: 21, f: 2, parts: { quinoa_torrt: 0.3 } },
        sallad: { name: "Salladsbädd ⚠️", kcal: 15, p: 1, c: 2, f: 0, parts: { blandsallad: 1.0 } }
    }
};

const defaultStore = {
    nf5: { name: "Mager Nötfärs 5%", size: 500, unit: "g", price: 85 },
    nf12: { name: "Nötfärs 12%", size: 500, unit: "g", price: 69 },
    tacosas: { name: "Tacosås (burk)", size: 230, unit: "g", price: 18 },
    krossad_tomat: { name: "Krossade tomater", size: 400, unit: "g", price: 15 },
    finkrossad_tomat: { name: "Finkrossade tomater", size: 400, unit: "g", price: 16, kcal: 32, p: 1.5, c: 5.5, f: 0.2 },
    tomatpure: { name: "Tomatpuré", size: 200, unit: "g", price: 19, kcal: 82, p: 4.3, c: 15.0, f: 0.5 },
    keso: { name: "Keso Standard", size: 500, unit: "g", price: 28, kcal: 98, p: 12.0, c: 1.5, f: 4.2 },
    keso_mini: { name: "Keso Mini", size: 500, unit: "g", price: 29, kcal: 65, p: 13.0, c: 1.5, f: 0.4 },
    lasagneplattor: { name: "Lasagneplattor", size: 500, unit: "g", price: 26, kcal: 360, p: 12.0, c: 71.0, f: 1.5, itemsPerPkg: 33 },
    riven_ost_mager: { name: "Riven Ost (Mager 10%)", size: 400, unit: "g", price: 55, kcal: 250, p: 30.0, c: 0.0, f: 10.0 },
    riven_ost_std: { name: "Riven Ost (Standard)", size: 400, unit: "g", price: 52, kcal: 380, p: 25.0, c: 0.0, f: 30.0 },
    havregryn: { name: "Havregryn", size: 1000, unit: "g", price: 22, kcal: 370, p: 13.0, c: 56.0, f: 7.0 },
    bakpulver: { name: "Bakpulver", size: 250, unit: "g", price: 14, kcal: 50, p: 0.0, c: 10.0, f: 0.0 },
    vetemjol: { name: "Vetemjöl", size: 2000, unit: "g", price: 24, kcal: 350, p: 10.0, c: 72.0, f: 1.0 },
    fullkornsmjol: { name: "Fullkornsmjöl", size: 1500, unit: "g", price: 28, kcal: 330, p: 12.0, c: 63.0, f: 2.0 },
    kycklingfile: { name: "Kycklingfilé (färsk)", size: 900, unit: "g", price: 115 },
    fardig_kyckling: { name: "Färdig Kyckling (BBQ)", size: 200, unit: "g", price: 39 },
    fardig_kebab: { name: "Kebabkött (fryst)", size: 400, unit: "g", price: 59 },
    fardig_kyckling_kebab: { name: "Kycklingkebab (fryst)", size: 400, unit: "g", price: 62 },
    laxfile: { name: "Laxfilé (4-pack)", size: 500, unit: "g", price: 129 },
    varmrokt_lax: { name: "Varmrökt lax i bit", size: 300, unit: "g", price: 95 },
    falukorv_mager: { name: "Mager Falukorv", size: 800, unit: "g", price: 39 },
    gradde_laktosfri: { name: "Laktosfri Matlagningsgrädde", size: 250, unit: "ml", price: 16 },
    lighthalloumi: { name: "Lätt-Halloumi", size: 200, unit: "g", price: 32 },
    potatis: { name: "Potatis (påse)", size: 1000, unit: "g", price: 18 },
    kvarg_laktosfri: { name: "Laktosfri Naturell Kvarg", size: 500, unit: "g", price: 24 },
    ris_torrt: { name: "Vitt Ris", size: 1000, unit: "g", price: 28 },
    agg: { name: "Ägg (6-pack)", size: 6, unit: "st", price: 26, itemsPerPkg: 6 },
    pasta_torr: { name: "Makaroner/Pasta", size: 1000, unit: "g", price: 22 },
    blandsallad: { name: "Blandsallad i påse", size: 150, unit: "g", price: 22 },
    rotselleri: { name: "Rotselleri", size: 500, unit: "g", price: 15 },
    blomkal: { name: "Blomkålshuvud", size: 500, unit: "g", price: 25 },
    matvete_torrt: { name: "Matvete/Havreris", size: 1000, unit: "g", price: 26 },
    tonfisk_burk: { name: "Tonfisk i vatten (3-pack)", size: 420, unit: "g", price: 39 },
    kalkon_skivad: { name: "Skivad Kalkon", size: 140, unit: "g", price: 25 },
    formbar_fars_pkt: { name: "Formbar Färs (Veg)", size: 380, unit: "g", price: 42 },
    quinoa_torrt: { name: "Quinoa", size: 500, unit: "g", price: 32 },
    bulgur_torrt: { name: "Bulgur", size: 1000, unit: "g", price: 24 },
    sojapasta_torr: { name: "Proteinbön-pasta", size: 400, unit: "g", price: 35 }
};

let dbIng = JSON.parse(localStorage.getItem('dbIng60')) || defaultIng;
let dbStore = JSON.parse(localStorage.getItem('dbStore60')) || defaultStore;
let permanentFreezer = JSON.parse(localStorage.getItem("pFreezerStorage60")) || {};
let permanentPantry = JSON.parse(localStorage.getItem("pPantryStorage60")) || {};
let batchTemplates = JSON.parse(localStorage.getItem("batchTemplates60")) || {};
let customComponents = JSON.parse(localStorage.getItem("customComponents60")) || {};
let weekSchedule = JSON.parse(localStorage.getItem("weekSchedule60")) || { 
    Måndag: {lunch: [], middag: []}, 
    Tisdag: {lunch: [], middag: []}, 
    Onsdag: {lunch: [], middag: []}, 
    Torsdag: {lunch: [], middag: []}, 
    Fredag: {lunch: [], middag: []}, 
    Lördag: {lunch: [], middag: []}, 
    Söndag: {lunch: [], middag: []} 
};

let currentLayout = localStorage.getItem("matladeLayout60") || "4_250";
let recipeMode = localStorage.getItem("matladeMode60") || "2";
let styles = {};
let lastCalculatedLeftovers = {};
let currentShoppingListRequired = {};
let currentBatchIngredients = [];
let currentCompIngredients = [];

function loadSavedComponentsToDb() {
    for(let [compKey, compData] of Object.entries(customComponents)) {
        dbIng[compData.type][compKey] = {
            name: compData.name,
            kcal: compData.kcal,
            p: compData.p,
            c: compData.c,
            f: compData.f,
            spice: "⭐ Egen sammansatt komponent.",
            parts: compData.parts
        };
    }
}
loadSavedComponentsToDb();

function safeSetText(id, text) {
    const el = document.getElementById(id);
    if(el) el.innerText = text;
}

function updateStaticTexts() {
    safeSetText('app-title', t('title'));
    safeSetText('tab-builder', t('tab_build'));
    safeSetText('tab-components', "Komponenter");
    safeSetText('tab-batch', t('tab_batch'));
    safeSetText('tab-freezer', t('tab_freezer'));
    safeSetText('tab-pantry', t('tab_pantry'));
    safeSetText('tab-schedule', t('tab_schedule'));
    safeSetText('tab-settings', t('tab_settings'));
    
    safeSetText('lbl-layout', t('lbl_layout'));
    safeSetText('opt-l4', t('layout_4'));
    safeSetText('opt-l2', t('layout_2'));
    safeSetText('opt-l6', t('layout_6'));
    safeSetText('opt-l10', t('layout_10'));
    
    safeSetText('lbl-mode', t('lbl_mode'));
    safeSetText('opt-m2', t('mode_2'));
    safeSetText('opt-m1', t('mode_1'));

    safeSetText('btn-save', t('btn_save'));
    safeSetText('btn-reset', t('btn_reset'));
    safeSetText('btn-freeze', t('btn_freeze'));
    safeSetText('btn-copy', t('btn_copy'));
    
    const tipEl = document.getElementById('intro-tip');
    if(tipEl) tipEl.innerHTML = `<strong>💡 Tips:</strong> ${t('tip_intro')}`;
    
    safeSetText('shopping-title', t('shopping_title'));
    safeSetText('prot-header', t('p_header'));
    safeSetText('carb-header', t('c_header'));
    safeSetText('price-label', t('total_price'));
    safeSetText('kitchen-title', t('kitchen_title'));

    safeSetText('batch-main-title', "🥘 " + (currentLang === 'sv' ? "Bygg Storkok & Hantera Receptmallar" : "Build Batch & Manage Templates"));
    safeSetText('batch-sub', t('lbl_template'));
    safeSetText('lbl-template', t('lbl_template'));
    safeSetText('btn-load-template', t('btn_load'));
    safeSetText('btn-del-template', t('btn_delete'));
    safeSetText('lbl-recname', t('lbl_recipe_name'));
    safeSetText('lbl-yield', t('lbl_yield'));
    safeSetText('lbl-batcheng', t('lbl_batch_ing'));
    safeSetText('btn-add-ing', t('btn_add'));
    safeSetText('lbl-batchcalc', t('lbl_batch_calc'));
    safeSetText('btn-send-batch', t('btn_send_batch'));
    safeSetText('btn-savetempl', t('btn_save_template'));

    safeSetText('freezer-title', t('lbl_freezer_header'));
    safeSetText('freezer-sub', t('lbl_freezer_sub'));
    safeSetText('freezer-empty-msg', t('lbl_freezer_empty'));

    safeSetText('pantry-title', t('lbl_pantry_header'));
    safeSetText('pantry-sub', t('lbl_pantry_sub'));
    safeSetText('pantry-empty-msg', t('lbl_pantry_empty'));

    safeSetText('schedule-title', t('lbl_schedule_header'));
    safeSetText('schedule-sub', t('lbl_schedule_sub'));

    safeSetText('settings-lang-title', t('lbl_lang_header'));
    safeSetText('settings-lang-sub', t('lbl_lang_sub'));
    safeSetText('settings-add-title', t('lbl_add_ing_header'));
    safeSetText('btn-addsys', t('btn_add_system'));
    safeSetText('settings-edit-title', t('lbl_edit_header'));
    safeSetText('th-name', t('th_name'));
    safeSetText('th-size', t('th_size'));
    safeSetText('th-price', t('th_price'));
    safeSetText('th-action', t('th_action'));
    safeSetText('btn-saveedits', t('btn_save_edits'));

    safeSetText('tab-components', t('tab_components'));
    safeSetText('comp-title-el', t('comp_title'));
    safeSetText('comp-sub-el', t('comp_sub'));
    safeSetText('comp-load-lbl-el', t('comp_load_lbl'));
    safeSetText('comp-btn-load', t('btn_load'));
    safeSetText('comp-btn-del', t('btn_delete'));
    safeSetText('comp-type-lbl-el', t('comp_type_lbl'));
    safeSetText('comp-type-p-opt', t('comp_type_p'));
    safeSetText('comp-type-c-opt', t('comp_type_c'));
    safeSetText('comp-name-lbl-el', t('comp_name_lbl'));
    safeSetText('comp-ing-header-el', t('comp_ing_header'));
    safeSetText('comp-btn-adding', t('btn_add'));
    safeSetText('comp-macro-header-el', t('comp_macro_header'));
    safeSetText('comp-btn-savecomp', t('btn_save_comp'));
    
    const langBox = document.getElementById('lang-select-box');
    if(langBox) langBox.value = currentLang;
}

function switchTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const tab = document.getElementById(tabId);
    if(tab) tab.classList.add('active');
    
    document.querySelectorAll('.desktop-tab-btn').forEach(b => {
        if(b.getAttribute('onclick').includes(tabId)) b.classList.add('active');
        else b.classList.remove('active');
    });

    if(btn) {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    if(tabId === 'batch-tab') initBatchDropdown();
    if(tabId === 'components-tab') initComponentDropdown();
    if(tabId === 'schedule-tab') initScheduleView();
}

function toggleMoreMenu() {
    const menu = document.getElementById('more-menu');
    if(menu) menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function changeLayout() {
    const layoutSel = document.getElementById('preset-layout');
    const modeSel = document.getElementById('recipe-mode');
    if(layoutSel) currentLayout = layoutSel.value;
    if(modeSel) recipeMode = modeSel.value;
    
    localStorage.setItem("matladeLayout60", currentLayout);
    localStorage.setItem("matladeMode60", recipeMode);
    initBuilder();
    calc();
}

const g = document.getElementById("grid");

function getLayoutConfig() {
    if(currentLayout === "2_500") return { count: 2, maxVol: 500 };
    if(currentLayout === "6_125") return { count: 6, maxVol: 125 };
    if(currentLayout === "10_30") return { count: 10, maxVol: 30 };
    return { count: 4, maxVol: 250 };
}

function initBuilder() {
    const layoutSel = document.getElementById('preset-layout');
    const modeSel = document.getElementById('recipe-mode');
    if(layoutSel) layoutSel.value = currentLayout;
    if(modeSel) modeSel.value = recipeMode;
    if(!g) return;
    
    g.innerHTML = "";
    let cfg = getLayoutConfig();
    let savedConfig = JSON.parse(localStorage.getItem("matladeConfig60")) || {};

    for (let i = 1; i <= cfg.count; i++) {
        let iv = savedConfig[i] || { p: Object.keys(dbIng.p)[0], c: Object.keys(dbIng.c)[0], v: cfg.maxVol, r: 75, s: true };
        if(iv.v > cfg.maxVol) iv.v = cfg.maxVol;
        styles[i] = iv.s; 
        let po = "", co = "", allIng = "";
        
        for (let [k, v] of Object.entries(dbIng.p)) {
            po += `<option value="${k}" ${k==iv.p?'selected':''}>${v.name}</option>`;
            allIng += `<option value="p_${k}" ${('p_'+k)==iv.p?'selected':''}>${v.name}</option>`;
        }
        for (let [k, v] of Object.entries(dbIng.c)) {
            co += `<option value="${k}" ${k==iv.c?'selected':''}>${v.name}</option>`;
            allIng += `<option value="c_${k}" ${('c_'+k)==iv.p?'selected':''}>${v.name}</option>`;
        }

        if(recipeMode === "1") {
            g.innerHTML += `
            <div class="compartment">
                <div class="compartment-title">${t('compartment')}${i}</div>
                <div class="cube-visual" style="height:140px;">
                    <div class="layer-single" id="c${i}-vs" style="width:100%; height:0%;"></div>
                </div>
                <div class="controls">
                    <div class="cg"><label>${currentLang==='sv'?'Ingrediens:':'Ingredient:'}</label><select id="c${i}-p" onchange="calc()">${allIng}</select></div>
                    <div class="cg"><label>${t('vol_label')} <span id="c${i}-vt">${iv.v}</span> ml</label><input type="range" id="c${i}-v" min="10" max="${cfg.maxVol}" value="${iv.v}" step="5" oninput="calc()"></div>
                    <button class="btn-print" onclick="printSingleLabel(${i})">${t('btn_print')}</button>
                </div>
                <div class="macro-card">
                    <div class="mg"><div>Kcal: <span id="c${i}-kc">0</span></div><div>Prot: <span id="c${i}-gProt">0</span>g</div><div>Kol: <span id="c${i}-gCarb">0</span>g</div><div>Fett: <span id="c${i}-gFat">0</span>g</div></div>
                </div>
            </div>`;
        } else {
            let visualInnerHtml = iv.s ? `
                <div class="layer-carb" id="c${i}-vc" style="height:0%;"></div>
                <div class="layer-protein" id="c${i}-vp" style="height:0%;"></div>
            ` : `
                <div class="layer-single" id="c${i}-vs" style="width:100%; height:0%; background:linear-gradient(135deg, var(--primary), var(--success)); opacity:0.85;"></div>
            `;

            g.innerHTML += `
            <div class="compartment">
                <div class="compartment-title">${t('compartment')}${i}</div>
                <div class="cube-visual" style="height:140px;" id="c${i}-box-visual">
                    ${visualInnerHtml}
                </div>
                <div class="controls">
                    <div class="cg"><button class="btn ${iv.s?'active':''}" id="c${i}-s" onclick="tStyle(${i})">${iv.s?t('style_layered'):t('style_allinone')}</button></div>
                    <div class="cg"><label>${t('prot_label')}</label><select id="c${i}-p" onchange="calc()">${po}</select></div>
                    <div class="cg"><label>${t('carb_label')}</label><select id="c${i}-c" onchange="calc()">${co}</select></div>
                    <div class="cg"><label>${t('vol_label')} <span id="c${i}-vt">${iv.v}</span> ml</label><input type="range" id="c${i}-v" min="10" max="${cfg.maxVol}" value="${iv.v}" step="5" oninput="calc()"></div>
                    <div class="cg"><label>${t('prot_pct')} <span id="c${i}-rt">${iv.r}</span>%</label><input type="range" id="c${i}-r" min="50" max="90" value="${iv.r}" step="5" oninput="calc()"></div>
                    <button class="btn-print" onclick="printSingleLabel(${i})">${t('btn_print')}</button>
                </div>
                <div class="macro-card">
                    <div class="mg"><div>Kcal: <span id="c${i}-kc">0</span></div><div>Prot: <span id="c${i}-gProt">0</span>g</div><div>Kol: <span id="c${i}-gCarb">0</span>g</div><div>Fett: <span id="c${i}-gFat">0</span>g</div></div>
                </div>
            </div>`;
        }
    }
}

function tStyle(id) {
    styles[id] = !styles[id];
    let visualBox = document.getElementById(`c${id}-box-visual`);
    let btn = document.getElementById(`c${id}-s`);
    
    if(btn) {
        btn.innerText = styles[id] ? t('style_layered') : t('style_allinone');
        btn.classList.toggle("active", styles[id]);
    }

    if(visualBox) {
        if(styles[id]) {
            visualBox.innerHTML = `
                <div class="layer-carb" id="c${id}-vc" style="height:0%;"></div>
                <div class="layer-protein" id="c${id}-vp" style="height:0%;"></div>
            `;
        } else {
            visualBox.innerHTML = `
                <div class="layer-single" id="c${id}-vs" style="width:100%; height:0%; background:linear-gradient(135deg, var(--primary), var(--success)); opacity:0.85;"></div>
            `;
        }
    }
    calc();
}

function saveConfig() {
    let cfg = getLayoutConfig();
    let config = {};
    for (let i = 1; i <= cfg.count; i++) {
        config[i] = {
            p: document.getElementById(`c${i}-p`)?.value || "", 
            c: document.getElementById(`c${i}-c`) ? document.getElementById(`c${i}-c`).value : "",
            v: parseInt(document.getElementById(`c${i}-v`)?.value || 250), 
            r: document.getElementById(`c${i}-r`) ? parseInt(document.getElementById(`c${i}-r`).value) : 100, 
            s: styles[i]
        };
    }
    localStorage.setItem("matladeConfig60", JSON.stringify(config));
    alert("✔️ Sparat!");
}

function clearConfig() {
    if(confirm("Vill du återställa allt?")) { localStorage.clear(); location.reload(); }
}

function initComponentDropdown() {
    const sel = document.getElementById('comp-item-select');
    if(!sel) return;
    sel.innerHTML = "";
    for(let [key, item] of Object.entries(dbStore)) {
        sel.innerHTML += `<option value="${key}">${item.name} (${item.size}${item.unit})</option>`;
    }
    updateComponentTemplateDropdown();
}

function updateComponentTemplateDropdown() {
    const tSel = document.getElementById('comp-template-select');
    if(!tSel) return;
    tSel.innerHTML = "";
    if(Object.keys(customComponents).length === 0) {
        tSel.innerHTML = `<option value="">Inga sparade komponenter</option>`;
        return;
    }
    for(let cName of Object.keys(customComponents)) {
        tSel.innerHTML += `<option value="${cName}">${customComponents[cName].name} (${customComponents[cName].type === 'p' ? 'Protein' : 'Bas'})</option>`;
    }
}

function addCompIngredient() {
    const key = document.getElementById('comp-item-select')?.value;
    const rawAmount = Math.max(1, Number(document.getElementById('comp-item-amount')?.value || 100));
    const unit = document.getElementById('comp-item-unit')?.value || 'g';
    if(!dbStore[key] || rawAmount <= 0) return;

    let convertedAmount = convertToGramsOrMl(key, rawAmount, unit);
    currentCompIngredients.push({ key: key, amount: convertedAmount, displayAmount: rawAmount, displayUnit: unit });
    calcComponent();
}

function calcComponent() {
    const listDiv = document.getElementById('comp-ingredients-list');
    if(!listDiv) return;
    listDiv.innerHTML = "";
    let totalWeight = 0, totalKcal = 0, totalP = 0, totalC = 0, totalF = 0;

    currentCompIngredients.forEach((ing, index) => {
        const storeItem = dbStore[ing.key];
        listDiv.innerHTML += `<div style="display:flex; justify-content:space-between; background:#edf2f7; padding:5px 10px; margin-bottom:4px; border-radius:4px; font-size:12px;">
            <span>${storeItem.name} — <strong>${ing.displayAmount} ${ing.displayUnit}</strong></span>
            <button class="del-btn-small" onclick="currentCompIngredients.splice(${index},1); calcComponent();">❌</button>
        </div>`;
        
        totalWeight += ing.amount;
        let factor = ing.amount / 100;
        totalKcal += factor * (storeItem.kcal || 130);
        totalP += factor * (storeItem.p || 10);
        totalC += factor * (storeItem.c || 10);
        totalF += factor * (storeItem.f || 5);
    });

    let per100Factor = totalWeight > 0 ? (100 / totalWeight) : 0;
    safeSetText('comp-per-kc', Math.round(totalKcal * per100Factor));
    safeSetText('comp-per-p', Math.round(totalP * per100Factor));
    safeSetText('comp-per-c', Math.round(totalC * per100Factor));
    safeSetText('comp-per-f', Math.round(totalF * per100Factor));
}

function saveCustomComponent() {
    const name = document.getElementById('comp-name')?.value.trim();
    const type = document.getElementById('comp-type')?.value;
    if(!name || currentCompIngredients.length === 0) return alert("Ange namn och minst en ingrediens!");

    let totalWeight = 0, totalKcal = 0, totalP = 0, totalC = 0, totalF = 0;
    let partsMap = {};

    currentCompIngredients.forEach(ing => {
        totalWeight += ing.amount;
        let factor = ing.amount / 100;
        totalKcal += factor * (dbStore[ing.key].kcal || 130);
        totalP += factor * (dbStore[ing.key].p || 10);
        totalC += factor * (dbStore[ing.key].c || 10);
        totalF += factor * (dbStore[ing.key].f || 5);
        partsMap[ing.key] = (partsMap[ing.key] || 0) + (ing.amount / totalWeight);
    });

    let per100Factor = totalWeight > 0 ? (100 / totalWeight) : 0;
    const keyId = 'custom_comp_' + Date.now();

    customComponents[keyId] = {
        name: name,
        type: type,
        kcal: Math.max(0, Math.round(totalKcal * per100Factor)),
        p: Math.max(0, Math.round(totalP * per100Factor)),
        c: Math.max(0, Math.round(totalC * per100Factor)),
        f: Math.max(0, Math.round(totalF * per100Factor)),
        parts: partsMap,
        ingredients: JSON.parse(JSON.stringify(currentCompIngredients))
    };

    localStorage.setItem("customComponents60", JSON.stringify(customComponents));
    loadSavedComponentsToDb();
    alert(`✔️ Komponent "${name}" sparad och tillagd i Byggaren!`);
    location.reload();
}

function loadCustomComponent() {
    const key = document.getElementById('comp-template-select')?.value;
    if(!key || !customComponents[key]) return alert("Välj en giltig komponent!");
    let comp = customComponents[key];
    document.getElementById('comp-name').value = comp.name;
    document.getElementById('comp-type').value = comp.type;
    currentCompIngredients = JSON.parse(JSON.stringify(comp.ingredients));
    calcComponent();
}

function deleteCustomComponent() {
    const key = document.getElementById('comp-template-select')?.value;
    if(!key || !customComponents[key]) return;
    if(confirm(`Vill du radera komponenten "${customComponents[key].name}"?`)) {
        delete customComponents[key];
        localStorage.setItem("customComponents60", JSON.stringify(customComponents));
        alert("✔️ Raderad!");
        location.reload();
    }
}

function initBatchDropdown() {
    const sel = document.getElementById('batch-item-select');
    if(!sel) return;
    sel.innerHTML = "";
    for(let [key, item] of Object.entries(dbStore)) {
        sel.innerHTML += `<option value="${key}">${item.name} (${item.size}${item.unit})</option>`;
    }
    updateTemplateDropdown();
}

function updateTemplateDropdown() {
    const tSel = document.getElementById('template-select');
    if(!tSel) return;
    tSel.innerHTML = "";
    if(Object.keys(batchTemplates).length === 0) {
        tSel.innerHTML = `<option value="">${currentLang==='sv'?'Inga sparade mallar':'No saved templates'}</option>`;
        return;
    }
    for(let tName of Object.keys(batchTemplates)) {
        tSel.innerHTML += `<option value="${tName}">${tName}</option>`;
    }
}

function saveAsTemplate() {
    const name = document.getElementById('batch-name')?.value.trim();
    const yieldCount = Math.max(1, Number(document.getElementById('batch-yield')?.value || 4));
    if(!name || currentBatchIngredients.length === 0) return alert("Ange receptnamn och minst en ingrediens för att spara som mall!");
    
    batchTemplates[name] = {
        yield: yieldCount,
        ingredients: JSON.parse(JSON.stringify(currentBatchIngredients))
    };
    localStorage.setItem("batchTemplates60", JSON.stringify(batchTemplates));
    updateTemplateDropdown();
    alert(`✔️ Mall "${name}" sparad!`);
}

function loadTemplate() {
    const name = document.getElementById('template-select')?.value;
    if(!name || !batchTemplates[name]) return alert("Välj en giltig mall!");
    
    let tData = batchTemplates[name];
    document.getElementById('batch-name').value = name;
    document.getElementById('batch-yield').value = tData.yield;
    currentBatchIngredients = JSON.parse(JSON.stringify(tData.ingredients));
    calcBatch();
    alert(`✔️ Mall "${name}" laddad!`);
}

function deleteTemplate() {
    const name = document.getElementById('template-select')?.value;
    if(!name || !batchTemplates[name]) return;
    if(confirm(`Vill du radera mallen "${name}"?`)) {
        delete batchTemplates[name];
        localStorage.setItem("batchTemplates60", JSON.stringify(batchTemplates));
        updateTemplateDropdown();
        alert("✔️ Mall raderad!");
    }
}

function convertToGramsOrMl(itemKey, amount, unit) {
    const storeItem = dbStore[itemKey];
    if(!storeItem) return amount;

    if(unit === 'st') {
        if(storeItem.itemsPerPkg && storeItem.itemsPerPkg > 0) {
            let weightPerPiece = storeItem.size / storeItem.itemsPerPkg;
            return amount * weightPerPiece;
        }
        if(itemKey === 'lasagneplattor') return amount * 15;
        return amount * storeItem.size;
    }

    if(unit === 'dl') {
        if(itemKey === 'lasagneplattor' || itemKey === 'havregryn' || itemKey === 'vetemjol' || itemKey === 'fullkornsmjol') return amount * 60;
        return amount * 100;
    }
    if(unit === 'msk') {
        if(itemKey === 'tomatpure') return amount * 15;
        if(itemKey === 'bakpulver') return amount * 12;
        return amount * 15;
    }
    if(unit === 'tsk') {
        if(itemKey === 'bakpulver') return amount * 4;
        return amount * 5;
    }
    return amount;
}

function addBatchIngredient() {
    const key = document.getElementById('batch-item-select')?.value;
    const rawAmount = Math.max(1, Number(document.getElementById('batch-item-amount')?.value || 1));
    const unit = document.getElementById('batch-item-unit')?.value || 'g';
    if(!dbStore[key] || rawAmount <= 0) return;

    let convertedAmount = convertToGramsOrMl(key, rawAmount, unit);
    currentBatchIngredients.push({ key: key, amount: convertedAmount, displayAmount: rawAmount, displayUnit: unit });
    calcBatch();
}

function calcBatch() {
    const listDiv = document.getElementById('batch-ingredients-list');
    if(!listDiv) return;
    listDiv.innerHTML = "";
    let totalKcal = 0, totalP = 0, totalC = 0, totalF = 0;
    const yieldCount = Math.max(1, Number(document.getElementById('batch-yield')?.value || 1));

    currentBatchIngredients.forEach((ing, index) => {
        const storeItem = dbStore[ing.key];
        listDiv.innerHTML += `<div style="display:flex; justify-content:space-between; background:#edf2f7; padding:5px 10px; margin-bottom:4px; border-radius:4px; font-size:12px;">
            <span>${storeItem.name} — <strong>${ing.displayAmount} ${ing.displayUnit}</strong></span>
            <button class="del-btn-small" onclick="currentBatchIngredients.splice(${index},1); calcBatch();">❌</button>
        </div>`;
        
        let factor = ing.amount / 100;
        let kcal100 = storeItem.kcal || 130;
        let p100 = storeItem.p || 12;
        let c100 = storeItem.c || 10;
        let f100 = storeItem.f || 5;

        totalKcal += factor * kcal100; 
        totalP += factor * p100;
        totalC += factor * c100;
        totalF += factor * f100;
    });

    safeSetText('batch-per-kc', Math.max(0, Math.round(totalKcal / yieldCount)));
    safeSetText('batch-per-p', Math.max(0, Math.round(totalP / yieldCount)));
    safeSetText('batch-per-c', Math.max(0, Math.round(totalC / yieldCount)));
    safeSetText('batch-per-f', Math.max(0, Math.round(totalF / yieldCount)));
}

function sendBatchToFreezer() {
    const name = document.getElementById('batch-name')?.value.trim() || "Storkok";
    const yieldCount = Math.max(1, Number(document.getElementById('batch-yield')?.value || 1));
    if(currentBatchIngredients.length === 0 || yieldCount <= 0) return alert("Lägg till råvaror och antal portioner!");

    currentBatchIngredients.forEach(ing => {
        let needed = ing.amount;
        let inPantry = permanentPantry[ing.key] || 0;
        let fromPantry = Math.min(needed, inPantry);
        permanentPantry[ing.key] = Math.max(0, inPantry - fromPantry);
        
        let netToBuy = needed - fromPantry;
        if(netToBuy > 0) {
            let storeItem = dbStore[ing.key];
            let pkgs = Math.ceil(netToBuy / storeItem.size);
            let leftovers = (pkgs * storeItem.size) - netToBuy;
            if(leftovers > 0) {
                permanentPantry[ing.key] = (permanentPantry[ing.key] || 0) + leftovers;
            }
        }
    });

    const today = new Date();
    const expDate = new Date(); expDate.setMonth(today.getMonth() + 3);
    const fullName = `${name} (Storkok)`;
    const kcVal = document.getElementById('batch-per-kc')?.innerText || "0";
    const pVal = document.getElementById('batch-per-p')?.innerText || "0";
    const cVal = document.getElementById('batch-per-c')?.innerText || "0";

    if(!permanentFreezer[fullName]) {
        permanentFreezer[fullName] = { count: 0, kcal: kcVal, p: pVal, c: cVal, created: today.toLocaleDateString('sv-SE'), expires: expDate.toLocaleDateString('sv-SE') };
    }
    permanentFreezer[fullName].count += yieldCount;
    
    localStorage.setItem("pFreezerStorage60", JSON.stringify(permanentFreezer));
    localStorage.setItem("pPantryStorage60", JSON.stringify(permanentPantry));

    updateFreezerDisplay();
    updatePantryDisplay();
    initScheduleView();
    calc();
    alert(`✔️ Storkok "${name}" (${yieldCount} port) skickat till frysen!`);
}

function updateFreezerDisplay() {
    const container = document.getElementById("freezer-display-list");
    if(!container) return;
    const emptyMsg = document.getElementById("freezer-empty-msg"); container.innerHTML = "";
    if (Object.keys(permanentFreezer).length === 0) { if(emptyMsg) emptyMsg.style.display = "block"; return; }
    if(emptyMsg) emptyMsg.style.display = "none";
    for (let [mealName, data] of Object.entries(permanentFreezer)) {
        if (data.count <= 0) continue;
        container.innerHTML += `
            <div class="freezer-item">
                <div>
                    <strong>${mealName}</strong><br>
                    <small style="color:#718096;">${data.kcal} Kcal | P: ${data.p}g | K: ${data.c}g</small><br>
                    <small style="color:#2b6cb0;">Infryst: ${data.created || 'Okänt'} | Utgår: ${data.expires || 'Okänt'}</small>
                </div>
                <div class="freezer-controls">
                    <button class="stock-btn" onclick="modifyFreezer('${mealName}', -1)">-</button>
                    <strong style="font-size:14px; min-width:20px; text-align:center;">${data.count}</strong>
                    <button class="stock-btn" onclick="modifyFreezer('${mealName}', 1)">+</button>
                </div>
            </div>`;
    }
}

function modifyFreezer(mealName, delta) {
    if (permanentFreezer[mealName]) {
        permanentFreezer[mealName].count += delta; if (permanentFreezer[mealName].count <= 0) delete permanentFreezer[mealName];
        localStorage.setItem("pFreezerStorage60", JSON.stringify(permanentFreezer)); 
        updateFreezerDisplay();
        initScheduleView();
    }
}

function updatePantryDisplay() {
    const container = document.getElementById("pantry-display-list");
    if(!container) return;
    const emptyMsg = document.getElementById("pantry-empty-msg"); container.innerHTML = "";
    if (Object.keys(permanentPantry).length === 0) { if(emptyMsg) emptyMsg.style.display = "block"; return; }
    if(emptyMsg) emptyMsg.style.display = "none";
    for (let [itemKey, weight] of Object.entries(permanentPantry)) {
        if (weight <= 0) continue; const item = dbStore[itemKey]; if (!item) continue;
        container.innerHTML += `
            <div class="pantry-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color:#718096;">I skafferiet: ${Math.round(weight)} ${item.unit}</small>
                </div>
                <div class="pantry-controls">
                    <button class="btn-action" style="padding:4px 8px; font-size:11px; background:#fed7d7; color:#c53030; border:1px solid #feb2b2;" onclick="usePantryItem('${itemKey}')">${t('btn_used_other')}</button>
                    <button class="stock-btn" onclick="modifyPantry('${itemKey}', -50)">-</button>
                    <button class="stock-btn" onclick="modifyPantry('${itemKey}', 50)">+</button>
                </div>
            </div>`;
    }
}

function modifyPantry(itemKey, delta) {
    if (permanentPantry[itemKey] !== undefined) {
        permanentPantry[itemKey] = Math.max(0, permanentPantry[itemKey] + delta);
        if (permanentPantry[itemKey] === 0) delete permanentPantry[itemKey];
        localStorage.setItem("pPantryStorage60", JSON.stringify(permanentPantry));
        updatePantryDisplay();
        calc();
    }
}

function usePantryItem(itemKey) {
    const item = dbStore[itemKey];
    let amountStr = prompt(`Hur mycket ${item.name} (${item.unit}) har använts till annat?`, "100");
    if (amountStr === null) return;
    let amount = Number(amountStr);
    if (isNaN(amount) || amount <= 0) return;

    if (permanentPantry[itemKey]) {
        permanentPantry[itemKey] = Math.max(0, permanentPantry[itemKey] - amount);
        if (permanentPantry[itemKey] === 0) delete permanentPantry[itemKey];
        localStorage.setItem("pPantryStorage60", JSON.stringify(permanentPantry));
        updatePantryDisplay();
        calc();
    }
}

function initScheduleView() {
    const container = document.getElementById("schedule-container");
    if(!container) return;
    container.innerHTML = "";
    let totalFreezerBoxes = 0;
    for(let data of Object.values(permanentFreezer)) { totalFreezerBoxes += data.count; }

    let scheduledCount = 0;
    for(let day of Object.keys(weekSchedule)) {
        scheduledCount += weekSchedule[day].lunch.length;
        scheduledCount += weekSchedule[day].middag.length;
    }

    for(let day of ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]) {
        let dayData = weekSchedule[day] || {lunch: [], middag: []};
        
        let dayBox = document.createElement("div");
        dayBox.className = "schedule-day";
        dayBox.innerHTML = `<h4>${day}</h4>`;

        ["lunch", "middag"].forEach(mealType => {
            let items = dayData[mealType] || [];
            let totalP = items.reduce((sum, item) => sum + (Number(permanentFreezer[item]?.p) || 0), 0);
            
            let warningHtml = "";
            if(items.length > 0) {
                if(totalP < 20) {
                    warningHtml = `<div class="warning">⚠️ Lågt protein (${totalP}g)!</div>`;
                } else {
                    warningHtml = `<div class="success-msg">✔️ Protein OK (${totalP}g)</div>`;
                }
            }

            let mBox = document.createElement("div");
            mBox.style.marginBottom = "10px";
            mBox.innerHTML = `
                <div style="font-size:12px; font-weight:bold; color:#4a5568;">${mealType.charAt(0).toUpperCase() + mealType.slice(1)}:</div>
                <div class="components" id="comp-${day}-${mealType}"></div>
                ${warningHtml}
                <button class="add-comp-btn" onclick="addPlateComponent('${day}', '${mealType}')">${t('btn_add_box')}</button>
            `;

            let compsDiv = mBox.querySelector(".components");
            items.forEach((compName, idx) => {
                compsDiv.innerHTML += `
                    <span class="component-tag" title="Protein: ${permanentFreezer[compName]?.p || 0}g">
                        ${compName} 
                        <span class="remove-comp" onclick="removePlateComponent('${day}', '${mealType}', ${idx})">×</span>
                    </span>`;
            });

            if(items.length > 0) {
                mBox.innerHTML += `<button class="btn-eat-plate" onclick="eatPlate('${day}', '${mealType}')">${t('btn_eat_plate')}</button>`;
            }

            dayBox.appendChild(mBox);
        });

        container.appendChild(dayBox);
    }

    let diff = totalFreezerBoxes - scheduledCount;
    let summaryText = `🧊 Lådor i frysen: ${totalFreezerBoxes} st | Planerade måltidskomponenter: ${scheduledCount} st. `;
    let summaryBox = document.getElementById("schedule-summary");

    if(summaryBox) {
        if(diff >= 0) {
            summaryBox.style.background = "#ebf8ff";
            summaryBox.style.color = "#2b6cb0";
            summaryBox.style.borderColor = "#bee3f8";
            summaryText += `✔️ Tillräckligt med mat i frysen (överskott: ${diff} st).`;
        } else {
            summaryBox.style.background = "#fff5f5";
            summaryBox.style.color = "#c53030";
            summaryBox.style.borderColor = "#feb2b2";
            summaryText += `⚠️ Underskott: Det saknas ${Math.abs(diff)} lådor/komponenter i frysen för din planering!`;
        }
        summaryBox.innerText = summaryText;
    }
}

function addPlateComponent(day, mealType) {
    let availableMeals = Object.keys(permanentFreezer).filter(k => permanentFreezer[k].count > 0);
    if(availableMeals.length === 0) return alert("Frysen är tom! Skapa storkok eller kuber först.");
    
    let menu = availableMeals.map((m, i) => `${i+1}. ${m} [Finns: ${permanentFreezer[m].count} st]`).join("\n");
    let choice = prompt("Välj låda att lägga till på tallriken:\n" + menu);
    if(!choice) return;
    
    let index = Number(choice) - 1;
    let selectedMeal = availableMeals[index];
    
    if(!selectedMeal) {
        if(permanentFreezer[choice]) selectedMeal = choice;
        else return alert("Ogiltigt val!");
    }

    weekSchedule[day][mealType].push(selectedMeal);
    localStorage.setItem("weekSchedule60", JSON.stringify(weekSchedule));
    initScheduleView();
}

function removePlateComponent(day, mealType, idx) {
    weekSchedule[day][mealType].splice(idx, 1);
    localStorage.setItem("weekSchedule60", JSON.stringify(weekSchedule));
    initScheduleView();
}

function eatPlate(day, mealType) {
    let items = weekSchedule[day][mealType];
    if(!items || items.length === 0) return;

    for(let item of items) {
        if(!permanentFreezer[item] || permanentFreezer[item].count <= 0) {
            return alert(`Hittade inte tillräckligt av "${item}" i frysen!`);
        }
    }

    items.forEach(item => {
        permanentFreezer[item].count--;
        if(permanentFreezer[item].count <= 0) delete permanentFreezer[item];
    });

    weekSchedule[day][mealType] = [];

    localStorage.setItem("pFreezerStorage60", JSON.stringify(permanentFreezer));
    localStorage.setItem("weekSchedule60", JSON.stringify(weekSchedule));

    updateFreezerDisplay();
    initScheduleView();
    alert("✔️ Mums! Tallriken har ätits och alla tillhörande lådor har dragits av från frysen.");
}

function calc() {
    let cfg = getLayoutConfig();
    let netNeeded = {}; let compSpecs = {};
    for (let i = 1; i <= cfg.count; i++) {
        const vElem = document.getElementById(`c${i}-v`);
        const pElem = document.getElementById(`c${i}-p`);
        if(!vElem || !pElem) continue;

        const v = parseInt(vElem.value);
        safeSetText(`c${i}-vt`, v);
        
        let maxV = cfg.maxVol;
        let containerFillPct = (v / maxV) * 100;

        if(recipeMode === "1") {
            let val = pElem.value;
            let parts = val.split('_');
            let cat = parts[0];
            let key = parts.slice(1).join('_');
            let data = dbIng[cat] ? dbIng[cat][key] : null;
            if(!data) continue;

            safeSetText(`c${i}-kc`, Math.max(0, Math.round(data.kcal * v / 100)));
            safeSetText(`c${i}-gProt`, Math.max(0, Math.round(data.p * v / 100)));
            safeSetText(`c${i}-gCarb`, Math.max(0, Math.round(data.c * v / 100)));
            safeSetText(`c${i}-gFat`, Math.max(0, Math.round(data.f * v / 100)));

            compSpecs[i] = { fullName: `${data.name} (${v} ml)`, kcal: document.getElementById(`c${i}-kc`)?.innerText || 0, pG: document.getElementById(`c${i}-gProt`)?.innerText || 0, cG: document.getElementById(`c${i}-gCarb`)?.innerText || 0 };
            
            let vs = document.getElementById(`c${i}-vs`);
            if(vs) { vs.style.height = containerFillPct + "%"; }

            let partMap = data.parts && Object.keys(data.parts).length > 0 ? data.parts : { [key]: 1.0 };
            for (let [itemKey, factor] of Object.entries(partMap)) {
                if (!netNeeded[itemKey]) netNeeded[itemKey] = 0;
                netNeeded[itemKey] += v * factor;
            }
        } else {
            const cElem = document.getElementById(`c${i}-c`);
            const rElem = document.getElementById(`c${i}-r`);
            if(!cElem || !rElem) continue;

            const r = parseInt(rElem.value);
            const pk = pElem.value; const ck = cElem.value;
            safeSetText(`c${i}-rt`, r);
            if(!dbIng.p[pk] || !dbIng.c[ck]) continue;

            const pv = v * (r / 100), cv = v * ((100 - r) / 100); const pd = dbIng.p[pk], cd = dbIng.c[ck];
            safeSetText(`c${i}-kc`, Math.max(0, Math.round((pd.kcal*pv/100)+(cd.kcal*cv/100))));
            safeSetText(`c${i}-gProt`, Math.max(0, Math.round((pd.p*pv/100)+(cd.p*cv/100))));
            safeSetText(`c${i}-gCarb`, Math.max(0, Math.round((pd.c*pv/100)+(cd.c*cv/100))));
            safeSetText(`c${i}-gFat`, Math.max(0, Math.round((pd.f*pv/100)+(cd.f*cv/100))));
            
            compSpecs[i] = { fullName: `${pd.name} med ${cd.name} (${v} ml)`, kcal: document.getElementById(`c${i}-kc`)?.innerText || 0, pG: document.getElementById(`c${i}-gProt`)?.innerText || 0, cG: document.getElementById(`c${i}-gCarb`)?.innerText || 0 };
            
            if(styles[i]) {
                let vc = document.getElementById(`c${i}-vc`);
                let vp = document.getElementById(`c${i}-vp`);
                if(vc && vp) {
                    let totalFilledHeight = containerFillPct;
                    let protHeight = totalFilledHeight * (r / 100);
                    let carbHeight = totalFilledHeight * ((100 - r) / 100);
                    
                    vc.style.height = carbHeight + "%";
                    vp.style.height = protHeight + "%";
                }
            } else {
                let vs = document.getElementById(`c${i}-vs`);
                if(vs) { vs.style.height = containerFillPct + "%"; }
            }

            for (let [itemKey, factor] of Object.entries(pd.parts)) { if (!netNeeded[itemKey]) netNeeded[itemKey] = 0; netNeeded[itemKey] += pv * factor; }
            for (let [itemKey, factor] of Object.entries(cd.parts)) { if (!netNeeded[itemKey]) netNeeded[itemKey] = 0; netNeeded[itemKey] += cv * factor; }
        }
    }
    
    currentShoppingListRequired = JSON.parse(JSON.stringify(netNeeded));
    const lp = document.getElementById("lp"); if(lp) lp.innerHTML = "";
    const lc = document.getElementById("lc"); if(lc) lc.innerHTML = "";
    const kl = document.getElementById("kitchen-list"); if(kl) kl.innerHTML = "";
    let totalPrice = 0; let leftovers = {};
    
    let pKeys = [];
    for (let [k, pData] of Object.entries(dbIng.p)) { pKeys = pKeys.concat(Object.keys(pData.parts)); }

    for (let [itemKey, amount] of Object.entries(netNeeded)) {
        const item = dbStore[itemKey]; if (!item) continue;
        let inPantry = permanentPantry[itemKey] || 0;
        let netToBuy = Math.max(0, amount - inPantry); 
        let pkgs = Math.ceil(netToBuy / item.size); 
        let cost = pkgs * item.price;
        totalPrice += cost;
        leftovers[itemKey] = (pkgs * item.size) + inPantry - amount;

        let str = "";
        let usedFromPantry = Math.round(Math.min(amount, inPantry));
        if (pkgs > 0) {
            str = `<li><strong>${pkgs} st</strong> ${item.name} (${item.size}${item.unit}) — <em>${cost} kr</em> <small style="color:#718096;">(Använder ${usedFromPantry}${item.unit} från skafferiet)</small></li>`;
        } else {
            str = `<li><strong>0 st</strong> ${item.name} — <em>0 kr</em> <small style="color:#38a169;">(✔️ Finns i skafferiet! Tar ${usedFromPantry}${item.unit})</small></li>`;
        }

        if (pKeys.includes(itemKey)) { if(lp) lp.innerHTML += str; } else { if(lc) lc.innerHTML += str; }

        let unitNote = item.unit === "st" ? "st hela" : item.unit;
        if(kl) kl.innerHTML += `<li>Mät upp exakt <strong>${Math.round(amount)}${unitNote}</strong> av <em>${item.name}</em> till tillagningen.</li>`;
    }

    safeSetText("total-cost-val", Math.max(0, totalPrice));
    lastCalculatedLeftovers = leftovers;
    window.currentSpecs = compSpecs;
}

function sendToFreezer() {
    let cfg = getLayoutConfig();
    const today = new Date();
    const expDate = new Date(); expDate.setMonth(today.getMonth() + 3);

    for (let i = 1; i <= cfg.count; i++) {
        const spec = window.currentSpecs[i];
        if(!spec) continue;
        if (!permanentFreezer[spec.fullName]) { permanentFreezer[spec.fullName] = { count: 0, kcal: spec.kcal, p: spec.pG, c: spec.cG, created: today.toLocaleDateString('sv-SE'), expires: expDate.toLocaleDateString('sv-SE') }; }
        permanentFreezer[spec.fullName].count += 1;
    }

    for (let [itemKey, requiredAmt] of Object.entries(currentShoppingListRequired)) {
        if (permanentPantry[itemKey]) { permanentPantry[itemKey] = Math.max(0, permanentPantry[itemKey] - requiredAmt); }
    }
    for (let [itemKey, amt] of Object.entries(lastCalculatedLeftovers)) {
        if (amt > 0) { if (!permanentPantry[itemKey]) permanentPantry[itemKey] = 0; permanentPantry[itemKey] += amt; }
    }
    for (let key in permanentPantry) { if (permanentPantry[key] <= 0) delete permanentPantry[key]; }

    localStorage.setItem("pFreezerStorage60", JSON.stringify(permanentFreezer));
    localStorage.setItem("pPantryStorage60", JSON.stringify(permanentPantry));
    updateFreezerDisplay();
    updatePantryDisplay();
    initScheduleView();
    calc();
    alert("🔮 Lådor skickade till frysen med storlek inkluderad! Skafferiet har uppdaterats.");
}

function renderSettings() {
    const tbody = document.querySelector("#store-edit-table tbody");
    if(!tbody) return;
    tbody.innerHTML = "";
    for (let [key, item] of Object.entries(dbStore)) {
        tbody.innerHTML += `<tr>
            <td><input type="text" id="edit_name_${key}" value="${item.name}"></td>
            <td><input type="number" id="edit_size_${key}" value="${item.size}" min="1"> ${item.unit}</td>
            <td><input type="number" id="edit_price_${key}" value="${item.price}" min="0"> kr</td>
            <td><button class="del-btn-small" onclick="deleteIngredient('${key}')">❌</button></td>
        </tr>`;
    }
}

function saveDatabaseEdits() {
    for (let key in dbStore) {
        const nameInput = document.getElementById(`edit_name_${key}`);
        const sizeInput = document.getElementById(`edit_size_${key}`);
        const priceInput = document.getElementById(`edit_price_${key}`);
        if (nameInput) { 
            dbStore[key].name = nameInput.value; 
            dbStore[key].size = Math.max(1, Number(sizeInput.value)); 
            dbStore[key].price = Math.max(0, Number(priceInput.value)); 
        }
    }
    localStorage.setItem('dbStore60', JSON.stringify(dbStore));
    alert("✔️ Sparat!");
    location.reload();
}

function addNewIngredient() {
    const type = document.getElementById('new-type')?.value || 'p'; 
    const name = document.getElementById('new-name')?.value.trim();
    const price = Math.max(0, Number(document.getElementById('new-price')?.value || 0));
    const size = Math.max(1, Number(document.getElementById('new-size')?.value || 100));
    const itemsPerPkg = Math.max(0, Number(document.getElementById('new-count')?.value || 0));
    if(!name) return alert("Ange ett namn på råvaran!");
    
    const id = 'custom_' + Date.now();
    dbStore[id] = { name: name, size: size, unit: 'g', price: price, itemsPerPkg: itemsPerPkg };
    dbIng[type][id] = { 
        name: name, 
        kcal: Math.max(0, Number(document.getElementById('new-kcal')?.value || 100)), 
        p: Math.max(0, Number(document.getElementById('new-p')?.value || 10)), 
        c: Math.max(0, Number(document.getElementById('new-c')?.value || 10)), 
        f: Math.max(0, Number(document.getElementById('new-f')?.value || 5)), 
        parts: {} 
    };
    dbIng[type][id].parts[id] = 1.0;
    localStorage.setItem('dbStore60', JSON.stringify(dbStore));
    localStorage.setItem('dbIng60', JSON.stringify(dbIng));
    location.reload();
}

function deleteIngredient(key) {
    delete dbStore[key];
    localStorage.setItem('dbStore60', JSON.stringify(dbStore));
    location.reload();
}

function exportDataJSON() {
    let backupData = {
        dbIng: dbIng,
        dbStore: dbStore,
        permanentFreezer: permanentFreezer,
        permanentPantry: permanentPantry,
        batchTemplates: batchTemplates,
        customComponents: customComponents,
        weekSchedule: weekSchedule
    };
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    let downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `matlade_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importDataJSON(event) {
    let file = event.target.files[0];
    if(!file) return;
    let reader = new FileReader();
    reader.onload = function(e) {
        try {
            let json = JSON.parse(e.target.result);
            if(json.permanentFreezer) localStorage.setItem("pFreezerStorage60", JSON.stringify(json.permanentFreezer));
            if(json.permanentPantry) localStorage.setItem("pPantryStorage60", JSON.stringify(json.permanentPantry));
            if(json.batchTemplates) localStorage.setItem("batchTemplates60", JSON.stringify(json.batchTemplates));
            if(json.customComponents) localStorage.setItem("customComponents60", JSON.stringify(json.customComponents));
            if(json.weekSchedule) localStorage.setItem("weekSchedule60", JSON.stringify(json.weekSchedule));
            if(json.dbStore) localStorage.setItem('dbStore60', JSON.stringify(json.dbStore));
            if(json.dbIng) localStorage.setItem('dbIng60', JSON.stringify(json.dbIng));
            
            alert("✔️ Backup importerad framgångsrikt! Sidan laddas om.");
            location.reload();
        } catch(err) {
            alert("❌ Kunde inte läsa filen. Kontrollera att det är en giltig JSON-backup.");
        }
    };
    reader.readAsText(file);
}

function printSingleLabel(id) {
    const spec = window.currentSpecs[id]; const today = new Date().toLocaleDateString('sv-SE');
    const printArea = document.getElementById("print-area");
    if(printArea) {
        printArea.innerHTML = `<div class="label-card"><h2>🍽️ ${spec.fullName}</h2><p>Kcal: ${spec.kcal} | P: ${spec.pG}g | K: ${spec.cG}g</p><p>Datum: ${today}</p></div>`;
    }
    window.print();
}

function copyToClipboard() {
    let text = "🛒 INKÖPSLISTA\n";
    document.querySelectorAll("#lp li").forEach(li => text += "• " + li.innerText + "\n");
    document.querySelectorAll("#lc li").forEach(li => text += "• " + li.innerText + "\n");
    navigator.clipboard.writeText(text).then(() => alert("Kopierat!"));
}

document.addEventListener('DOMContentLoaded', () => {
    updateStaticTexts();
    initBuilder();
    calc(); 
    updateFreezerDisplay(); 
    updatePantryDisplay();
    renderSettings();
    
    // Lyssnare för storkökets portioner så kalkylen uppdateras direkt
    const batchYieldInput = document.getElementById('batch-yield');
    if(batchYieldInput) {
        batchYieldInput.addEventListener('input', calcBatch);
    }
});