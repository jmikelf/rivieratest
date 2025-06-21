
// Game Data
const player = {
    id: 1,
    name: "Valen",
    maxHp: 350,
    hp: 350,
    charge: 0,
    chargeMax: 8,
    speed: 12,
    icon: "⚔️",
    time: 0, 
};

const enemyTypes = [
  { id: 1, name: "Goblin", maxHp: 16, hp: 16, speed: 8, icon: "👹", damage: [8, 12] },
  { id: 2, name: "Slime", maxHp: 20, hp: 20, speed: 12, icon: "👻", damage: [5, 10] },
  { id: 3, name: "Wolf", maxHp: 80, hp: 80, speed: 14, icon: "🐺", damage: [10, 15] },
  { id: 4, name: "Skeleton", maxHp: 70, hp: 70, speed: 10, icon: "💀", damage: [7, 14] },
  { id: 5, name: "Orc", maxHp: 100, hp: 100, speed: 9, icon: "👺", damage: [12, 18] },
  { id: 6, name: "Banshee", maxHp: 60, hp: 60, speed: 13, icon: "🧟‍♀️", damage: [10, 16], effect: "silence" },
  { id: 7, name: "Flame Imp", maxHp: 50, hp: 50, speed: 15, icon: "🔥", damage: [10, 12], effect: "burn" },
  { id: 8, name: "Rat King", maxHp: 12, hp: 12, speed: 6, icon: "🐀", damage: [14, 20], effect: "poison" },
  { id: 9, name: "Wraith", maxHp: 17, hp: 17, speed: 16, icon: "👻", damage: [8, 14], effect: "evade" },
  { id: 10, name: "Dark Knight", maxHp: 140, hp: 140, speed: 7, icon: "🛡️", damage: [20, 30], effect: "stun" },
  { id: 11, name: "Plague Doctor", maxHp: 90, hp: 90, speed: 11, icon: "🧑‍⚕️", damage: [10, 14], effect: "poison" },
  { id: 12, name: "Cursed Mirror", maxHp: 80, hp: 80, speed: 10, icon: "🪞", damage: [12, 20], effect: "reflect" }
];

        
const items = [
    { id: 1, name: "Látigo", uses: 4, delay: 6, effect: { damage: [10, 15] }, target: "all-enemies", animation: "slash", icon: 52, value: 1 },
    { id: 2, name: "Llave inglesa", uses: 5, delay: 5, effect: { damage: [12, 16] }, target: "enemy", animation: "blunt", icon: 53, value: 1 },
    { id: 3, name: "Pistola", uses: 6, delay: 7, effect: { damage: [20, 35] }, target: "enemy", animation: "gun", icon: 54, value: 1 },
    { id: 4, name: "Revolver", uses: 4, delay: 8, effect: { damage: [25, 35] }, target: "enemy", animation: "gun", icon: 55, value: 1 },
    { id: 5, name: "Hoz", uses: 3, delay: 9, effect: { damage: [18, 26], bleed: true }, target: "enemy", animation: "slash", icon: 56, value: 1 },
    { id: 6, name: "Martillo de mano", uses: 12, delay: 10, effect: { damage: [22, 30], stun: true }, target: "enemy", animation: "blunt", icon: 57, value: 1 },
    { id: 7, name: "Motosierra", uses: 3, delay: 12, effect: { damage: [35, 50] }, target: "all-enemies", animation: "saw", icon: 58, value: 1 },
    { id: 8, name: "Navaja de afeitar", uses: 16, delay: 4, effect: { hp: [100,150], damage: [8, 72] }, target: "enemy", animation: "stab", icon: 59, value: 1 },
    { id: 9, name: "Gancho", uses: 4, delay: 7, effect: { damage: [15, 20], pull: true }, target: "enemy", animation: "hook", icon: 60, value: 1 },
    { id: 10, name: "Pico", uses: 3, delay: 19, effect: { damage: [20, 28] }, target: "enemy", animation: "blunt", icon: 61, value: 1 },
    { id: 11, name: "Maza", uses: 3, delay: 11, effect: { damage: [25, 35], stun: true }, target: "enemy", animation: "smash", icon: 62, value: 1 },
    { id: 12, name: "Machete", uses: 4, delay: 8, effect: { damage: [18, 26] }, target: "enemy", animation: "slash", icon: 63, value: 2 },
    { id: 13, name: "Cuchillo", uses: 6, delay: 5, effect: { damage: [12, 18] }, target: "enemy", animation: "stab", icon: 64, value: 1 },
    { id: 14, name: "Hacha de bomberos", uses: 3, delay: 10, effect: { damage: [30, 40], burn: true }, target: "enemy", animation: "fire", icon: 65, value: 1 },
    { id: 15, name: "Trabuco", uses: 2, delay: 15, effect: { damage: [40, 60] }, target: "all-enemies", animation: "blast", icon: 66, value: 3 },
    { id: 16, name: "Maza de combate", uses: 3, delay: 12, effect: { damage: [28, 38] }, target: "enemy", animation: "smash", icon: 67, value: 1 },
    { id: 17, name: "Anorak", uses: 1, delay: 3, effect: { hp: [40,65], shield: 25 }, target: "player", animation: "buff", icon: 68, value: 1 },
    { id: 18, name: "Pastillas", uses: 2, delay: 6, effect: { hp: [30,30] }, target: "player", animation: "heal", icon: 69, value: 1 },
    { id: 19, name: "Extintor", uses: 2, delay: 10, effect: { damage: [10, 20], silence: true }, target: "all-enemies", animation: "smoke", icon: 70, value: 1 },
    { id: 20, name: "Kit médico", uses: 2, delay: 8, effect: { hp: [20, 60] }, target: "player", animation: "heal", icon: 71, value: 1 },
    { id: 21, name: "Ídolo vudú", uses: 1, delay: 12, effect: { hp: [10,150], damage: [30, 35], curse: true }, target: "enemy", animation: "curse", icon: 72, value: 1 },
    { id: 22, name: "Gasolina", uses: 1, delay: 6, effect: { burn: true }, target: "all-enemies", animation: "fire", icon: 73, value: 1 },
    { id: 23, name: "Linterna", uses: 3, delay: 4, effect: { reveal: true }, target: "enemy", animation: "flash", icon: 75, value: 1 },
    { id: 24, name: "Pie de un cadáver", uses: 2, delay: 7, effect: { damage: [10, 18], fear: true }, target: "enemy", animation: "weird", icon: 76, value: 1 },
    { id: 25, name: "Mano de un cadáver", uses: 2, delay: 6, effect: { damage: [8, 14], bind: true }, target: "enemy", animation: "ghost", icon: 77, value: 1 },
    { id: 26, name: "Máscara de gas", uses: 1, delay: 5, effect: { immune: true }, target: "player", animation: "mask", icon: 78, value: 4 },
    { id: 27, name: "Chaleco antibalas", uses: 1, delay: 5, effect: { hp: [100,150], shield: 40 }, target: "player", animation: "shield", icon: 79, value: 1 },
    { id: 28, name: "Calavera", uses: 1, delay: 6, effect: { fear: true }, target: "all-enemies", animation: "scare", icon: 80, value: 4 },
    { id: 29, name: "Corazón", uses: 1, delay: 10, effect: { hp: [100,150] }, target: "player", animation: "heal", icon: 81, value: 4 },
    { id: 30, name: "Cerebro", uses: 1, delay: 7, effect: { hp: [100,150], timeReduction: 0.4 }, target: "player", animation: "brain", icon: 82, value: 1 },
    { id: 31, name: "Ojo", uses: 1, delay: 6, effect: { hp: [100,150], critBuff: true }, target: "player", animation: "focus", icon: 83, value: 1 },
    { id: 32, name: "Reliquia oculta", uses: 1, delay: 8, effect: { randomEffect: true }, target: "any", animation: "chaos", icon: 83 }
];      
// Game State
let gameState = {
    player: JSON.parse(JSON.stringify(player)),
    enemies: [],
    inventory: [],
    inventorySize: 6,
    currentWave: 1,
    battleActive: false,
    waitingForInput: false,
    playerTurn: false,
    coins: 10000
};
let draggedItemIndex = null;
// DOM Elements
const playerCharacterEl = document.getElementById('player-character');
const playerHealthEl = document.getElementById('player-health');
const playerChargeEl = document.getElementById('charge-display');
const playerTimeEl = document.getElementById('player-time');
const enemiesContainerEl = document.getElementById('enemies-container');
const actionMenuEl = document.getElementById('action-menu');
const itemGridEl = document.getElementById('item-grid');
const battleLogEl = document.getElementById('battle-log');
const waveDisplayEl = document.getElementById('wave-display');
const nextWaveBtnEl = document.getElementById('next-wave-btn');
const sellValue = document.getElementById('sell-value');

