export function convertToGramsOrMl(itemKey, amount, unit, dbStore) {
    const storeItem = dbStore[itemKey];
    if(!storeItem) return amount;
    if(unit === 'st') {
        if(storeItem.itemsPerPkg && storeItem.itemsPerPkg > 0) return amount * (storeItem.size / storeItem.itemsPerPkg);
        if(itemKey === 'lasagneplattor') return amount * 15;
        return amount * storeItem.size;
    }
    if(unit === 'dl') return (itemKey === 'lasagneplattor' || itemKey === 'havregryn' || itemKey === 'vetemjol' || itemKey === 'fullkornsmjol') ? amount * 60 : amount * 100;
    if(unit === 'msk') return (itemKey === 'tomatpure') ? amount * 15 : (itemKey === 'bakpulver' ? amount * 12 : amount * 15);
    if(unit === 'tsk') return (itemKey === 'bakpulver') ? amount * 4 : amount * 5;
    return amount;
}