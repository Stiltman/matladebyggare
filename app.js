const defaultIng = {
        p: {
            taco: { name: "Tacofärs", kcal: 140, p: 18, c: 4, f: 5, spice: "🌶️ Tips: Använd saltfri tacokrydda.", parts: { nf5: 1.0, tacosas: 0.4 } },
            nf5: { name: "Mager Nötfärs (5%)", kcal: 130, p: 21, c: 0, f: 5, spice: "🥩 Tips: Krydda med grovmalen svartpeppar.", parts: { nf5: 1.0 } },
            nf12: { name: "Nötfärs (12%)", kcal: 180, p: 19, c: 0, f: 12, spice: "🥩 Tips: Passar till pannbiffar.", parts: { nf12: 1.0 } },
            sas: { name: "Klassisk Köttfärssås", kcal: 120, p: 14, c: 5, f: 5, spice: "🍅 Tips: Öka smaken med vitlök.", parts: { nf12: 1.0, krossad_tomat: 0.5 } },
            kyck: { name: "Grillad Kycklingfilé", kcal: 110, p: 23, c: 0, f: 2, spice: "🍗 Tips: Gnid in med curry.", parts: { kycklingfile: 1.25 } },
            bbq: { name: "Färdig Kyckling (BBQ)", kcal: 125, p: 21, c: 3, f: 3, spice: "🔥 Tips: Servera med neutral bas.", parts: { fardig_kyckling: 1.0 } },
            keb: { name: "Kebabkött (Nöt)", kcal: 220, p: 16, c: 2, f: 16, spice: "🥙 Tips: Servera med laktosfri kvarg.", parts: { fardig_kebab: 1.0 } },
            kyck_keb: { name: "Kycklingkebab", kcal: 160, p: 20, c: 2, f: 8, spice: "🥙 Tips: Passar perfekt med ris eller vitlökssås.", parts: { fardig_kyckling_kebab: 1.0 } },
            lax_ugn: { name: "Ugnsbakad Laxfilé", kcal: 170, p: 20, c: 0, f: 10, spice: "🐟 Tips: Pressa över färsk citron.", parts: { laxfile: 1.2 } },
            lax_varm: { name: "Varmrökt Lax", kcal: 210, p: 21, c: 0, f: 14, spice: "🐟 Tips: Kombinera med mos.", parts: { varmrokt_lax: 1.0 } },
            stroganoff: { name: "Korvstroganoff", kcal: 140, p: 10, c: 5, f: 9, spice: "🥘 Tips: Använd osaltad tomatpuré.", parts: { falukorv_mager: 1.0, gradde_laktosfri: 0.3 } },
            halloumi: { name: "Stekt Halloumi (Lätt)", kcal: 240, p: 22, c: 2, f: 16, spice: "🧀 Tips: Stek helt utan extra salt.", parts: { lighthalloumi: 1.0 } },
            tonfisk: { name: "Tonfisk i vatten", kcal: 105, p: 24, c: 0, f: 1, spice: "🐟 Tips: Blanda med lite svartpeppar och citron.", parts: { tonfisk_burk: 1.0 } },
            kalkon: { name: "Skivad Kalkon", kcal: 120, p: 20, c: 1, f: 4, spice: "🦃 Tips: Snabbt att steka upp i bitar.", parts: { kalkon_skivad: 1.0 } },
            formbar_fars: { name: "Vegetarisk Formbar Färs", kcal: 150, p: 17, c: 6, f: 6, spice: "🌱 Tips: Krydda ordentligt med paprikapulver.", parts: { formbar_fars_pkt: 1.0 } }
        },
        c: {
            mos: { name: "Protein-potatismos", kcal: 90, p: 5, c: 15, f: 1, parts: { potatis: 1.0, kvarg_laktosfri: 0.2 } },
            ris: { name: "Äggris", kcal: 130, p: 4, c: 22, f: 2, parts: { ris_torrt: 0.33, agg: 0.01 } },
            pasta: { name: "Välkokta Makaroner", kcal: 110, p: 3, c: 23, f: 0.5, parts: { pasta_torr: 0.33 } },
            sallad: { name: "Salladsbädd ⚠️", kcal: 15, p: 1, c: 2, f: 0, parts: { blandsallad: 1.0 } },
            rotfrukt: { name: "Rotfruktsmos", kcal: 65, p: 2, c: 10, f: 0.5, parts: { rotselleri: 0.5, blomkal: 0.5 } },
            matvete: { name: "Kokt Matvete", kcal: 110, p: 4, c: 21, f: 1, parts: { matvete_torrt: 0.33 } },
            quinoa: { name: "Kokt Quinoa", kcal: 120, p: 4, c: 21, f: 2, parts: { quinoa_torrt: 0.3 } },
            bulgur: { name: "Kokt Bulgur", kcal: 115, p: 3, c: 22, f: 1, parts: { bulgur_torrt: 0.3 } },
            sojamakaroner: { name: "Proteinbön-pasta", kcal: 140, p: 12, c: 18, f: 2, parts: { sojapasta_torr: 0.35 } }
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
    };    let dbIng = JSON.parse(localStorage.getItem('dbIng60')) || defaultIng;
    let dbStore = JSON.parse(localStorage.getItem('dbStore60')) || defaultStore;
    let permanentFreezer = JSON.parse(localStorage.getItem("pFreezerStorage60")) || {};
    let permanentPantry = JSON.parse(localStorage.getItem("pPantryStorage60")) || {};
    let batchTemplates = JSON.parse(localStorage.getItem("batchTemplates60")) || {};
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

    function updateStaticTexts() {
        document.getElementById('app-title').innerText = t('title');
        document.getElementById('tab-builder').innerText = t('tab_build');
        document.getElementById('tab-batch').innerText = t('tab_batch');
        document.getElementById('tab-freezer').innerText = t('tab_freezer');
        document.getElementById('tab-pantry').innerText = t('tab_pantry');
        document.getElementById('tab-schedule').innerText = t('tab_schedule');
        document.getElementById('tab-settings').innerText = t('tab_settings');
        
        document.getElementById('lbl-layout').innerText = t('lbl_layout');
        document.getElementById('opt-l4').innerText = t('layout_4');
        document.getElementById('opt-l2').innerText = t('layout_2');
        document.getElementById('opt-l6').innerText = t('layout_6');
        document.getElementById('opt-l10').innerText = t('layout_10');
        
        document.getElementById('lbl-mode').innerText = t('lbl_mode');
        document.getElementById('opt-m2').innerText = t('mode_2');
        document.getElementById('opt-m1').innerText = t('mode_1');

        document.getElementById('btn-save').innerText = t('btn_save');
        document.getElementById('btn-reset').innerText = t('btn_reset');
        document.getElementById('btn-freeze').innerText = t('btn_freeze');
        document.getElementById('btn-copy').innerText = t('btn_copy');
        document.getElementById('intro-tip').innerHTML = `<strong>💡 Tips:</strong> ${t('tip_intro')}`;
        
        document.getElementById('shopping-title').innerText = t('shopping_title');
        document.getElementById('prot-header').innerText = t('p_header');
        document.getElementById('carb-header').innerText = t('c_header');
        document.getElementById('price-label').innerText = t('total_price');
        document.getElementById('kitchen-title').innerText = t('kitchen_title');

        document.getElementById('batch-main-title').innerText = "🥘 " + (currentLang === 'sv' ? "Bygg Storkok & Hantera Receptmallar" : "Build Batch & Manage Templates");
        document.getElementById('batch-sub').innerText = t('lbl_template');
        document.getElementById('lbl-template').innerText = t('lbl_template');
        document.getElementById('btn-load-template').innerText = t('btn_load');
        document.getElementById('btn-del-template').innerText = t('btn_delete');
        document.getElementById('lbl-recname').innerText = t('lbl_recipe_name');
        document.getElementById('lbl-yield').innerText = t('lbl_yield');
        document.getElementById('lbl-batcheng').innerText = t('lbl_batch_ing');
        document.getElementById('btn-add-ing').innerText = t('btn_add');
        document.getElementById('lbl-batchcalc').innerText = t('lbl_batch_calc');
        document.getElementById('btn-send-batch').innerText = t('btn_send_batch');
        document.getElementById('btn-savetempl').innerText = t('btn_save_template');

        document.getElementById('freezer-title').innerText = t('lbl_freezer_header');
        document.getElementById('freezer-sub').innerText = t('lbl_freezer_sub');
        document.getElementById('freezer-empty-msg').innerText = t('lbl_freezer_empty');

        document.getElementById('pantry-title').innerText = t('lbl_pantry_header');
        document.getElementById('pantry-sub').innerText = t('lbl_pantry_sub');
        document.getElementById('pantry-empty-msg').innerText = t('lbl_pantry_empty');

        document.getElementById('schedule-title').innerText = t('lbl_schedule_header');
        document.getElementById('schedule-sub').innerText = t('lbl_schedule_sub');

        document.getElementById('settings-lang-title').innerText = t('lbl_lang_header');
        document.getElementById('settings-lang-sub').innerText = t('lbl_lang_sub');
        document.getElementById('settings-add-title').innerText = t('lbl_add_ing_header');
        document.getElementById('btn-addsys').innerText = t('btn_add_system');
        document.getElementById('settings-edit-title').innerText = t('lbl_edit_header');
        document.getElementById('th-name').innerText = t('th_name');
        document.getElementById('th-size').innerText = t('th_size');
        document.getElementById('th-price').innerText = t('th_price');
        document.getElementById('th-action').innerText = t('th_action');
        document.getElementById('btn-saveedits').innerText = t('btn_save_edits');
        
        const langBox = document.getElementById('lang-select-box');
        if(langBox) langBox.value = currentLang;
    }

    function switchTab(tabId, btn) {
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        
        document.querySelectorAll('.desktop-tab-btn').forEach(b => {
            if(b.getAttribute('onclick').includes(tabId)) b.classList.add('active');
            else b.classList.remove('active');
        });

        if(btn) {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        if(tabId === 'batch-tab') initBatchDropdown();
        if(tabId === 'schedule-tab') initScheduleView();
    }

    function toggleMoreMenu() {
        const menu = document.getElementById('more-menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }

    function changeLayout() {
        currentLayout = document.getElementById('preset-layout').value;
        recipeMode = document.getElementById('recipe-mode').value;
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
        document.getElementById('preset-layout').value = currentLayout;
        document.getElementById('recipe-mode').value = recipeMode;
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
                g.innerHTML += `
                <div class="compartment">
                    <div class="compartment-title">${t('compartment')}${i}</div>
                    <div class="cube-visual" style="height:140px;">
                        <div class="layer-carb" id="c${i}-vc" style="height:0%;"></div>
                        <div class="layer-protein" id="c${i}-vp" style="height:0%;"></div>
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
        const btn = document.getElementById(`c${id}-s`);
        btn.innerText = styles[id] ? t('style_layered') : t('style_allinone');
        btn.classList.toggle("active", styles[id]);
        calc();
    }

    function saveConfig() {
        let cfg = getLayoutConfig();
        let config = {};
        for (let i = 1; i <= cfg.count; i++) {
            config[i] = {
                p: document.getElementById(`c${i}-p`).value, 
                c: document.getElementById(`c${i}-c`) ? document.getElementById(`c${i}-c`).value : "",
                v: parseInt(document.getElementById(`c${i}-v`).value), 
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
        const name = document.getElementById('batch-name').value;
        const yieldCount = document.getElementById('batch-yield').value;
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
        const name = document.getElementById('template-select').value;
        if(!name || !batchTemplates[name]) return alert("Välj en giltig mall!");
        
        let tData = batchTemplates[name];
        document.getElementById('batch-name').value = name;
        document.getElementById('batch-yield').value = tData.yield;
        currentBatchIngredients = JSON.parse(JSON.stringify(tData.ingredients));
        calcBatch();
        alert(`✔️ Mall "${name}" laddad!`);
    }

    function deleteTemplate() {
        const name = document.getElementById('template-select').value;
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
        if(unit === 'st' && storeItem && storeItem.itemsPerPkg && storeItem.itemsPerPkg > 0) {
            let weightPerPiece = storeItem.size / storeItem.itemsPerPkg;
            return amount * weightPerPiece;
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
        if(unit === 'st') {
            if(itemKey === 'lasagneplattor') return amount * 15;
            return amount * 100;
        }
        return amount;
    }

    function addBatchIngredient() {
        const key = document.getElementById('batch-item-select').value;
        const rawAmount = Number(document.getElementById('batch-item-amount').value);
        const unit = document.getElementById('batch-item-unit').value;
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
        const yieldCount = Math.max(1, Number(document.getElementById('batch-yield').value));

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

        document.getElementById('batch-per-kc').innerText = Math.round(totalKcal / yieldCount);
        document.getElementById('batch-per-p').innerText = Math.round(totalP / yieldCount);
        document.getElementById('batch-per-c').innerText = Math.round(totalC / yieldCount);
        document.getElementById('batch-per-f').innerText = Math.round(totalF / yieldCount);
    }

    function sendBatchToFreezer() {
        const name = document.getElementById('batch-name').value || "Storkok";
        const yieldCount = Number(document.getElementById('batch-yield').value);
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
        if(!permanentFreezer[fullName]) {
            permanentFreezer[fullName] = { count: 0, kcal: document.getElementById('batch-per-kc').innerText, p: document.getElementById('batch-per-p').innerText, c: document.getElementById('batch-per-c').innerText, created: today.toLocaleDateString('sv-SE'), expires: expDate.toLocaleDateString('sv-SE') };
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
            document.getElementById(`c${i}-vt`).innerText = v;
            
            let maxV = cfg.maxVol;
            let containerFillPct = (v / maxV) * 100;

            if(recipeMode === "1") {
                let val = pElem.value;
                let parts = val.split('_');
                let cat = parts[0];
                let key = parts[1];
                let data = dbIng[cat][key];
                if(!data) continue;

                document.getElementById(`c${i}-kc`).innerText = Math.round(data.kcal * v / 100);
                document.getElementById(`c${i}-gProt`).innerText = Math.round(data.p * v / 100);
                document.getElementById(`c${i}-gCarb`).innerText = Math.round(data.c * v / 100);
                document.getElementById(`c${i}-gFat`).innerText = Math.round(data.f * v / 100);

                compSpecs[i] = { fullName: `${data.name} (${v} ml)`, kcal: document.getElementById(`c${i}-kc`).innerText, pG: document.getElementById(`c${i}-gProt`).innerText, cG: document.getElementById(`c${i}-gCarb`).innerText };
                
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
                document.getElementById(`c${i}-rt`).innerText = r;
                if(!dbIng.p[pk] || !dbIng.c[ck]) continue;

                const pv = v * (r / 100), cv = v * ((100 - r) / 100); const pd = dbIng.p[pk], cd = dbIng.c[ck];
                document.getElementById(`c${i}-kc`).innerText = Math.round((pd.kcal*pv/100)+(cd.kcal*cv/100));
                document.getElementById(`c${i}-gProt`).innerText = Math.round((pd.p*pv/100)+(cd.p*cv/100));
                document.getElementById(`c${i}-gCarb`).innerText = Math.round((pd.c*pv/100)+(cd.c*cv/100));
                document.getElementById(`c${i}-gFat`).innerText = Math.round((pd.f*pv/100)+(cd.f*cv/100));
                
                compSpecs[i] = { fullName: `${pd.name} med ${cd.name} (${v} ml)`, kcal: document.getElementById(`c${i}-kc`).innerText, pG: document.getElementById(`c${i}-gProt`).innerText, cG: document.getElementById(`c${i}-gCarb`).innerText };
                
                let vc = document.getElementById(`c${i}-vc`);
                let vp = document.getElementById(`c${i}-vp`);
                if(vc && vp) {
                    let totalFilledHeight = containerFillPct;
                    let protHeight = totalFilledHeight * (r / 100);
                    let carbHeight = totalFilledHeight * ((100 - r) / 100);
                    
                    vc.style.height = carbHeight + "%";
                    vp.style.height = protHeight + "%";
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

        const totalCostVal = document.getElementById("total-cost-val");
        if(totalCostVal) totalCostVal.innerText = totalPrice;
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
                <td><input type="number" id="edit_size_${key}" value="${item.size}"> ${item.unit}</td>
                <td><input type="number" id="edit_price_${key}" value="${item.price}"> kr</td>
                <td><button class="del-btn-small" onclick="deleteIngredient('${key}')">❌</button></td>
            </tr>`;
        }
    }

    function saveDatabaseEdits() {
        for (let key in dbStore) {
            const nameInput = document.getElementById(`edit_name_${key}`);
            const sizeInput = document.getElementById(`edit_size_${key}`);
            const priceInput = document.getElementById(`edit_price_${key}`);
            if (nameInput) { dbStore[key].name = nameInput.value; dbStore[key].size = Number(sizeInput.value); dbStore[key].price = Number(priceInput.value); }
        }
        localStorage.setItem('dbStore60', JSON.stringify(dbStore));
        alert("✔️ Sparat!");
        location.reload();
    }

    function addNewIngredient() {
        const type = document.getElementById('new-type').value; 
        const name = document.getElementById('new-name').value;
        const price = Number(document.getElementById('new-price').value);
        const size = Number(document.getElementById('new-size').value);
        const itemsPerPkg = Number(document.getElementById('new-count').value) || 0;
        if(!name) return;
        const id = 'custom_' + Date.now();
        dbStore[id] = { name: name, size: size, unit: 'g', price: price, itemsPerPkg: itemsPerPkg };
        dbIng[type][id] = { name: name, kcal: Number(document.getElementById('new-kcal').value), p: Number(document.getElementById('new-p').value), c: Number(document.getElementById('new-c').value), f: Number(document.getElementById('new-f').value), parts: {} };
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

    function printSingleLabel(id) {
        const spec = window.currentSpecs[id]; const today = new Date().toLocaleDateString('sv-SE');
        document.getElementById("print-area").innerHTML = `<div class="label-card"><h2>🍽️ ${spec.fullName}</h2><p>Kcal: ${spec.kcal} | P: ${spec.pG}g | K: ${spec.cG}g</p><p>Datum: ${today}</p></div>`;
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
    });