// Initialize Game
function initGame() {

    for (let i = 0; i < gameState.inventorySize; i++) {
        gameState.inventory.push(null);
    }
    const newLoot = getRandomLoot([items[3],items[3],items[16]], 3); // 1-2 ítems

        // Añadir a inventario si hay espacio
        newLoot.forEach(lootItem => {
            const emptySlot = gameState.inventory.findIndex(slot => slot === null);
            if (emptySlot !== -1) {
                gameState.inventory[emptySlot] = lootItem;
                addToLog(`Found loot: ${lootItem.name}`);
            } else {
                addToLog(`Inventory full! ${lootItem.name} discarded.`);
            }
        });
    document.getElementById('skip-turn-btn').addEventListener('click', () => {
        if (gameState.coins >= 500) {
        const newLoot = getRandomLoot(items, 1); // 1-2 ítems
            gameState.coins -= 500;
        // Añadir a inventario si hay espacio
        newLoot.forEach(lootItem => {
            const emptySlot = gameState.inventory.findIndex(slot => slot === null);
            if (emptySlot !== -1) {
                gameState.inventory[emptySlot] = lootItem;
                addToLog(`Found loot: ${lootItem.name}`);
            } else {
                addToLog(`Inventory full! ${lootItem.name} discarded.`);
            }
        });
        renderInventory();
        updateCoinDisplay();
        }
        gameState.player.time = 0;
        gameState.playerTurn = false;
        gameState.waitingForInput = false;
        addToLog(`${gameState.player.name} skipped their turn.`);
        document.getElementById('skip-turn-btn').style.display = 'none';
        actionMenuEl.classList.remove('active');
        renderPlayer();
        startBattleLoop();
    });
    renderPlayer();
    renderInventory();
    updateCoinDisplay();
    startWave();
    
    nextWaveBtnEl.addEventListener('click', startWave);
}

