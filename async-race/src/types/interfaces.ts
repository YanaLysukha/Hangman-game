export interface IComponent {
    tagName: string;
    className?: string;
    textContent?: string;
}

export interface ICar {
    name: string;
    color: string;
    id: number;
}

export interface IWinners {
    id: number;
    wins: number;
    time: number;
}
