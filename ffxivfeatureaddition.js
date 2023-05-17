class ffxivfeatureaddition{
  static async FixAbilityScores(){
    CONFIG.DND5e.abilities = [];
    CONFIG.DND5e.abilities['str'] = "Strength";
    CONFIG.DND5e.abilities['dex'] = "Dexterity";
    CONFIG.DND5e.abilities['vit'] = "Vitality";
    CONFIG.DND5e.abilities['int'] = "Intelligence";
    CONFIG.DND5e.abilities['mnd'] = "Mind";
    CONFIG.DND5e.abilities['per'] = "Personality";

    CONFIG.DND5e.abilityAbbreviations = [];
    CONFIG.DND5e.abilityAbbreviations['str'] = "str";
    CONFIG.DND5e.abilityAbbreviations['dex'] = "dex";
    CONFIG.DND5e.abilityAbbreviations['vit'] = "vit";
    CONFIG.DND5e.abilityAbbreviations['int'] = "int";
    CONFIG.DND5e.abilityAbbreviations['mnd'] = "mnd";
    CONFIG.DND5e.abilityAbbreviations['per'] = "per";

    CONFIG.DND5e.hitPointsAbility = "vit";
  }

  static async FixSkills(){
    CONFIG.DND5E.skills = [];
    CONFIG.DND5E.skills['acr'] = { label: "Acrobatics", ability: "dex" };
    CONFIG.DND5E.skills['dec'] = { label: "Deception", ability: "per" };
    CONFIG.DND5E.skills['dri'] = { label: "Drinking", ability: "vit" };
    CONFIG.DND5E.skills['end'] = { label: "Endurance", ability: "vit" };
    CONFIG.DND5E.skills['ins'] = { label: "Insight", ability: "mnd" };
    CONFIG.DND5E.skills['inm'] = { label: "Intimidation", ability: "str" };
    CONFIG.DND5E.skills['inv'] = { label: "Invesitgation", ability: "int" };
    CONFIG.DND5E.skills['kno'] = { label: "Knowledge", ability: "int" };
    CONFIG.DND5E.skills['mig'] = { label: "Might", ability: "str" };
    CONFIG.DND5E.skills['mov'] = { label: "Movement", ability: "str" };
    CONFIG.DND5E.skills['mys'] = { label: "Mysticism", ability: "int" };
    CONFIG.DND5E.skills['nat'] = { label: "Nature", ability: "mnd" };
    CONFIG.DND5E.skills['prc'] = { label: "Perception", ability: "mnd" };
    CONFIG.DND5E.skills['prf'] = { label: "Performance", ability: "per" };
    CONFIG.DND5E.skills['prs'] = { label: "Persuasion", ability: "per" };
    CONFIG.DND5E.skills['rid'] = { label: "Riding", ability: "dex" };
    CONFIG.DND5E.skills['soh'] = { label: "Sleight of Hand", ability: "dex" };
    CONFIG.DND5E.skills['ste'] = { label: "Stealth", ability: "dex" };
    CONFIG.DND5E.skills['stw'] = { label: "Streetwise", ability: "per" };
    CONFIG.DND5E.skills['tec'] = { label: "Technology", ability: "int" };
    CONFIG.DND5E.skills['thr'] = { label: "Threaten", ability: "per" };
    CONFIG.DND5E.skills['wrf'] = { label: "Warfare", ability: "mnd" };
  }

  static async AddDamageTypes(){
    CONFIG.DND5E.physicalDamageTypes = [];

    CONFIG.DND5E.physicalDamageTypes['slashing'] = "Slashing";
    CONFIG.DND5E.physicalDamageTypes['piercing'] = "Piercing";
    CONFIG.DND5E.physicalDamageTypes['blunt'] = "Blunt";

    CONFIG.DND5E.damageTypes = [];

    CONFIG.DND5E.damageTypes = CONFIG.DND5E.damageTypes.concat(CONFIG.DND5E.physicalDamageTypes)
    CONFIG.DND5E.damageTypes['fire'] = "Fire";
    CONFIG.DND5E.damageTypes['water'] = "Water";
    CONFIG.DND5E.damageTypes['wind'] = "Wind";
    CONFIG.DND5E.damageTypes['earth'] = "Earth";
    CONFIG.DND5E.damageTypes['ice'] = "Ice";
    CONFIG.DND5E.damageTypes['lightning'] = "Lightning";
    CONFIG.DND5E.damageTypes['light'] = "Light";
    CONFIG.DND5E.damageTypes['dark'] = "Dark";
    CONFIG.DND5E.damageTypes['unaspected'] = "Unaspected";
  }

  static async AddArmorTypes(){
    CONFIG.DND5E.armorIds = [];
    //Add simple armor? So Cloth/Light/Medium/Heavy?

    //Check how these both work
    CONFIG.DND5E.armorProficiencies = [];
    CONFIG.DND5E.armorProficienciesMap = [];
  }

  static async AddWeaponTypes(){
    // Just categories- Simple and Martial
    CONFIG.DND5E.weaponProficiencies = [];

    // Natural, Simple Melee, Simple Ranged = sim, Martial Melee, Martial Ranged = mar, map to weaponProficiencies types, or set true if always proficient
    CONFIG.DND5E.weaponProficienciesMap = [];

    CONFIG.DND5E.weaponIds = [];
  }

  static async AddToolTypes(){
    //Categories
    CONFIG.DND5E.toolTypes = [];
    CONFIG.DND5E.toolTypes['crafting'] = "Crafting Tools";
    CONFIG.DND5E.toolTypes['gathering'] = "Gathering Tools";

    CONFIG.DND5E.toolIds = [];
    // CONFIG.DND5E.toolIds['carpenter'] = "";
    // CONFIG.DND5E.toolIds['blacksmith'] = "";
    // CONFIG.DND5E.toolIds['armorer'] = "";
    // CONFIG.DND5E.toolIds['goldsmith'] = "";
    // CONFIG.DND5E.toolIds['leatherworker'] = "";
    // CONFIG.DND5E.toolIds['alchemist'] = "";
    // CONFIG.DND5E.toolIds['culinarian'] = "";
    // CONFIG.DND5E.toolIds['miner'] = "";
    // CONFIG.DND5E.toolIds['botanist'] = "";
    // CONFIG.DND5E.toolIds['fisher'] = "";

    CONFIG.DND5E.vehicleTypes = [];
  }

  static async AddActorSizes(){
    CONFIG.DND5E.actorSizes = [];
    CONFIG.DND5E.actorSizes['fine'] = "Fine";
    CONFIG.DND5E.actorSizes['diminutive'] = "Diminutive";
    CONFIG.DND5E.actorSizes['tiny'] = "Tiny";
    CONFIG.DND5E.actorSizes['small'] = "Small";
    CONFIG.DND5E.actorSizes['medium'] = "Medium";
    CONFIG.DND5E.actorSizes['large'] = "Large";
    CONFIG.DND5E.actorSizes['huge'] = "Huge";
    CONFIG.DND5E.actorSizes['gargantuan'] = "Gargantuan";
    CONFIG.DND5E.actorSizes['colossal'] = "Colossal";
    CONFIG.DND5E.actorSizes['boss'] = "Boss";

    CONFIG.DND5E.tokenSizes = [];
    CONFIG.DND5E.tokenSizes['fine'] = 0.2;
    CONFIG.DND5E.tokenSizes['diminutive'] = 0.5;
    CONFIG.DND5E.tokenSizes['tiny'] = 0.8;
    CONFIG.DND5E.tokenSizes['small'] = 1;
    CONFIG.DND5E.tokenSizes['medium'] = 1;
    CONFIG.DND5E.tokenSizes['large'] = 2;
    CONFIG.DND5E.tokenSizes['huge'] = 3;
    CONFIG.DND5E.tokenSizes['gargantuan'] = 4;
    CONFIG.DND5E.tokenSizes['colossal'] = 5;
    CONFIG.DND5E.tokenSizes['boss'] = 6;
  }

  static async AddCreatureTypes(){
    CONFIG.DND5E.creatureTypes = [];
    CONFIG.DND5E.creatureTypes['ashkin'] = "Ashkin";
    CONFIG.DND5E.creatureTypes['beastkin'] = "Beastkin";
    CONFIG.DND5E.creatureTypes['cloudkin'] = "Cloudkin";
    CONFIG.DND5E.creatureTypes['elemental'] = "Elemental";
    CONFIG.DND5E.creatureTypes['forgekin'] = "Forgekin";
    CONFIG.DND5E.creatureTypes['scalekin'] = "Scalekin";
    CONFIG.DND5E.creatureTypes['seedkin'] = "Seedkin";
    CONFIG.DND5E.creatureTypes['soulkin'] = "Soulkin";
    CONFIG.DND5E.creatureTypes['spoken'] = "Spoken";
    CONFIG.DND5E.creatureTypes['vilekin'] = "Vilekin";
    CONFIG.DND5E.creatureTypes['voidsent'] = "Voidsent";
    CONFIG.DND5E.creatureTypes['wavekin'] = "Wavekin";
    CONFIG.DND5E.creatureTypes['dragon'] = "Dragon";
    CONFIG.DND5E.creatureTypes['manifest'] = "Manifestation";
    CONFIG.DND5E.creatureTypes['chimera'] = "Chimera";
    CONFIG.DND5E.creatureTypes['object'] = "Object";
  }

  static async AddItemRarities(){
    CONFIG.DND5E.itemRarity = [];
    CONFIG.DND5E.itemRarity['basic'] = "Basic"; //White
    CONFIG.DND5E.itemRarity['unique'] = "Unique"; //Green
    CONFIG.DND5E.itemRarity['aetherial'] = "Aetherial"; //Pink
    CONFIG.DND5E.itemRarity['artifact'] = "Artifact"; //Blue
    CONFIG.DND5E.itemRarity['relic'] = "Relic"; //Purple
  }

  static async AddSpellSchools(){
    CONFIG.DND5E.spellSchools  = [];
    CONFIG.DND5E.spellSchools[''] = "";
  }

  //This might need to go or be fixed to only specific values or resorted or something.
  static async AddConditionTypes(){
    CONFIG.DND5E.conditionTypes = [];
    CONFIG.DND5E.conditionTypes = 
    {
      accuracyup: "Accuracy Up",
      accuracydown: "Accuracy Down",
      damageup: "Damage Up",
      damagedown: "Damage Down",
      magicup: "Magic Up",
      magicdown: "Magic Down",
      bind: "Bind",
      blind: "Blind",
      daze: "Daze",
      criticalup: "Critical Up",
      criticaldown: "Critical Down",
      charm: "Charm",
      defenceup: "Defence Up",
      defencedown: "Defence Down",
      disease: "Disease",
      heavy: "Heavy",
      evasionup: "Evasion Up",
      evasiondown: "Evasion Down",
      amnesia: "Amnesia",
      pacification: "Pacification",
      silence: "Silence",
      paralysis: "Paralysis",
      petrification: "Petrification",
      sleep: "Sleep",
      stun: "Stun",
      vulnerability: "Vulnerability",
      weakness: "Weakness",
      brinkofdeath: "Brink of Death",
      prone: "Prone",
      dot: "DOT",
      resistanceup: "Resistance Up",
      resistancedown: "Reistance Down",
      phismagvulnerabilityup: "Vulnerability Up",
      phismagvulnerabilitydown: "Vulnerability Down",
      chicken: "Chicken"
    }
  }

  static async AddLanguages(){
    CONFIG.DND5E.languages = [];

    CONFIG.DND5E.languages = 
    {
      eorzean: "Eorzean",
      garlean: "Garlean",
      hingan: "Hingan",
      meracydian: "Meracydian",
      hannish: "Hannish",
      auri: "Auri",
      elezen: "Elezen",
      huntspeak: "Huntspeak",
      lalafellin: "Lalafellin",
      roegadyn: "Roegadyn",
      vieran: "Vieran",
      amaljic: "Amaljic",
      ananta: "Ananta",
      dragonspeak: "Dragonspeak",
      gnathic: "Gnathic",
      gobbiespeak: "Gobbiespeak",
      highsylph: "High Sylphic",
      ixali: "Ixali",
      matangan: "Matangan",
      mooglespeak: "Mooglespeak",
      sahaginspeak: "Sahaginspeak",
      imperialtongue: "Imperial Tongue",
      mhach: "Mhach",
      skalla: "Skalla"
    }
  }

  static async MiscStuff(){
    CONFIG.DND5E.featureTypes.class.subtypes = [];

    CONFIG.DND5E.currencies = [];
    CONFIG.DND5E.currencies['gil'] = {label:"Gil", abbreviation:"Gil", conversion:1};

    CONFIG.DND5E.movementUnits = [];
    CONFIG.DND5E.movementUnits['fm'] = "Fulm";
    CONFIG.DND5E.movementUnits['mm'] = "Malm";

    CONFIG.DND5E.spellPreparationModes.pact = "Astral Magic";

    //Test DND5E.proficiencyLevels 

    CONFIG.DND5E.miscEquipmentTypes['materia']= "Materia";

    CONFIG.DND5E.maxLevel = 30;
    CONFIG.DND5E.CHARACTER_EXP_LEVELS = [0, 100, 300, 800, 1500, 3500, 6000, 10000, 15000, 35000, 50000, 80000, 100000, 150000, 300000, 500000, 90000, 150000, 300000, 500000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  static async AddExtraValuesAndFields()
  {
    CONFIG.DND5E.characterFlags['dambonus'] = 
    {
      name: "Damage Die Bonus", 
      hint: "This is field to extra damage bonuses in the way of amount of extra dice rolled. Is automatic.", 
      section: "FFXIV Damage Bonuses",
      type: Number,
      placeholder: 0};

    CONFIG.DND5E.characterFlags['mainWDD'] = 
    {
      name: "Main Weapon Damage Die", 
      hint: "Put here the weapon damage die of your primary equipped weapon. Is automatic.", 
      section: "FFXIV Damage Bonuses",
      type: String,
      placeholder: "1d6"};
  }
}

Hooks.on('ready', () => {
    
  });