// Render Player
function renderPlayer() {
    const healthPercent = (gameState.player.hp / gameState.player.maxHp) * 100;
    const timePercent = Math.min(100, (gameState.player.time / 100) * 100);
    
    playerHealthEl.style.width = `${healthPercent}%`;
    playerTimeEl.style.width = `${timePercent}%`;
    
    if (gameState.playerTurn) {
        playerCharacterEl.classList.add('active');
    } else {
        playerCharacterEl.classList.remove('active');
    }

    playerChargeEl.innerHTML = '';
    for (let index = 0; index < gameState.player.chargeMax; index++) {
        const chargeDisplay = document.createElement('span');
        chargeDisplay.innerHTML += "m";
        chargeDisplay.style.color = index< gameState.player.charge ? "var(--accent)" : "var(--primary)" ;
    playerChargeEl.appendChild(chargeDisplay);
    }
}

// Render Enemies
function renderEnemies() {
    enemiesContainerEl.innerHTML = '';
    
    gameState.enemies.forEach(enemy => {
        const enemyEl = document.createElement('div');
        enemyEl.className = 'enemy';
        enemyEl.dataset.id = enemy.id;
        
        const healthPercent = (enemy.hp / enemy.maxHp) * 100;
        const timePercent = Math.min(100, (enemy.time / 100) * 100);
        
        enemyEl.innerHTML = `
            <div class="character-icon">${enemy.icon}${enemy.name}</div>
            <div class="enemy-img"></div>
            <div class="health-bar">
                <div class="health-fill" style="width: ${healthPercent}%"></div>
            </div>
            <div class="time-bar">
                <div class="time-fill" style="width: ${timePercent}%"></div>
            </div>
        `;
        
        enemiesContainerEl.appendChild(enemyEl);
    });
}

