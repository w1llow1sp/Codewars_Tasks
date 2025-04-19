/**
 * Создайте функцию, которая возвращает имя победителя в
 * поединке между двумя бойцами.
 *
 * Каждый боец по очереди атакует другого,
 * и тот, кто первым убьет другого, побеждает.
 *
 * Смерть определяется как здоровье <= 0.
 * Каждый боец будет объектом/экземпляром Fighter.
 * И здоровье, и урон за атаку (damage_per_attack для python)
 * будут целыми числами, большими 0.
 *
 * Вы можете мутировать объекты Fighter.
 * Ваша функция также получает третий аргумент,
 * строку, с именем бойца, который атакует первым.
 */
function declareWinner(fighter1, fighter2, firstAttacker) {
    let current = firstAttacker === fighter1.name ? fighter1 : fighter2;
    let opponent = current === fighter1 ? fighter2 : fighter1;

    while (fighter1.health > 0 && fighter2.health > 0) {
        // Current fighter attacks opponent
        opponent.health -= current.damagePerAttack;

        // Swap fighters for next turn
        [current, opponent] = [opponent, current];
    }

    return fighter1.health > 0 ? fighter1.name : fighter2.name;
}

declareWinner("Lew", 10, 2)
declareWinner("Harald", 20, 5)
declareWinner("Jerry", 30, 3)