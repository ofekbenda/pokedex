export interface IPokemonBase {
  id: number;
  name: string;
  imgSrc: string;
}

export interface IPokemonsAPI {
  data: {
    results: {
      name: string;
      url: string;
    }[];
  };
}

export interface IPokemonData {
  data: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  };
}

export interface IPokemonInfo {
  id: number;
  name: string;
  imgSrc: string;
  typesList: string[];
  description: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface IDescriptionAPI {
  data: {
    info: {
      description: string;
    };
  };
}

export interface IPokemonListAPI {
  data: {
    results: { name: string; url: string }[];
  };
}
export interface IPokemonAPI {
  data: {
    id: number;
    name: string;
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    sprites: {
      front_default: string;
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
  };
}