// Render Inventory
function renderInventory() {
    itemGridEl.innerHTML = '';

    for (let i = 0; i < gameState.inventorySize; i++) {
        const item = gameState.inventory[i];
        const itemEl = document.createElement('div');
        itemEl.className = 'item';
        itemEl.dataset.index = i;

        if (item) {
            const rdI = Math.floor(Math.random()*14)+36;
            const randomModifier = Math.random()

            itemEl.style = `background: no-repeat center/100% url("/assets/${rdI}.png"); --rand: ${randomModifier}`;
            itemEl.innerHTML = `
                <div class="item-name">${item.name}</div>
                <img class="item-icon-img" src="/assets/${item.icon}.png" alt="${item.name}" />
                <div class="item-uses">${item.uses}</div>
            `;
            itemEl.draggable = true;

            itemEl.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', i);
                itemEl.classList.add('dragging');
            });

            itemEl.addEventListener('dragend', () => {
                itemEl.classList.remove('dragging');
            });

            itemEl.addEventListener('click', () => useItem(i));
        } else {
            const rdI = Math.floor(Math.random()*14)+36;
            itemEl.innerHTML = `
                <div class="item-name" style="opacity: 0.0">Empty</div>
                <img class="item-empty-img" src="/assets/${rdI}.png" alt="nada" />
            `;
            /*itemEl.style.opacity = 0.2;
            itemEl.style.borderStyle = 'dashed';*/
        }

        // Allow drop on all slots
        itemEl.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', i);
            draggedItemIndex = i;
            itemEl.classList.add('dragging');
        }); 

        itemEl.addEventListener('dragover', (e) => {
            e.preventDefault();
            itemEl.classList.add('drag-over');
            
        });

        itemEl.addEventListener('dragleave', () => {
            itemEl.classList.remove('drag-over');
        });
        
        itemEl.addEventListener('dragend', () => {
            itemEl.classList.remove('dragging');
            draggedItemIndex = null;
        });

        itemEl.addEventListener('drop', (e) => {
            e.preventDefault();
            itemEl.classList.remove('drag-over');

            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
            const toIndex = parseInt(itemEl.dataset.index, 10);
            if (fromIndex !== toIndex) {
                swapInventorySlots(fromIndex, toIndex);
            }
        });

        itemGridEl.appendChild(itemEl);
    }
}

// Actualizar casilla de venta
const sellSlot = document.getElementById('sell-slot');
sellSlot.addEventListener('dragover', (e) => {
    e.preventDefault();
    sellSlot.classList.add('drag-over');

    if (draggedItemIndex !== null) {
        const item = gameState.inventory[draggedItemIndex];
        if (item) {
            const coinValue = (item.value * 100) * (1 + item.uses);
            sellValue.textContent = ` ${item.name} por ${coinValue}$`;
        }
    }
});

sellSlot.addEventListener('dragleave', () => {
    sellSlot.classList.remove('drag-over');
    sellValue.textContent = "0$";
});

sellSlot.addEventListener('drop', (e) => {
    e.preventDefault();
    sellSlot.classList.remove('drag-over');

    if (draggedItemIndex !== null) {
        const item = gameState.inventory[draggedItemIndex];
        if (item) {
            const coinValue = (item.value * 100) * (1 + item.uses);
            gameState.coins += coinValue;
            addToLog(`Sold ${item.name} for ${coinValue} coins.`);
            gameState.inventory[draggedItemIndex] = null;
            renderInventory();
            updateCoinDisplay();
        }
    }

    sellValue.textContent = "0$";
    draggedItemIndex = null;
});

