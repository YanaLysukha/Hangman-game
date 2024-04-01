import { ICar } from "../types/interfaces";

export default class Api {
    static async getCarsAmountInGarage(): Promise<number> {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        const totalCars = jsonResult.length;
        return totalCars;
    }

    static async getWinnersAmount(): Promise<number> {
        const url = "http://127.0.0.1:3000/winners";
        const response = await fetch(url);
        const jsonResult = await response.json();
        const totalWinners = jsonResult.length;
        return totalWinners;
    }

    static async getCars(): Promise<ICar[]> {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    }

    static async createCar(
        textInputValue: string,
        colorInputValue: string,
    ): Promise<ICar> {
        const url = "http://127.0.0.1:3000/garage";
        const data = {
            name: textInputValue,
            color: colorInputValue,
        };
        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        };
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        return json;
    }

    static async removeCar(id: number) {
        const url = `http://127.0.0.1:3000/garage/${id}`;
        const requestOptions = {
            method: "DELETE",
        };
        await fetch(url, requestOptions);
    }

    static async updateCar(
        id: number,
        textValue: string,
        colorValue: string,
    ): Promise<ICar> {
        const url = `http://127.0.0.1:3000/garage/${id}`;
        const data = {
            name: textValue,
            color: colorValue,
        };
        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(data),
        };
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        return json;
    }
}
