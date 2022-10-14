"use strict";
let user_choice;
let ia_choice;
let id_user = 1;
let id_ia = 1;
function run() {
    const new_id_user = id_user++;
    const new_id_ia = id_ia++;
    set_user_choice(new_id_user);
    set_ia_choice(new_id_ia);
    set_results();
    display_results();
}
function set_user_choice(new_id) {
    const choice = document.querySelector("input[name='choice']:checked").value;
    switch (choice) {
        case "scissor": {
            user_choice = new Scissor(new_id);
            break;
        }
        case "rock": {
            user_choice = new Rock(new_id);
            break;
        }
        case "leef": {
            user_choice = new Leef(new_id);
            break;
        }
        default:
            throw Error("Wrong choice.");
    }
    return user_choice;
}
function set_ia_choice(new_id) {
    const select_number = Math.floor(Math.random() * 3);
    switch (select_number) {
        case 0: {
            ia_choice = new Scissor(new_id);
            break;
        }
        case 1: {
            ia_choice = new Leef(new_id);
            break;
        }
        case 2: {
            ia_choice = new Rock(new_id);
            break;
        }
        default:
            throw Error("Wrong choice.");
    }
    console.log(ia_choice);
    return ia_choice;
}
function set_results() {
    switch (type_user | type_ia) {
        case (Leef | Rock):
    }
}
function display_results() { }
class Rock {
    constructor(i) {
        this.id = i;
        this.type = WeaponType.ROCK;
        this.win_against = WeaponType.SCISSOR;
    }
}
class Leef {
    constructor(i) {
        this.id = i;
        this.type = WeaponType.LEEF;
        this.win_against = WeaponType.SCISSOR;
    }
}
class Scissor {
    constructor(i) {
        this.id = i;
        this.type = WeaponType.SCISSOR;
        this.win_against = WeaponType.SCISSOR;
    }
}
var WeaponType;
(function (WeaponType) {
    WeaponType["ROCK"] = "ROCK";
    WeaponType["SCISSOR"] = "Scissor";
    WeaponType["LEEF"] = "Leef";
})(WeaponType || (WeaponType = {}));