function swapInventorySlots(fromIndex, toIndex) {
    const temp = gameState.inventory[fromIndex];
    gameState.inventory[fromIndex] = gameState.inventory[toIndex];
    gameState.inventory[toIndex] = temp;
    renderInventory();
}

// Start Wave
function startWave() {
    if (gameState.battleActive) return;
    
    gameState.battleActive = true;
    nextWaveBtnEl.style.display = 'none';
    waveDisplayEl.textContent = `Wave: ${gameState.currentWave}`;
    
    // Generate enemies based on wave number
    const enemyCount = Math.min(5, 2 + Math.floor(gameState.currentWave / 2));
    gameState.enemies = [];
    
    for (let i = 0; i < enemyCount; i++) {
        const type = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
        const enemy = JSON.parse(JSON.stringify(type));
        enemy.id = 100 + i;
        enemy.time = 0;
        gameState.enemies.push(enemy);
    }
    
    addToLog(`Wave ${gameState.currentWave} begins! ${enemyCount} enemies approach.`);
    
    renderEnemies();
    startBattleLoop();
}
function updateCoinDisplay() {
    const coinDisplay = document.getElementById('coin-display');
    coinDisplay.textContent = `${gameState.coins}$`;
}
// Battle Loop
function startBattleLoop() {
    if (!gameState.battleActive) return;
    
    // Update player time
    if (gameState.player.hp > 0) {
        gameState.player.time += gameState.player.speed;
        
        // Check if player can act
        if (gameState.player.time >= 100 && !gameState.waitingForInput) {
            gameState.playerTurn = true;
            gameState.waitingForInput = true;
            playerCharacterEl.classList.add('active');
            actionMenuEl.classList.add('active');
            document.getElementById('skip-turn-btn').style.display = 'inline-block';
            addToLog(`${gameState.player.name}'s turn! Choose an action.`);
        }
    }
    
    // Update enemies time
    gameState.enemies.forEach(enemy => {
        if (enemy.hp > 0) {
            enemy.time += enemy.speed;
            
            // Check if enemy can act
            if (enemy.time >= 100 && !gameState.waitingForInput) {
                enemy.time = 0;
                enemyTurn(enemy);
            }
        }
    });
    
    // Render updates
    renderPlayer();
    renderEnemies();
    
    // Check battle conditions
    if (gameState.enemies.every(e => e.hp <= 0)) {
        endWave(true);
        return;
    }
    
    if (gameState.player.hp <= 0) {
        endWave(false);
        return;
    }
    
    // Continue loop
    if (!gameState.waitingForInput) {
        requestAnimationFrame(startBattleLoop);
    }
}

// Use Item
function useItem(slotIndex) {
    if (!gameState.waitingForInput || !gameState.playerTurn) return;

    const item = gameState.inventory[slotIndex];
    if (!item || item.uses <= 0) return;

    // Aplicar efecto
    applyItemEffect(item);

    // Reducir usos
    item.uses--;

    // Eliminar si ya no tiene usos
    if (item.uses <= 0) {
        gameState.inventory[slotIndex] = null;
    }

    // Delay para el próximo turno
    gameState.player.time = -item.delay;

    // Log
    addToLog(`${gameState.player.name} used ${item.name}!`);

    // UI
    renderPlayer();
    renderInventory();

    gameState.playerTurn = false;
    gameState.waitingForInput = false;
    playerCharacterEl.classList.remove('active');
    actionMenuEl.classList.remove('active');
    document.getElementById('skip-turn-btn').style.display = 'none';
    showItemAnimation(item, () => {
        startBattleLoop();
    });
}

// Apply Item Effect
function applyItemEffect(item) {
    if (item.target === "player") {
        // Apply to player
        if (item.effect.hp) {
            const healAmount = randomInRange(item.effect.hp);
            gameState.player.hp = Math.min(gameState.player.maxHp, gameState.player.hp + healAmount);
            showDamageText(playerCharacterEl, `+${healAmount}`, 'heal');
        }
        
        if (item.effect.speedBuff) {
            gameState.player.speed *= item.effect.speedBuff;
            addToLog(`${gameState.player.name}'s speed increased!`);
        }
        
        if (item.effect.evade) {
            addToLog(`${gameState.player.name} becomes evasive!`);
        }
        
        if (item.effect.timeReduction) {
            gameState.player.time *= item.effect.timeReduction;
            addToLog(`${gameState.player.name}'s next turn comes faster!`);
        }
    } else if (item.target === "enemy") {
        // Attack single enemy
        const aliveEnemies = gameState.enemies.filter(e => e.hp > 0);
        if (aliveEnemies.length > 0) {
            const enemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
            const damage = randomInRange(item.effect.damage);
            enemy.hp = Math.max(0, enemy.hp - damage);
            
            const enemyEl = document.querySelector(`.enemy[data-id="${enemy.id}"]`);
            if (enemyEl) {
                enemyEl.classList.add('hit');
                setTimeout(() => enemyEl.classList.remove('hit'), 300);
                showDamageText(enemyEl, `-${damage}`, 'damage');
                if (item.effect.hp) {
                    const healAmount = randomInRange(item.effect.hp);
                    gameState.player.hp = Math.min(gameState.player.maxHp, gameState.player.hp + healAmount);
                    showDamageText(playerCharacterEl, `+${healAmount}`, 'heal');
                }
            }
            
            if (enemy.hp <= 0) {
                addToLog(`${enemy.name} derrotado!`);
                    gameState.player.charge++;
                enemyEl.classList.add('enemy-defeated');
            } else {
                addToLog(`${item.name} golpea a ${enemy.name} y le hace ${damage} daño!`);
            }
        }
    } else if (item.target === "all-enemies") {
        // Attack all enemies
        const damage = randomInRange(item.effect.damage);
        
        gameState.enemies.forEach(enemy => {
            if (enemy.hp > 0) {
                enemy.hp = Math.max(0, enemy.hp - damage);
                
                const enemyEl = document.querySelector(`.enemy[data-id="${enemy.id}"]`);
                if (enemyEl) {
                    enemyEl.classList.add('hit');
                    setTimeout(() => enemyEl.classList.remove('hit'), 300);
                    showDamageText(enemyEl, `-${damage}`, 'damage');
                }
                
                if (enemy.hp <= 0) {
                    addToLog(`${enemy.name} derrotado!`);
                    gameState.player.charge++;
                    if (enemyEl) enemyEl.classList.add('enemy-defeated');
                }
            }
        });
        
        addToLog(`${item.name} golpea a todos los enemigos con ${damage} de ddaño!`);
    }
}

// Show Item Animation
function showItemAnimation(item, callback) {
    // In a real game, you'd have proper animations here
    // For this prototype, we'll just simulate with timeouts
    
    if (item.animation === "fire") {
        // Show fire animation on random enemy
        const aliveEnemies = gameState.enemies.filter(e => e.hp > 0);
        if (aliveEnemies.length > 0) {
            const enemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
            const enemyEl = document.querySelector(`.enemy[data-id="${enemy.id}"]`);
            if (enemyEl) {
                enemyEl.style.boxShadow = '0 0 20px rgba(255, 100, 0, 0.8)';
                setTimeout(() => {
                    enemyEl.style.boxShadow = '';
                    if (callback) callback();
                }, 500);
                return;
            }
        }
    } else if (item.animation === "heal") {
        // Show heal animation on player
        playerCharacterEl.style.boxShadow = '0 0 20px rgba(46, 204, 113, 0.8)';
        setTimeout(() => {
            playerCharacterEl.style.boxShadow = '';
            if (callback) callback();
        }, 500);
        return;
    }
    
    if (callback) callback();
}

// Enemy Turn
function enemyTurn(enemy) {
    if (gameState.player.hp <= 0) return;
    
    const damage = randomInRange(enemy.damage);
    gameState.player.hp = Math.max(0, gameState.player.hp - damage);
    
    addToLog(`${enemy.name} attacks for ${damage} damage!`);
    
    // Show hit animation
    playerCharacterEl.classList.add('hit');
    setTimeout(() => playerCharacterEl.classList.remove('hit'), 300);
    showDamageText(playerCharacterEl, `-${damage}`, 'damage');
    
    if (gameState.player.hp <= 0) {
        addToLog(`${gameState.player.name} has been defeated!`);
    }
    
    renderPlayer();
    
    // Continue battle
    startBattleLoop();
}
function getRandomLoot(possibleItems, count = 2) {
    const loot = [];

    // Clonar posibles ítems filtrando los que tienen usos > 0
    const validItems = possibleItems.filter(item => item.uses > 0);

    while (loot.length < count && validItems.length > 0) {
        const index = Math.floor(Math.random() * validItems.length);
        const item = JSON.parse(JSON.stringify(validItems[index])); // deep clone
        loot.push(item);
        validItems.splice(index, 1); // evitar duplicados en un mismo loot drop
    }

    return loot;
}
// End Wave
function endWave(victory) {
    gameState.battleActive = false;
    document.getElementById('skip-turn-btn').style.display = 'none';
    if (victory) {
        addToLog(`Wave ${gameState.currentWave} cleared!`);
        gameState.currentWave++;
        
        // Heal player a bit between waves
        const healAmount = Math.floor(gameState.player.maxHp * 0.3);
        gameState.player.hp = Math.min(gameState.player.maxHp, gameState.player.hp + healAmount);
        showDamageText(playerCharacterEl, `+${healAmount}`, 'heal');
        addToLog(`${gameState.player.name} recupera ${healAmount} HP between waves.`);

        // Recompensa de ítems tras victoria
        const newLoot = getRandomLoot(items, Math.floor(Math.random() * 2) + 1); // 1-2 ítems

        // Añadir a inventario si hay espacio
        newLoot.forEach(lootItem => {
            const emptySlot = gameState.inventory.findIndex(slot => slot === null);
            if (emptySlot !== -1) {
                gameState.inventory[emptySlot] = lootItem;
                addToLog(`Encuentras botin: ${lootItem.name}`);
            } else {
                addToLog(`Inventory full! ${lootItem.name} discarded.`);
            }
        });

        renderInventory();
        
        // Reset player time
        gameState.player.time = 0;
        gameState.playerTurn = false;
        gameState.waitingForInput = false;
        
        // Show next wave button
        nextWaveBtnEl.style.display = 'block';
        nextWaveBtnEl.textContent = `Start Wave ${gameState.currentWave}`;
        
        renderPlayer();
    } else {
        addToLog(`Game Over! You survived ${gameState.currentWave - 1} waves.`);
        nextWaveBtnEl.style.display = 'block';
        nextWaveBtnEl.textContent = 'Try Again';
        gameState.currentWave = 1;
        resetGame();
    }
}

// Reset Game
function resetGame() {
    gameState.player = JSON.parse(JSON.stringify(player));
    gameState.inventory = [null,null,null,null,null,null,];
    const newLoot = getRandomLoot(items, 3); // 1-2 ítems

        // Añadir a inventario si hay espacio
        newLoot.forEach(lootItem => {
            const emptySlot = gameState.inventory.findIndex(slot => slot === null);
            if (emptySlot !== -1) {
                gameState.inventory[emptySlot] = lootItem;
                addToLog(`Found loot: ${lootItem.name}`);
            } else {
                addToLog(`Inventory lleno! ${lootItem.name} discarded.`);
            }
        });
    document.getElementById('skip-turn-btn').style.display = 'none';
    renderPlayer();
    renderInventory();
    updateCoinDisplay();
}

// Show Damage Text
function showDamageText(element, text, type) {
    const damageText = document.createElement('div');
    damageText.className = type === 'damage' ? 'damage-text' : 'heal-text';
    damageText.textContent = text;
    
    element.appendChild(damageText);
    
    setTimeout(() => {
        damageText.remove();
    }, 1000);
}

// Add to Log
function addToLog(message) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.textContent = message;
    battleLogEl.appendChild(logEntry);
    battleLogEl.scrollTop = -battleLogEl.scrollHeight;
}

// Helper Functions
function randomInRange(range) {
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}

// Start Game
initGame();
